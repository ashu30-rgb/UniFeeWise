import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2, TrendingUp, FileText } from "lucide-react";
import CBTSimulator from "@/components/mock-test/CBTSimulator";
import StructuredData from "@/components/StructuredData";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export const metadata: Metadata = {
  title: "Free LPUNEST 2027 Mock Test & CBT Exam Simulator",
  description:
    "Take free LPUNEST 2027 CBT mock tests for B.Tech, MBA & BCA. Practice real questions, predict your scholarship, and save 20% with code LPUMZW722.",
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
    title: "Free LPUNEST 2027 Mock Test & CBT Simulator",
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
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] pb-24 font-sans selection:bg-orange-500/20 selection:text-orange-950">
      <StructuredData
        customFaqs={mockTestFaqs}
        pageType="mock-test"
        pageTitle="Free LPUNEST 2027 Mock Test & Previous Year Sample Paper Simulator"
        pageDescription="Attempt the free LPUNEST 2027 online CBT mock test for B.Tech (PCM/PCB), MBA, BCA & BBA with instant scholarship prediction."
        pageUrl="https://unifeewise.vercel.app/mock-test"
      />

      {/* Top Breadcrumb Nav — Apple Translucent Bar */}
      <div className="border-b border-black/[0.06] bg-white/80 backdrop-blur-xl sticky top-16 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition active:scale-95"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Fee Calculator</span>
          </Link>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            <Link
              href="/lpunest-previous-year-papers"
              className="hidden sm:inline-flex items-center gap-1 text-slate-600 hover:text-slate-950 transition active:scale-95"
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

        {/* Informational Guide & Pattern Breakdown — Apple Frosted Card */}
        <section className="rounded-[2.25rem] border border-black/[0.06] bg-white/95 p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span>Official LPUNEST 2027 Examination Blueprint</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            How the LPUNEST 2027 CBT Exam &amp; Scholarship System Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="rounded-2xl border border-black/[0.05] bg-slate-50/70 p-6 space-y-3">
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-emerald-100 text-emerald-800 font-black text-sm shadow-xs">
                +4
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                1. Zero Negative Marking Policy
              </h3>
              <p>
                LPUNEST rewards confident problem-solving: candidates earn +4 marks for
                every correct answer with strictly <strong>0 negative marking</strong> for
                unattempted or incorrect answers. Attempting all 100 questions maximizes your aggregate scholarship score.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.05] bg-slate-50/70 p-6 space-y-3">
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-orange-100 text-orange-800 font-black text-sm shadow-xs">
                25
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                2. MCQs &amp; Numerical Questions
              </h3>
              <p>
                In engineering subjects (Physics, Chemistry, and Mathematics), questions 1–20
                are Single Choice MCQs, while questions 21–25 are numerical fill-in-the-blank
                answers testing core formulas without guesswork options.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.05] bg-slate-50/70 p-6 space-y-3">
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-amber-100 text-amber-800 font-black text-sm shadow-xs">
                60%
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
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
        <section className="rounded-[2.25rem] border border-black/[0.06] bg-white/95 p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.05] pb-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-800">
                <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                <span>Memory-Based Analysis 2024–2026 Batches</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                LPUNEST Previous Year Paper Analysis &amp; High-Weightage Topics
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl font-normal leading-relaxed">
                Comprehensive chapter-by-chapter weightage breakdown gathered from students and exam memories to help you prioritize your study schedule for LPUNEST 2027 Phase 1 and Phase 2.
              </p>
            </div>

            <Link
              href="/lpunest-previous-year-papers"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 active:scale-95 transition shadow-sm border-t border-white/20"
            >
              <FileText className="h-4 w-4 text-orange-400" />
              <span>View Solved Past Question Bank →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Subject 1: Physics */}
            <div className="rounded-2xl border border-black/[0.06] bg-slate-50/60 p-6 space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Physics (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-orange-700 bg-orange-100/70 border border-orange-200 rounded-full px-2.5 py-0.5">
                  High Focus
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Direct NCERT formula substitutions dominate numerical questions 21–25.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Current &amp; Resistance:</strong> Ohm&apos;s law, temp coefficient (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Modern Physics:</strong> de Broglie, photoelectric, Bohr model (4–5 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Electrostatics:</strong> Coulomb&apos;s law, capacitors (3 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Optics:</strong> Lens maker&apos;s formula, Snell&apos;s law (2–3 Qs)</span>
                </li>
              </ul>
            </div>

            {/* Subject 2: Chemistry */}
            <div className="rounded-2xl border border-black/[0.06] bg-slate-50/60 p-6 space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Chemistry (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 border border-emerald-200 rounded-full px-2.5 py-0.5">
                  High Scoring
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Fastest section to solve. Almost 70% questions are direct NCERT theory.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Coordination Compounds:</strong> IUPAC naming, Werner theory (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Chemical Kinetics:</strong> First order rate, Arrhenius (3 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Organic Conversions:</strong> Aldehydes, Ketones, Acids (4–5 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Electrochemistry:</strong> Nernst eq, molar conductivity (2–3 Qs)</span>
                </li>
              </ul>
            </div>

            {/* Subject 3: Mathematics */}
            <div className="rounded-2xl border border-black/[0.06] bg-slate-50/60 p-6 space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Mathematics (25 Qs • 100 M)</h3>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-100/70 border border-amber-200 rounded-full px-2.5 py-0.5">
                  Calculation Focus
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Numericals 21–25 reward clean step-by-step arithmetic without negative marks.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Matrices &amp; Determinants:</strong> Adjoint, Cramer&apos;s rule (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Vectors &amp; 3D:</strong> Dot/cross products, shortest distance (4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Integral Calculus:</strong> Definite integrals, Area under curve (3–4 Qs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Probability &amp; Stats:</strong> Bayes theorem, distribution (2–3 Qs)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Promotion / Coupon CTA Callout — Apple Pro Dark Glass */}
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1122] to-slate-950 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Official LPUNEST Registration Discount
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Save 20% on Your Application Form with Coupon Code <span className="text-orange-400 font-mono">LPUMZW722</span>
              </h3>
              <p className="text-xs text-slate-300">
                Boys pay ₹800 instead of ₹1,000 • Girls pay ₹400 instead of ₹500 on the official LPU portal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/lpunest-coupon-code"
                className="rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-xs font-bold text-white hover:bg-white/[0.12] active:scale-95 transition"
              >
                Learn How to Apply Code →
              </Link>
              <a
                href={LPUNEST_CONFIG.links.affiliate}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-orange-500 active:scale-95 transition shadow-sm border-t border-white/20"
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
