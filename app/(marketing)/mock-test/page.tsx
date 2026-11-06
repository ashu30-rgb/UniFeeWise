import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import CBTSimulator from "@/components/mock-test/CBTSimulator";

export const metadata: Metadata = {
  title: "LPUNEST 2027 Mock Test & CBT Exam Simulator | Free Practice & Scholarship Predictor",
  description:
    "Attempt official LPUNEST 2027 CBT mock tests for B.Tech (PCM/PCB), MBA, and BCA/BBA. Authentic 400 & 100 marks patterns, zero negative marking, numerical questions, and instant scholarship qualification.",
  keywords: [
    "LPUNEST mock test",
    "LPUNEST 2027 CBT simulator",
    "LPU mock exam",
    "LPUNEST previous year questions",
    "LPU scholarship test practice",
    "BTech PCM mock test",
    "LPUNEST free mock test"
  ]
};

export default function MockTestPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
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
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>LPUNEST 2027 Official CBT Engine</span>
          </div>
        </div>
      </div>

      {/* Main Simulator Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CBTSimulator />

        {/* Informational Guide & Pattern Breakdown */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span>LPUNEST 2027 Official Exam Structure &amp; Marking Scheme</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            How the LPUNEST 2027 CBT Exam &amp; Scholarship System Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 space-y-2">
              <h3 className="font-extrabold text-slate-900 text-sm">
                1. Zero Negative Marking Policy
              </h3>
              <p>
                LPUNEST rewards confident problem-solving: candidates earn +4 marks for
                every correct answer with strictly <strong>0 negative marking</strong> for
                unattempted or incorrect answers across all subjects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 space-y-2">
              <h3 className="font-extrabold text-slate-900 text-sm">
                2. MCQs &amp; Numerical Questions
              </h3>
              <p>
                In engineering subjects (Physics, Chemistry, and Mathematics), questions 1–20
                are Single Choice MCQs, while questions 21–25 are numerical fill-in-the-blank
                answers that test fundamental formula application.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 space-y-2">
              <h3 className="font-extrabold text-slate-900 text-sm">
                3. Three Scholarship Brackets
              </h3>
              <p>
                Your total score directly dictates your semester fee: <strong>Category 1 (80%+)</strong> awards
                a 60% tuition waiver (saving up to ₹7,68,000 on 4-Yr B.Tech), <strong>Category 2 (60%–79%)</strong> grants
                a 50% waiver, and <strong>Category 3 (38%–59%)</strong> grants a 40% waiver.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
