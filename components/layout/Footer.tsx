import Link from "next/link";
import { Calculator, ShieldAlert, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Purpose */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-black text-white transition hover:text-orange-400"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-600 text-white shadow-sm">
                <Calculator className="h-4 w-4" />
              </span>
              <span>
                Uni<span className="text-orange-500">Fee</span>Wise
              </span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Independent student fee calculation, scholarship bracket estimation,
              and LPUNEST 2027 preparation guidance built by alumni and students.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
              <Sparkles className="h-3 w-3" />
              Coupon Code: <strong className="font-mono text-white">LPUMZW722</strong>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Calculators &amp; Tools
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href="/calculator"
                  className="transition hover:text-orange-400"
                >
                  Fee &amp; ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/lpu-cse-fees"
                  className="transition hover:text-orange-400"
                >
                  B.Tech CSE Fees &amp; Cutoff
                </Link>
              </li>
              <li>
                <Link
                  href="/lpu-ece-fees"
                  className="transition hover:text-orange-400"
                >
                  B.Tech ECE Fees &amp; Cutoff
                </Link>
              </li>
              <li>
                <Link
                  href="/lpu-mba-fees"
                  className="transition hover:text-orange-400"
                >
                  MBA Fees &amp; ROI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Study Resources
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href="https://chat.whatsapp.com/HVj67QWkaXZAy55FmP1IrL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-emerald-400 transition hover:text-emerald-300"
                >
                  <WhatsAppIcon className="h-3 w-3 fill-current" />
                  <span>LPUNEST WhatsApp Community Desk</span>
                </a>
              </li>
              <li>
                <Link
                  href="/#mock-test"
                  className="inline-flex items-center gap-1 font-bold text-orange-400 transition hover:text-orange-300"
                >
                  <Sparkles className="h-3 w-3" />
                  Free Mock Test Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/btech-previous-year-paper"
                  className="transition hover:text-orange-400"
                >
                  B.Tech Previous Year Paper (PDF)
                </Link>
              </li>
              <li>
                <Link
                  href="/mock-test/physics"
                  className="transition hover:text-orange-400"
                >
                  Physics Subject Mock Test
                </Link>
              </li>
              <li>
                <Link
                  href="/mock-test/mathematics"
                  className="transition hover:text-orange-400"
                >
                  Mathematics Mock Test
                </Link>
              </li>
              <li>
                <Link
                  href="/mock-test/chemistry"
                  className="transition hover:text-orange-400"
                >
                  Chemistry Mock Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal &amp; Support
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="font-medium text-slate-300 transition hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-medium text-slate-300 transition hover:text-orange-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="pt-2">
                <span className="block text-slate-500">Contact Desk:</span>
                <a
                  href="mailto:support@unifeewise.com"
                  className="font-mono text-orange-400 transition hover:underline"
                >
                  support@unifeewise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Independent Compliance Disclaimer Block (Anti-Suspension) */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-inner space-y-3">
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400"
              aria-hidden
            >
              <ShieldAlert className="h-3.5 w-3.5" />
            </span>
            <div className="space-y-2 text-xs leading-relaxed text-slate-400">
              <p>
                <strong className="font-semibold text-slate-300">
                  Note on Fee Estimates &amp; Accuracy:
                </strong>{" "}
                All tuition, scholarship brackets, hostel, and mess figures calculated above are indicative estimates based on publicly released university reference brochures to help families plan their budget. Because seat quotas, phase-wise scholarship cutoffs, and specialization fees may be updated by the university during the admission cycle, please always verify your final, exact fee structure directly on the official LPU website (www.lpu.in) or admission portal.
              </p>
              <p>
                <strong className="font-semibold text-slate-300">
                  Independent Status Disclaimer:
                </strong>{" "}
                UniFeeWise is an independent student fee calculation,
                scholarship estimation, and educational guidance tool built by
                alumni/students. We are NOT the official website of Lovely
                Professional University (LPU) and are not directly affiliated
                with the university&apos;s administrative billing department.
              </p>
              <p className="text-[11px] text-slate-500">
                Trademarks Notice: &ldquo;Lovely Professional
                University&rdquo;, &ldquo;LPU&rdquo;, and
                &ldquo;LPUNEST&rdquo; are registered trademarks of Lovely
                Professional University. They are used here exclusively for
                nominative educational identification and reference purposes.
                Official admissions and form payments must be processed directly on
                the official university portal (
                <a
                  href="https://admission.lpu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  admission.lpu.in
                </a>
                ).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} UniFeeWise. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
            <a
              href="mailto:support@unifeewise.com"
              className="hover:text-slate-300"
            >
              Support Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
