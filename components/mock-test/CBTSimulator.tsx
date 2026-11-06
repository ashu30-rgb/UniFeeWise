"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Calendar,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackLeadConversion } from "@/lib/gtag";
import { DISCOUNT_CODE, WHATSAPP_COMMUNITY_URL } from "@/lib/constants";
import {
  CBTQuestion,
  COURSES_CONFIG,
  ALL_SUBJECTS_MAP,
  CourseConfig,
  evaluateCBTExam,
  ExamResult
} from "@/data/mock-questions";

type ExamPhase = "lobby" | "in_test" | "result";
type TestMode = "full" | "single_subject";

export default function CBTSimulator() {
  // Lobby State
  const [selectedCourseId, setSelectedCourseId] = useState<string>("btech");
  const [bcaElectives, setBcaElectives] = useState<string[]>([
    "computer-science",
    "aptitude"
  ]);
  const [testMode, setTestMode] = useState<TestMode>("full");
  const [singleSubjectId, setSingleSubjectId] = useState<string>("physics");
  const [scheduleAccordionOpen, setScheduleAccordionOpen] = useState(true);

  // Exam Active State
  const [phase, setPhase] = useState<ExamPhase>("lobby");
  const [activeSubjectId, setActiveSubjectId] = useState<string>("physics");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(150 * 60);

  // User Responses
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<string, boolean>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});

  // Numerical input local buffer
  const [numericalInput, setNumericalInput] = useState<string>("");

  // Result state
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [solutionFilter, setSolutionFilter] = useState<"all" | "incorrect" | "correct" | "unattempted">("all");
  const [copiedCode, setCopiedCode] = useState(false);

  // Active course config
  const activeCourse: CourseConfig = useMemo(() => {
    return (
      COURSES_CONFIG.find((c) => c.id === selectedCourseId) || COURSES_CONFIG[0]
    );
  }, [selectedCourseId]);

  // Determine active subjects in this test configuration
  const activeSubjectIds: string[] = useMemo(() => {
    if (testMode === "single_subject") {
      return [singleSubjectId];
    }
    if (selectedCourseId === "btech") {
      return ["physics", "chemistry", "mathematics", "english"];
    }
    if (selectedCourseId === "btech_bio") {
      return ["physics", "chemistry", "biology", "english"];
    }
    if (selectedCourseId === "mba") {
      return ["english", "aptitude", "general-awareness", "computer-science"];
    }
    if (selectedCourseId === "bca_bba") {
      return ["english", ...bcaElectives];
    }
    return ["physics", "chemistry", "mathematics", "english"];
  }, [testMode, singleSubjectId, selectedCourseId, bcaElectives]);

  // Group questions by subject
  const questionsBySubject: Record<string, CBTQuestion[]> = useMemo(() => {
    const map: Record<string, CBTQuestion[]> = {};
    for (const subId of activeSubjectIds) {
      map[subId] = ALL_SUBJECTS_MAP[subId]?.questions || [];
    }
    return map;
  }, [activeSubjectIds]);

  // Flat list of all questions in current exam
  const allActiveQuestions: CBTQuestion[] = useMemo(() => {
    const list: CBTQuestion[] = [];
    for (const subId of activeSubjectIds) {
      const qList = questionsBySubject[subId] || [];
      list.push(...qList);
    }
    return list;
  }, [activeSubjectIds, questionsBySubject]);

  // Current active subject questions
  const currentSubjectQuestions = useMemo(() => {
    return questionsBySubject[activeSubjectId] || [];
  }, [questionsBySubject, activeSubjectId]);

  // Current active question
  const currentQuestion: CBTQuestion | undefined = useMemo(() => {
    return currentSubjectQuestions[currentQuestionIndex];
  }, [currentSubjectQuestions, currentQuestionIndex]);

  // Sync numerical input with stored answer whenever current question changes
  useEffect(() => {
    if (currentQuestion) {
      setNumericalInput(userAnswers[currentQuestion.id] || "");
      // Mark as visited
      setVisitedQuestions((prev) => ({ ...prev, [currentQuestion.id]: true }));
    }
  }, [currentQuestion, userAnswers]);

  // Submit & Evaluate Exam
  const handleFinishExam = useCallback(() => {
    const result = evaluateCBTExam(allActiveQuestions, userAnswers);
    setExamResult(result);
    setPhase("result");
    trackLeadConversion(30.0, "INR");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [allActiveQuestions, userAnswers]);

  // Countdown Timer
  useEffect(() => {
    if (phase !== "in_test") return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, handleFinishExam]);

  // Format time (MM:SS or HH:MM:SS)
  const formatTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  // Start Exam Handler
  const handleStartExam = () => {
    let durationMins = 150;
    if (testMode === "single_subject") {
      durationMins = 35;
      setActiveSubjectId(singleSubjectId);
    } else {
      durationMins = activeCourse.totalDurationMinutes;
      setActiveSubjectId(activeSubjectIds[0] || "physics");
    }
    setSecondsRemaining(durationMins * 60);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setVisitedQuestions({});
    setMarkedForReview({});
    setPhase("in_test");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard Navigation & Shortcuts (1-4 for options)
  useEffect(() => {
    if (phase !== "in_test" || !currentQuestion || currentQuestion.type !== "mcq") {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const optionIndex = (parseInt(e.key, 10) - 1).toString();
        setUserAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: optionIndex
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, currentQuestion]);

  // Save answer and move to next
  const handleSaveAndNext = () => {
    if (!currentQuestion) return;

    if (currentQuestion.type === "numerical") {
      if (numericalInput.trim() !== "") {
        setUserAnswers((prev) => ({
          ...prev,
          [currentQuestion.id]: numericalInput.trim()
        }));
      }
    }

    // Move to next question within subject, or prompt subject switch
    if (currentQuestionIndex < currentSubjectQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // If end of subject, move to next subject if available
      const currentSubIdx = activeSubjectIds.indexOf(activeSubjectId);
      if (currentSubIdx < activeSubjectIds.length - 1) {
        const nextSubId = activeSubjectIds[currentSubIdx + 1];
        setActiveSubjectId(nextSubId);
        setCurrentQuestionIndex(0);
      }
    }
  };

  // Mark for review and next
  const handleMarkForReview = () => {
    if (!currentQuestion) return;

    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));

    handleSaveAndNext();
  };

  // Clear current response
  const handleClearResponse = () => {
    if (!currentQuestion) return;

    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
    setNumericalInput("");
    setMarkedForReview((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  // Handle option selection for MCQ
  const handleSelectOption = (idx: number) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: idx.toString()
    }));
  };

  // Copy Coupon Code
  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopiedCode(true);
    trackLeadConversion(30.0, "INR");
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Question Palette Status Helper
  const getQuestionStatus = useCallback((q: CBTQuestion) => {
    const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== "";
    const isReview = !!markedForReview[q.id];
    const isVisited = !!visitedQuestions[q.id];

    if (isReview) return "review"; // Purple
    if (isAnswered) return "answered"; // Green
    if (isVisited) return "not_answered"; // Red / Amber
    return "not_visited"; // Slate
  }, [userAnswers, markedForReview, visitedQuestions]);

  // Palette Status Counts for Active Subject
  const subjectStatusCounts = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let review = 0;
    let notVisited = 0;

    for (const q of currentSubjectQuestions) {
      const status = getQuestionStatus(q);
      if (status === "answered") answered++;
      else if (status === "review") review++;
      else if (status === "not_answered") notAnswered++;
      else notVisited++;
    }

    return { answered, notAnswered, review, notVisited };
  }, [currentSubjectQuestions, getQuestionStatus]);

  // ==========================================================================
  // VIEW 1: LOBBY & EXAM CONFIGURATION
  // ==========================================================================
  if (phase === "lobby") {
    return (
      <div className="space-y-8">
        {/* Lobby Header */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" />
              <span>Official LPUNEST 2027 CBT Simulator</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              LPUNEST 2027 Computer-Based Mock Exam &amp; Scholarship Predictor
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Experience the authentic TCS-iON exam pattern with Sectional Switches,
              Zero Negative Marking (+4 / -0), Numerical Fill-in-the-Blanks, and
              instant automated LPU Scholarship Bracket qualification.
            </p>
          </div>
        </div>

        {/* Step 1: Select Course */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white">
              1
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Select Your Target Academic Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES_CONFIG.map((course) => {
              const isSelected = selectedCourseId === course.id;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`text-left rounded-3xl border p-5 sm:p-6 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? "border-orange-500 bg-orange-50/60 shadow-md ring-2 ring-orange-500/20"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        {course.badge}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0" />
                      )}
                    </div>
                    <h3 className="mt-2 text-base sm:text-lg font-extrabold text-slate-900">
                      {course.name}
                    </h3>

                    {/* Official Eligibility Pill */}
                    <div className="mt-2.5 rounded-xl border border-orange-200/90 bg-orange-100/60 px-3 py-1.5 text-[11px] font-bold text-orange-950 leading-snug">
                      {course.eligibility}
                    </div>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {course.totalDurationMinutes} Mins
                    </span>
                    <span className="font-bold text-slate-700">{course.totalMarks} Marks</span>
                    <span className="text-emerald-600 font-bold">0 Negative</span>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedCourseId === "bca_bba" && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Step 1B: Choose Any 2 Elective Subjects (Compulsory: English)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "computer-science", label: "Computer Science & IT Fundamentals" },
                  { id: "aptitude", label: "Quantitative Aptitude & Logical Reasoning" },
                  { id: "general-awareness", label: "General Awareness & Business Economics" },
                  { id: "mathematics", label: "Mathematics (Class 12 Level)" }
                ].map((elec) => {
                  const isChecked = bcaElectives.includes(elec.id);
                  return (
                    <button
                      key={elec.id}
                      type="button"
                      onClick={() => {
                        if (isChecked) {
                          if (bcaElectives.length > 1) {
                            setBcaElectives(bcaElectives.filter((id) => id !== elec.id));
                          }
                        } else {
                          if (bcaElectives.length < 2) {
                            setBcaElectives([...bcaElectives, elec.id]);
                          } else {
                            // Replace last
                            setBcaElectives([bcaElectives[0], elec.id]);
                          }
                        }
                      }}
                      className={`flex items-center justify-between rounded-xl border p-3 transition text-left cursor-pointer ${
                        isChecked
                          ? "border-orange-500 bg-white shadow-xs ring-1 ring-orange-500"
                          : "border-slate-200 bg-white/70 hover:bg-white"
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-800">
                        {elec.label}
                      </span>
                      {isChecked ? (
                        <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                      ) : (
                        <span className="h-4 w-4 rounded-full border border-slate-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Choose Test Mode */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white">
              2
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Select Exam Format &amp; Duration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setTestMode("full")}
              className={`text-left rounded-2xl border p-5 transition cursor-pointer relative ${
                testMode === "full"
                  ? "border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Mode A: Comprehensive CBT Exam
                </span>
                {testMode === "full" && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                )}
              </div>
              <h3 className="mt-2 text-base font-extrabold text-slate-900">
                Full Multi-Section Mock Exam ({activeCourse.totalMarks} Marks)
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Loads all {activeSubjectIds.length} chosen sections in tabs with the
                official countdown timer ({activeCourse.totalDurationMinutes} mins),
                real question palette, and full scholarship scorecard.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setTestMode("single_subject")}
              className={`text-left rounded-2xl border p-5 transition cursor-pointer relative ${
                testMode === "single_subject"
                  ? "border-blue-500 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20"
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Mode B: Single-Subject Sprint
                </span>
                {testMode === "single_subject" && (
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                )}
              </div>
              <h3 className="mt-2 text-base font-extrabold text-slate-900">
                Single-Subject Deep Practice (25 Qs • 35 Mins)
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Focus on a single high-weightage topic to test your speed and accuracy
                with instant formula explanations.
              </p>
            </button>
          </div>

          {/* Single Subject Picker */}
          {testMode === "single_subject" && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Choose Subject to Practice:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {Object.values(ALL_SUBJECTS_MAP).map((sub) => {
                  const isChosen = singleSubjectId === sub.id;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSingleSubjectId(sub.id)}
                      className={`rounded-xl border p-2.5 text-xs font-bold text-center transition cursor-pointer ${
                        isChosen
                          ? "border-blue-600 bg-white text-blue-700 shadow-xs ring-1 ring-blue-600"
                          : "border-slate-200 bg-white/80 text-slate-700 hover:bg-white"
                      }`}
                    >
                      {sub.shortName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Start Button & Summary Box */}
        <div className="rounded-3xl border border-slate-900 bg-slate-900 p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Ready to Test Your Rank?
            </span>
            <h3 className="text-lg sm:text-2xl font-black">
              {testMode === "full"
                ? `${activeCourse.name} Full Simulator (${allActiveQuestions.length} Questions)`
                : `${ALL_SUBJECTS_MAP[singleSubjectId]?.shortName} Practice Sprint (25 Questions)`}
            </h3>
            <p className="text-xs text-slate-400">
              Exam includes +4 marks per correct answer, 0 negative marking, and
              instant scholarship qualification upon submission.
            </p>
          </div>

          <button
            type="button"
            onClick={handleStartExam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:from-orange-600 hover:to-amber-600 cursor-pointer shrink-0"
          >
            <span>Start LPUNEST Mock Exam Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* =====================================================================
            OFFICIAL 2027 ELIGIBILITY & IMPORTANT DATES INFO ACCORDION
            ===================================================================== */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <button
            type="button"
            onClick={() => setScheduleAccordionOpen(!scheduleAccordionOpen)}
            className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
          >
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Calendar className="h-4 w-4 text-orange-500" />
                <span>Official University Admission Guidelines</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-orange-600 transition">
                LPUNEST 2027 Official Eligibility Rules &amp; Important Phase 1 Dates
              </h3>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-600 transition shrink-0">
              {scheduleAccordionOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </button>

          {scheduleAccordionOpen && (
            <div className="space-y-6 pt-2 border-t border-slate-100 animate-fadeIn">
              {/* 5% Relaxation Alert Box */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 sm:p-5 flex items-start gap-3.5">
                <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                    Official 5% Marks Relaxation Policy
                  </span>
                  <p className="text-xs text-blue-950 leading-relaxed font-medium">
                    5% relaxation in 12th/Graduation aggregate marks is applicable for candidates from North-East states, Sikkim, Defence personnel/dependents, and Kashmiri migrants.
                  </p>
                </div>
              </div>

              {/* Phase 1 Schedule Timeline Cards */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Official Phase 1 Schedule (2027 Admissions Batch):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {[
                    {
                      label: "Slot Booking Opens",
                      date: "10 Dec 2026",
                      desc: "Online self-booking opens on admission.lpu.in",
                      color: "border-slate-200 bg-slate-50 text-slate-900"
                    },
                    {
                      label: "Last Date to Apply",
                      date: "15 Jan 2027",
                      desc: "Final registration deadline for Phase 1 kit",
                      color: "border-orange-200 bg-orange-50/50 text-orange-950"
                    },
                    {
                      label: "Online Proctored Exam",
                      date: "10 Jan – 5 Feb 2027",
                      desc: "Remote exam from home with webcam AI proctor",
                      color: "border-emerald-200 bg-emerald-50/50 text-emerald-950"
                    },
                    {
                      label: "Test Centre Window",
                      date: "20 Jan – 5 Feb 2027",
                      desc: "Official physical test centre exam window",
                      color: "border-blue-200 bg-blue-50/50 text-blue-950"
                    },
                    {
                      label: "Result & Counselling",
                      date: "8 Feb 2027",
                      desc: "Scholarship allocation & seat locking begins",
                      color: "border-purple-200 bg-purple-50/50 text-purple-950 font-bold"
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border p-4 flex flex-col justify-between space-y-2 ${item.color}`}
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          {item.label}
                        </span>
                        <span className="text-base font-black tracking-tight block mt-1">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct 20% Form Discount Promotion Card */}
              <div className="rounded-2xl border border-slate-900 bg-slate-950 p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="space-y-1.5 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    <span>Official University Application Coupon</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    Save 20% on Your Official LPUNEST 2027 Form
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xl">
                    Use verified coupon code <strong className="text-white">LPUMZW722</strong> on the official portal to reduce the application kit fee from ₹1,000 to ₹800 (Boys) and from ₹500 to ₹400 (Girls).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                  {/* One Click Copy Badge */}
                  <button
                    type="button"
                    onClick={handleCopyCoupon}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:border-orange-500 transition cursor-pointer"
                  >
                    <span className="font-mono text-sm tracking-wider text-orange-400">
                      {DISCOUNT_CODE}
                    </span>
                    {copiedCode ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-300">
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Code</span>
                      </span>
                    )}
                  </button>

                  {/* Direct Apply Portal Button */}
                  <a
                    href="https://admission.lpu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLeadConversion(30.0, "INR")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 px-5 py-2.5 text-xs font-black text-white shadow-md shadow-orange-600/30 transition text-center"
                  >
                    <span>Apply on admission.lpu.in</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ==========================================================================
  // VIEW 2: ACTIVE CBT EXAM WORKBENCH
  // ==========================================================================
  if (phase === "in_test" && currentQuestion) {
    const isAnswered =
      userAnswers[currentQuestion.id] !== undefined &&
      userAnswers[currentQuestion.id] !== "";
    const isMarked = !!markedForReview[currentQuestion.id];

    return (
      <div className="space-y-4">
        {/* Top Header Bar */}
        <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white shadow-lg">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-tight">
              {testMode === "full"
                ? `${activeCourse.name} Simulator`
                : `${ALL_SUBJECTS_MAP[singleSubjectId]?.shortName} Practice`}
            </span>
            <span className="hidden sm:inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
              Zero Negative Marking
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Countdown Timer */}
            <div
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-1 font-mono text-sm sm:text-base font-black ${
                secondsRemaining < 300
                  ? "border-rose-500/50 bg-rose-500/20 text-rose-300 animate-pulse"
                  : "border-slate-700 bg-slate-800 text-emerald-400"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            {/* Submit Exam Button */}
            <button
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to submit your mock test and view your detailed scorecard?"
                  )
                ) {
                  handleFinishExam();
                }
              }}
              className="rounded-xl bg-orange-600 hover:bg-orange-500 px-4 py-1.5 text-xs font-black text-white shadow-sm transition cursor-pointer"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Subject Switcher Tabs (if multiple subjects) */}
        {activeSubjectIds.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {activeSubjectIds.map((subId) => {
              const subMeta = ALL_SUBJECTS_MAP[subId];
              const isSelected = activeSubjectId === subId;
              const subQuestions = questionsBySubject[subId] || [];
              const answeredCount = subQuestions.filter(
                (q) => userAnswers[q.id] !== undefined && userAnswers[q.id] !== ""
              ).length;

              return (
                <button
                  key={subId}
                  type="button"
                  onClick={() => {
                    setActiveSubjectId(subId);
                    setCurrentQuestionIndex(0);
                  }}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition whitespace-nowrap cursor-pointer border ${
                    isSelected
                      ? "border-orange-500 bg-orange-600 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <span>{subMeta?.shortName || subId}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {answeredCount}/{subQuestions.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Workbench Layout: Question on Left (8 cols) + Palette on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main Question Area (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm flex flex-col justify-between min-h-[520px]">
            <div className="space-y-5">
              {/* Question Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-black text-white">
                    Question {currentQuestionIndex + 1} of{" "}
                    {currentSubjectQuestions.length}
                  </span>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                    {currentQuestion.type === "mcq"
                      ? "Single Choice MCQ"
                      : "Numerical Fill-in-the-Blank"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 border border-emerald-200">
                    +{currentQuestion.marks} Marks
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                    0 Negative
                  </span>
                </div>
              </div>

              {/* Topic Pill */}
              {currentQuestion.topic && (
                <div className="text-[11px] font-semibold text-slate-400">
                  Topic: {currentQuestion.topic}
                </div>
              )}

              {/* Question Statement */}
              <div className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                {currentQuestion.text}
              </div>

              {/* Options or Numerical Input */}
              {currentQuestion.type === "mcq" && currentQuestion.options && (
                <div className="space-y-3 pt-2">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected =
                      userAnswers[currentQuestion.id] === idx.toString();
                    const optionLetter = ["A", "B", "C", "D"][idx] || `${idx + 1}`;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full flex items-center gap-3.5 rounded-2xl border p-3.5 sm:p-4 text-left transition cursor-pointer ${
                          isSelected
                            ? "border-orange-500 bg-orange-50/70 shadow-sm ring-2 ring-orange-500/20"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                        }`}
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-xl text-xs font-black shrink-0 ${
                            isSelected
                              ? "bg-orange-600 text-white"
                              : "border border-slate-300 bg-slate-100 text-slate-700"
                          }`}
                        >
                          {optionLetter}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-900">
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === "numerical" && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 space-y-3 pt-4">
                  <label className="text-xs font-bold text-slate-700 block">
                    Type Your Exact Numerical Value (Integer or Decimal):
                  </label>
                  <div className="flex items-center gap-3 max-w-sm">
                    <input
                      type="text"
                      value={numericalInput}
                      onChange={(e) => {
                        setNumericalInput(e.target.value);
                        setUserAnswers((prev) => ({
                          ...prev,
                          [currentQuestion.id]: e.target.value
                        }));
                      }}
                      placeholder="e.g. 4 or 8"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-slate-900 shadow-xs focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Use your keyboard to enter numerical numbers. No units needed.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Control Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClearResponse}
                  disabled={!isAnswered && numericalInput === ""}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Clear Response
                </button>
                <button
                  type="button"
                  onClick={handleMarkForReview}
                  className={`rounded-xl border px-3 py-2 text-xs font-bold transition cursor-pointer ${
                    isMarked
                      ? "border-purple-500 bg-purple-600 text-white"
                      : "border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                >
                  {isMarked ? "✓ Marked for Review" : "Mark for Review & Next"}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex((prev) => prev - 1);
                    }
                  }}
                  disabled={currentQuestionIndex === 0}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveAndNext}
                  className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition cursor-pointer"
                >
                  <span>Save &amp; Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Question Palette (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Question Palette ({ALL_SUBJECTS_MAP[activeSubjectId]?.shortName})
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {currentSubjectQuestions.length} Questions
              </span>
            </div>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-md bg-emerald-500" />
                <span>Answered ({subjectStatusCounts.answered})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-md bg-rose-500" />
                <span>Not Answered ({subjectStatusCounts.notAnswered})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-md bg-purple-600" />
                <span>Review ({subjectStatusCounts.review})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-md bg-slate-200" />
                <span>Not Visited ({subjectStatusCounts.notVisited})</span>
              </div>
            </div>

            {/* 1-25 Grid */}
            <div className="grid grid-cols-5 gap-2 pt-2 max-h-64 overflow-y-auto pr-1">
              {currentSubjectQuestions.map((q, idx) => {
                const status = getQuestionStatus(q);
                const isCurrent = idx === currentQuestionIndex;

                let btnClass = "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200";
                if (status === "answered") {
                  btnClass = "bg-emerald-500 text-white border-emerald-600 font-black";
                } else if (status === "review") {
                  btnClass = "bg-purple-600 text-white border-purple-700 font-black";
                } else if (status === "not_answered") {
                  btnClass = "bg-rose-500 text-white border-rose-600 font-bold";
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 w-full rounded-xl border text-xs font-bold transition flex items-center justify-center cursor-pointer ${btnClass} ${
                      isCurrent ? "ring-2 ring-orange-500 ring-offset-2" : ""
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // VIEW 3: RESULT DASHBOARD & SCHOLARSHIP PREDICTOR
  // ==========================================================================
  if (phase === "result" && examResult) {
    const { scholarshipBracket } = examResult;

    // Filter questions for solutions
    const filteredQuestions = allActiveQuestions.filter((q) => {
      const uAns = userAnswers[q.id]?.trim();
      const isAttempted = uAns !== undefined && uAns !== "";

      let isCorrect = false;
      if (isAttempted) {
        if (q.type === "mcq") {
          isCorrect = parseInt(uAns, 10) === q.correctOptionIndex;
        } else {
          isCorrect = uAns.toLowerCase() === q.numericalAnswer?.toString().trim().toLowerCase();
        }
      }

      if (solutionFilter === "correct") return isCorrect;
      if (solutionFilter === "incorrect") return isAttempted && !isCorrect;
      if (solutionFilter === "unattempted") return !isAttempted;
      return true;
    });

    return (
      <div className="space-y-8">
        {/* Executive Scorecard Banner */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Official LPUNEST 2027 Scorecard
              </span>
              <h1 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                Performance &amp; Scholarship Qualification Report
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPhase("lobby")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 transition cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Configure Another Test</span>
              </button>
            </div>
          </div>

          {/* Key Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">
                Total Score
              </span>
              <div className="text-2xl sm:text-3xl font-black text-orange-400">
                {examResult.totalScore}{" "}
                <span className="text-sm font-semibold text-slate-500">
                  / {examResult.maxScore}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">
                Accuracy Percentage
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {examResult.percentage}%
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">
                Attempted / Total
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {examResult.attempted}{" "}
                <span className="text-sm font-semibold text-slate-500">
                  / {examResult.totalQuestions}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase">
                Correct Answers
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                {examResult.correct}{" "}
                <span className="text-sm font-semibold text-rose-400">
                  ({examResult.incorrect} Wrong)
                </span>
              </div>
            </div>
          </div>

          {/* Scholarship Bracket Prediction Box */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                ★ LPUNEST 2027 Scholarship Prediction
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-extrabold ${scholarshipBracket.badgeColor}`}
              >
                {scholarshipBracket.bracketName}
              </span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white">
              {scholarshipBracket.savingsAmount}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {scholarshipBracket.description}
            </p>
          </div>
        </div>

        {/* High-Converting Action Card */}
        <div className="rounded-3xl border border-slate-900 bg-slate-900 p-6 sm:p-8 text-white shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Next Steps for Admission
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Lock Your 20% Form Discount &amp; Calculate Exact 4-Year Tuition
              </h3>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
              Code: LPUMZW722
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* CTA 1: Fee Calculator Link */}
            <Link
              href={`/?score=${examResult.totalScore}&tier=${
                scholarshipBracket.category === 1
                  ? "Tier+1"
                  : scholarshipBracket.category === 2
                  ? "Tier+2"
                  : "Tier+3"
              }#calculator`}
              onClick={() => trackLeadConversion(30.0, "INR")}
              className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-5 text-white shadow-lg transition hover:from-orange-600 hover:to-amber-600 cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
                  Instant Budget Planning
                </span>
                <h4 className="mt-1 text-base font-black">
                  Calculate 4-Year Fee with Your Bracket →
                </h4>
                <p className="mt-1.5 text-xs text-orange-100/90 leading-relaxed">
                  Pre-selects your earned {scholarshipBracket.waiverPercent}% scholarship
                  in our live fee breakdown tool.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold underline underline-offset-2">
                Open Fee Calculator
              </span>
            </Link>

            {/* CTA 2: Copy Coupon Box */}
            <div
              onClick={handleCopyCoupon}
              className="flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-orange-500 cursor-pointer group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Official 20% Form Discount
                </span>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-mono text-xl font-black text-white tracking-widest group-hover:text-orange-400 transition">
                    {DISCOUNT_CODE}
                  </span>
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 group-hover:bg-orange-600 group-hover:text-white transition"
                  >
                    {copiedCode ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {copiedCode ? (
                    <span className="font-bold text-emerald-400">
                      ✓ Copied! Paste at checkout on admission.lpu.in
                    </span>
                  ) : (
                    "Click to copy. Pay ₹800 instead of ₹1,000 (Boys) or ₹400 instead of ₹500 (Girls)."
                  )}
                </p>
              </div>
              <a
                href="https://admission.lpu.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  trackLeadConversion(30.0, "INR");
                }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-300 underline"
              >
                Apply on Official LPU Portal ↗
              </a>
            </div>

            {/* CTA 3: WhatsApp Community Desk */}
            <div
              onClick={() => {
                trackLeadConversion(30.0, "INR");
                window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
              }}
              className="flex flex-col justify-between rounded-2xl border border-emerald-900/50 bg-emerald-950/60 p-5 transition hover:border-emerald-500 cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Community Prep Desk
                </span>
                <h4 className="mt-1 text-base font-black text-white">
                  Join LPUNEST 2027 WhatsApp Desk
                </h4>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  Receive free sample question PDFs, slot booking alerts, and verified cutoff updates directly on WhatsApp.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 underline underline-offset-2">
                <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-400" />
                <span>Join Official WhatsApp Desk →</span>
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Question Solutions Accordion */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Detailed Solutions &amp; Step-by-Step Derivations
              </h3>
              <p className="text-xs text-slate-500">
                Review complete answer keys, formulas, and NCERT-aligned solutions for all {allActiveQuestions.length} questions.
              </p>
            </div>

            {/* Solution Filter Tabs */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-1">
              {[
                { id: "all" as const, label: `All (${allActiveQuestions.length})` },
                { id: "incorrect" as const, label: `Incorrect (${examResult.incorrect})` },
                { id: "unattempted" as const, label: `Unattempted (${allActiveQuestions.length - examResult.attempted})` },
                { id: "correct" as const, label: `Correct (${examResult.correct})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSolutionFilter(tab.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                    solutionFilter === tab.id
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500">
                No questions found under this filter.
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const uAns = userAnswers[q.id]?.trim();
                const isAttempted = uAns !== undefined && uAns !== "";

                let isCorrect = false;
                if (isAttempted) {
                  if (q.type === "mcq") {
                    isCorrect = parseInt(uAns, 10) === q.correctOptionIndex;
                  } else {
                    isCorrect = uAns.toLowerCase() === q.numericalAnswer?.toString().trim().toLowerCase();
                  }
                }

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-slate-200 p-5 space-y-3 bg-white hover:border-slate-300 transition"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {q.subjectName} • Q{idx + 1}
                        </span>
                        {q.topic && (
                          <span className="text-[11px] text-slate-400">
                            ({q.topic})
                          </span>
                        )}
                      </div>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                          !isAttempted
                            ? "bg-slate-100 text-slate-600"
                            : isCorrect
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {!isAttempted ? "Unattempted" : isCorrect ? "✓ Correct (+4)" : "✗ Incorrect (+0)"}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-slate-900 whitespace-pre-line">
                      {q.text}
                    </div>

                    {/* MCQs Option Details */}
                    {q.type === "mcq" && q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isUserPicked = uAns === oIdx.toString();
                          const isRight = oIdx === q.correctOptionIndex;

                          let borderStyle = "border-slate-200 bg-slate-50/50 text-slate-700";
                          if (isRight) {
                            borderStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                          } else if (isUserPicked && !isRight) {
                            borderStyle = "border-rose-400 bg-rose-50 text-rose-900";
                          }

                          return (
                            <div
                              key={oIdx}
                              className={`rounded-xl border p-2.5 text-xs flex items-center justify-between ${borderStyle}`}
                            >
                              <span>
                                <strong>{["A", "B", "C", "D"][oIdx]}:</strong> {opt}
                              </span>
                              {isRight && (
                                <span className="text-[10px] font-black text-emerald-700 uppercase">
                                  Correct Answer
                                </span>
                              )}
                              {isUserPicked && !isRight && (
                                <span className="text-[10px] font-black text-rose-700 uppercase">
                                  Your Choice
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Numerical FIB Details */}
                    {q.type === "numerical" && (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-600">Your Answer:</span>
                          <span className="font-bold text-slate-900">{uAns || "None"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-emerald-700">Official Correct Value:</span>
                          <span className="font-black text-emerald-800">{q.numericalAnswer}</span>
                        </div>
                      </div>
                    )}

                    {/* Step-by-Step Derivation & Explanation */}
                    <div className="rounded-xl border border-orange-200/80 bg-orange-50/40 p-3.5 text-xs space-y-1">
                      <span className="font-bold text-orange-900 block">
                        Step-by-Step Solution &amp; Formula:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
