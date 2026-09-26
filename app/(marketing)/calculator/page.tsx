import type { Metadata } from "next";
import CalculatorForm from "@/components/calculator/CalculatorForm";

export const metadata: Metadata = {
  title: "LPU Fee & ROI Calculator 2026 | UniFeeWise",
  description:
    "Calculate your exact LPUNEST 2026 scholarship tier, semester fees, and ROI in seconds.",
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#0d1117] to-[#0d1117]">
        <div className="mx-auto max-w-xl px-4 pb-8 pt-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fee & ROI Calculator
          </h1>
          <p className="mt-3 text-gray-400">
            Enter your expected LPUNEST score to unlock your scholarship tier
            and exact semester fees.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-xl px-4 pb-16">
        <CalculatorForm />
      </section>
    </main>
  );
}
