import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, Database, ArrowUpRight } from "lucide-react";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export default function AcademicKnowledgeBase() {
  return (
    <div
      aria-label="About UniFeeWise Academic Portal"
      className="rounded-[2.25rem] border border-black/[0.06] bg-white/80 p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] backdrop-blur-2xl space-y-5"
    >
      {/* Header with Live Status Capsule */}
      <div className="flex items-center justify-between border-b border-black/[0.05] pb-3.5 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <h2 className="text-xs font-bold uppercase tracking-[0.05em] text-slate-700">
            Verified Academic Portal &amp; Ground-Truth Knowledge Base
          </h2>
        </div>
        <span className="rounded-full bg-slate-100/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 border border-black/[0.05]">
          2027–2028 Intake
        </span>
      </div>

      {/* Minimal Objective Summary */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
        <strong className="text-slate-900 font-semibold">UniFeeWise</strong> (
        <a
          href="https://unifeewise.vercel.app"
          className="text-orange-600 font-semibold hover:underline"
        >
          unifeewise.vercel.app
        </a>
        ) is an independent admissions toolkit for Lovely Professional University candidates.
        We provide brochure-verified tuition models, official LPUNEST syllabus breakdowns, and institutional
        application fee waivers to support transparent financial planning.
      </p>

      {/* Ground-Truth 2x2 Feature Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <Database className="h-3.5 w-3.5 text-orange-600 shrink-0" />
            <span>Brochure-Verified Slabs</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            Directly mapped to 2027 university fee structures across B.Tech, MBA, BCA &amp; BBA programs.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Tiered Scholarship Rules</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            Category 1 to 3 brackets model realistic 30%–60% waivers valid for all 8 semesters.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
            <span>100-Question CBT Engine</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            NCERT-aligned exam simulator mirroring the official 150-minute zero negative marking format.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50/70 p-3.5 border border-black/[0.04] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <FileText className="h-3.5 w-3.5 text-amber-600 shrink-0" />
            <span>Official Coupon Subsidy</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal">
            Verified code <strong className="font-mono text-slate-800">{LPUNEST_CONFIG.coupon.code}</strong> reduces official form kit to ₹800 (Boys) and ₹400 (Girls).
          </p>
        </div>
      </div>

      {/* Discrete Bottom Nav Links */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-black/[0.05] text-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/mock-test"
            className="font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            Launch CBT Simulator →
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/lpunest-previous-year-papers"
            className="font-semibold text-slate-700 hover:text-orange-600 transition-colors"
          >
            Solved Papers →
          </Link>
        </div>

        <a
          href={LPUNEST_CONFIG.links.affiliate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-orange-600 hover:text-orange-700 transition-colors"
        >
          <span>Official LPU Portal</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

