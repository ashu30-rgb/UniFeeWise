import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CalculatorForm from "@/components/calculator/CalculatorForm";

const programData = {
  cse: {
    fullName: "B.Tech Computer Science and Engineering (CSE)",
    shortName: "B.Tech CSE",
    baseFee: 160000,
    maxScore: 400,
  },
  ece: {
    fullName: "B.Tech Electronics and Communication (ECE)",
    shortName: "B.Tech ECE",
    baseFee: 160000,
    maxScore: 400,
  },
  bba: {
    fullName: "Bachelor of Business Administration (BBA)",
    shortName: "BBA",
    baseFee: 120000,
    maxScore: 400,
  },
  mba: {
    fullName: "Master of Business Administration (MBA)",
    shortName: "MBA",
    baseFee: 190000,
    maxScore: 400,
  },
};

type ProgramSlug = keyof typeof programData;

/** Maps public SEO URLs like /lpu-cse-fees → program key */
const PROGRAM_PAGE_SLUGS: Record<string, ProgramSlug> = {
  "lpu-cse-fees": "cse",
  "lpu-ece-fees": "ece",
  "lpu-bba-fees": "bba",
  "lpu-mba-fees": "mba",
};

interface ProgramSeoPageProps {
  params: {
    slug: string;
  };
}

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateStaticParams(): Array<{ slug: string }> {
  return Object.keys(PROGRAM_PAGE_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProgramSeoPageProps): Promise<Metadata> {
  const programKey = PROGRAM_PAGE_SLUGS[params.slug];

  if (!programKey) {
    return {
      title: "LPU Fees & Scholarship Calculator 2026",
    };
  }

  const program = programData[programKey];

  return {
    title: `LPU ${program.shortName} Fees, Scholarships & ROI Calculator 2026`,
    description: `Calculate exact semester fees, check your 2026 scholarship eligibility, and find out the return on investment for the LPU ${program.fullName} program.`,
    openGraph: {
      title: `LPU ${program.shortName} Fees, Scholarships & ROI Calculator 2026`,
      description: `Calculate exact semester fees, check your 2026 scholarship eligibility, and find out the return on investment for the LPU ${program.fullName} program.`,
      type: "website",
    },
  };
}

export default function ProgramSeoPage({ params }: ProgramSeoPageProps) {
  const programKey = PROGRAM_PAGE_SLUGS[params.slug];

  if (!programKey) {
    notFound();
  }

  const program = programData[programKey];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-4 text-4xl font-bold text-white">
          LPU {program.shortName} Fees & Scholarship Calculator (2026)
        </h1>

        <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Looking up{" "}
          <strong className="font-semibold text-[#e6edf3]">
            LPU {program.shortName} fees
          </strong>
          ? The base tuition fee for {program.fullName} is{" "}
          <strong className="font-semibold text-[#e6edf3]">
            {formatINR(program.baseFee)}
          </strong>{" "}
          per semester. However, depending on your LPUNEST score (out of{" "}
          {program.maxScore}), you can secure up to a{" "}
          <strong className="font-semibold text-emerald-400">60% waiver</strong>
          —plus estimate your scholarship bracket and ROI with the calculator
          below.
        </p>

        <div className="mx-auto w-full max-w-xl">
          <CalculatorForm />
        </div>
      </div>
    </main>
  );
}
