"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Printer,
  Copy,
  Check,
  Sparkles,
  Clock,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackLeadConversion } from "@/lib/gtag";
import { LPUNEST_CONFIG } from "@/config/lpunest";
import {
  ALL_SUBJECTS_MAP,
  CBTQuestion,
} from "@/data/mock-questions";

const DISCOUNT_CODE = LPUNEST_CONFIG.coupon.code;
const AFFILIATE_URL = LPUNEST_CONFIG.links.affiliate;
const WHATSAPP_URL = LPUNEST_CONFIG.links.whatsapp;

const SUBJECT_KEYS = [
  "physics",
  "chemistry",
  "mathematics",
  "biology",
  "english",
  "aptitude",
  "computer-science",
];

export default function PreviousYearViewer() {
  const [activeSubjectKey, setActiveSubjectKey] = useState<string>("physics");
  const [copiedCode, setCopiedCode] = useState(false);
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  const activeSubject = ALL_SUBJECTS_MAP[activeSubjectKey] || ALL_SUBJECTS_MAP.physics;
  const questions: CBTQuestion[] = activeSubject.questions || [];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = DISCOUNT_CODE;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        // ignore
      }
      document.body.removeChild(textarea);
    }
    setCopiedCode(true);
    trackLeadConversion(20.0, "INR");
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handlePrint = () => {
    trackLeadConversion(15.0, "INR");
    window.print();
  };

  const handleApplyClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    trackLeadConversion(30.0, "INR");
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8">
      {/* Top Action Bar (Print & Interactive Simulator CTA) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/[0.06] bg-white/90 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] backdrop-blur-xl print:hidden">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Study Mode Options
          </span>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Practice Online or Save Question Paper for Offline Revision
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-slate-50/80 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition active:scale-95 cursor-pointer"
          >
            <Printer className="h-4 w-4 text-slate-500" />
            <span>Print / Save as PDF</span>
          </button>

          <Link
            href="/mock-test"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm border-t border-white/20 transition-all hover:bg-slate-800 active:scale-95"
          >
            <Clock className="h-4 w-4 text-orange-400" />
            <span>Launch Timed CBT Simulator →</span>
          </Link>
        </div>
      </div>

      {/* Prominent Coupon Code Banner — Apple Pro Dark Glass */}
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-[#0a1122] to-slate-950 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-2xl print:hidden relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[80px]"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/20 border border-orange-500/30 px-3 py-0.5 text-[11px] font-bold text-orange-300">
              <Sparkles className="h-3 w-3" />
              Verified 20% Form Waiver
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight">
              Official LPUNEST 2027 Registration Coupon:{" "}
              <span className="font-mono text-orange-400">
                {DISCOUNT_CODE}
              </span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
              Pay ₹800 instead of ₹1,000 (Boys) or ₹400 instead of ₹500 (Girls) when filling your LPUNEST form on the official admission portal.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.08] border border-white/15 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-white/[0.12] active:scale-95 transition cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-orange-400" />
                  <span>Copy Code {DISCOUNT_CODE}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleApplyClick}
              className="inline-flex items-center gap-1.5 rounded-2xl bg-orange-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm border-t border-white/20 hover:bg-orange-500 active:scale-95 transition cursor-pointer"
            >
              <span>Apply on Portal ↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subject Filter Tabs — Apple Segmented Control */}
      <div className="space-y-3 print:hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Subject Question Bank ({questions.length} Solved Questions)
          </span>
          <button
            type="button"
            onClick={() => setShowAllSolutions(!showAllSolutions)}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 transition cursor-pointer active:scale-95"
          >
            {showAllSolutions ? "Hide Explanations" : "Show All Step-by-Step Derivations"}
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SUBJECT_KEYS.map((key) => {
            const sub = ALL_SUBJECTS_MAP[key];
            if (!sub) return null;
            const isSelected = activeSubjectKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveSubjectKey(key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer border active:scale-95 ${
                  isSelected
                    ? "border-orange-500 bg-orange-600 text-white shadow-sm"
                    : "border-black/[0.06] bg-white/90 text-slate-700 hover:border-black/[0.12] hover:bg-slate-50"
                }`}
              >
                <span>{sub.shortName}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {sub.questions.length} Qs
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Bank Cards */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-black/[0.06] bg-white/90 p-4 sm:p-5 flex items-center justify-between shadow-xs backdrop-blur-xl">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              {activeSubject.name} — Authentic Previous Year Solved Questions
            </h2>
            <p className="text-xs text-slate-500">
              Pattern: 20 MCQs (+4 / -0) + 5 Formula Numericals (+4 / -0) • NCERT Class 11 &amp; 12 Standard
            </p>
          </div>
          <span className="hidden sm:inline-flex rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-bold text-emerald-700">
            Zero Negative Marking
          </span>
        </div>

        {questions.map((q, idx) => (
          <article
            key={q.id}
            className="rounded-2xl border border-black/[0.06] bg-white/95 p-5 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 hover:border-black/[0.12] transition"
          >
            {/* Question Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.04] pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-slate-950 px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                  Q{idx + 1}
                </span>
                <span className="rounded-lg border border-black/[0.06] bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                  {q.type === "mcq" ? "Single Choice MCQ" : "Numerical Calculation"}
                </span>
                {q.topic && (
                  <span className="text-[11px] font-medium text-slate-500">
                    Topic: {q.topic}
                  </span>
                )}
              </div>

              <span className="text-xs font-bold text-emerald-600">
                +4 Marks • 0 Negative
              </span>
            </div>

            {/* Question Text */}
            <div className="text-sm font-semibold text-slate-800 leading-relaxed">
              {q.text}
            </div>

            {/* Options (MCQ) */}
            {q.type === "mcq" && q.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, optIdx) => {
                  const isCorrect = optIdx === q.correctOptionIndex;
                  return (
                    <div
                      key={optIdx}
                      className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs font-medium transition ${
                        isCorrect && showAllSolutions
                          ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold"
                          : "border-black/[0.06] bg-slate-50/50 text-slate-700"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          isCorrect && showAllSolutions
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="pt-0.5">{opt}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Numerical Answer Display if expanded */}
            {q.type === "numerical" && showAllSolutions && (
              <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5 text-xs font-semibold text-blue-950">
                Correct Numerical Value: <span className="font-mono font-bold text-blue-800">{q.numericalAnswer}</span>
              </div>
            )}

            {/* Detailed Explanation / Solution */}
            {showAllSolutions && q.explanation && (
              <div className="rounded-xl border border-black/[0.06] bg-slate-50/80 p-4 space-y-1.5 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block">
                  Step-by-Step Derivation &amp; Formula:
                </span>
                <p className="leading-relaxed font-sans">{q.explanation}</p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Bottom Conversion Desk — Apple Pro Dark Glass */}
      <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 p-7 sm:p-10 text-white space-y-7 shadow-2xl backdrop-blur-2xl print:hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Official Admission Resources
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to Sit for LPUNEST 2027?
            </h3>
          </div>
          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
            Discount Code: {DISCOUNT_CODE}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/mock-test"
            className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white shadow-lg border-t border-white/20 transition hover:from-orange-600 hover:to-amber-600 active:scale-[0.98] cursor-pointer"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
                Online Simulator
              </span>
              <h4 className="mt-2 text-base font-black">
                Take Full 100-Question CBT Exam →
              </h4>
              <p className="mt-1.5 text-xs text-orange-100/90 leading-relaxed">
                Experience actual exam conditions, sectional countdowns, and immediate Category 1 scholarship calculation.
              </p>
            </div>
            <span className="mt-4 text-xs font-bold underline underline-offset-2">
              Start CBT Mock Test Now
            </span>
          </Link>

          <div
            onClick={handleCopyCode}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-orange-500/50 hover:bg-white/[0.07] transition cursor-pointer active:scale-[0.98] group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Official Form Discount
              </span>
              <h4 className="mt-2 text-base font-black text-white group-hover:text-orange-400 transition">
                Apply Code {DISCOUNT_CODE} (20% Off)
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Boys: ₹800 (Save ₹200) • Girls: ₹400 (Save ₹100). Click to copy code and open admission portal.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-orange-400 underline">
              {copiedCode ? "Copied! Click to Apply ↗" : "Copy Coupon Code"}
            </span>
          </div>

          <div
            onClick={handleWhatsAppClick}
            className="flex flex-col justify-between rounded-2xl border border-emerald-900/40 bg-emerald-950/50 p-6 hover:border-emerald-500/50 transition cursor-pointer active:scale-[0.98]"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Free Student Prep Desk
              </span>
              <h4 className="mt-2 text-base font-black text-white">
                Join LPUNEST WhatsApp Community
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Connect with 1,200+ applicants, get slot booking alerts, memory-based questions, and cutoff updates.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 underline underline-offset-2">
              <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-400" />
              <span>Join WhatsApp Group →</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
