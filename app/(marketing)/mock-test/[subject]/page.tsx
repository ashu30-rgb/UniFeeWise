import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuizEngine from "@/components/mock-test/QuizEngine";
import PdfDownloadLinks from "@/components/mock-test/PdfDownloadLinks";
import mockTestData from "@/lib/mockTestData.json";
import {
  isMockSubjectSlug,
  MOCK_SUBJECT_SLUGS,
  type MockSubjectSlug,
  type MockTestData,
} from "@/lib/mockTestTypes";

const tests = mockTestData as MockTestData;

interface MockTestPageProps {
  params: {
    subject: string;
  };
}

export function generateStaticParams(): Array<{ subject: MockSubjectSlug }> {
  return MOCK_SUBJECT_SLUGS.map((subject) => ({ subject }));
}

export async function generateMetadata({
  params,
}: MockTestPageProps): Promise<Metadata> {
  if (!isMockSubjectSlug(params.subject)) {
    return { title: "LPUNEST Mock Test | UniFeeWise" };
  }

  const test = tests[params.subject];

  return {
    title: `${test.title} | UniFeeWise`,
    description: `Practice free interactive ${test.subjectName} questions for LPUNEST 2026 with instant scoring.`,
  };
}

export default function MockTestSubjectPage({ params }: MockTestPageProps) {
  if (!isMockSubjectSlug(params.subject)) {
    notFound();
  }

  const test = tests[params.subject];

  if (!test || !Array.isArray(test.questions) || test.questions.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            LPUNEST 2026 Practice
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {test.title}
          </h1>
          <p className="mt-3 text-base text-gray-400">
            Attempt {test.questions.length} sample {test.subjectName} questions
            online in {test.timeLimitMinutes} minutes — stay on UniFeeWise to
            unlock your scholarship calculator and discount code after practice.
          </p>
        </header>

        <QuizEngine test={test} />
        <PdfDownloadLinks />
      </div>
    </main>
  );
}
