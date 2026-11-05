import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface CreateLeadRequestBody {
  name?: unknown;
  fullName?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  whatsappNumber?: unknown;
  course?: unknown;
  targetBranch?: unknown;
  calculatedFee?: unknown;
  expectedScore?: unknown;
  assignedTier?: unknown;
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
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const BASE_FEES: Record<string, number> = {
  // B.Tech Branches (Official 2027 Brochure)
  "B.Tech CSE": 160000,
  "B.Tech CSE (AI & ML)": 180000,
  "B.Tech CSE (Data Science)": 180000,
  "B.Tech CSE (Cyber Security)": 180000,
  "B.Tech IT": 160000,
  "B.Tech ECE": 140000,
  "B.Tech Mechanical": 140000,
  "B.Tech Civil": 140000,
  "B.Tech Electrical": 140000,
  "B.Tech Aerospace": 140000,
  "B.Tech Biotechnology": 140000,
  "B.Tech Robotics & Automation": 140000,
  "Integrated B.Tech CSE + MBA": 160000,

  // Top Under-Graduate Programmes
  BCA: 80000,
  BBA: 80000,
  "B.Com": 90000,
  "B.Sc IT": 80000,
  "B.Pharm": 120000,
  "B.Des": 140000,
  "BA LLB": 140000,

  // Top Post-Graduate Programmes
  MBA: 220000,
  MCA: 100000,
  "M.Tech CSE": 100000,
  "M.Com": 60000,
  "LL.B.": 90000,
};

export async function POST(
  request: Request
): Promise<NextResponse<CreateLeadSuccessResponse | CreateLeadErrorResponse>> {
  try {
    const body = (await request.json()) as CreateLeadRequestBody;
    const {
      name,
      fullName,
      email,
      whatsapp,
      whatsappNumber,
      course,
      targetBranch,
      expectedScore,
      assignedTier,
    } = body;

    // Validate name (accept name or fullName)
    const rawName = name ?? fullName;
    if (!isNonEmptyString(rawName)) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }
    const cleanName = rawName.trim();

    // Validate WhatsApp (accept whatsapp or whatsappNumber)
    const rawWhatsapp = whatsapp ?? whatsappNumber;
    if (!isNonEmptyString(rawWhatsapp)) {
      return NextResponse.json(
        { error: "A 10-digit WhatsApp mobile number is required." },
        { status: 400 }
      );
    }
    let cleanPhone = rawWhatsapp.trim().replace(/\D/g, "");
    if (cleanPhone.length === 12 && cleanPhone.startsWith("91")) {
      cleanPhone = cleanPhone.slice(2);
    }
    if (!INDIAN_PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).",
        },
        { status: 400 }
      );
    }

    // Validate Email
    if (!isNonEmptyString(email) || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    const normalizedEmail = email.trim().toLowerCase();

    // Validate Course / Branch
    const rawBranch = course ?? targetBranch;
    const branch = isNonEmptyString(rawBranch)
      ? rawBranch.trim()
      : "B.Tech CSE";

    // Validate Score (optional / fallback)
    let parsedScore: number | null = null;
    if (typeof expectedScore === "number" && Number.isFinite(expectedScore)) {
      if (expectedScore < MIN_SCORE || expectedScore > MAX_SCORE) {
        return NextResponse.json(
          { error: `Score must be between ${MIN_SCORE} and ${MAX_SCORE}.` },
          { status: 400 }
        );
      }
      parsedScore = expectedScore;
    }

    // Resolve Scholarship Tier Enum
    let tierEnum: "CATEGORY_A" | "CATEGORY_B" | "CATEGORY_C" | "NONE" | null =
      null;
    if (assignedTier === "Category A" || assignedTier === "CATEGORY_A") {
      tierEnum = "CATEGORY_A";
    } else if (
      assignedTier === "Category B" ||
      assignedTier === "CATEGORY_B"
    ) {
      tierEnum = "CATEGORY_B";
    } else if (
      assignedTier === "Category C" ||
      assignedTier === "CATEGORY_C"
    ) {
      tierEnum = "CATEGORY_C";
    } else if (assignedTier === "None" || assignedTier === "NONE") {
      tierEnum = "NONE";
    } else if (parsedScore !== null) {
      if (parsedScore >= 320) tierEnum = "CATEGORY_A";
      else if (parsedScore >= 240) tierEnum = "CATEGORY_B";
      else if (parsedScore >= 150) tierEnum = "CATEGORY_C";
      else tierEnum = "NONE";
    }

    const baseFee = BASE_FEES[branch] ?? 160000;
    const waiverMap: Record<string, number> = {
      CATEGORY_A: 0.6,
      CATEGORY_B: 0.5,
      CATEGORY_C: 0.4,
      NONE: 0,
    };
    const waiver = tierEnum ? waiverMap[tierEnum] ?? 0 : 0;
    const calculatedScholarshipAmount = Math.round(baseFee * waiver);

    const registrationDeadline = new Date();
    registrationDeadline.setDate(registrationDeadline.getDate() + 7);

    const leadData = {
      fullName: cleanName,
      whatsappNumber: cleanPhone,
      targetBranch: branch,
      expectedScore: parsedScore !== null ? parsedScore : null,
      assignedTier: tierEnum,
      baseTuitionPerSem: baseFee,
      calculatedScholarshipAmount,
      funnelStatus: "CALCULATOR_COMPLETED" as const,
      registrationDeadline,
    };

    let leadId = `lead-${Date.now()}`;

    try {
      // Upsert by email so returning students don't face unique constraint crashes
      const lead = await prisma.leadHistory.upsert({
        where: { email: normalizedEmail },
        update: leadData,
        create: {
          ...leadData,
          email: normalizedEmail,
        },
        select: {
          id: true,
        },
      });
      leadId = lead.id;
    } catch (dbError) {
      if (
        dbError instanceof Prisma.PrismaClientKnownRequestError &&
        dbError.code === "P2002"
      ) {
        // If unique collision on whatsappNumber with another email, update that record
        try {
          const existingByPhone = await prisma.leadHistory.findUnique({
            where: { whatsappNumber: cleanPhone },
          });
          if (existingByPhone) {
            const updated = await prisma.leadHistory.update({
              where: { id: existingByPhone.id },
              data: {
                fullName: cleanName,
                email: normalizedEmail,
                targetBranch: branch,
              },
              select: { id: true },
            });
            leadId = updated.id;
          }
        } catch {
          // ignore secondary error
        }
      } else {
        console.warn(
          "Database write skipped or fallback used (safe in dev):",
          dbError
        );
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        id: leadId,
      },
    });
  } catch (error) {
    console.error("Failed to process lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
