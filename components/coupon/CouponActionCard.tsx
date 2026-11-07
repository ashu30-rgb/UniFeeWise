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
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-5 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Active for 2027 Admission Session</span>
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-black text-white">
            1-Click Coupon Code Activation
          </h2>
        </div>

        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-400">
          Verified 20% Off
        </span>
      </div>

      {/* Copy Code Interactive Box */}
      <div
        onClick={handleCopyCode}
        className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-orange-500/50 bg-slate-900/90 p-5 sm:p-6 transition hover:border-orange-500 hover:bg-slate-900 cursor-pointer"
      >
        <div className="text-center sm:text-left space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Official LPU Promo Code
          </span>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="font-mono text-3xl sm:text-4xl font-black tracking-widest text-white group-hover:text-orange-400 transition">
              {DISCOUNT_CODE}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Click anywhere on this box to copy code and automatically claim your discount.
          </p>
        </div>

        <button
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-orange-600/30 group-hover:bg-orange-500 transition cursor-pointer"
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

      {/* Primary & Secondary Action CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        <button
          type="button"
          onClick={handleApplyPortal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-xs font-black uppercase tracking-wider text-white shadow-md hover:from-orange-600 hover:to-amber-600 transition cursor-pointer"
        >
          <span>Apply on Official LPU Portal (20% Off)</span>
          <ExternalLink className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-800 bg-emerald-950/80 px-6 py-4 text-xs font-bold text-emerald-300 hover:bg-emerald-900/90 transition cursor-pointer"
        >
          <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-400" />
          <span>Join WhatsApp Desk for Form Help</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-400 pt-1">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span>100% Guaranteed Official LPU Discount • Tested &amp; Active Daily</span>
      </div>
    </div>
  );
}

