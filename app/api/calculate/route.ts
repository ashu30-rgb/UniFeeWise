import { NextResponse } from "next/server";

type TargetBranch = "B.Tech CSE" | "B.Tech ECE" | "BBA" | "MBA";

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

const BASE_FEES: Record<TargetBranch, number> = {
  "B.Tech CSE": 160000,
  "B.Tech ECE": 160000,
  BBA: 120000,
  MBA: 190000,
};

const DEFAULT_BASE_FEE = 160000;
const MIN_SCORE = 0;
const MAX_SCORE = 400;

function resolveBaseFee(targetBranch: string | undefined): number {
  if (targetBranch && targetBranch in BASE_FEES) {
    return BASE_FEES[targetBranch as TargetBranch];
  }
  return DEFAULT_BASE_FEE;
}

function resolveScholarshipTier(expectedScore: number): {
  tier: ScholarshipTierLabel;
  waiverPercentage: number;
} {
  if (expectedScore >= 320) {
    return { tier: "Category A", waiverPercentage: 0.6 };
  }

  if (expectedScore >= 240) {
    return { tier: "Category B", waiverPercentage: 0.5 };
  }

  if (expectedScore >= 150) {
    return { tier: "Category C", waiverPercentage: 0.4 };
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
