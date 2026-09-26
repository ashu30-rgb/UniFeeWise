"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import GlowingCtaButton from "@/components/ui/GlowingCtaButton";
import type { MockSubjectTest } from "@/lib/mockTestTypes";

interface QuizEngineProps {
  test: MockSubjectTest;
}

type AnswersMap = Record<string, number | null>;

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function QuizEngine({ test }: QuizEngineProps) {
  const questions = useMemo(
    () => (Array.isArray(test?.questions) ? test.questions : []),
    [test]
  );

  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [secondsLeft, setSecondsLeft] = useState(
    Math.max(1, test.timeLimitMinutes) * 60
  );

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return answers[question.id] === question.correctAnswer
        ? total + 1
        : total;
    }, 0);
  }, [answers, questions]);

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true);
    setHasStarted(false);
  }, []);

  useEffect(() => {
    if (!hasStarted || isSubmitted) {
      return;
    }

    if (secondsLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [hasStarted, isSubmitted, secondsLeft, handleSubmit]);

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion || isSubmitted) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handleRestart = () => {
    setHasStarted(false);
    setIsSubmitted(false);
    setCurrentIndex(0);
    setAnswers({});
    setSecondsLeft(Math.max(1, test.timeLimitMinutes) * 60);
  };

  if (!test || totalQuestions === 0) {
    return (
      <div className="rounded-xl border border-gray-800 bg-[#161b22] p-6 text-center text-gray-400">
        No questions available for this subject yet.
      </div>
    );
  }

  if (!hasStarted && !isSubmitted) {
    return (
      <section className="rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 shadow-xl backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-400">
          Interactive Mock Test
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#e6edf3]">{test.title}</h2>
        <ul className="mt-4 space-y-2 text-sm text-gray-400">
          <li>• {totalQuestions} sample questions</li>
          <li>• Time limit: {test.timeLimitMinutes} minutes</li>
          <li>• Instant score on submit</li>
        </ul>
        <GlowingCtaButton
          type="button"
          text="Start Mock Test"
          className="mt-6 w-full"
          onClick={() => setHasStarted(true)}
        />
      </section>
    );
  }

  if (isSubmitted) {
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <section className="rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 shadow-xl backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-400">
          Results · {test.subjectName}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          {score}/{totalQuestions}{" "}
          <span className="text-lg font-medium text-gray-400">
            ({percentage}%)
          </span>
        </h2>

        <div className="mt-6 space-y-4">
          {questions.map((question, index) => {
            const selected = answers[question.id];
            const isCorrect = selected === question.correctAnswer;

            return (
              <div
                key={question.id}
                className="rounded-lg border border-gray-800 bg-[#0d1117] p-4"
              >
                <p className="text-sm font-medium text-[#e6edf3]">
                  Q{index + 1}. {question.text}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    isCorrect ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  Your answer:{" "}
                  {selected === null || selected === undefined
                    ? "Not answered"
                    : question.options[selected]}
                </p>
                {!isCorrect ? (
                  <p className="mt-1 text-sm text-emerald-400">
                    Correct: {question.options[question.correctAnswer]}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <GlowingCtaButton
          type="button"
          text="Retake Test"
          className="mt-6 w-full"
          onClick={handleRestart}
        />
      </section>
    );
  }

  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id] ?? null
    : null;

  return (
    <section className="rounded-xl border border-gray-800 bg-[#161b22]/90 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-400">
            {test.subjectName}
          </p>
          <p className="text-sm text-gray-400">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
        </div>
        <div
          className={`rounded-lg border px-3 py-1.5 font-mono text-sm font-semibold ${
            secondsLeft <= 60
              ? "border-red-500/40 bg-red-500/10 text-red-400"
              : "border-orange-500/30 bg-orange-500/10 text-orange-300"
          }`}
        >
          {formatTime(secondsLeft)}
        </div>
      </div>

      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all"
          style={{
            width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>

      <h3 className="text-lg font-semibold leading-relaxed text-[#e6edf3]">
        {currentQuestion.text}
      </h3>

      <div className="mt-5 space-y-3">
        {currentQuestion.options.map((option, optionIndex) => {
          const isSelected = selectedAnswer === optionIndex;

          return (
            <button
              key={`${currentQuestion.id}-${optionIndex}`}
              type="button"
              onClick={() => handleSelectOption(optionIndex)}
              className={[
                "w-full rounded-lg border px-4 py-3 text-left text-sm transition",
                isSelected
                  ? "border-orange-500 bg-orange-500/15 text-white"
                  : "border-gray-700 bg-[#0d1117] text-gray-300 hover:border-orange-500/50 hover:text-white",
              ].join(" ")}
            >
              <span className="mr-2 font-semibold text-orange-400">
                {String.fromCharCode(65 + optionIndex)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          className="rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 disabled:opacity-40"
        >
          Previous
        </button>

        {currentIndex < totalQuestions - 1 ? (
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))
            }
            className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-4 py-2.5 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/20"
          >
            Next
          </button>
        ) : (
          <GlowingCtaButton
            type="button"
            text="Submit Test"
            onClick={handleSubmit}
          />
        )}
      </div>
    </section>
  );
}
