import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface CreateLeadRequestBody {
  fullName?: unknown;
  email?: unknown;
  whatsappNumber?: unknown;
  targetBranch?: unknown;
  expectedScore?: unknown;
}

interface CreateLeadSuccessResponse {
  success: true;
  data: {
    id: string;
  };
}

interface CreateLeadErrorResponse {
  success?: false;
  error: string;
}

const MIN_SCORE = 0;
const MAX_SCORE = 400;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidScore(score: unknown): score is number {
  return typeof score === "number" && Number.isFinite(score);
}

export async function POST(
  request: Request
): Promise<NextResponse<CreateLeadSuccessResponse | CreateLeadErrorResponse>> {
  try {
    const body = (await request.json()) as CreateLeadRequestBody;
    const { fullName, email, whatsappNumber, targetBranch, expectedScore } =
      body;

    if (!isNonEmptyString(fullName)) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!isNonEmptyString(email) || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (
      !isValidScore(expectedScore) ||
      expectedScore < MIN_SCORE ||
      expectedScore > MAX_SCORE
    ) {
      return NextResponse.json(
        { error: "Invalid score. Must be between 0 and 400." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedWhatsapp = isNonEmptyString(whatsappNumber)
      ? whatsappNumber.trim()
      : null;
    const branch = isNonEmptyString(targetBranch)
      ? targetBranch.trim()
      : "B.Tech CSE";

    const registrationDeadline = new Date();
    registrationDeadline.setDate(registrationDeadline.getDate() + 7);

    const lead = await prisma.leadHistory.create({
      data: {
        fullName: fullName.trim(),
        email: normalizedEmail,
        whatsappNumber: normalizedWhatsapp,
        targetBranch: branch,
        expectedScore,
        funnelStatus: "CALCULATOR_COMPLETED",
        registrationDeadline,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        id: lead.id,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const target = Array.isArray(error.meta?.target)
        ? error.meta.target.join(", ")
        : "email or WhatsApp number";

      return NextResponse.json(
        {
          error: `A lead with this ${target} already exists. Please use different contact details.`,
        },
        { status: 409 }
      );
    }

    console.error("Failed to create lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
