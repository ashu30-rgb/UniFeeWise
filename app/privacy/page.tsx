import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Lock, EyeOff, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "UniFeeWise runs 100% privately in your browser with zero database storage of personal phone numbers or emails.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-xs font-semibold text-slate-500">
          <Link href="/" className="transition hover:text-orange-600">
            Home
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            100% Client-Side Privacy • Zero-Database Architecture
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-500">
            Effective Date: Academic Batch 2027–2028 · Verified Compliance
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          {/* Section 1: Zero Personal Data Collection */}
          <section className="rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50/40 to-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
                <EyeOff className="h-4 w-4" />
              </span>
              <h2 className="text-base font-bold text-slate-900">
                1. Zero Personal Data Storage (No Database)
              </h2>
            </div>
            <p>
              UniFeeWise operates as a <strong>100% static, client-side educational utility</strong>.
              We do <strong>NOT</strong> collect, request, record, or store personal phone numbers,
              WhatsApp numbers, email addresses, or physical identities in any backend database.
            </p>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-950 font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>100% In-Browser Execution:</strong> All fee simulations, scholarship
                  percentage calculations, semester breakdowns, and LPUNEST mock test evaluations
                  run entirely inside your local device browser session. No form inputs are transmitted
                  to or stored on our servers.
                </span>
              </div>
            </div>
          </section>

          {/* Section 2: Calculation Data & Ephemeral State */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-xs">
                <Lock className="h-4 w-4" />
              </span>
              <h2 className="text-base font-bold text-slate-900">
                2. Calculation Inputs &amp; User Privacy
              </h2>
            </div>
            <p className="mt-2">
              When you interact with the fee calculator, your chosen parameters (target programme,
              expected LPUNEST/JEE score, residence choices) exist only in your browser&apos;s temporary
              memory while the page is open.
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>No personal lead profiles are created.</li>
              <li>No contact numbers are shared with third-party telemarketers or brokers.</li>
              <li>Closing or refreshing the tab resets your temporary calculator state completely.</li>
            </ul>
          </section>

          {/* Section 3: Anonymous Analytics & Google Ads Conversion Tracking */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-600 text-white shadow-xs">
                <Globe className="h-4 w-4" />
              </span>
              <h2 className="text-base font-bold text-slate-900">
                3. Anonymous Analytics &amp; Google Ads (gtag.js)
              </h2>
            </div>
            <p className="mt-2">
              To measure informational campaign performance and ensure search traffic quality,
              UniFeeWise uses anonymous Google Ads conversion tracking and analytics cookies:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-slate-900">Conversion Measurement:</strong> We measure
                aggregated, anonymous interaction events (such as copying discount coupon code
                <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-orange-600">LPUMZW722</code>,
                navigating to the official university portal, or completing a practice mock test).
              </li>
              <li>
                <strong className="text-slate-900">No Personally Identifiable Information:</strong> Google Ads
                cookies capture zero personal identifiers, bank details, or student credentials.
              </li>
              <li>
                <strong className="text-slate-900">Cookie Management:</strong> You can block or delete
                cookies at any time via your browser settings or through Google&apos;s Ads Settings page.
              </li>
            </ul>
          </section>

          {/* Section 4: Official 20% Coupon Code Notice */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              4. Official LPUNEST Coupon Discount
            </h2>
            <p className="mt-2">
              The promotional coupon code <strong className="font-mono text-orange-600">LPUMZW722</strong> featured
              on this site provides an official <strong>20% discount</strong> on the LPUNEST application kit,
              reducing the fee from ₹1,000 to ₹800 for male applicants, and from ₹500 to ₹400 for female
              applicants when entered on the official portal (admission.lpu.in). UniFeeWise never handles
              tuition payments or admission transactions.
            </p>
          </section>

          {/* Section 5: Independent Status Disclaimer */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              5. Independent Status &amp; Contact Desk
            </h2>
            <p className="mt-2">
              UniFeeWise is an independent student guidance and fee estimation platform created by
              students and alumni. We are not the official website of Lovely Professional University (LPU)
              and are not affiliated with the university billing department.
            </p>
            <div className="mt-4 rounded-xl bg-slate-100 p-4 text-xs font-mono text-slate-700">
              <p>Support Contact: support@unifeewise.com</p>
              <p className="mt-1">Status: 100% Static Client-Side Utility</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
