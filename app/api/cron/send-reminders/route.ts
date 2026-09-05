import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getResend } from "@/lib/resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const DISCOUNT_CODE = "LPU20NEST";
const WHATSAPP_TEMPLATE_NAME = "registration_reminder";

interface ReminderProcessResult {
  leadId: string;
  email: string;
  status: "success" | "failed";
  error?: string;
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
  registrationDeadline: Date | null;
}): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL ?? "UniFeeWise <onboarding@resend.dev>";
  const deadlineText = params.registrationDeadline
    ? params.registrationDeadline.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "soon";

  const { error } = await getResend().emails.send({
    from,
    to: params.to,
    subject: "Reminder: Register for LPUNEST before your deadline",
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #0d1117;">
        <h2>Hi ${params.fullName},</h2>
        <p>
          Your LPUNEST registration window is closing. Please complete your
          application before <strong>${deadlineText}</strong>.
        </p>
        <p>
          Use your exclusive <strong>20% application discount code</strong>:
          <code style="font-size: 18px; letter-spacing: 2px;">${DISCOUNT_CODE}</code>
        </p>
        <p>
          Don’t miss out on your calculated scholarship bracket — register now
          and apply the discount at checkout.
        </p>
        <p>— Team UniFeeWise</p>
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
      payload.error?.message ?? `WhatsApp API returned status ${response.status}`
    );
  }
}

export async function GET(request: Request): Promise<NextResponse> {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const reminderWindowEnd = new Date();
    reminderWindowEnd.setHours(reminderWindowEnd.getHours() + 48);

    const leads = await prisma.leadHistory.findMany({
      where: {
        funnelStatus: "CALCULATOR_COMPLETED",
        lastReminderSentAt: null,
        registrationDeadline: {
          lte: reminderWindowEnd,
        },
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        whatsappNumber: true,
        registrationDeadline: true,
      },
    });

    const results: ReminderProcessResult[] = [];
    let successCount = 0;

    for (const lead of leads) {
      try {
        await sendReminderEmail({
          to: lead.email,
          fullName: lead.fullName,
          registrationDeadline: lead.registrationDeadline,
        });

        if (lead.whatsappNumber) {
          await sendWhatsAppReminder({
            whatsappNumber: lead.whatsappNumber,
            fullName: lead.fullName,
          });
        }

        await prisma.leadHistory.update({
          where: { id: lead.id },
          data: {
            funnelStatus: "WHATSAPP_NURTURE",
            lastReminderSentAt: new Date(),
          },
        });

        successCount += 1;
        results.push({
          leadId: lead.id,
          email: lead.email,
          status: "success",
        });
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown reminder failure";

        console.error(`Failed to send reminder for lead ${lead.id}:`, error);
        results.push({
          leadId: lead.id,
          email: lead.email,
          status: "failed",
          error: message,
        });
      }
    }

    return NextResponse.json({
      success: true,
      processed: leads.length,
      succeeded: successCount,
      failed: leads.length - successCount,
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
