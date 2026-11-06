import { CBTQuestion } from "./types";

export const mathematicsQuestions: CBTQuestion[] = [
  {
    id: "math-01",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Matrices & Determinants",
    marks: 4,
    negativeMarks: 0,
    text: "If A is a non-singular square matrix of order 3 with determinant |A| = 4, what is the determinant of its adjoint matrix, |adj(A)|?",
    options: ["4", "8", "16", "64"],
    correctOptionIndex: 2,
    explanation:
      "For any square matrix of order n, |adj(A)| = |A|^(n - 1). Here n = 3 and |A| = 4. Therefore, |adj(A)| = 4^(3 - 1) = 4² = 16."
  },
  {
    id: "math-02",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Complex Numbers",
    marks: 4,
    negativeMarks: 0,
    text: "If ω is an imaginary cube root of unity satisfying 1 + ω + ω² = 0, what is the value of (1 + ω - ω²)³?",
    options: ["-8", "8", "-8ω", "8ω²"],
    correctOptionIndex: 0,
    explanation:
      "Since 1 + ω = -ω², the expression becomes (-ω² - ω²)³ = (-2ω²)³ = -8 (ω²)³ = -8 (ω⁶) = -8 (1) = -8."
  },
  {
    id: "math-03",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Quadratic Equations",
    marks: 4,
    negativeMarks: 0,
    text: "If α and β are the roots of the quadratic equation x² - 5x + 6 = 0, what is the value of α³ + β³?",
    options: ["25", "35", "45", "55"],
    correctOptionIndex: 1,
    explanation:
      "For x² - 5x + 6 = 0: sum of roots α + β = 5, product of roots αβ = 6. Using identity α³ + β³ = (α + β)³ - 3αβ(α + β) = 5³ - 3(6)(5) = 125 - 90 = 35."
  },
  {
    id: "math-04",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Binomial Theorem",
    marks: 4,
    negativeMarks: 0,
    text: "What is the term independent of x in the binomial expansion of (x² - 1/x)⁹?",
    options: ["-84", "84", "-36", "36"],
    correctOptionIndex: 1,
    explanation:
      "General term T_(r+1) = ⁹C_r (x²)^(9-r) (-1/x)^r = ⁹C_r (-1)^r x^(18 - 2r - r) = ⁹C_r (-1)^r x^(18 - 3r). For term independent of x, 18 - 3r = 0 => r = 6. T₇ = ⁹C₆ (-1)⁶ = ⁹C₃ * 1 = (9 × 8 × 7) / (3 × 2 × 1) = 84."
  },
  {
    id: "math-05",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Permutations & Combinations",
    marks: 4,
    negativeMarks: 0,
    text: "How many 4-digit numbers can be formed using the digits {1, 2, 3, 4, 5} without repeating any digit?",
    options: ["60", "120", "240", "625"],
    correctOptionIndex: 1,
    explanation:
      "This is a permutation of 5 distinct items taken 4 at a time: ⁵P₄ = 5! / (5 - 4)! = 5! / 1! = 5 × 4 × 3 × 2 = 120."
  },
  {
    id: "math-06",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Sequences & Series",
    marks: 4,
    negativeMarks: 0,
    text: "The sum to infinity of a geometric progression (GP) with first term a = 3 and common ratio r = 1/3 is:",
    options: ["4", "4.5", "5", "6"],
    correctOptionIndex: 1,
    explanation:
      "For an infinite GP where |r| < 1, S_∞ = a / (1 - r). Substituting a = 3, r = 1/3: S_∞ = 3 / (1 - 1/3) = 3 / (2/3) = 9/2 = 4.5."
  },
  {
    id: "math-07",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Sets, Relations & Functions",
    marks: 4,
    negativeMarks: 0,
    text: "Let set A have n elements. What is the total number of non-empty proper subsets of set A?",
    options: ["2ⁿ", "2ⁿ - 1", "2ⁿ - 2", "2^(n-1)"],
    correctOptionIndex: 2,
    explanation:
      "Total number of subsets is 2ⁿ. Excluding the empty set (1 subset) and the improper set A itself (1 subset) leaves 2ⁿ - 2 non-empty proper subsets."
  },
  {
    id: "math-08",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Limits & Continuity",
    marks: 4,
    negativeMarks: 0,
    text: "What is the value of the limit lim (x -> 0) [ (1 - cos 2x) / x² ]?",
    options: ["0", "1", "2", "4"],
    correctOptionIndex: 2,
    explanation:
      "Using trigonometric identity 1 - cos 2x = 2 sin² x: lim (x -> 0) [ 2 sin² x / x² ] = 2 * [ lim (x -> 0) (sin x / x) ]² = 2 * (1)² = 2."
  },
  {
    id: "math-09",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Continuity",
    marks: 4,
    negativeMarks: 0,
    text: "If the function f(x) = (sin 3x) / x for x ≠ 0 and f(0) = k is continuous at x = 0, then the value of k is:",
    options: ["1", "3", "1/3", "0"],
    correctOptionIndex: 1,
    explanation:
      "For continuity at x = 0, f(0) must equal lim (x -> 0) f(x). lim (x -> 0) (sin 3x / x) = lim (x -> 0) [ 3 * (sin 3x / 3x) ] = 3 * 1 = 3. Therefore, k = 3."
  },
  {
    id: "math-10",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Application of Derivatives (Maxima/Minima)",
    marks: 4,
    negativeMarks: 0,
    text: "At what point x does the cubic polynomial function f(x) = 2x³ - 9x² + 12x + 5 attain a local maximum?",
    options: ["x = 0", "x = 1", "x = 2", "x = 3"],
    correctOptionIndex: 1,
    explanation:
      "Differentiate: f'(x) = 6x² - 18x + 12 = 6(x² - 3x + 2) = 6(x - 1)(x - 2). Critical points are x = 1 and x = 2. Second derivative: f''(x) = 12x - 18. At x = 1, f''(1) = 12(1) - 18 = -6 < 0 (local maximum). At x = 2, f''(2) = +6 > 0 (local minimum)."
  },
  {
    id: "math-11",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Application of Derivatives (Rate of Change)",
    marks: 4,
    negativeMarks: 0,
    text: "The radius of a spherical balloon is increasing at a uniform rate of 2 cm/s. At what rate is the volume of the balloon increasing when its radius is 5 cm?",
    options: ["100π cm³/s", "200π cm³/s", "300π cm³/s", "400π cm³/s"],
    correctOptionIndex: 1,
    explanation:
      "Volume of sphere V = (4/3) π r³. Differentiating with respect to time: dV/dt = 4π r² (dr/dt). Given r = 5 cm and dr/dt = 2 cm/s: dV/dt = 4π (5)² (2) = 4π (25) (2) = 200π cm³/s."
  },
  {
    id: "math-12",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Definite Integration (King's Property)",
    marks: 4,
    negativeMarks: 0,
    text: "Evaluate the definite integral: I = ∫ [ √(sin x) / ( √(sin x) + √(cos x) ) ] dx from 0 to π/2.",
    options: ["0", "π/4", "π/2", "π"],
    correctOptionIndex: 1,
    explanation:
      "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a + b - x) dx, replacing x by (π/2 - x) gives: I = ∫ [ √(cos x) / ( √(cos x) + √(sin x) ) ] dx. Adding the two equations: 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
  },
  {
    id: "math-13",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Area Bounded by Curves",
    marks: 4,
    negativeMarks: 0,
    text: "What is the area of the region bounded by the standard parabola y² = 4ax and its double ordinate (latus rectum) at x = a?",
    options: ["4a² / 3", "8a² / 3", "16a² / 3", "8a²"],
    correctOptionIndex: 1,
    explanation:
      "Area is symmetric about the x-axis: A = 2 ∫_0^a y dx = 2 ∫_0^a 2√(ax) dx = 4√a [ (x^(3/2)) / (3/2) ]_0^a = (8/3) √a (a^(3/2)) = (8/3) a²."
  },
  {
    id: "math-14",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Differential Equations",
    marks: 4,
    negativeMarks: 0,
    text: "What is the integrating factor (I.F.) for the linear first-order differential equation: dy/dx + y tan x = sec x?",
    options: ["sec x", "tan x", "sec x + tan x", "cos x"],
    correctOptionIndex: 0,
    explanation:
      "In standard form dy/dx + P(x)y = Q(x), P(x) = tan x. The integrating factor is I.F. = e^(∫ P(x) dx) = e^(∫ tan x dx) = e^(ln |sec x|) = sec x."
  },
  {
    id: "math-15",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Differential Equations (Order & Degree)",
    marks: 4,
    negativeMarks: 0,
    text: "What are the order and degree of the differential equation: [ 1 + (dy/dx)² ]^(3/2) = d²y/dx²?",
    options: [
      "Order 2, Degree 1",
      "Order 2, Degree 2",
      "Order 1, Degree 3",
      "Order 2, Degree 3"
    ],
    correctOptionIndex: 1,
    explanation:
      "To eliminate fractional exponents, square both sides: [ 1 + (dy/dx)² ]³ = (d²y/dx²)². The highest order derivative present is d²y/dx² (Order = 2), and its power after clearing radicals is 2 (Degree = 2)."
  },
  {
    id: "math-16",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Vectors",
    marks: 4,
    negativeMarks: 0,
    text: "Find the scalar projection of vector a = 2i + 3j + 2k onto vector b = i + 2j + k.",
    options: ["10 / √6", "5 / √6", "10 / 6", "6 / √10"],
    correctOptionIndex: 0,
    explanation:
      "The scalar projection of a on b is given by (a · b) / |b|. a · b = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10. Magnitude |b| = √(1² + 2² + 1²) = √6. Hence projection = 10 / √6."
  },
  {
    id: "math-17",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Three Dimensional Geometry",
    marks: 4,
    negativeMarks: 0,
    text: "If a straight line makes equal angles α with the positive coordinate axes (x, y, and z), what is the value of cos² α?",
    options: ["1/4", "1/3", "1/2", "1/√3"],
    correctOptionIndex: 1,
    explanation:
      "Let direction cosines be l, m, n. Since α = β = γ, l = m = n = cos α. Direction cosine identity states l² + m² + n² = 1 => 3 cos² α = 1 => cos² α = 1/3."
  },
  {
    id: "math-18",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Conic Sections (Ellipse)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the eccentricity e of the ellipse given by the equation (x² / 16) + (y² / 9) = 1?",
    options: ["√7 / 4", "3 / 4", "7 / 16", "√7 / 3"],
    correctOptionIndex: 0,
    explanation:
      "Here a² = 16 and b² = 9. For an ellipse with a > b, eccentricity e = √(1 - b²/a²) = √(1 - 9/16) = √(7/16) = √7 / 4."
  },
  {
    id: "math-19",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Probability",
    marks: 4,
    negativeMarks: 0,
    text: "If P(A) = 0.6, P(B) = 0.5, and P(A ∩ B) = 0.3, what is the conditional probability P(A | B)?",
    options: ["0.3", "0.5", "0.6", "0.8"],
    correctOptionIndex: 2,
    explanation:
      "By definition of conditional probability: P(A | B) = P(A ∩ B) / P(B) = 0.3 / 0.5 = 3/5 = 0.6."
  },
  {
    id: "math-20",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "mcq",
    topic: "Trigonometric Equations",
    marks: 4,
    negativeMarks: 0,
    text: "The general solution of the trigonometric equation sin 2x = 0 (for integer n) is:",
    options: ["x = nπ", "x = nπ / 2", "x = (2n + 1) π / 2", "x = 2nπ"],
    correctOptionIndex: 1,
    explanation:
      "If sin θ = 0, then θ = nπ for any integer n ∈ ℤ. Setting 2x = nπ yields x = nπ / 2."
  },
  {
    id: "math-21",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "numerical",
    topic: "Matrices & Determinants",
    marks: 4,
    negativeMarks: 0,
    text: "If A is a 3 × 3 square matrix with determinant |A| = 2, find the numerical value of |3A|. (Enter integer value)",
    numericalAnswer: 54,
    explanation:
      "For a scalar k and an n × n matrix A, |kA| = kⁿ |A|. Here n = 3, k = 3, and |A| = 2. Thus |3A| = 3³ × 2 = 27 × 2 = 54."
  },
  {
    id: "math-22",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "numerical",
    topic: "Limits",
    marks: 4,
    negativeMarks: 0,
    text: "Evaluate the limit: lim (x -> 0) [ (sin 5x) / (sin x) ]. (Enter integer value)",
    numericalAnswer: 5,
    explanation:
      "Rewrite the fraction: [ (sin 5x / 5x) * 5x ] / [ (sin x / x) * x ] = 5 * [ (sin 5x / 5x) / (sin x / x) ]. As x -> 0, both standard limits tend to 1. Hence the result is 5 × (1 / 1) = 5."
  },
  {
    id: "math-23",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "numerical",
    topic: "Vectors",
    marks: 4,
    negativeMarks: 0,
    text: "The two vectors a = 2i + 3j - 6k and b = 6i - 2j + k k are perpendicular to each other. What is the value of scalar k? (Enter integer value)",
    numericalAnswer: 1,
    explanation:
      "Two non-zero vectors are perpendicular if their scalar dot product a · b = 0. a · b = (2)(6) + (3)(-2) + (-6)(k) = 12 - 6 - 6k = 6 - 6k = 0  =>  6k = 6  =>  k = 1."
  },
  {
    id: "math-24",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "numerical",
    topic: "Functions (Combinatorics)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the total number of surjective (onto) functions from a set A containing 3 elements to a set B containing 2 elements? (Enter integer value)",
    numericalAnswer: 6,
    explanation:
      "The total number of functions from a set of size m to a set of size n is n^m. For m = 3 and n = 2, total functions = 2³ = 8. A function fails to be onto if all elements of A map to just one single element of B (there are 2 such constant functions). Number of onto functions = 2³ - 2 = 8 - 2 = 6."
  },
  {
    id: "math-25",
    subjectId: "mathematics",
    subjectName: "Mathematics",
    type: "numerical",
    topic: "Tangents & Normals (Calculus)",
    marks: 4,
    negativeMarks: 0,
    text: "The slope of the normal to the curve y = 2x² + 3 sin x at the point x = 0 is expressed as -1/m. What is the value of m? (Enter integer value)",
    numericalAnswer: 3,
    explanation:
      "Differentiate the curve: dy/dx = 4x + 3 cos x. At x = 0: dy/dx = 4(0) + 3 cos(0) = 3 (this is the tangent slope). The slope of the normal is -1 / (dy/dx) = -1/3. Comparing with -1/m, we find m = 3."
  }
];
