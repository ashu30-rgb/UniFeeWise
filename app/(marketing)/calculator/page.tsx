import type { Metadata } from "next";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ScholarshipGuideAndFaq from "@/components/landing/ScholarshipGuideAndFaq";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "LPU Fee, Hostel & Scholarship Calculator 2027 | UniFeeWise",
  description:
    "Calculate your exact LPUNEST 2027 scholarship tier, semester tuition, hostel and mess fees in seconds with UniFeeWise.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 pt-10 pb-8 md:pt-14 md:pb-12 border-b border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>2027 Admission Edition • Zero Forced Gate</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            LPU Fee, Hostel &amp; Scholarship{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Calculator 2027
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
            Select your target course, scholarship basis, and hostel preferences to
            instantly estimate your net payable cost and unlock an 80% application form discount.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <CalculatorForm />
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScholarshipGuideAndFaq />
      </section>
    </main>
  );
}
