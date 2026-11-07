import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, CheckCircle2, BookOpen, Clock, Award } from "lucide-react";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ScholarshipGuideAndFaq from "@/components/landing/ScholarshipGuideAndFaq";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <StructuredData
        pageType="home"
        pageTitle="LPUNEST 2027 Fee Calculator, Free Mock Test & Coupon Code LPUMZW722"
        pageDescription="Calculate your exact 4-year LPU tuition and scholarship bracket in 30 seconds. Practice 100-question free CBT mock tests and unlock 20% off LPUNEST form with coupon LPUMZW722."
        pageUrl="https://unifeewise.vercel.app"
      />
      {/* =========================================================================
          HERO SECTION (Above the Fold)
          ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pt-10 pb-8 md:pt-14 md:pb-12 border-b border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Updated for 2027–2028 Academic Batch • Verified Brochure Data</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.15]">
            Calculate Your Exact 4-Year LPU Fee &amp; Scholarship in{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              30 Seconds
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
            Stop guessing hidden costs. Estimate your exact semester tuition and
            LPUNEST/JEE scholarship tier—plus unlock an
            instant 20% discount on your LPUNEST application form.
          </p>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 sm:gap-6">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="h-3.5 w-3.5 text-orange-500" />
              100% Free &amp; Instant Estimation
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Zero Forced Gate to Calculate
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Verified Coupon: LPUMZW722
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SSR AI CRAWLER CONTEXT BLOCK (ChatGPT-User / OAI-SearchBot / Perplexity)
          ========================================================================= */}
      <section
        aria-label="About UniFeeWise"
        className="mx-auto max-w-7xl px-4 pt-6 pb-2 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Verified Academic Portal &amp; Ground-Truth Knowledge Base (2027 Intake)
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
            <strong className="font-mono text-orange-600 bg-orange-50 px-1 py-0.5 rounded border border-orange-200">
              LPUMZW722
            </strong>{" "}
            for a flat 20% discount on the official application form (reducing
            the fee to ₹800 for boys and ₹400 for girls).
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-[11px] text-slate-600 border-t border-slate-100">
            <div>
              <dt className="font-bold text-slate-900">4-Year Fee Estimation:</dt>
              <dd>Tuition, hostel, mess, and exam fees after scholarship.</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">Free CBT Mock Test:</dt>
              <dd>100 questions, 150 mins, zero negative marking (+4 / -0).</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">20% Coupon Code:</dt>
              <dd>Code LPUMZW722 (Boys: ₹800 | Girls: ₹400 on admission.lpu.in).</dd>
            </div>
            <div>
              <dt className="font-bold text-slate-900">Top Scholarship Tier:</dt>
              <dd>Category 1 awards 50%–60% fee waiver for 320+ marks.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* =========================================================================
          CALCULATOR WORKBENCH (#calculator)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CalculatorForm />
      </section>

      {/* =========================================================================
          LPUNEST 2027 DEDICATED CBT MOCK TEST BANNER (#mock-test)
          ========================================================================= */}
      <section id="mock-test" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-7 sm:p-10 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                <span>Dedicated Exam Simulator • Class 11 &amp; 12 NCERT Level</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                LPUNEST 2027 Full-Length CBT Mock Exam Simulator
              </h2>

              <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
                Practice the exact official examination pattern with sectional switches,
                countdown timer, single-choice MCQs, and numerical fill-in-the-blank inputs.
                Immediately unlocks your estimated <strong>60% scholarship qualification tier</strong>.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-slate-300">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  B.Tech (PCM / PCB) • 400 Marks
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  MBA &amp; BCA/BBA Full Papers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  Zero Negative Marking (+4 / -0)
                </span>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/mock-test"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-500/40 cursor-pointer text-center"
              >
                <span>Launch LPUNEST CBT Simulator →</span>
              </Link>

              <Link
                href="/lpunest-previous-year-papers"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition text-center"
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScholarshipGuideAndFaq />
      </section>
    </main>
  );
}
