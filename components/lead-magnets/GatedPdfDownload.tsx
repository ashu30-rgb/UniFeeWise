"use client";

import { useState } from "react";
import LeadGateDialog, {
  type LeadFormData,
} from "@/components/calculator/LeadGateDialog";
import GlowingCtaButton from "@/components/ui/GlowingCtaButton";
import { trackLeadConversion } from "@/lib/gtag";

const PDF_HREF = "/assets/lpunest-btech-previous-year.pdf";
const PDF_DOWNLOAD_NAME = "LPUNEST_BTech_Paper.pdf";
const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

interface LeadsApiResponse {
  success?: boolean;
  data?: { id: string };
  error?: string;
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-10 w-10 text-orange-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" x2="16" y1="13" y2="13" />
      <line x1="8" x2="16" y1="17" y2="17" />
      <line x1="8" x2="12" y1="9" y2="9" />
    </svg>
  );
}

export default function GatedPdfDownload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLeadSubmit = async (leadData: LeadFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: leadData.fullName,
          email: leadData.email,
          whatsappNumber: leadData.whatsappNumber,
          targetBranch: "B.Tech CSE",
          expectedScore: 0,
        }),
      });

      const payload = (await response.json()) as LeadsApiResponse;

      if (!response.ok || !payload.success) {
        throw new Error(
          payload.error ?? "Unable to unlock the paper. Please try again."
        );
      }

      setIsUnlocked(true);
      setIsModalOpen(false);
      trackLeadConversion(1.0, "INR");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      alert(message);
      console.error("Gated PDF unlock failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnlocked) {
    return (
      <section className="w-full rounded-xl border border-gray-800 bg-[#161b22] p-6 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Unlocked
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#e6edf3]">
          Your LPUNEST B.Tech Paper is Ready
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Download the PDF below and use your exclusive application discount
          when you register.
        </p>

        <a
          href={PDF_HREF}
          download={PDF_DOWNLOAD_NAME}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] transition hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
        >
          Download PDF Now
        </a>

        <div className="mt-6 rounded-xl border border-dashed border-orange-500/60 bg-[#1e2329] p-5">
          <p className="text-sm font-medium uppercase tracking-wide text-[#8b949e]">
            Official 80% Application Form Discount
          </p>
          <p className="mt-3 font-mono text-3xl font-extrabold tracking-widest text-orange-400">
            {DISCOUNT_CODE}
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLeadConversion(2.0, "INR")}
            className="mt-4 inline-flex text-sm font-semibold text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline"
          >
            Apply on Official LPU Portal (Code LPUMZW722) →
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full rounded-xl border border-gray-800 bg-[#161b22] p-6 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
            <DocumentIcon />
          </div>
          <h2 className="text-xl font-bold text-[#e6edf3] sm:text-2xl">
            LPUNEST B.Tech Previous Year Paper
          </h2>
          <p className="mt-2 max-w-md text-sm text-gray-400">
            Unlock the free PDF instantly. Enter your details once to download
            and claim your 80% LPUNEST application discount.
          </p>
          <GlowingCtaButton
            type="button"
            text="Unlock & Download Free"
            className="mt-6 w-full"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      <LeadGateDialog
        isOpen={isModalOpen}
        isSubmitting={isLoading}
        onClose={() => {
          if (!isLoading) {
            setIsModalOpen(false);
          }
        }}
        onSubmit={handleLeadSubmit}
      />
    </>
  );
}
