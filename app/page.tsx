import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, CheckCircle2, BookOpen, Clock, Award, ArrowRight } from "lucide-react";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ScholarshipGuideAndFaq from "@/components/landing/ScholarshipGuideAndFaq";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-orange-500/20 selection:text-orange-950">
      <StructuredData
        pageType="home"
        pageTitle="LPUNEST 2027 Fee Calculator, Free Mock Test & Coupon Code LPUMZW722"
        pageDescription="Calculate LPU 2027 B.Tech & MBA fees with scholarship, practice free CBT mock tests, and get 20% off LPUNEST form with coupon LPUMZW722."
        pageUrl="https://unifeewise.vercel.app"
      />

      {/* =========================================================================
          HERO SECTION — Apple Minimal Fluid Stage
          ========================================================================= */}
      <section className="relative overflow-hidden pt-14 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 border-b border-black/[0.05] bg-gradient-to-b from-white via-[#fafafc] to-[#fbfbfd]">
        {/* Soft Ambient Radial Diffusers for Depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[760px] rounded-full bg-gradient-to-tr from-orange-400/10 via-amber-300/10 to-transparent blur-[120px]"
        />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          {/* Apple Dynamic Status Capsule */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.07] bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-transform hover:scale-[1.01]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-[-0.01em] text-slate-700">
              Updated for 2027–2028 Intake • Official LPU Brochure Data
            </span>
          </div>

          {/* Main Headline — Optical Tracking & Tight Leading */}
          <h1 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05]">
            Calculate Your Exact 4-Year LPU Fee in{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
              30 Seconds
            </span>
          </h1>

          {/* Subheadline — Clean Balance and Relaxed Leading */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal tracking-[-0.012em]">
            Zero guessing, zero hidden costs. Instant semester tuition, hostel, mess forecast,
            and LPUNEST/JEE scholarship predictions—plus an official 20% application fee discount.
          </p>

          {/* Apple Quick Action Row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] border-t border-white/20 transition-all hover:bg-slate-800 active:scale-[0.97] cursor-pointer"
            >
              <span>Estimate Your 4-Year Fee</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/mock-test"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all hover:bg-white hover:border-black/[0.14] active:scale-[0.97]"
            >
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span>Practice CBT Mock Exam</span>
            </Link>
          </div>

          {/* Segmented Control Feature Dock */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center rounded-full border border-black/[0.06] bg-white/70 px-5 py-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] backdrop-blur-2xl text-xs font-semibold text-slate-600 divide-x divide-black/[0.06]">
            <div className="flex items-center gap-2 px-3 py-0.5">
              <Zap className="h-3.5 w-3.5 text-orange-500" />
              <span>100% Free &amp; Unrestricted</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-0.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Zero Forced Form-Gate</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-0.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Verified Coupon: <strong className="font-mono text-slate-900">LPUMZW722</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SSR AI CRAWLER CONTEXT BLOCK — Apple Frosted System Card
          ========================================================================= */}
      <section
        aria-label="About UniFeeWise"
        className="mx-auto max-w-7xl px-4 pt-9 pb-3 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] border border-black/[0.06] bg-white/80 p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-black/[0.05] pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.06em] text-slate-500">
                Verified Academic Portal &amp; Ground-Truth Knowledge Base (2027 Intake)
              </span>
            </div>
            <span className="rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 border border-black/[0.04]">
              Session 2027–2028
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <strong>UniFeeWise</strong> (
            <a
              href="https://unifeewise.vercel.app"
              className="text-orange-600 font-semibold hover:underline"
            >
              https://unifeewise.vercel.app
            </a>
            ) is India&apos;s free, independent LPUNEST 2027–2028 student toolkit
            for Lovely Professional University (LPU) admissions. It provides: (1)
            an interactive 4-Year LPU Tuition, Hostel, Mess &amp; Scholarship
            Calculator for B.Tech CSE, MBA, BCA &amp; BBA, (2) a free
            100-question LPUNEST 2027 Computer-Based Test (CBT) Mock Exam
            simulator (
            <Link
              href="/mock-test"
              className="text-orange-600 font-semibold hover:underline"
            >
              /mock-test
            </Link>
            ) with 25+ questions per subject, (3) solved previous year question
            papers (
            <Link
              href="/lpunest-previous-year-papers"
              className="text-orange-600 font-semibold hover:underline"
            >
              /lpunest-previous-year-papers
            </Link>
            ), and (4) verified LPUNEST 2027 coupon code{" "}
            <strong className="font-mono text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-200">
              LPUMZW722
            </strong>{" "}
            for a flat 20% discount on the official application form (reducing
            the fee to ₹800 for boys and ₹400 for girls).
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-3 text-xs text-slate-600 border-t border-black/[0.05]">
            <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04]">
              <dt className="font-bold text-slate-900">4-Year Fee Estimation:</dt>
              <dd className="mt-0.5 text-slate-500 leading-normal">Tuition, hostel, mess, and exam fees after scholarship.</dd>
            </div>
            <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04]">
              <dt className="font-bold text-slate-900">Free CBT Mock Test:</dt>
              <dd className="mt-0.5 text-slate-500 leading-normal">100 questions, 150 mins, zero negative marking (+4 / -0).</dd>
            </div>
            <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04]">
              <dt className="font-bold text-slate-900">20% Coupon Code:</dt>
              <dd className="mt-0.5 text-slate-500 leading-normal">Code LPUMZW722 (Boys: ₹800 | Girls: ₹400 on admission.lpu.in).</dd>
            </div>
            <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04]">
              <dt className="font-bold text-slate-900">Top Scholarship Tier:</dt>
              <dd className="mt-0.5 text-slate-500 leading-normal">Category 1 awards 50%–60% fee waiver for 320+ marks.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* =========================================================================
          CALCULATOR WORKBENCH (#calculator)
          ========================================================================= */}
      <section id="calculator" className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 scroll-mt-24">
        <CalculatorForm />
      </section>

      {/* =========================================================================
          LPUNEST 2027 DEDICATED CBT MOCK TEST BANNER — Apple Pro Dark Glass Stage
          ========================================================================= */}
      <section id="mock-test" className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-950 via-[#0a1122] to-slate-950 p-8 sm:p-11 md:p-14 text-white shadow-2xl">
          {/* Dual Soft Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[110px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                <span>Dedicated Exam Simulator • Class 11 &amp; 12 NCERT Level</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-white leading-[1.1]">
                LPUNEST 2027 Full-Length CBT Mock Exam Simulator
              </h2>

              <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                Practice the exact official examination pattern with sectional switches,
                countdown timer, single-choice MCQs, and numerical fill-in-the-blank inputs.
                Immediately unlocks your estimated <strong className="text-white">60% scholarship qualification tier</strong>.
              </p>

              {/* Apple-Style Glass Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-slate-300 backdrop-blur-md">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  B.Tech (PCM / PCB) • 400 Marks
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-slate-300 backdrop-blur-md">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  MBA &amp; BCA/BBA Full Papers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-slate-300 backdrop-blur-md">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  Zero Negative Marking (+4 / -0)
                </span>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/mock-test"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(249,115,22,0.3)] border-t border-white/20 transition-all hover:from-orange-600 hover:to-amber-600 active:scale-[0.98] cursor-pointer text-center"
              >
                <span>Launch LPUNEST CBT Simulator →</span>
              </Link>

              <Link
                href="/lpunest-previous-year-papers"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-xs font-bold text-slate-200 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-[0.98] text-center"
              >
                <BookOpen className="h-3.5 w-3.5 text-orange-400" />
                <span>Solved Previous Year Papers (PDF)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDUCATIONAL SECTIONS & FAQ ACCORDION (#cutoffs, #discount, #faq)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <ScholarshipGuideAndFaq />
      </section>
    </main>
  );
}
