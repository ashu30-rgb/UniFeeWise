"use client";

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

const DISCOUNT_CODE = "LPU20NEST";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ScholarshipResults({ data }: ScholarshipResultsProps) {
  return (
    <section className="w-full rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 font-sans shadow-xl backdrop-blur-md">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-[#58a6ff]">
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

      <div className="mt-6 rounded-xl border border-[#58a6ff]/40 bg-[#58a6ff]/10 p-5 text-center">
        <p className="text-sm font-medium text-[#58a6ff]">
          Exclusive 20% LPUNEST Application Discount Code
        </p>
        <p className="mt-3 font-mono text-2xl font-bold tracking-widest text-[#e6edf3]">
          {DISCOUNT_CODE}
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Apply this code during your LPUNEST application to save an extra 20%.
        </p>
      </div>

      <GlowingCtaButton
        type="button"
        text="Apply Now with Discount"
        className="mt-6 w-full"
        onClick={() => {
          alert(
            `Use discount code ${DISCOUNT_CODE} on the LPUNEST application portal. Affiliate link coming soon.`
          );
        }}
      />
    </section>
  );
}
