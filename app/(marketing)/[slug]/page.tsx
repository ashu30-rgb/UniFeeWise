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
    baseFee: 140000,
    maxScore: 400,
  },
  aiml: {
    fullName: "B.Tech CSE (Artificial Intelligence and Machine Learning)",
    shortName: "B.Tech CSE (AI & ML)",
    baseFee: 180000,
    maxScore: 400,
  },
  bba: {
    fullName: "Bachelor of Business Administration (BBA)",
    shortName: "BBA",
    baseFee: 80000,
    maxScore: 400,
  },
  bca: {
    fullName: "Bachelor of Computer Applications (BCA)",
    shortName: "BCA",
    baseFee: 80000,
    maxScore: 400,
  },
  mba: {
    fullName: "Master of Business Administration (MBA)",
    shortName: "MBA",
    baseFee: 220000,
    maxScore: 400,
  },
};

type ProgramSlug = keyof typeof programData;

/** Maps public SEO URLs like /lpu-cse-fees → program key */
const PROGRAM_PAGE_SLUGS: Record<string, ProgramSlug> = {
  "lpu-cse-fees": "cse",
  "lpu-ece-fees": "ece",
  "lpu-btech-aiml-fees": "aiml",
  "lpu-bba-fees": "bba",
  "lpu-bca-fees": "bca",
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
      title: "LPU Fees & Scholarship Calculator 2027",
    };
  }

  const program = programData[programKey];

  return {
    title: `LPU ${program.shortName} Fees & Scholarships 2027`,
    description: `Calculate exact semester fees, check your 2027 scholarship eligibility, and find out the return on investment for the LPU ${program.fullName} program.`,
    openGraph: {
      title: `LPU ${program.shortName} Fees & Scholarships 2027`,
      description: `Calculate exact semester fees, check your 2027 scholarship eligibility, and find out the return on investment for the LPU ${program.fullName} program.`,
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
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-orange-500/20 selection:text-orange-950">
      {/* Hero Header with Campus Visual & Apple Glass Gradient */}
      <section className="relative isolate min-h-[50vh] w-full overflow-hidden bg-slate-950">
        <Image
          src={CAMPUS_IMAGE}
          alt={`Lovely Professional University campus — ${program.shortName}`}
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity scale-105 transition-transform duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-4xl flex-col justify-end px-4 pb-14 pt-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/15 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md mb-4 self-center sm:self-start">
            <span>LPU {program.shortName} · Official 2027 Fee Structure</span>
          </div>

          <h1 className="max-w-3xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl md:text-5xl leading-[1.1]">
            LPU {program.shortName} Fees &amp; Scholarship Calculator (
            <span className="text-orange-400">LPUNEST 2027</span>)
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
            Looking up{" "}
            <strong className="font-semibold text-white">
              LPU {program.shortName} fees
            </strong>
            ? The base tuition fee for {program.fullName} is{" "}
            <strong className="font-semibold text-orange-400">
              {formatINR(program.baseFee)}
            </strong>{" "}
            per semester. Depending on your qualifying score (out of{" "}
            {program.maxScore}), you can secure up to a{" "}
            <strong className="font-semibold text-emerald-400">60% waiver</strong>
            —plus calculate your exact net cost with the interactive tool below.
          </p>
        </div>
      </section>

      {/* Calculator Form Workbench */}
      <section className="relative z-10 mx-auto -mt-8 w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <CalculatorForm initialBranch={program.shortName} />
      </section>
    </main>
  );
}
