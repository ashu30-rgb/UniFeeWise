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
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-xs font-semibold text-slate-500">
          <Link href="/" className="transition hover:text-orange-600">
            Home
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900">Terms of Service</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <ShieldAlert className="h-3.5 w-3.5 text-orange-600" />
            Legal Terms &amp; Disclaimers
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-slate-500">
            Effective Date: Academic Session 2027–2028 · Last updated: November 2026
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          {/* Section 1 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              1. Indicative Fee Estimates &amp; Verification Clause
            </h2>
            <div className="mt-2 space-y-3">
              <p>
                UniFeeWise is an educational guidance tool created by students
                and alumni. All tuition fee amounts, scholarship percentages,
                hostel accommodation costs, mess packages, examination fees, and
                laundry estimates calculated on this website are{" "}
                <strong className="text-slate-900">indicative estimates</strong>{" "}
                based on publicly published 2026–2027 university prospectuses,
                admission brochures, and past cutoffs.
              </p>
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-amber-900">
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
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              2. Coupon Code LPUMZW722 Usage Terms
            </h2>
            <div className="mt-2 space-y-3">
              <p>
                The promotional coupon code{" "}
                <strong className="font-mono text-orange-600">LPUMZW722</strong>{" "}
                provided on UniFeeWise is valid for an official promotional
                discount on the LPUNEST application form.
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  Coupon code{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono font-bold text-orange-600">
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
                  ). UniFeeWise does not handle or collect application form
                  payments directly.
                </li>
                <li>
                  Promotional terms and discount caps are governed by university
                  admissions guidelines and may vary per academic phase.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              3. Independent Status &amp; Trademark Attribution
            </h2>
            <p className="mt-2">
              UniFeeWise operates independently and is{" "}
              <strong className="text-slate-900">NOT</strong> the official website
              of Lovely Professional University (LPU), nor is it an official
              arm of the university&apos;s administrative billing or finance
              department.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              The names &ldquo;Lovely Professional University&rdquo;,
              &ldquo;LPU&rdquo;, &ldquo;LPUNEST&rdquo;, and corresponding
              crests/logos are registered trademarks of Lovely Professional
              University. Their mention on this website is for fair-use,
              nominative reference and educational information only.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              4. User Responsibilities &amp; Acceptable Use
            </h2>
            <p className="mt-2">
              By using our calculator, mock tests, or downloading question
              papers, you agree:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                To provide authentic contact details (name, email, and 10-digit
                WhatsApp number) so that resources can be delivered accurately.
              </li>
              <li>
                Not to submit automated, malicious, or spam queries to our
                calculation endpoints.
              </li>
              <li>
                To use the study resources and mock tests solely for personal,
                non-commercial exam preparation.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              5. Limitation of Liability
            </h2>
            <p className="mt-2">
              UniFeeWise and its creators shall not be liable for any financial
              decisions, admission outcomes, or discrepancies between indicative
              fee projections and official university invoices. Prospective
              students are urged to verify final fee schedules on the official
              university portal prior to making fee payments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              6. Questions &amp; Contact
            </h2>
            <p className="mt-2">
              For questions regarding these terms, fee calculations, or
              educational resources, reach out to our team at:
            </p>
            <div className="mt-4 rounded-xl bg-slate-100 p-4 text-xs font-mono text-slate-700">
              <p>Email: support@unifeewise.com</p>
              <p className="mt-1">
                Portal: unifeewise.vercel.app · Independent Educational Tool
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
