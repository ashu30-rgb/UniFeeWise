import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | UniFeeWise",
  description:
    "Learn how UniFeeWise collects, uses, and safeguards your contact and fee estimation data with zero spam guarantee.",
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
            Compliance &amp; Data Protection
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p className="mt-2">
              UniFeeWise collects only the essential information necessary to
              generate your personalized fee forecast, scholarship calculations,
              and educational study resources. When you use our fee calculator or
              request resource access, we collect:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-slate-900">Full Name:</strong> To address
                you personally in your estimated fee forecast and study resource
                pack.
              </li>
              <li>
                <strong className="text-slate-900">Email Address:</strong> To deliver
                your detailed 4-year fee breakdown, LPUNEST sample question
                papers, and admission coupon instructions.
              </li>
              <li>
                <strong className="text-slate-900">
                  WhatsApp / Phone Number:
                </strong>{" "}
                (10-digit Indian mobile number) To send quick deadline alerts,
                scholarship updates, and application discount links.
              </li>
              <li>
                <strong className="text-slate-900">Target Course / Branch:</strong>{" "}
                (e.g., B.Tech CSE, B.Tech ECE, BBA, MBA) To determine the
                correct tuition and credit fee schedule.
              </li>
              <li>
                <strong className="text-slate-900">
                  Calculated Scholarship Bracket:
                </strong>{" "}
                Your expected score bracket and estimated tier (Category 1, 2, 3, or None) based on current cutoffs.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              2. How We Use Your Data
            </h2>
            <p className="mt-2">
              We collect and process your information exclusively for legitimate
              educational guidance purposes:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                To calculate and provide your customized 4-year net payable fee
                breakdown (including hostel seater, mess, and recurring exam
                charges).
              </li>
              <li>
                To grant direct access to LPUNEST syllabus breakdowns, subject
                mock tests, and past year question papers.
              </li>
              <li>
                To provide you with verified application discount codes (e.g.
                coupon code{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono font-bold text-orange-600">
                  LPUMZW722
                </code>
                ) providing an 80% promotional discount on the official LPUNEST
                application form.
              </li>
              <li>
                To send critical notifications regarding upcoming registration
                phases, examination slot booking deadlines, and scholarship seat
                allotment dates.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              3. Data Storage, Security &amp; Zero-Spam Commitment
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong className="text-slate-900">Encrypted Storage:</strong> All
                personal and calculation records are stored in secure, encrypted
                PostgreSQL cloud databases with stringent access control.
              </p>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-900">
                <strong className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Zero Spam Guarantee:
                </strong>{" "}
                We value your privacy. We DO NOT sell, rent, trade, or share your
                contact information with third-party telemarketers, spam
                callers, or commercial lead-buying aggregators.
              </div>
              <p>
                <strong className="text-slate-900">Right to Deletion:</strong> You
                have full control over your data. If you wish to inspect, update,
                or permanently erase your contact information from our systems,
                simply email us at{" "}
                <a
                  href="mailto:privacy@unifeewise.com"
                  className="font-mono text-orange-600 underline hover:text-orange-700"
                >
                  privacy@unifeewise.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:support@unifeewise.com"
                  className="font-mono text-orange-600 underline hover:text-orange-700"
                >
                  support@unifeewise.com
                </a>
                . All deletion requests are processed within 48 business hours.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              4. Cookies &amp; Google Ads Conversion Tracking (gtag.js)
            </h2>
            <p className="mt-2">
              To evaluate our informational search campaigns and optimize user
              experience, UniFeeWise employs standard first-party and third-party
              cookies, including:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-slate-900">
                  Google Ads (gtag.js) &amp; Analytics Cookies:
                </strong>{" "}
                We use Google Ads conversion tracking scripts to measure
                anonymous conversion events (such as calculator engagements,
                lead submissions, and clicks to the university portal). These
                cookies do not capture personally identifiable financial or
                banking details.
              </li>
              <li>
                <strong className="text-slate-900">User Cookie Control:</strong> You
                can manage, block, or delete cookies at any time via your browser
                settings or through Google&apos;s Ads Settings portal.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              5. Contact Information &amp; Support
            </h2>
            <p className="mt-2">
              For any privacy inquiries, data deletion requests, or questions
              regarding our guidance tools, please contact our privacy desk:
            </p>
            <div className="mt-4 rounded-xl bg-slate-100 p-4 text-xs font-mono text-slate-700">
              <p>Email: support@unifeewise.com / privacy@unifeewise.com</p>
              <p className="mt-1">
                Platform: UniFeeWise (Student &amp; Alumni Educational Initiative)
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
