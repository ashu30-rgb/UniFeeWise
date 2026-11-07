import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import PreviousYearViewer from "@/components/previous-year/PreviousYearViewer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "LPUNEST Previous Year Papers & Solutions PDF",
  description:
    "Download solved LPUNEST previous year question papers with solutions for PCM, PCB and English. Practice real tests and save 20% with code LPUMZW722.",
  keywords: [
    "lpunest previous year question paper with solutions pdf",
    "lpunest previous year papers",
    "lpunest sample paper 2027",
    "lpunest solved papers pdf",
    "lpunest question paper pdf download",
    "lpunest btech previous year question paper",
    "lpunest coupon code LPUMZW722",
  ],
  alternates: {
    canonical: "https://unifeewise.vercel.app/lpunest-previous-year-papers",
  },
  openGraph: {
    title: "LPUNEST Previous Year Papers & Solutions PDF",
    description:
      "Practice 150+ authentic LPUNEST previous year questions across Physics, Chemistry, Math, Biology & English with step-by-step formula derivations.",
    url: "https://unifeewise.vercel.app/lpunest-previous-year-papers",
    type: "article",
  },
};

const pastPaperFaqs = [
  {
    question: "Where can I download LPUNEST previous year question papers with solutions in PDF?",
    answer:
      "You can access and print the complete solved LPUNEST question bank by subject (Physics, Chemistry, Mathematics, Biology, English, and Aptitude) directly on UniFeeWise (https://unifeewise.vercel.app/lpunest-previous-year-papers). You can also practice them under live timed test conditions in the CBT simulator.",
  },
  {
    question: "Are questions in LPUNEST repeated from previous year papers?",
    answer:
      "While exact questions may vary, the fundamental concepts, numerical formula patterns, and chapter weightages (like Modern Physics, Chemical Kinetics, Matrices, and Coordination Compounds) repeat year-after-year in 75%+ of the exam.",
  },
  {
    question: "How can I register for LPUNEST 2027 with a 20% fee waiver?",
    answer:
      "Use official coupon code LPUMZW722 on the LPU admission portal. It reduces application fees from ₹1,000 to ₹800 for male candidates and from ₹500 to ₹400 for female candidates.",
  },
];

export default function PreviousYearPapersPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <StructuredData
        customFaqs={pastPaperFaqs}
        pageType="previous-year-papers"
        pageTitle="LPUNEST Previous Year Question Paper with Solutions PDF (2024–2026)"
        pageDescription="Download and practice solved memory-based LPUNEST previous year question papers with answer keys."
        pageUrl="https://unifeewise.vercel.app/lpunest-previous-year-papers"
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
              href="/mock-test"
              className="text-orange-600 hover:text-orange-700 font-bold transition"
            >
              Take Timed CBT Exam →
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80 px-4 pt-8 pb-10 sm:pt-12 sm:pb-14">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Memory-Based Question Bank • NCERT Class 11 &amp; 12 Syllabus</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl leading-tight">
            LPUNEST Previous Year Question Papers{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              with Solutions
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-xs sm:text-base text-slate-600 leading-relaxed">
            Practice verified memory-based questions from recent LPUNEST test windows across
            Physics, Chemistry, Mathematics, Biology, English, and Aptitude. Each question includes step-by-step NCERT formula derivations.
          </p>
        </div>
      </section>

      {/* Main Interactive Question Bank Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PreviousYearViewer />
      </div>
    </main>
  );
}
