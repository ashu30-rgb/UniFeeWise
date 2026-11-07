import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2, TrendingUp, FileText } from "lucide-react";
import CBTSimulator from "@/components/mock-test/CBTSimulator";
import StructuredData from "@/components/StructuredData";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export const metadata: Metadata = {
  title: "Free LPUNEST 2027 Mock Test & Previous Year Sample Paper Simulator | UniFeeWise",
  description:
    "Attempt the free LPUNEST 2027 online CBT mock test for B.Tech (PCM/PCB), MBA, BCA & BBA. Practice 25+ solved previous year questions per subject, predict your Category 1 scholarship, and get 20% off your LPUNEST form with code LPUMZW722.",
  keywords: [
    "LPUNEST mock test 2027",
    "LPUNEST sample paper",
    "LPUNEST practice test free",
    "LPUNEST previous year paper",
    "LPUNEST CBT simulator",
    "LPUNEST online mock test",
    "LPUNEST btech sample paper",
    "LPUNEST coupon code LPUMZW722",
  ],
  alternates: {
    canonical: "https://unifeewise.vercel.app/mock-test",
  },
  openGraph: {
    title: "Free LPUNEST 2027 Mock Test & CBT Simulator | UniFeeWise",
    description:
      "Full-length 100-question CBT mock exam with sectional navigation, timer, NCERT-level MCQs, numericals, and instant scholarship tier prediction.",
    url: "https://unifeewise.vercel.app/mock-test",
    type: "website",
  },
};

const mockTestFaqs = [
  {
    question: "Where can I take a free LPUNEST 2027 mock test online?",
    answer:
      "You can take a free full-length LPUNEST 2027 CBT mock exam right on UniFeeWise (https://unifeewise.vercel.app/mock-test). It supports B.Tech PCM, B.Tech PCB, MBA, and BCA/BBA with official 100-question and 400-mark formats, timer, and instant scholarship prediction.",
  },
  {
    question: "Is there negative marking in LPUNEST 2027?",
    answer:
      "No. LPUNEST 2027 has zero negative marking. Candidates receive +4 marks for each correct answer and 0 marks for wrong or unattempted questions.",
  },
  {
    question: "What is the official LPUNEST 2027 coupon code for application fee discount?",
    answer:
      "The official and verified discount code is LPUMZW722. Applying LPUMZW722 reduces the application fee by 20% (Boys: ₹800 instead of ₹1,000; Girls: ₹400 instead of ₹500).",
  },
  {
    question: "What are the high-weightage topics in LPUNEST B.Tech paper?",
    answer:
      "High-weightage topics include Electrostatics, Current Electricity, and Modern Physics in Physics; Coordination Compounds, Organic Reaction Mechanisms, and Chemical Bonding in Chemistry; Matrices, Calculus, Vectors & 3D Geometry in Mathematics.",
  },
];

export default function MockTestPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <StructuredData
        customFaqs={mockTestFaqs}
        pageType="mock-test"
        pageTitle="Free LPUNEST 2027 Mock Test & Previous Year Sample Paper Simulator"
        pageDescription="Attempt the free LPUNEST 2027 online CBT mock test for B.Tech (PCM/PCB), MBA, BCA & BBA with instant scholarship prediction."
        pageUrl="https://unifeewise.vercel.app/mock-test"
      />

      {/* Top Breadcrumb Nav */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-600 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Fee Calculator</span>
          </Link>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            <Link
              href="/lpunest-previous-year-papers"
              className="hidden sm:inline-flex items-center gap-1 text-slate-600 hover:text-orange-600 transition"
            >
              <FileText className="h-3.5 w-3.5 text-orange-500" />
              <span>Solved Past Papers</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-orange-600 font-bold">LPUNEST 2027 Official CBT Engine</span>
          </div>
        </div>
      </div>

      {/* Main Simulator Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <CBTSimulator />

        {/* Informational Guide & Pattern Breakdown */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span>Official LPUNEST 2027 Examination Blueprint</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            How the LPUNEST 2027 CBT Exam &amp; Scholarship System Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 space-y-2.5">
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-100 text-emerald-800 font-black text-sm">
                +4
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                1. Zero Negative Marking Policy
              </h3>
              <p>
                LPUNEST rewards confident problem-solving: candidates earn +4 marks for
                every correct answer with strictly <strong>0 negative marking</strong> for
                unattempted or incorrect answers. Attempting all 100 questions maximizes your aggregate scholarship score.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 space-y-2.5">
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-orange-100 text-orange-800 font-black text-sm">
                25
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                2. MCQs &amp; Numerical Questions
              </h3>
              <p>
                In engineering subjects (Physics, Chemistry, and Mathematics), questions 1–20
                are Single Choice MCQs, while questions 21–25 are numerical fill-in-the-blank
                answers testing core formulas without guesswork options.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5 space-y-2.5">
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-amber-100 text-amber-800 font-black text-sm">
                60%
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm">
                3. Three Scholarship Brackets
              </h3>
              <p>
                Your score unlocks 3 distinct slabs: <strong>Category 1 (320+ Marks)</strong> awards
                a 60% tuition waiver (saving up to ₹7,68,000 on 4-Yr B.Tech), <strong>Category 2 (240–319 Marks)</strong> grants
                a 50% waiver, and <strong>Category 3 (150–239 Marks)</strong> grants a 40% waiver.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SEO-RICH: LPUNEST Previous Year Paper Analysis & High-Weightage Topics
            ========================================================================= */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                <span>Memory-Based Analysis 2024–2026 Batches</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                LPUNEST Previous Year Paper Analysis &amp; High-Weightage Topics
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
                Comprehensive chapter-by-chapter weightage breakdown gathered from students and exam memories to help you prioritize your study schedule for LPUNEST 2027 Phase 1 and Phase 2.
              </p>
            </div>

            <Link
              href="/lpunest-previous-year-papers"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition"
            >
              <FileText className="h-4 w-4 text-orange-400" />
              <span>View Solved Past Question Bank →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Subject 1: Physics */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900">Physics (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded-md px-2 py-0.5">
                  High Focus
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct NCERT formula substitutions dominate numerical questions 21–25.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Current &amp; Resistance:</strong> Ohm&apos;s law, temperature coefficient (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Modern Physics:</strong> de Broglie, photoelectric effect, Bohr model (4–5 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Electrostatics:</strong> Coulomb&apos;s law, parallel plate capacitors (3 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Ray &amp; Wave Optics:</strong> Lens maker&apos;s formula, Snell&apos;s law (2–3 Qs)</span>
                </li>
              </ul>
            </div>

            {/* Subject 2: Chemistry */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900">Chemistry (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-0.5">
                  High Scoring
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fastest section to solve. Almost 70% questions are direct NCERT theory.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Coordination Compounds:</strong> IUPAC naming, Werner theory, VBT (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Chemical Kinetics:</strong> First order integrated rate, Arrhenius equation (3 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Organic Conversions:</strong> Aldehydes, Ketones, Carboxylic Acids (4–5 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Electrochemistry:</strong> Nernst equation, molar conductivity (2–3 Qs)</span>
                </li>
              </ul>
            </div>

            {/* Subject 3: Mathematics */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-900">Mathematics (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-2 py-0.5">
                  Calculation Focus
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Numericals 21–25 reward clean step-by-step arithmetic without negative marks.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Matrices &amp; Determinants:</strong> Adjoint, Cramer&apos;s rule, inverse (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Vectors &amp; 3D Geometry:</strong> Dot/cross products, shortest distance (4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Integral Calculus:</strong> Definite integrals, Area under curve (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Probability &amp; Statistics:</strong> Bayes theorem, binomial distribution (2–3 Qs)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Promotion / Coupon CTA Callout */}
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                Official LPUNEST Registration Discount
              </span>
              <h3 className="text-lg font-black text-slate-950">
                Save 20% on Your Application Form with Coupon Code <span className="text-orange-600 font-mono">LPUMZW722</span>
              </h3>
              <p className="text-xs text-slate-600">
                Boys pay ₹800 instead of ₹1,000 • Girls pay ₹400 instead of ₹500 on the official LPU portal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/lpunest-coupon-code"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition"
              >
                Learn How to Apply Code →
              </Link>
              <a
                href={LPUNEST_CONFIG.links.affiliate}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-700 transition shadow-sm"
              >
                Apply on Official LPU Portal ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
