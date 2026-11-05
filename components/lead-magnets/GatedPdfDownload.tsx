"use client";

import { useState } from "react";
import { Download, Copy, Check, ExternalLink, FileText } from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";
import { DISCOUNT_CODE, AFFILIATE_URL } from "@/lib/constants";

const PDF_HREF = "/assets/lpunest-btech-previous-year.pdf";
const PDF_DOWNLOAD_NAME = "LPUNEST_BTech_Paper.pdf";

export default function GatedPdfDownload() {
  const [copiedCode, setCopiedCode] = useState(false);

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

  const handleDownloadClick = () => {
    trackLeadConversion(10.0, "INR");
  };

  const handleApplyClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 text-center shadow-xl space-y-6">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
          <FileText className="h-8 w-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          Instant Free Download • Zero Signup Required
        </span>
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          LPUNEST B.Tech Previous Year Paper
        </h2>
        <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-400 leading-relaxed">
          Practice authentic exam questions with detailed explanations. No email,
          phone number, or registration gate needed.
        </p>

        {/* Direct Download Button */}
        <a
          href={PDF_HREF}
          download={PDF_DOWNLOAD_NAME}
          onClick={handleDownloadClick}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-600 hover:to-amber-600 cursor-pointer"
        >
          <Download className="h-4 w-4" />
          <span>Download Question Paper (PDF)</span>
        </a>
      </div>

      {/* Official 20% Form Discount Box */}
      <div className="rounded-xl border border-dashed border-orange-500/50 bg-slate-950/80 p-5 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
          Official 20% LPUNEST Form Discount
        </span>
        <div className="flex items-center justify-center gap-2">
          <span className="font-mono text-2xl sm:text-3xl font-black tracking-widest text-white bg-slate-900 px-4 py-1 rounded-xl border border-slate-700">
            {DISCOUNT_CODE}
          </span>
          <button
            type="button"
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-orange-500 transition shadow-sm cursor-pointer whitespace-nowrap"
          >
            {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
          </button>
        </div>
        <p className="text-xs text-slate-300">
          Reduces official application form kit from ₹1,000 to <strong className="text-white">₹800</strong> (girls: <strong className="text-white">₹400</strong>).
        </p>
        <button
          type="button"
          onClick={handleApplyClick}
          className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition underline underline-offset-4 cursor-pointer"
        >
          <span>Apply on Official LPU Portal (Code {DISCOUNT_CODE})</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
