import { Sparkles, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ScholarshipGuideAndFaq from "@/components/landing/ScholarshipGuideAndFaq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
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
            Stop guessing hidden costs. Estimate your semester tuition,
            LPUNEST/JEE scholarship tier, hostel, and mess charges—plus unlock an
            instant 80% discount on your LPUNEST application form.
          </p>

          {/* Trust Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-orange-500" />
              100% Free &amp; Instant Estimation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Zero Forced Gate to Calculate
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Verified Coupon: LPUMZW722
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALCULATOR WORKBENCH (#calculator)
          ========================================================================= */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <CalculatorForm />
      </section>

      {/* =========================================================================
          EDUCATIONAL SECTIONS & FAQ ACCORDION (#cutoffs, #discount, #faq)
          ========================================================================= */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScholarshipGuideAndFaq />
      </section>
    </main>
  );
}
