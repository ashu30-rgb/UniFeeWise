import { NextResponse } from "next/server";

type ScholarshipTierLabel =
  | "Category A"
  | "Category B"
  | "Category C"
  | "None";

interface CalculateRequestBody {
  targetBranch?: string;
  expectedScore?: unknown;
}

interface ScholarshipResult {
  tier: ScholarshipTierLabel;
  waiverPercentage: number;
  baseFee: number;
  scholarshipAmount: number;
  finalFee: number;
}

interface CalculateSuccessResponse {
  success: true;
  data: ScholarshipResult;
}

interface CalculateErrorResponse {
  success?: false;
  error: string;
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

const DEFAULT_BASE_FEE = 160000;
const MIN_SCORE = 0;
const MAX_SCORE = 400;

function resolveBaseFee(targetBranch: string | undefined): number {
  if (targetBranch && targetBranch in BASE_FEES) {
    return BASE_FEES[targetBranch];
  }
  return DEFAULT_BASE_FEE;
}

function resolveScholarshipTier(expectedScore: number): {
  tier: ScholarshipTierLabel;
  waiverPercentage: number;
} {
  if (expectedScore >= 300) {
    return { tier: "Category A", waiverPercentage: 0.5 };
  }

  if (expectedScore >= 212) {
    return { tier: "Category B", waiverPercentage: 0.4 };
  }

  if (expectedScore >= 150) {
    return { tier: "Category C", waiverPercentage: 0.3 };
  }

  return { tier: "None", waiverPercentage: 0 };
}

function isValidScore(score: unknown): score is number {
  return typeof score === "number" && Number.isFinite(score);
}

export async function POST(
  request: Request
): Promise<NextResponse<CalculateSuccessResponse | CalculateErrorResponse>> {
  try {
    const body = (await request.json()) as CalculateRequestBody;
    const { targetBranch, expectedScore } = body;

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

    const baseFee = resolveBaseFee(targetBranch);
    const { tier, waiverPercentage } = resolveScholarshipTier(expectedScore);

    const scholarshipAmount = Math.round(baseFee * waiverPercentage);
    const finalFee = baseFee - scholarshipAmount;

    return NextResponse.json({
      success: true,
      data: {
        tier,
        waiverPercentage: waiverPercentage * 100,
        baseFee,
        scholarshipAmount,
        finalFee,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
