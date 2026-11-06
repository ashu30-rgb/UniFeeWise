export type QuestionType = "mcq" | "numerical";

export interface CBTQuestion {
  id: string;
  subjectId: string;
  subjectName: string;
  type: QuestionType;
  text: string;
  options?: string[]; // 4 options for MCQs
  correctOptionIndex?: number; // 0, 1, 2, 3 for MCQs
  numericalAnswer?: string | number; // Exact or normalized numerical answer
  explanation: string;
  marks: number;
  negativeMarks: number;
  topic?: string;
}

export type CourseId = "btech" | "btech_bio" | "bca_bba" | "mba";

export interface CourseConfig {
  id: CourseId;
  name: string;
  title: string;
  badge: string;
  eligibility: string;
  totalMarks: number;
  totalDurationMinutes: number;
  description: string;
  mandatorySubjectIds: string[];
  electiveGroups?: {
    name: string;
    chooseCount: number;
    options: { id: string; name: string; questionsCount: number; marks: number }[];
  }[];
}

export interface UserExamState {
  answers: Record<string, string>; // questionId -> selectedOption (e.g. "0","1","2","3" or numerical string)
  visited: Record<string, boolean>; // questionId -> boolean
  markedForReview: Record<string, boolean>; // questionId -> boolean
}

export interface ExamResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  scholarshipBracket: {
    category: number;
    waiverPercent: number;
    bracketName: string;
    savingsAmount: string;
    description: string;
    badgeColor: string;
  };
  subjectBreakdown: {
    subjectId: string;
    subjectName: string;
    total: number;
    attempted: number;
    correct: number;
    score: number;
    maxScore: number;
  }[];
}

