import type { Metadata } from "next";
import GatedPdfDownload from "@/components/lead-magnets/GatedPdfDownload";

export const metadata: Metadata = {
  title: "Download LPUNEST B.Tech Previous Year Question Paper | UniFeeWise",
  description:
    "Download the free LPUNEST B.Tech previous year question paper. Practice authentic exam questions to improve your score and unlock up to a 60% Category A scholarship.",
  openGraph: {
    title: "Download LPUNEST B.Tech Previous Year Question Paper",
    description:
      "Free gated download of LPUNEST B.Tech previous year paper — practice for Category A scholarship eligibility.",
    type: "website",
  },
};

export default function BtechPreviousYearPaperPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Free LPUNEST Resource
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Download LPUNEST B.Tech Previous Year Question Paper
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Practicing authentic{" "}
            <strong className="font-semibold text-[#e6edf3]">
              LPUNEST B.Tech previous year papers
            </strong>{" "}
            is one of the fastest ways to raise your exam score. Students who
            score in the top brackets can unlock a{" "}
            <strong className="font-semibold text-orange-400">
              Category A (60%) scholarship
            </strong>{" "}
            on semester tuition — making past-paper practice a direct path to
            lower fees and better ROI on your LPU degree.
          </p>
        </header>

        <div className="mx-auto w-full max-w-xl">
          <GatedPdfDownload />
        </div>

        <section className="mx-auto mt-12 max-w-2xl text-sm leading-relaxed text-gray-500">
          <h2 className="text-lg font-semibold text-gray-300">
            Why solve LPUNEST previous year papers?
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Understand the real B.Tech exam pattern across Physics, Chemistry,
              Mathematics, English, and aptitude.
            </li>
            <li>
              Identify weak topics early and target a higher scholarship tier
              before you sit for LPUNEST 2026.
            </li>
            <li>
              Pair practice with our Scholarship & ROI Calculator to estimate
              your exact semester fees after waiver.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
