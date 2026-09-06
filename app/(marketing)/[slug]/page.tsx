import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CalculatorForm from "@/components/calculator/CalculatorForm";

const CAMPUS_IMAGE =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80";

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
    <main className="min-h-screen bg-lpu-dark text-foreground">
      <section className="relative isolate min-h-[55vh] w-full overflow-hidden">
        <Image
          src={CAMPUS_IMAGE}
          alt={`Lovely Professional University campus — ${program.shortName}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-lpu-dark via-lpu-dark/75 to-lpu-dark/45" />

        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-4xl flex-col justify-end px-4 pb-12 pt-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            LPU {program.shortName} · Fees & Scholarships
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            LPU {program.shortName} Fees & Scholarship Calculator (
            <span className="text-orange-500">LPUNEST 2026</span>)
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Looking up{" "}
            <strong className="font-semibold text-white">
              LPU {program.shortName} fees
            </strong>
            ? The base tuition fee for {program.fullName} is{" "}
            <strong className="font-semibold text-orange-400">
              {formatINR(program.baseFee)}
            </strong>{" "}
            per semester. However, depending on your LPUNEST score (out of{" "}
            {program.maxScore}), you can secure up to a{" "}
            <strong className="font-semibold text-emerald-400">60% waiver</strong>
            —plus estimate your scholarship bracket and ROI with the calculator
            below.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 w-full max-w-xl px-4 pb-16">
        <CalculatorForm />
      </section>
    </main>
  );
}
