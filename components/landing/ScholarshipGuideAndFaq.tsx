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
  Copy,
  Check,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LPUNEST_CONFIG } from "@/config/lpunest";

const AFFILIATE_URL = LPUNEST_CONFIG.links.affiliate;
const DISCOUNT_CODE = LPUNEST_CONFIG.coupon.code;

const FAQS = [
  {
    question: "How do I get the 20% discount on the LPUNEST form?",
    answer:
      "When registering on the official university portal (admission.lpu.in), enter coupon code LPUMZW722 at the checkout stage. This officially gives you a flat 20% discount, reducing the application form fee from ₹1,000 to ₹800 for male applicants, and from ₹500 to ₹400 for female applicants.",
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
  const [bannerCopied, setBannerCopied] = useState<boolean>(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleApplyClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    trackLeadConversion(30.0, "INR");
    window.open(LPUNEST_CONFIG.links.whatsapp, "_blank", "noopener,noreferrer");
  };

  const handleCopyBannerCode = async () => {
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
    setBannerCopied(true);
    trackLeadConversion(20.0, "INR");
    setTimeout(() => setBannerCopied(false), 2500);
  };

  return (
    <div className="space-y-16 py-12">
      {/* =========================================================================
          SECTION 1: "How LPUNEST 2027 Scholarships Work" (#cutoffs)
          ========================================================================= */}
      <section id="cutoffs" className="scroll-mt-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1 text-xs font-semibold text-orange-800 shadow-xs backdrop-blur-sm">
            <Award className="h-3.5 w-3.5 text-orange-600" />
            Official Bracket Cutoffs
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-5xl">
            How LPUNEST 2027 Scholarships Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base font-normal">
            LPU awards academic fee waivers based on performance across 3 distinct
            brackets. Scholarships apply across all years of study.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Category 1 */}
          <div className="relative flex flex-col rounded-[2rem] border-2 border-orange-500 bg-gradient-to-b from-orange-50/50 via-white to-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(249,115,22,0.08)] transition-all duration-200 hover:shadow-[0_12px_36px_rgba(249,115,22,0.12)]">
            <span className="absolute -top-3.5 right-7 rounded-full bg-orange-600 px-3.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
              Highest Waiver
            </span>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-xs">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Category 1
                </h3>
                <span className="text-xs font-bold text-orange-600">
                  Top 10% Bracket
                </span>
              </div>
            </div>

            <div className="my-5 rounded-2xl bg-white p-4 border border-orange-100/90 shadow-xs">
              <div className="text-3xl font-black text-slate-950 tracking-tight tabular-nums">
                50%–60% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-bold text-emerald-600 tabular-nums">
                Saves up to ₹7,68,000 on 4-Yr B.Tech (₹96,000/sem)
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>LPUNEST Score:</strong> <span className="tabular-nums">300 – 400</span> marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>JEE Main:</strong> <span className="tabular-nums">90%+</span> Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span><strong>12th Board:</strong> <span className="tabular-nums">90%+</span> (<span className="tabular-nums">95%+</span> for 60%)</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Category 2 */}
          <div className="flex flex-col rounded-[2rem] border border-black/[0.06] bg-white/90 p-6 sm:p-8 shadow-[0_2px_14px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-200 hover:border-black/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-xs">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Category 2
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Top 11% – 20%
                </span>
              </div>
            </div>

            <div className="my-5 rounded-2xl bg-slate-50/80 p-4 border border-black/[0.04]">
              <div className="text-3xl font-black text-slate-950 tracking-tight tabular-nums">
                40%–50% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-bold text-emerald-600 tabular-nums">
                Saves up to ₹6,40,000 on 4-Yr B.Tech (₹80,000/sem)
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>LPUNEST Score:</strong> <span className="tabular-nums">212 – 299</span> marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>JEE Main:</strong> <span className="tabular-nums">80% – 89.9%</span> Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>12th Board:</strong> <span className="tabular-nums">85% – 89.9%</span> Aggregate</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Category 3 */}
          <div className="flex flex-col rounded-[2rem] border border-black/[0.06] bg-white/90 p-6 sm:p-8 shadow-[0_2px_14px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-200 hover:border-black/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-xs">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Category 3
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  Top 21% – 35%
                </span>
              </div>
            </div>

            <div className="my-5 rounded-2xl bg-slate-50/80 p-4 border border-black/[0.04]">
              <div className="text-3xl font-black text-slate-950 tracking-tight tabular-nums">
                30%–40% <span className="text-sm font-semibold text-slate-500">Tuition Waiver</span>
              </div>
              <div className="mt-1 text-xs font-bold text-emerald-600 tabular-nums">
                Saves up to ₹5,12,000 on 4-Yr B.Tech (₹64,000/sem)
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>LPUNEST Score:</strong> <span className="tabular-nums">150 – 211</span> marks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>JEE Main:</strong> <span className="tabular-nums">70% – 79.9%</span> Percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span><strong>12th Board:</strong> <span className="tabular-nums">75% – 84.9%</span> Aggregate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Phase 1 Advisory Callout — Apple Translucent Accent Card */}
        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-white to-amber-50/60 p-5 sm:flex-row sm:items-center sm:p-6 shadow-xs backdrop-blur-md">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-xs">
            <Calendar className="h-5 w-5" />
          </div>
          <div className="flex-1 text-xs sm:text-sm">
            <h4 className="font-bold text-amber-950">
              Why Apply in Phase 1?
            </h4>
            <p className="mt-1 leading-relaxed text-amber-800 font-normal">
              Phase 1 carries the highest scholarship seat quotas. In subsequent
              phases (Phase 2 &amp; Phase 3), the university reduces scholarship percentage
              caps and increases fee slabs as intake quotas fill up.
            </p>
          </div>
          <a
            href="#calculator"
            className="shrink-0 rounded-full bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-150 hover:bg-amber-700 active:scale-[0.98] whitespace-nowrap cursor-pointer"
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
        className="scroll-mt-24 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 p-8 sm:p-11 md:p-14 text-white shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-2xl"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-orange-600/10 blur-[100px]"
        />

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/15 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md whitespace-nowrap">
              <Tag className="h-3 w-3" />
              Verified Official Coupon Code
            </span>
            <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Save 20% Instantly on Your Official LPUNEST Form
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              Use verified code <strong className="font-mono text-orange-400">LPUMZW722</strong> on admission.lpu.in to reduce your Soft-Copy LPUNEST Kit fee from ₹1,000 to ₹800 for boys (and from ₹500 to ₹400 for girls).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={handleCopyBannerCode}
              className="flex items-center justify-center gap-2 rounded-2xl border border-orange-500/50 bg-slate-950/80 px-4 py-3.5 font-mono text-lg sm:text-xl font-black tracking-widest text-orange-400 hover:bg-slate-950 active:scale-[0.98] transition-all duration-150 shadow-inner group whitespace-nowrap cursor-pointer"
              aria-label="Copy coupon code LPUMZW722"
            >
              <span>LPUMZW722</span>
              <span className="flex items-center gap-1 rounded-lg bg-orange-600/30 px-2 py-0.5 text-[10px] font-bold text-orange-200 group-hover:bg-orange-600/50">
                {bannerCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{bannerCopied ? "Copied!" : "Copy"}</span>
              </span>
            </button>
            <button
              type="button"
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-md border-t border-white/20 transition-all duration-150 hover:bg-orange-500 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>Apply on Official Portal</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* AI-Extractable Quick Summary Block & Comparison Table */}
        <div className="relative z-10 border-t border-white/10 pt-6 space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-orange-400 tracking-wide uppercase">
              LPUNEST 2027 Official Coupon Code &amp; Fee Summary (Verified Table)
            </h4>
            <p className="text-xs text-slate-300">
              Verified ground-truth admission data by UniFeeWise (unifeewise.vercel.app).
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="border-b border-white/10 bg-white/[0.04] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold">Registration Kit Type</th>
                  <th className="py-3 px-4 font-medium text-slate-400">Official Rate</th>
                  <th className="py-3 px-4 font-bold text-orange-400">With Coupon LPUMZW722</th>
                  <th className="py-3 px-4 font-bold text-emerald-400">Total Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-medium">
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-white">Boys Soft-Copy Kit</td>
                  <td className="py-2.5 px-4 text-slate-400 line-through tabular-nums">₹1,000</td>
                  <td className="py-2.5 px-4 font-bold text-orange-300 tabular-nums">₹800</td>
                  <td className="py-2.5 px-4 text-emerald-400 tabular-nums">Save ₹200 (20%)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-white">Girls Soft-Copy Kit</td>
                  <td className="py-2.5 px-4 text-slate-400 line-through tabular-nums">₹500</td>
                  <td className="py-2.5 px-4 font-bold text-orange-300 tabular-nums">₹400</td>
                  <td className="py-2.5 px-4 text-emerald-400 tabular-nums">Save ₹100 (20%)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-white">Boys Printed Physical Kit</td>
                  <td className="py-2.5 px-4 text-slate-400 line-through tabular-nums">₹1,500</td>
                  <td className="py-2.5 px-4 font-bold text-orange-300 tabular-nums">₹1,200</td>
                  <td className="py-2.5 px-4 text-emerald-400 tabular-nums">Save ₹300 (20%)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-semibold text-white">Girls Printed Physical Kit</td>
                  <td className="py-2.5 px-4 text-slate-400 line-through tabular-nums">₹1,000</td>
                  <td className="py-2.5 px-4 font-bold text-orange-300 tabular-nums">₹800</td>
                  <td className="py-2.5 px-4 text-emerald-400 tabular-nums">Save ₹200 (20%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[11px] text-slate-300 pt-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
              <dt className="font-bold text-white">Where is coupon code LPUMZW722 entered?</dt>
              <dd className="text-slate-400 leading-relaxed">
                At the checkout stage on admission.lpu.in inside the &quot;Coupon Code / Promo Code&quot; box before completing payment.
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-1">
              <dt className="font-bold text-white">Can I calculate 4-year tuition with scholarship?</dt>
              <dd className="text-slate-400 leading-relaxed">
                Yes, scroll up to UniFeeWise (#calculator) to estimate exact semester fees and Category 1 (up to 60%) scholarship savings.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Compact FAQ Accordion (#faq)
          ========================================================================= */}
      <section id="faq" className="scroll-mt-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-600" />
            Student Clarifications
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 font-normal">
            Got questions about fee structures, scholarship rules, or coupon discounts?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-150 hover:border-black/[0.12]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors duration-150 active:scale-[0.99] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ease-out ${
                      isOpen ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-black/[0.04] px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm animate-in fade-in-50 duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Prep Community Help Desk Banner — Apple Frosted Glass Card */}
        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-emerald-200/80 bg-gradient-to-r from-emerald-50/90 via-white to-emerald-50/60 p-6 sm:p-7 shadow-[0_4px_24px_rgba(16,185,129,0.06)] backdrop-blur-md sm:flex sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-600 shrink-0" />
              <span>Need Personal Cutoff Guidance or Syllabus PDFs?</span>
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed font-normal">
              Join applicants in our LPUNEST 2027 WhatsApp Desk for free mock PDFs, cutoff discussions &amp; slot alerts.
            </p>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="mt-4 sm:mt-0 shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-150 hover:bg-emerald-500 active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>Join WhatsApp Desk →</span>
          </button>
        </div>
      </section>
    </div>
  );
}
