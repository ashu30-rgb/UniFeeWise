"use client";

import { useState } from "react";
import {
  Award,
  ChevronDown,
  Sparkles,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Tag,
  ExternalLink,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";

const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

const FAQS = [
  {
    question: "How do I get the 80% discount on the LPUNEST form?",
    answer:
      "When registering on the official university portal (admission.lpu.in), enter coupon code LPUMZW722 at the checkout stage. This officially reduces the application form fee from ₹1,000 to ₹200 for male applicants, and from ₹500 to ₹100 for female applicants.",
  },
  {
    question: "Can I improve my scholarship in Phase 2?",
    answer:
      "Yes! You are allowed to re-appear for LPUNEST in a later phase. If you achieve a higher score in Phase 2, your scholarship tier is automatically upgraded. If you score lower, your best previous scholarship tier remains preserved. However, Phase 1 has the highest total scholarship seat quota.",
  },
  {
    question: "Are hostel and mess fees included in the scholarship?",
    answer:
      "No. University scholarships apply exclusively to the base academic tuition fee. Hostel accommodation (AC/Non-AC seater options), mess dining packages, and recurring semester examination fees (₹4,500/sem) are separate university charges.",
  },
  {
    question: "Is LPUNEST mandatory if I have JEE Mains percentile or 12th board marks?",
    answer:
      "No, you can directly claim scholarships based on your JEE Main percentile (90%+ for Category 1) or Class 12th board aggregate. However, appearing for LPUNEST is still highly recommended because your highest qualifying score between LPUNEST and national exams is considered for your final waiver.",
  },
];

export default function ScholarshipGuideAndFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleApplyClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-16 py-12">
      {/* =========================================================================
          SECTION 1: "How LPUNEST 2027 Scholarships Work" (#cutoffs)
          ========================================================================= */}
      <section id="cutoffs" className="scroll-mt-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <Award className="h-3.5 w-3.5 text-orange-600" />
            Official Bracket Cutoffs
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            How LPUNEST 2027 Scholarships Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            LPU awards academic fee waivers based on performance across 3 distinct
            brackets. Scholarships apply across all years of study.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Category 1 */}
          <div className="relative flex flex-col rounded-2xl border-2 border-orange-500 bg-gradient-to-b from-orange-50/50 via-white to-white p-6 shadow-md transition hover:shadow-lg">
            <span className="absolute -top-3 right-5 rounded-full bg-orange-600 px-3 py-0.5 text-[11px] font-bold text-white shadow-sm">
              Highest Waiver
            </span>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Category 1
                </h3>
                <span className="text-xs font-semibold text-orange-600">
                  Top 10% Bracket
                </span>
              </div>
            </div>

            <div className="my-5 rounded-xl bg-white p-4 border border-orange-100 shadow-inner">
              <div className="text-3xl font-black text-slate-900">
                60% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-medium text-emerald-600">
                Saves up to ₹3,84,000 on 4-Yr B.Tech
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>LPUNEST Score:</strong> 320 – 400 marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>JEE Main:</strong> 90%+ Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>12th Board:</strong> 95%+ Aggregate Marks</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Category 2 */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Category 2
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Top 11% – 20%
                </span>
              </div>
            </div>

            <div className="my-5 rounded-xl bg-slate-50 p-4 border border-slate-100">
              <div className="text-3xl font-black text-slate-900">
                50% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-medium text-emerald-600">
                Saves up to ₹3,20,000 on 4-Yr B.Tech
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>LPUNEST Score:</strong> 240 – 319 marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>JEE Main:</strong> 80% – 89.9% Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>12th Board:</strong> 90% – 94.9% Aggregate</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Category 3 */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Category 3
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Top 21% – 35%
                </span>
              </div>
            </div>

            <div className="my-5 rounded-xl bg-slate-50 p-4 border border-slate-100">
              <div className="text-3xl font-black text-slate-900">
                40% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-medium text-emerald-600">
                Saves up to ₹2,56,000 on 4-Yr B.Tech
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>LPUNEST Score:</strong> 150 – 239 marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>JEE Main:</strong> 70% – 79.9% Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>12th Board:</strong> 80% – 89.9% Aggregate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Phase 1 Advisory Callout */}
        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
            <Calendar className="h-6 w-6" />
          </div>
          <div className="flex-1 text-xs sm:text-sm">
            <h4 className="font-bold text-amber-950">
              Why Apply in Phase 1?
            </h4>
            <p className="mt-1 leading-relaxed text-amber-800">
              Phase 1 carries the highest scholarship seat quotas. In subsequent
              phases (Phase 2 & Phase 3), the university reduces scholarship percentage
              caps and increases fee slabs as intake quotas fill up.
            </p>
          </div>
          <a
            href="#calculator"
            className="shrink-0 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber-700"
          >
            Calculate Phase 1 Fee →
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Official Discount Callout (#discount)
          ========================================================================= */}
      <section
        id="discount"
        className="scroll-mt-24 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl sm:p-10"
      >
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400">
              <Tag className="h-3 w-3" />
              Verified Official Coupon Code
            </span>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Save 80% on Your Official LPUNEST Form
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Use official code <strong className="font-mono text-orange-400">LPUMZW722</strong> on
              admission.lpu.in to reduce your application fee to ₹200 (for girls: ₹100).
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 font-mono text-xl font-black tracking-widest text-orange-400">
              LPUMZW722
            </div>
            <button
              type="button"
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-orange-500"
            >
              <span>Apply on Official Portal</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Compact FAQ Accordion (#faq)
          ========================================================================= */}
      <section id="faq" className="scroll-mt-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-600" />
            Student Clarifications
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Got questions about fee structures, scholarship rules, or coupon discounts?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
