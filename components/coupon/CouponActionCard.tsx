"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, Sparkles, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackLeadConversion } from "@/lib/gtag";
import { LPUNEST_CONFIG } from "@/config/lpunest";

const DISCOUNT_CODE = LPUNEST_CONFIG.coupon.code;
const AFFILIATE_URL = LPUNEST_CONFIG.links.affiliate;
const WHATSAPP_URL = LPUNEST_CONFIG.links.whatsapp;

export default function CouponActionCard() {
  const [copied, setCopied] = useState(false);

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
    setCopied(true);
    trackLeadConversion(20.0, "INR");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyPortal = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = () => {
    trackLeadConversion(30.0, "INR");
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 p-6 sm:p-9 text-white shadow-2xl space-y-6 backdrop-blur-2xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Active for 2027 Admission Session</span>
          </div>
          <h2 className="mt-3 text-xl sm:text-2xl font-black text-white tracking-tight">
            1-Click Coupon Code Activation
          </h2>
        </div>

        <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-400">
          Verified 20% Off
        </span>
      </div>

      {/* Copy Code Interactive Box */}
      <div
        onClick={handleCopyCode}
        className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-orange-500/50 bg-white/[0.03] p-5 sm:p-6 transition-all duration-150 hover:border-orange-400 hover:bg-white/[0.05] active:scale-[0.99] cursor-pointer backdrop-blur-md"
      >
        <div className="text-center sm:text-left space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Official LPU Promo Code
          </span>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="font-mono text-3xl sm:text-4xl font-black tracking-widest text-white group-hover:text-orange-400 transition-colors">
              {DISCOUNT_CODE}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Click anywhere on this box to copy code and automatically claim your discount.
          </p>
        </div>

        <button
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-600/30 group-hover:bg-orange-500 active:scale-95 transition-all duration-150 cursor-pointer border-t border-white/20 whitespace-nowrap"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-white" />
              <span>COPIED TO CLIPBOARD!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>COPY CODE</span>
            </>
          )}
        </button>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <button
          type="button"
          onClick={handleApplyPortal}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 border-t border-white/20 transition-all duration-150 hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-600/40 active:scale-[0.98] cursor-pointer"
        >
          <span>Apply on admission.lpu.in (20% Off)</span>
          <ExternalLink className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white shadow-md shadow-emerald-950/40 transition-all duration-150 hover:bg-emerald-500 active:scale-[0.98] cursor-pointer"
        >
          <WhatsAppIcon className="h-4 w-4 fill-current text-white" />
          <span>Join WhatsApp Cutoff Desk</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span>Valid for all 2027 Admissions (B.Tech, MBA, BCA, Law, Agriculture)</span>
      </div>
    </div>
  );
}
