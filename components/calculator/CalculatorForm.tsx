"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import GlowingCtaButton from "@/components/ui/GlowingCtaButton";
import LeadGateDialog, {
  type LeadFormData,
} from "@/components/calculator/LeadGateDialog";
import ScholarshipResults, {
  type ScholarshipResultData,
} from "@/components/calculator/ScholarshipResults";

const BRANCH_OPTIONS = [
  "B.Tech CSE",
  "B.Tech ECE",
  "BBA",
  "MBA",
] as const;

type TargetBranch = (typeof BRANCH_OPTIONS)[number];

const MAX_SCORE = 400;
const MIN_SCORE = 0;

interface CalculateApiResponse {
  success?: boolean;
  data?: ScholarshipResultData;
  error?: string;
}

interface LeadsApiResponse {
  success?: boolean;
  data?: { id: string };
  error?: string;
}

export default function CalculatorForm() {
  const [targetBranch, setTargetBranch] = useState<TargetBranch>("B.Tech CSE");
  const [expectedScore, setExpectedScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState<ScholarshipResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleScoreChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === "") {
      setExpectedScore(null);
      setError(null);
      return;
    }

    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
      setError("Please enter a valid number.");
      return;
    }

    if (parsed < MIN_SCORE || parsed > MAX_SCORE) {
      setExpectedScore(parsed);
      setError(`Score must be between ${MIN_SCORE} and ${MAX_SCORE}.`);
      return;
    }

    setExpectedScore(parsed);
    setError(null);
  };

  const handleOpenLeadGate = (event: FormEvent) => {
    event.preventDefault();

    if (expectedScore === null) {
      setError("Please enter your expected LPUNEST score.");
      return;
    }

    if (expectedScore < MIN_SCORE || expectedScore > MAX_SCORE) {
      setError(`Score must be between ${MIN_SCORE} and ${MAX_SCORE}.`);
      return;
    }

    setError(null);
    setIsModalOpen(true);
  };

  const handleLeadSubmit = async (leadData: LeadFormData) => {
    if (expectedScore === null) {
      setError("Please enter your expected LPUNEST score.");
      setIsModalOpen(false);
      return;
    }

    setIsLoading(true);

    try {
      const leadsResponse = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: leadData.fullName,
          email: leadData.email,
          whatsappNumber: leadData.whatsappNumber,
          targetBranch,
          expectedScore,
        }),
      });

      const leadsPayload = (await leadsResponse.json()) as LeadsApiResponse;

      if (!leadsResponse.ok || !leadsPayload.success) {
        throw new Error(
          leadsPayload.error ??
            "Unable to save your details. Please try again."
        );
      }

      const calculateResponse = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetBranch,
          expectedScore,
        }),
      });

      const calculatePayload =
        (await calculateResponse.json()) as CalculateApiResponse;

      if (
        !calculateResponse.ok ||
        !calculatePayload.success ||
        !calculatePayload.data
      ) {
        throw new Error(
          calculatePayload.error ??
            "Unable to calculate your scholarship. Please try again."
        );
      }

      setResults(calculatePayload.data);
      setIsModalOpen(false);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      alert(message);
      console.error("Lead gate flow failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (results) {
    return <ScholarshipResults data={results} />;
  }

  return (
    <>
      <form
        onSubmit={handleOpenLeadGate}
        className="w-full rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 font-sans shadow-xl backdrop-blur-md"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="targetBranch"
              className="text-sm font-medium text-[#e6edf3]"
            >
              Target Branch
            </label>
            <select
              id="targetBranch"
              name="targetBranch"
              value={targetBranch}
              onChange={(event) =>
                setTargetBranch(event.target.value as TargetBranch)
              }
              className="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-3 py-2.5 text-[#e6edf3] outline-none transition focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
            >
              {BRANCH_OPTIONS.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="expectedScore"
              className="text-sm font-medium text-[#e6edf3]"
            >
              Expected LPUNEST Score
            </label>
            <input
              id="expectedScore"
              name="expectedScore"
              type="number"
              min={MIN_SCORE}
              max={MAX_SCORE}
              step="1"
              inputMode="numeric"
              placeholder="0 – 400"
              value={expectedScore ?? ""}
              onChange={handleScoreChange}
              className="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-3 py-2.5 text-[#e6edf3] placeholder:text-gray-500 outline-none transition focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
            />
            {error ? (
              <p className="text-sm text-red-400" role="alert">
                {error}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Enter a score between {MIN_SCORE} and {MAX_SCORE}.
              </p>
            )}
          </div>

          <GlowingCtaButton
            type="submit"
            text="Calculate Scholarship & Fees"
            className="mt-2 w-full"
          />
        </div>
      </form>

      <LeadGateDialog
        isOpen={isModalOpen}
        isSubmitting={isLoading}
        onClose={() => {
          if (!isLoading) {
            setIsModalOpen(false);
          }
        }}
        onSubmit={handleLeadSubmit}
      />
    </>
  );
}
