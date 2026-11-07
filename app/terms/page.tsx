import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for UniFeeWise. Educational fee calculations, scholarship estimates, and LPUNEST application discount terms.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-orange-500/20 selection:text-orange-950 pb-20">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-xs font-semibold text-slate-500">
          <Link href="/" className="transition hover:text-slate-950">
            Home
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900">Terms of Service</span>
        </nav>

        {/* Header */}
        <div className="border-b border-black/[0.06] pb-8 space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1 text-xs font-semibold text-orange-800 shadow-xs backdrop-blur-sm">
            <ShieldAlert className="h-3.5 w-3.5 text-orange-600" />
            Legal Terms &amp; Disclaimers
          </span>
          <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl leading-[1.1]">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: Academic Session 2027–2028 · Verified Compliance
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          {/* Section 1 */}
          <section className="rounded-[2rem] border border-black/[0.06] bg-white/95 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-xl space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              1. Indicative Fee Estimates &amp; Verification Clause
            </h2>
            <div className="space-y-3">
              <p>
                UniFeeWise is an educational guidance tool created by students
                and alumni. All tuition fee amounts, scholarship percentages,
                hostel accommodation costs, mess packages, examination fees, and
                laundry estimates calculated on this website are{" "}
                <strong className="text-slate-900">indicative estimates</strong>{" "}
                based on publicly published 2026–2027 university prospectuses,
                admission brochures, and past cutoffs.
              </p>
              <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-5 text-amber-950">
                <strong className="font-bold block text-amber-950">
                  Important Notice:
                </strong>{" "}
                All scholarship tiers, percentile requirements, and net payable
                amounts are strictly subject to official university verification
                during document scrutiny and seat allotment at Lovely
                Professional University (LPU). UniFeeWise does not guarantee
                admission, scholarship awards, or fixed fee rates.
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="rounded-[2rem] border border-black/[0.06] bg-white/95 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-xl space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              2. Coupon Code LPUMZW722 Usage Terms
            </h2>
            <div className="space-y-3">
              <p>
                The promotional coupon code{" "}
                <strong className="font-mono text-orange-600">LPUMZW722</strong>{" "}
                provided on UniFeeWise is valid for an official promotional
                discount on the LPUNEST application form.
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Coupon code{" "}
                  <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono font-bold text-orange-600">
                    LPUMZW722
                  </code>{" "}
                  provides a 20% discount on the LPUNEST application fee when
                  redeemed during online registration on the official university
                  portal (e.g. reducing the form fee from ₹1,000 to ₹800 for
                  boys, and from ₹500 to ₹400 for girls).
                </li>
                <li>
                  The discount is applied strictly at the checkout stage on the
                  official university portal (
                  <a
                    href={LPUNEST_CONFIG.links.affiliate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline hover:text-orange-700"
                  >
                    admission.lpu.in
                  </a>
                  ). UniFeeWise never collects payment for admission forms.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="rounded-[2rem] border border-black/[0.06] bg-white/95 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-xl space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              3. Intellectual Property &amp; Trademarks Notice
            </h2>
            <p>
              &ldquo;Lovely Professional University&rdquo;, &ldquo;LPU&rdquo;, and
              &ldquo;LPUNEST&rdquo; are registered trademarks of Lovely
              Professional University. All trademarks are referenced solely for
              nominative identification and informational review purposes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
