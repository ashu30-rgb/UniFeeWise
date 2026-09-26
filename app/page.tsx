import Link from "next/link";
import AffiliateApplyButton from "@/components/ui/AffiliateApplyButton";

const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

const tools = [
  {
    href: "/calculator",
    title: "Fee & ROI Calculator",
    description:
      "Find out your exact semester fees and scholarship tier based on your expected LPUNEST score.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    href: "/mock-test/physics",
    title: "Subject-Wise Mock Tests",
    description:
      "Practice official-style questions for Physics, Math, English, and more to secure Category A.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    href: "/btech-previous-year-paper",
    title: "Previous Year B.Tech Paper",
    description:
      "Download the complete previous year's question paper to understand the exact exam pattern.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* Hero */}
      <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-[#0d1117] to-[#0d1117]">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-20 text-center sm:pt-28">
          <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
            Trusted by the @InsideAshutosh Student Community 🚀
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Maximize Your LPU Scholarship for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              2026
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-300 sm:text-lg">
            Calculate your exact fees, take free subject-wise mock tests, or
            apply directly with a flat 20% discount.
          </p>

          <div className="mt-8">
            <AffiliateApplyButton text="Apply Now (Code: LPUMZW722)" />
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-xl border border-gray-800 bg-[#161b22] p-6 transition-all hover:border-orange-500"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                {tool.icon}
              </span>
              <h2 className="text-lg font-bold text-white">{tool.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                {tool.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-orange-400 group-hover:text-orange-300">
                Get started →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-800 bg-[#161b22]/50">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-12 text-center">
          <p className="text-base text-gray-300 sm:text-lg">
            Ready to secure your seat? Use official code{" "}
            <strong className="font-mono tracking-wider text-orange-400">
              LPUMZW722
            </strong>{" "}
            to save 20% on the application fee.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-200 hover:scale-105 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
          >
            Apply with 20% Off →
          </a>
        </div>
      </section>
    </main>
  );
}
