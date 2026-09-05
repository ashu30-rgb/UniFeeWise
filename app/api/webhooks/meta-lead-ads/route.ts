import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface MetaWebhookChangeValue {
  leadgen_id?: string;
  page_id?: string;
  form_id?: string;
  ad_id?: string;
  adgroup_id?: string;
  created_time?: number;
  campaign_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

interface MetaWebhookChange {
  field?: string;
  value?: MetaWebhookChangeValue;
}

interface MetaWebhookEntry {
  id?: string;
  time?: number;
  changes?: MetaWebhookChange[];
}

interface MetaLeadAdsWebhookPayload {
  object?: string;
  entry?: MetaWebhookEntry[];
}

interface MetaLeadFieldData {
  name: string;
  values: string[];
}

interface MetaLeadDetailsResponse {
  id?: string;
  created_time?: string;
  field_data?: MetaLeadFieldData[];
  error?: {
    message: string;
    type?: string;
    code?: number;
  };
}

interface ParsedLeadFields {
  fullName: string;
  email: string;
  whatsappNumber: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

function getFieldValue(
  fieldData: MetaLeadFieldData[] | undefined,
  keys: string[]
): string | null {
  if (!fieldData) {
    return null;
  }

  const normalizedKeys = keys.map((key) => key.toLowerCase());

  for (const field of fieldData) {
    if (normalizedKeys.includes(field.name.toLowerCase())) {
      const value = field.values?.[0]?.trim();
      if (value) {
        return value;
      }
    }
  }

  return null;
}

function parseLeadFields(
  fieldData: MetaLeadFieldData[] | undefined,
  changeValue: MetaWebhookChangeValue
): ParsedLeadFields | null {
  const fullName =
    getFieldValue(fieldData, [
      "full_name",
      "full name",
      "name",
      "first_name",
    ]) ?? "Meta Lead";

  const email = getFieldValue(fieldData, ["email", "email_address"]);

  if (!email) {
    return null;
  }

  const whatsappNumber = getFieldValue(fieldData, [
    "phone_number",
    "phone",
    "whatsapp",
    "whatsapp_number",
    "mobile_number",
  ]);

  return {
    fullName,
    email: email.toLowerCase(),
    whatsappNumber,
    utmSource:
      changeValue.utm_source ??
      getFieldValue(fieldData, ["utm_source"]) ??
      "meta_lead_ads",
    utmMedium:
      changeValue.utm_medium ??
      getFieldValue(fieldData, ["utm_medium"]) ??
      "paid_social",
    utmCampaign:
      changeValue.utm_campaign ??
      getFieldValue(fieldData, ["utm_campaign"]) ??
      changeValue.campaign_id ??
      changeValue.ad_id ??
      null,
  };
}

async function fetchMetaLeadDetails(
  leadgenId: string
): Promise<MetaLeadDetailsResponse> {
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error("META_ACCESS_TOKEN is not configured.");
  }

  const url = new URL(`https://graph.facebook.com/v17.0/${leadgenId}`);
  url.searchParams.set("access_token", accessToken);
  url.searchParams.set("fields", "id,created_time,field_data");

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const payload = (await response.json()) as MetaLeadDetailsResponse;

  if (!response.ok || payload.error) {
    throw new Error(
      payload.error?.message ??
        `Meta Graph API returned status ${response.status}`
    );
  }

  return payload;
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const verifyToken = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    verifyToken === process.env.META_VERIFY_TOKEN &&
    challenge
  ) {
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.json(
    { error: "Webhook verification failed." },
    { status: 403 }
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const payload = (await request.json()) as MetaLeadAdsWebhookPayload;
    const changes = payload.entry?.[0]?.changes ?? [];

    let ingested = 0;
    const errors: string[] = [];

    for (const change of changes) {
      const leadgenId = change.value?.leadgen_id;

      if (!leadgenId || !change.value) {
        continue;
      }

      try {
        const leadDetails = await fetchMetaLeadDetails(leadgenId);
        const parsed = parseLeadFields(leadDetails.field_data, change.value);

        if (!parsed) {
          errors.push(`Lead ${leadgenId} is missing a required email field.`);
          continue;
        }

        const registrationDeadline = new Date();
        registrationDeadline.setDate(registrationDeadline.getDate() + 7);

        await prisma.leadHistory.create({
          data: {
            fullName: parsed.fullName,
            email: parsed.email,
            whatsappNumber: parsed.whatsappNumber,
            funnelStatus: "CALCULATOR_COMPLETED",
            registrationDeadline,
            utmSource: parsed.utmSource,
            utmMedium: parsed.utmMedium,
            utmCampaign: parsed.utmCampaign,
          },
        });

        ingested += 1;
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          // Duplicate lead — acknowledge without failing the webhook
          console.warn(`Duplicate Meta lead skipped for leadgen_id ${leadgenId}`);
          continue;
        }

        const message =
          error instanceof Error ? error.message : "Unknown ingestion error";
        console.error(`Failed to ingest Meta lead ${leadgenId}:`, error);
        errors.push(message);
      }
    }

    // Always acknowledge receipt to Meta (200) to avoid retries storms.
    return NextResponse.json({
      success: true,
      ingested,
      errors,
    });
  } catch (error) {
    console.error("Meta Lead Ads webhook failed:", error);

    // Still return 200 so Meta does not retry malformed payloads indefinitely.
    return NextResponse.json({
      success: false,
      error: "Webhook payload could not be processed.",
    });
  }
}
