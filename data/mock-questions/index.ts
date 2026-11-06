import { CBTQuestion, CourseConfig, ExamResult } from "./types";
import { physicsQuestions } from "./physics";
import { chemistryQuestions } from "./chemistry";
import { mathematicsQuestions } from "./mathematics";
import { englishQuestions } from "./english";
import { biologyQuestions } from "./biology";
import {
  aptitudeQuestions,
  computerScienceQuestions,
  generalAwarenessQuestions
} from "./aptitude-cs-mba";

export * from "./types";
export {
  physicsQuestions,
  chemistryQuestions,
  mathematicsQuestions,
  englishQuestions,
  biologyQuestions,
  aptitudeQuestions,
  computerScienceQuestions,
  generalAwarenessQuestions
};

export interface SubjectMeta {
  id: string;
  name: string;
  shortName: string;
  questions: CBTQuestion[];
  badgeColor: string;
}

export const ALL_SUBJECTS_MAP: Record<string, SubjectMeta> = {
  physics: {
    id: "physics",
    name: "Physics (Class 11 & 12)",
    shortName: "Physics",
    questions: physicsQuestions,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  chemistry: {
    id: "chemistry",
    name: "Chemistry (Class 11 & 12)",
    shortName: "Chemistry",
    questions: chemistryQuestions,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  mathematics: {
    id: "mathematics",
    name: "Mathematics (Class 11 & 12)",
    shortName: "Mathematics",
    questions: mathematicsQuestions,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
  },
  biology: {
    id: "biology",
    name: "Biology (Class 11 & 12)",
    shortName: "Biology",
    questions: biologyQuestions,
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
  },
  english: {
    id: "english",
    name: "English Language & Verbal Ability",
    shortName: "English",
    questions: englishQuestions,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
  },
  aptitude: {
    id: "aptitude",
    name: "Quantitative Aptitude & Logical Reasoning (DILR)",
    shortName: "Quant & DILR",
    questions: aptitudeQuestions,
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  "computer-science": {
    id: "computer-science",
    name: "Computer Science & IT Fundamentals",
    shortName: "CS & IT",
    questions: computerScienceQuestions,
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
  },
  "general-awareness": {
    id: "general-awareness",
    name: "General Awareness & Business Economics",
    shortName: "General Awareness",
    questions: generalAwarenessQuestions,
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
  }
};

export const COURSES_CONFIG: CourseConfig[] = [
  {
    id: "btech",
    name: "B.Tech (CSE, AI/ML, ECE, ME, Core)",
    title: "LPUNEST 2027 B.Tech Engineering CBT Exam (PCM)",
    badge: "400 Marks • PCM Mandatory",
    eligibility: "Eligibility: 60% in 10+2 with Physics, Mathematics & English (PCM Mandatory)",
    totalMarks: 400,
    totalDurationMinutes: 150,
    description:
      "Physics (25 Qs: 20 MCQs + 5 Numericals), Chemistry (25 Qs: 20 MCQs + 5 Numericals), Mathematics (25 Qs: 20 MCQs + 5 Numericals), and English (25 MCQs). Total 100 Qs • 400 Marks • 150 Mins • Zero Negative Marking.",
    mandatorySubjectIds: ["physics", "chemistry", "mathematics", "english"]
  },
  {
    id: "btech_bio",
    name: "B.Tech Biotech / Food Tech / Biomedical (PCB Stream)",
    title: "LPUNEST 2027 B.Tech Biotech & Biomedical CBT Exam (PCB)",
    badge: "400 Marks • PCB Stream",
    eligibility: "Eligibility: 60% in 10+2 with Physics, Chemistry, English & Biology/Biotech",
    totalMarks: 400,
    totalDurationMinutes: 150,
    description:
      "Physics (25 Qs), Chemistry (25 Qs), Biology (25 Qs), and English (25 Qs). Auto-configured for PCB Biotechnology applicants. Total 100 Qs • 400 Marks • 150 Mins • Zero Negative Marking.",
    mandatorySubjectIds: ["physics", "chemistry", "biology", "english"]
  },
  {
    id: "bca_bba",
    name: "BCA / BBA (Under-Graduate — Commerce, Arts & Science)",
    title: "LPUNEST 2027 BCA / BBA CBT Exam",
    badge: "100 Marks • Any Stream",
    eligibility: "Eligibility: 50% in 10+2 (Any Stream) with English • LPUNEST unlocks up to 70% Scholarship",
    totalMarks: 100,
    totalDurationMinutes: 90,
    description:
      "Compulsory English (25 Qs) + Interactive choice of any 2 Electives (Computer Science & IT, Quant/DILR, General Awareness, or Mathematics). Zero Negative Marking.",
    mandatorySubjectIds: ["english"],
    electiveGroups: [
      {
        name: "Choose Any 2 Elective Subjects",
        chooseCount: 2,
        options: [
          { id: "computer-science", name: "Computer Science & IT Fundamentals", questionsCount: 25, marks: 40 },
          { id: "aptitude", name: "Quantitative Aptitude & Logical Reasoning", questionsCount: 25, marks: 40 },
          { id: "general-awareness", name: "General Awareness & Business Economics", questionsCount: 25, marks: 40 },
          { id: "mathematics", name: "Mathematics", questionsCount: 25, marks: 40 }
        ]
      }
    ]
  },
  {
    id: "mba",
    name: "MBA (Management — Post-Graduate)",
    title: "LPUNEST 2027 MBA Management CBT Exam",
    badge: "400 Marks • Post-Graduate",
    eligibility: "Eligibility: 55% in Graduation (Any Discipline) + LPUNEST + Video Essay & Interview",
    totalMarks: 400,
    totalDurationMinutes: 150,
    description:
      "4 Management Sections: Verbal Ability & Reading Comprehension (English), Quantitative Aptitude & DILR, General Awareness & Business Economics, and Logical IT Systems. Total 100 Qs • 400 Marks • 150 Mins • Zero Negative Marking.",
    mandatorySubjectIds: ["english", "aptitude", "general-awareness", "computer-science"]
  }
];

export function calculateScholarshipBracket(percentage: number) {
  if (percentage >= 80) {
    return {
      category: 1,
      waiverPercent: 60,
      bracketName: "Category 1 Qualified (60% Tuition Fee Waiver)",
      savingsAmount: "Saves up to ₹7,68,000 on 4-Yr B.Tech (₹96,000/sem)",
      description: "Outstanding Performance! You qualify for LPU's highest tier scholarship bracket.",
      badgeColor: "bg-emerald-500 text-white"
    };
  }
  if (percentage >= 60) {
    return {
      category: 2,
      waiverPercent: 50,
      bracketName: "Category 2 Qualified (50% Tuition Fee Waiver)",
      savingsAmount: "Saves up to ₹6,40,000 on 4-Yr B.Tech (₹80,000/sem)",
      description: "Great Performance! You comfortably qualify for LPU's prestigious Category 2 scholarship.",
      badgeColor: "bg-blue-600 text-white"
    };
  }
  if (percentage >= 38) {
    return {
      category: 3,
      waiverPercent: 40,
      bracketName: "Category 3 Qualified (40% Tuition Fee Waiver)",
      savingsAmount: "Saves up to ₹5,12,000 on 4-Yr B.Tech (₹64,000/sem)",
      description: "Good Effort! You qualify for Category 3 fee waiver. A slight revision can push you into Category 2 or 1.",
      badgeColor: "bg-amber-600 text-white"
    };
  }
  return {
    category: 0,
    waiverPercent: 0,
    bracketName: "Improvement Needed (Target 38%+ for Category 3)",
    savingsAmount: "Aim for 150+ marks to unlock ₹5,12,000+ tuition waiver",
    description: "Review detailed solutions below to master high-weightage formulas and improve your score.",
    badgeColor: "bg-slate-700 text-white"
  };
}

export function evaluateCBTExam(
  questions: CBTQuestion[],
  answers: Record<string, string>
): ExamResult {
  let attempted = 0;
  let correct = 0;
  let incorrect = 0;
  let totalScore = 0;
  let maxScore = 0;

  const subjectStats: Record<
    string,
    { subjectId: string; subjectName: string; total: number; attempted: number; correct: number; score: number; maxScore: number }
  > = {};

  for (const q of questions) {
    maxScore += q.marks;

    if (!subjectStats[q.subjectId]) {
      subjectStats[q.subjectId] = {
        subjectId: q.subjectId,
        subjectName: q.subjectName,
        total: 0,
        attempted: 0,
        correct: 0,
        score: 0,
        maxScore: 0
      };
    }
    subjectStats[q.subjectId].total += 1;
    subjectStats[q.subjectId].maxScore += q.marks;

    const userAnswer = answers[q.id]?.trim();

    if (userAnswer !== undefined && userAnswer !== "") {
      attempted += 1;
      subjectStats[q.subjectId].attempted += 1;

      let isCorrect = false;
      if (q.type === "mcq") {
        isCorrect = parseInt(userAnswer, 10) === q.correctOptionIndex;
      } else if (q.type === "numerical") {
        const expected = q.numericalAnswer?.toString().trim();
        const userClean = userAnswer.trim().toLowerCase();
        const expectedClean = expected?.toLowerCase();
        const userNum = parseFloat(userClean);
        const expectedNum = parseFloat(expectedClean || "");
        const isNumericMatch =
          !isNaN(userNum) &&
          !isNaN(expectedNum) &&
          Math.abs(userNum - expectedNum) < 0.0001;
        isCorrect = userClean === expectedClean || isNumericMatch;
      }

      if (isCorrect) {
        correct += 1;
        totalScore += q.marks;
        subjectStats[q.subjectId].correct += 1;
        subjectStats[q.subjectId].score += q.marks;
      } else {
        incorrect += 1;
      }
    }
  }

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const scholarshipBracket = calculateScholarshipBracket(percentage);

  return {
    totalQuestions: questions.length,
    attempted,
    correct,
    incorrect,
    totalScore,
    maxScore,
    percentage,
    scholarshipBracket,
    subjectBreakdown: Object.values(subjectStats)
  };
}

