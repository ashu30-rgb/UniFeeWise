export interface MockQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface MockSubjectTest {
  title: string;
  subjectName: string;
  timeLimitMinutes: number;
  questions: MockQuestion[];
}

export type MockSubjectSlug =
  | "physics"
  | "chemistry"
  | "mathematics"
  | "biology"
  | "english"
  | "computer-science";

export type MockTestData = Record<MockSubjectSlug, MockSubjectTest>;

export const MOCK_SUBJECT_SLUGS: MockSubjectSlug[] = [
  "physics",
  "chemistry",
  "mathematics",
  "biology",
  "english",
  "computer-science",
];

export function isMockSubjectSlug(value: string): value is MockSubjectSlug {
  return (MOCK_SUBJECT_SLUGS as string[]).includes(value);
}
