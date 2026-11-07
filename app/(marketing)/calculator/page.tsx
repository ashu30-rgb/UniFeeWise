import type { Metadata } from "next";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import AcademicKnowledgeBase from "@/components/landing/AcademicKnowledgeBase";
import MockTestHub from "@/components/mock-test/MockTestHub";
import ScholarshipGuideAndFaq from "@/components/landing/ScholarshipGuideAndFaq";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "LPU Fee & Scholarship Calculator 2027",
  description:
    "Calculate your exact LPUNEST 2027 scholarship tier and semester tuition in seconds with UniFeeWise.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-orange-500/20 selection:text-orange-950 pb-20">
      {/* Hero Header — Apple Minimal Fluid Stage */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafc] to-[#fbfbfd] px-4 pt-12 pb-10 md:pt-16 md:pb-14 border-b border-black/[0.05]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[680px] rounded-full bg-orange-400/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-xl">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>2027 Admission Edition • Zero Forced Gate</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl leading-[1.1]">
            LPU Fee &amp; Scholarship{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Calculator 2027
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Select your target course and scholarship basis to
            instantly estimate your net payable cost and unlock a 20% application form discount.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CalculatorForm>
          <AcademicKnowledgeBase />
        </CalculatorForm>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <MockTestHub />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScholarshipGuideAndFaq />
      </section>
    </main>
  );
}
