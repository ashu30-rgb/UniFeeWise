"use client";

import { useState } from "react";
import GlowingCtaButton from "@/components/ui/GlowingCtaButton";

export interface ScholarshipResultData {
  tier: string;
  waiverPercentage: number;
  baseFee: number;
  scholarshipAmount: number;
  finalFee: number;
}

interface ScholarshipResultsProps {
  data: ScholarshipResultData;
}

const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ScholarshipResults({ data }: ScholarshipResultsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="w-full rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 font-sans shadow-xl backdrop-blur-md">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-orange-400">
          Your Scholarship Result
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#e6edf3]">
          {data.tier} · {data.waiverPercentage}% Waiver
        </h2>
      </div>

      <dl className="space-y-3 rounded-lg border border-gray-800 bg-[#0d1117] p-4">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-gray-400">Base Fee (per semester)</dt>
          <dd className="font-semibold text-[#e6edf3]">
            {formatINR(data.baseFee)}
          </dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-gray-400">Scholarship Amount</dt>
          <dd className="font-semibold text-emerald-400">
            − {formatINR(data.scholarshipAmount)}
          </dd>
        </div>

        <div className="border-t border-gray-800 pt-3">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-sm font-medium text-[#e6edf3]">
              Final Fee / Semester
            </dt>
            <dd className="text-xl font-bold text-[#e6edf3]">
              {formatINR(data.finalFee)}
            </dd>
          </div>
        </div>
      </dl>

      <div className="mt-6 rounded-xl border border-dashed border-[#30363d] bg-[#1e2329] p-5 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-[#8b949e]">
          Exclusive 20% LPUNEST Application Discount Code
        </p>
        <button
          type="button"
          onClick={handleCopyCode}
          className="mt-3 w-full rounded-lg border border-dashed border-orange-500/50 bg-[#0d1117] px-4 py-3 font-mono text-2xl font-bold tracking-widest text-orange-400 transition hover:border-orange-500 hover:bg-[#161b22]"
          aria-label={`Copy discount code ${DISCOUNT_CODE}`}
        >
          {DISCOUNT_CODE}
        </button>
        <p className="mt-2 text-xs text-gray-400">
          {copied
            ? "Copied to clipboard!"
            : "Click the code to copy, then apply it on the LPUNEST portal."}
        </p>
      </div>

      <GlowingCtaButton
        type="button"
        text="Apply Now with Discount"
        className="mt-6 w-full"
        onClick={() => {
          window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
        }}
      />
    </section>
  );
}
