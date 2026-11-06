import type { MockSubjectSlug } from "@/lib/mockTestTypes";
import { LPUNEST_CONFIG } from "@/config/lpunest";

const OFFICIAL_SAMPLE_PAPERS_URL = LPUNEST_CONFIG.links.affiliate;

const SUBJECT_LINKS: Array<{
  slug: MockSubjectSlug;
  label: string;
  href: string;
}> = [
  {
    slug: "physics",
    label: "Physics Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
  {
    slug: "chemistry",
    label: "Chemistry Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
  {
    slug: "mathematics",
    label: "Mathematics Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
  {
    slug: "biology",
    label: "Biology Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
  {
    slug: "english",
    label: "English Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
  {
    slug: "computer-science",
    label: "Computer Science Sample Paper",
    href: OFFICIAL_SAMPLE_PAPERS_URL,
  },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default function PdfDownloadLinks() {
  return (
    <section className="mt-10 rounded-xl border border-gray-800 bg-[#161b22] p-6">
      <h2 className="text-lg font-semibold text-[#e6edf3]">
        Prefer offline practice? View Official LPU Sample Papers
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        Download or view official LPUNEST under-graduate sample questions
        directly from LPU&apos;s website.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {SUBJECT_LINKS.map((item) => (
          <a
            key={item.slug}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-gray-800 bg-[#0d1117] px-4 py-3 text-sm font-medium text-gray-300 transition hover:border-orange-500/40 hover:text-[#f97316]"
          >
            <span className="text-gray-500 transition group-hover:text-[#f97316]">
              <DownloadIcon />
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
