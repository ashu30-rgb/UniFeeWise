import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getResend } from "@/lib/resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";
const WHATSAPP_TEMPLATE_NAME = "registration_reminder";
const BATCH_SIZE = 50;

interface ReminderProcessResult {
  leadId: string;
  email: string;
  status: "success" | "failed" | "partial";
  error?: string;
  emailStatus?: "fulfilled" | "rejected" | "skipped";
  whatsappStatus?: "fulfilled" | "rejected" | "skipped";
}

interface WhatsAppMessageResponse {
  messaging_product?: string;
  contacts?: Array<{ input: string; wa_id: string }>;
  messages?: Array<{ id: string }>;
  error?: {
    message: string;
    type?: string;
    code?: number;
  };
}

function isAuthorized(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return false;
  }

  const authorization = request.headers.get("authorization");
  return authorization === `Bearer ${cronSecret}`;
}

async function sendReminderEmail(params: {
  to: string;
  fullName: string;
  targetBranch: string;
}): Promise<void> {
  const from =
    process.env.RESEND_FROM_EMAIL ?? "UniFeeWise <onboarding@resend.dev>";

  const { error } = await getResend().emails.send({
    from,
    to: params.to,
    subject: "Your LPUNEST 2026 deadline is approaching — 20% discount inside",
    html: `
<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; border: 1px solid #1f2937; background-color: #0d1117;">
  <div style="background-color: #161b22; padding: 32px 24px; text-align: center; border-bottom: 1px solid #1f2937;">
    <h2 style="color: #e6edf3; margin: 0; font-size: 24px; font-weight: 600;">LPUNEST 2026 Application</h2>
  </div>
  <div style="padding: 32px 24px; color: #c9d1d9;">
    <p style="font-size: 16px; line-height: 1.5; margin-top: 0;">Hi ${params.fullName},</p>
    <p style="font-size: 16px; line-height: 1.5;">Your registration deadline for LPUNEST is approaching in less than 48 hours. Complete your application now to lock in your calculated scholarship for <strong>${params.targetBranch}</strong>.</p>
    
    <div style="background-color: #161b22; border: 1px dashed #30363d; padding: 24px; border-radius: 8px; text-align: center; margin: 32px 0;">
      <p style="margin: 0; font-size: 14px; color: #8b949e; text-transform: uppercase; letter-spacing: 1px;">Your Flat 20% Discount Code</p>
      <p style="margin: 12px 0 0 0; font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #58a6ff;">${DISCOUNT_CODE}</p>
    </div>
    
    <div style="text-align: center; margin-top: 32px; margin-bottom: 16px;">
      <a href="${AFFILIATE_URL}" style="background-color: #58a6ff; color: #0d1117; padding: 16px 32px; text-decoration: none; font-size: 16px; font-weight: 700; border-radius: 6px; display: inline-block;">Apply Now With Discount</a>
    </div>
  </div>
  <div style="padding: 24px; text-align: center; background-color: #010409; color: #484f58; font-size: 12px;">
    <p style="margin: 0;">You are receiving this because you calculated your fees on our portal.</p>
  </div>
</div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

async function sendWhatsAppReminder(params: {
  whatsappNumber: string;
  fullName: string;
}): Promise<void> {
  const phoneNumberId = process.env.WHATSAPP_PHONE_ID;
  const whatsappToken = process.env.WHATSAPP_TOKEN;

  if (!phoneNumberId || !whatsappToken) {
    throw new Error("WhatsApp credentials are not configured.");
  }

  const response = await fetch(
    `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${whatsappToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: params.whatsappNumber.replace(/\D/g, ""),
        type: "template",
        template: {
          name: WHATSAPP_TEMPLATE_NAME,
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: params.fullName },
                { type: "text", text: DISCOUNT_CODE },
              ],
            },
          ],
        },
      }),
    }
  );

  const payload = (await response.json()) as WhatsAppMessageResponse;

  if (!response.ok || payload.error) {
    throw new Error(
      payload.error?.message ??
        `WhatsApp API returned status ${response.status}`
    );
  }
}

function getRejectedReason(result: PromiseSettledResult<unknown>): string {
  if (result.status !== "rejected") {
    return "";
  }

  return result.reason instanceof Error
    ? result.reason.message
    : String(result.reason);
}

export async function GET(request: Request): Promise<NextResponse> {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const now = new Date();
    const reminderWindowEnd = new Date(now);
    reminderWindowEnd.setHours(reminderWindowEnd.getHours() + 48);

    // 24h daily batch: deadlines still in the future, but within the next 48h
    const leads = await prisma.leadHistory.findMany({
      where: {
        funnelStatus: "CALCULATOR_COMPLETED",
        lastReminderSentAt: null,
        registrationDeadline: {
          gt: now,
          lte: reminderWindowEnd,
        },
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        whatsappNumber: true,
        targetBranch: true,
        registrationDeadline: true,
      },
      take: BATCH_SIZE,
      orderBy: {
        registrationDeadline: "asc",
      },
    });

    const settledLeads = await Promise.allSettled(
      leads.map(async (lead): Promise<ReminderProcessResult> => {
        const deliveryTasks: Array<Promise<void>> = [
          sendReminderEmail({
            to: lead.email,
            fullName: lead.fullName,
            targetBranch: lead.targetBranch,
          }),
        ];

        const hasWhatsApp = Boolean(lead.whatsappNumber);
        if (lead.whatsappNumber) {
          deliveryTasks.push(
            sendWhatsAppReminder({
              whatsappNumber: lead.whatsappNumber,
              fullName: lead.fullName,
            })
          );
        }

        // Isolate channel failures so one bad number doesn't abort the lead
        const [emailResult, whatsappResult] = await Promise.allSettled(
          deliveryTasks
        );

        const emailStatus = emailResult.status;
        const whatsappStatus: ReminderProcessResult["whatsappStatus"] =
          hasWhatsApp
            ? (whatsappResult?.status ?? "rejected")
            : "skipped";

        const errors: string[] = [];
        if (emailStatus === "rejected") {
          errors.push(`email: ${getRejectedReason(emailResult)}`);
        }
        if (hasWhatsApp && whatsappResult?.status === "rejected") {
          errors.push(`whatsapp: ${getRejectedReason(whatsappResult)}`);
        }

        // Advance funnel if at least one channel delivered successfully
        const emailOk = emailStatus === "fulfilled";
        const whatsappOk =
          !hasWhatsApp || whatsappResult?.status === "fulfilled";

        if (!emailOk && !(hasWhatsApp && whatsappResult?.status === "fulfilled")) {
          throw new Error(errors.join("; ") || "All reminder channels failed");
        }

        await prisma.leadHistory.update({
          where: { id: lead.id },
          data: {
            funnelStatus: "WHATSAPP_NURTURE",
            lastReminderSentAt: new Date(),
          },
        });

        const fullySuccessful = emailOk && whatsappOk;

        return {
          leadId: lead.id,
          email: lead.email,
          status: fullySuccessful ? "success" : "partial",
          error: errors.length > 0 ? errors.join("; ") : undefined,
          emailStatus,
          whatsappStatus,
        };
      })
    );

    const results: ReminderProcessResult[] = settledLeads.map((result, index) => {
      if (result.status === "fulfilled") {
        return result.value;
      }

      const lead = leads[index];
      const message =
        result.reason instanceof Error
          ? result.reason.message
          : "Unknown reminder failure";

      console.error(`Failed to send reminder for lead ${lead.id}:`, result.reason);

      return {
        leadId: lead.id,
        email: lead.email,
        status: "failed",
        error: message,
      };
    });

    const succeeded = results.filter((r) => r.status === "success").length;
    const partial = results.filter((r) => r.status === "partial").length;
    const failed = results.filter((r) => r.status === "failed").length;

    return NextResponse.json({
      success: true,
      processed: leads.length,
      batchSize: BATCH_SIZE,
      succeeded,
      partial,
      failed,
      results,
    });
  } catch (error) {
    console.error("Cron send-reminders failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
