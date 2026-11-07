import type { Metadata } from "next";
import GatedPdfDownload from "@/components/lead-magnets/GatedPdfDownload";

export const metadata: Metadata = {
  title: "LPUNEST B.Tech Previous Year Paper PDF",
  description:
    "Download free LPUNEST B.Tech previous year question paper with solutions. Practice authentic exam questions and unlock up to 60% Category A scholarship at LPU.",
  openGraph: {
    title: "LPUNEST B.Tech Previous Year Paper PDF",
    description:
      "Free gated download of LPUNEST B.Tech previous year paper — practice for Category A scholarship eligibility.",
    type: "website",
  },
};

export default function BtechPreviousYearPaperPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-[#e6edf3] font-sans selection:bg-orange-500/20 selection:text-orange-200">
      <div className="relative mx-auto max-w-3xl px-4 py-14 sm:py-20">
        {/* Soft Ambient Diffuser */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[380px] w-[500px] rounded-full bg-orange-500/10 blur-[100px]"
        />

        <header className="relative z-10 mb-12 text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Free LPUNEST Resource
          </p>
          <h1 className="text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl md:text-5xl leading-[1.1]">
            Download LPUNEST B.Tech Previous Year Question Paper
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base font-normal">
            Practicing authentic{" "}
            <strong className="font-semibold text-white">
              LPUNEST B.Tech previous year papers
            </strong>{" "}
            is one of the fastest ways to raise your exam score. Students who
            score in the top brackets can unlock a{" "}
            <strong className="font-semibold text-orange-400">
              Category 1 (60%) scholarship
            </strong>{" "}
            on semester tuition — making past-paper practice a direct path to
            lower fees and better ROI on your LPU degree.
          </p>
        </header>

        <div className="relative z-10 mx-auto w-full max-w-xl">
          <GatedPdfDownload />
        </div>

        <section className="relative z-10 mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md text-xs sm:text-sm leading-relaxed text-slate-400 space-y-3">
          <h2 className="text-base font-bold text-white tracking-tight">
            Why solve LPUNEST previous year papers?
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Understand the real B.Tech exam pattern across Physics, Chemistry,
              Mathematics, English, and aptitude.
            </li>
            <li>
              Identify weak topics early and target a higher scholarship tier
              before you sit for LPUNEST 2027.
            </li>
            <li>
              Pair practice with our Scholarship &amp; ROI Calculator to estimate
              your exact semester fees after waiver.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
