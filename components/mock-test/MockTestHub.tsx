"use client";

import { useState, useMemo } from "react";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ExternalLink,
  Copy,
  Check,
  Award,
  ShieldCheck,
} from "lucide-react";
import { MOCK_COURSES, type PracticeSubject } from "@/lib/mockTestDataExpanded";
import { trackLeadConversion } from "@/lib/gtag";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_COMMUNITY_URL } from "@/lib/constants";

const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

export default function MockTestHub() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>("btech");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("physics");

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Active course and subject
  const currentCourse = useMemo(() => {
    return MOCK_COURSES.find((c) => c.id === selectedCourseId) ?? MOCK_COURSES[0];
  }, [selectedCourseId]);

  const currentSubject: PracticeSubject = useMemo(() => {
    const found = currentCourse.subjects.find((s) => s.id === selectedSubjectId);
    return found ?? currentCourse.subjects[0];
  }, [currentCourse, selectedSubjectId]);

  const questions = currentSubject.questions;
  const currentQuestion = questions[currentQuestionIndex] ?? questions[0];
  const userSelectedOption = selectedAnswers[currentQuestion.id];

  // Score calculation
  const totalQuestions = questions.length;
  const attemptedCount = Object.keys(selectedAnswers).filter((qId) =>
    questions.some((q) => q.id === qId)
  ).length;

  const correctCount = useMemo(() => {
    return questions.reduce((acc, q) => {
      return selectedAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [questions, selectedAnswers]);

  const percentageScore = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Change course
  const handleCourseChange = (courseId: string) => {
    setSelectedCourseId(courseId);
    const newCourse = MOCK_COURSES.find((c) => c.id === courseId) ?? MOCK_COURSES[0];
    setSelectedSubjectId(newCourse.subjects[0].id);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsTestFinished(false);
  };

  // Change subject
  const handleSubjectChange = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsTestFinished(false);
  };

  // Select an option
  const handleSelectOption = (optionIndex: number) => {
    if (isTestFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
    setShowExplanation(true);
  };

  // Navigation
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowExplanation(selectedAnswers[questions[currentQuestionIndex + 1]?.id] !== undefined);
    } else {
      setIsTestFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowExplanation(selectedAnswers[questions[currentQuestionIndex - 1]?.id] !== undefined);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setIsTestFinished(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = DISCOUNT_CODE;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch {
        // ignore
      }
      document.body.removeChild(textarea);
    }
    setCopiedCode(true);
    trackLeadConversion(20.0, "INR");
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleApplyPortalClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    trackLeadConversion(30.0, "INR");
    window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="mock-test" className="scroll-mt-24 space-y-8 py-10">
      {/* Header Title & Pitch */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-orange-600" />
          <span>Interactive Exam Simulator • 2027 Admission Edition</span>
        </div>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
          LPUNEST Practice &amp; Free Mock Test Hub
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Master real LPUNEST test patterns with instant explanations. 
          <span className="font-semibold text-slate-900"> Zero negative marking</span> means every question you attempt can boost your score into the Category 1 (50%–60% waiver) bracket.
        </p>
      </div>

      {/* Main Workbench Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
        {/* Step 1: Course Selector Tabs */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Step 1: Select Your Target Stream
          </span>
          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {MOCK_COURSES.map((course) => {
              const isActive = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => handleCourseChange(course.id)}
                  className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all whitespace-nowrap ${
                    isActive
                      ? "border-orange-600 bg-orange-50/70 shadow-sm ring-1 ring-orange-500"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                    {course.badge}
                  </span>
                  <span className="mt-0.5 text-xs sm:text-sm font-extrabold text-slate-900 truncate w-full">
                    {course.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Subject-Wise Filter Pills */}
        <div className="mt-6 border-t border-slate-100 pt-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Step 2: Choose Subject / Section
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {currentCourse.subjects.map((sub) => {
              const isActive = sub.id === currentSubject.id;
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSubjectChange(sub.id)}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "border-orange-600 bg-orange-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <span>{sub.name}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {sub.questionCount} Qs
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quiz Arena */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 sm:p-7">
          {!isTestFinished ? (
            /* ACTIVE QUESTION VIEW */
            <div>
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-orange-600 text-xs font-black text-white">
                    {currentQuestionIndex + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <span className="hidden sm:inline-block text-slate-300">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />
                    Zero Negative Marking
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span>
                    Answered: <strong className="text-slate-900">{attemptedCount}</strong>/{totalQuestions}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-orange-600 transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                  }}
                />
              </div>

              {/* Question Text */}
              <div className="mt-5">
                <h3 className="text-sm sm:text-base font-bold leading-relaxed text-slate-900">
                  {currentQuestion.text}
                </h3>
              </div>

              {/* Options */}
              <div className="mt-5 space-y-2.5">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = userSelectedOption === idx;
                  const isCorrectAnswer = currentQuestion.correctAnswer === idx;
                  let optionStyles =
                    "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50";

                  if (showExplanation) {
                    if (isCorrectAnswer) {
                      optionStyles =
                        "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500";
                    } else if (isSelected && !isCorrectAnswer) {
                      optionStyles =
                        "border-rose-400 bg-rose-50 text-rose-950 font-semibold ring-1 ring-rose-400";
                    }
                  } else if (isSelected) {
                    optionStyles =
                      "border-orange-600 bg-orange-50 text-orange-950 font-semibold ring-1 ring-orange-500";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full flex items-center justify-between rounded-xl border p-3.5 text-left text-xs sm:text-sm transition-all ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {showExplanation && isCorrectAnswer && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      )}
                      {showExplanation && isSelected && !isCorrectAnswer && (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box */}
              {showExplanation && (
                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-700 space-y-1 shadow-sm">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <HelpCircle className="h-4 w-4 text-orange-600" />
                    <span>Correct Answer &amp; Explanation:</span>
                  </div>
                  <p className="text-slate-600 pl-5">
                    <strong>Option {String.fromCharCode(65 + currentQuestion.correctAnswer)}:</strong>{" "}
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <button
                  type="button"
                  disabled={currentQuestionIndex === 0}
                  onClick={handlePrev}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition"
                >
                  ← Previous
                </button>

                <div className="flex items-center gap-2">
                  {currentQuestionIndex < totalQuestions - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-orange-500 transition"
                    >
                      Next Question →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsTestFinished(true)}
                      className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
                    >
                      Finish Test &amp; View Score
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* SCORE CARD VIEW */
            <div className="text-center py-4 space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-sm">
                <Award className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {currentSubject.name} Practice Completed!
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  You scored <strong className="text-orange-600 text-base">{correctCount}</strong> out of{" "}
                  <strong>{totalQuestions}</strong> ({percentageScore}%)
                </p>
              </div>

              {/* Contextual Scholarship Helper Banner */}
              <div className="mx-auto max-w-xl rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-5 text-left text-xs sm:text-sm text-emerald-950 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>
                    {percentageScore >= 70
                      ? "High Scholarship Potential: Category 1 (50%–60% Waiver)!"
                      : "Great Practice Run: Build Consistency for LPUNEST!"}
                  </span>
                </div>
                <p className="leading-relaxed text-emerald-800 text-xs sm:text-[13px]">
                  Scored {percentageScore}%? In the official exam, LPUNEST has{" "}
                  <strong>zero negative marking</strong>. Lock in your Phase 1 application on{" "}
                  <strong>admission.lpu.in</strong> with code{" "}
                  <strong className="font-mono text-orange-600 bg-white px-1.5 py-0.5 rounded border border-orange-200">
                    LPUMZW722
                  </strong>{" "}
                  to get a <strong>flat 20% discount</strong> on the form fee (₹800 boys / ₹400 girls).
                </p>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-600 hover:bg-orange-50 transition shadow-sm"
                  >
                    {copiedCode ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedCode ? "Copied! Paste at admission.lpu.in" : "Copy Coupon LPUMZW722"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleApplyPortalClick}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-orange-500 transition"
                  >
                    <span>Apply on Official LPU Portal (20% Off)</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-sm cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Subject Test</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                  <span>Join WhatsApp Desk (Free Mock PDFs)</span>
                </button>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition shadow-sm"
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Check Scholarship Fee in Calculator</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
