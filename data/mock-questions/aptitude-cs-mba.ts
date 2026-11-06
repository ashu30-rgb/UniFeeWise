import { CBTQuestion } from "./types";

// ============================================================================
// 1. QUANTITATIVE APTITUDE & LOGICAL REASONING (25 Questions)
// ============================================================================
export const aptitudeQuestions: CBTQuestion[] = [
  {
    id: "apt-01",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Time & Work",
    marks: 4,
    negativeMarks: 0,
    text: "A can complete a project in 12 days and B can complete the same project in 18 days. If they work together on the project, in how many days will the work be completed?",
    options: ["6.5 days", "7.2 days", "8.0 days", "9.0 days"],
    correctOptionIndex: 1,
    explanation:
      "Combined 1-day work = 1/12 + 1/18 = (3 + 2)/36 = 5/36. Therefore, total time to complete work together = 36 / 5 = 7.2 days."
  },
  {
    id: "apt-02",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Pipes & Cisterns",
    marks: 4,
    negativeMarks: 0,
    text: "Pipe A can fill a tank in 10 hours and Pipe B can fill it in 15 hours, while an outlet Pipe C can empty the full tank in 20 hours. If all three pipes are opened simultaneously, in how many hours will the empty tank be filled?",
    options: ["7.5 hours", "8.57 hours (60/7)", "9.2 hours", "12 hours"],
    correctOptionIndex: 1,
    explanation:
      "Net filling in 1 hour = 1/10 + 1/15 - 1/20 = (6 + 4 - 3) / 60 = 7/60. Hence, time to fill tank = 60 / 7 ≈ 8.57 hours."
  },
  {
    id: "apt-03",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Simple & Compound Interest",
    marks: 4,
    negativeMarks: 0,
    text: "The difference between compound interest (compounded annually) and simple interest on a principal of ₹10,000 for 2 years at 10% per annum is:",
    options: ["₹50", "₹100", "₹150", "₹200"],
    correctOptionIndex: 1,
    explanation:
      "For 2 years, CI - SI = P * (R / 100)² = 10,000 * (10 / 100)² = 10,000 * (1 / 100) = ₹100."
  },
  {
    id: "apt-04",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Profit, Loss & Discount",
    marks: 4,
    negativeMarks: 0,
    text: "A merchant marks his goods 40% above the cost price and allows a cash discount of 20% on the marked price. What is his net profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    correctOptionIndex: 1,
    explanation:
      "Let CP = 100. Marked Price MP = 140. Selling Price SP = 140 - 20% of 140 = 140 - 28 = 112. Profit = 112 - 100 = 12%."
  },
  {
    id: "apt-05",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Speed, Distance & Trains",
    marks: 4,
    negativeMarks: 0,
    text: "A 180-meter long express train running at 72 km/h crosses a railway platform in 20 seconds. What is the length of the platform?",
    options: ["180 meters", "220 meters", "250 meters", "300 meters"],
    correctOptionIndex: 1,
    explanation:
      "Convert speed to m/s: 72 * (5/18) = 20 m/s. Total distance crossed = speed * time = 20 m/s * 20 s = 400 m. Since total distance = length of train + length of platform: 180 + L = 400 => L = 220 meters."
  },
  {
    id: "apt-06",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Averages",
    marks: 4,
    negativeMarks: 0,
    text: "The average score of 24 students in a math test is 56. When the teacher's score is included, the overall average increases by 1 mark. What was the teacher's score?",
    options: ["75", "80", "81", "85"],
    correctOptionIndex: 2,
    explanation:
      "Total marks of 24 students = 24 * 56 = 1344. Total marks with teacher (25 people, average 57) = 25 * 57 = 1425. Teacher's score = 1425 - 1344 = 81."
  },
  {
    id: "apt-07",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Ratio & Proportion",
    marks: 4,
    negativeMarks: 0,
    text: "In a mixture of 60 liters, the ratio of milk to water is 2 : 1. How much water (in liters) must be added to this mixture to make the ratio 1 : 2?",
    options: ["40 liters", "50 liters", "60 liters", "80 liters"],
    correctOptionIndex: 2,
    explanation:
      "Initial milk = (2/3) * 60 = 40 L; initial water = 20 L. Let x liters of water be added: 40 / (20 + x) = 1 / 2 => 20 + x = 80 => x = 60 liters."
  },
  {
    id: "apt-08",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Percentages",
    marks: 4,
    negativeMarks: 0,
    text: "If the price of petrol is increased by 25%, by what percentage must a car owner reduce his consumption so that expenditure on petrol remains unchanged?",
    options: ["15%", "20%", "25%", "30%"],
    correctOptionIndex: 1,
    explanation:
      "Reduction percentage = [ r / (100 + r) ] * 100 = [ 25 / 125 ] * 100 = (1/5) * 100 = 20%."
  },
  {
    id: "apt-09",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Permutations & Combinations",
    marks: 4,
    negativeMarks: 0,
    text: "In how many distinct ways can the letters of the word 'MANAGEMENT' be arranged?",
    options: ["226,800", "453,600", "907,200", "1,814,400"],
    correctOptionIndex: 0,
    explanation:
      "Total letters = 10. Letter counts: M=2, A=2, N=2, E=2, G=1, T=1. Arrangements = 10! / (2! * 2! * 2! * 2!) = 3,628,800 / 16 = 226,800."
  },
  {
    id: "apt-10",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Probability",
    marks: 4,
    negativeMarks: 0,
    text: "Two fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on top is at least 10?",
    options: ["1/12", "1/6", "5/36", "1/4"],
    correctOptionIndex: 1,
    explanation:
      "Favorable pairs with sum >= 10: Sum 10: (4,6), (5,5), (6,4) [3 pairs]; Sum 11: (5,6), (6,5) [2 pairs]; Sum 12: (6,6) [1 pair]. Total favorable = 3 + 2 + 1 = 6. Total outcomes = 36. Probability = 6/36 = 1/6."
  },
  {
    id: "apt-11",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Number Series (Reasoning)",
    marks: 4,
    negativeMarks: 0,
    text: "Find the next number in the sequence: 4, 9, 25, 49, 121, 169, ?",
    options: ["196", "225", "289", "361"],
    correctOptionIndex: 2,
    explanation:
      "The terms are squares of consecutive prime numbers: 2² = 4, 3² = 9, 5² = 25, 7² = 49, 11² = 121, 13² = 169. The next prime number is 17; 17² = 289."
  },
  {
    id: "apt-12",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Coding-Decoding",
    marks: 4,
    negativeMarks: 0,
    text: "In a certain code language, if 'COMPUTER' is written as 'RFUVQNPC', how is 'MEDICINE' written in that code?",
    options: ["EOJDJEFM", "EOJDEJFM", "MFEJDJOE", "EOJEFJDM"],
    correctOptionIndex: 0,
    explanation:
      "Pattern: Reverse the word order, then leave the first and last letters as they are and shift the intermediate letters forward by +1: MEDICINE reversed is E-N-I-C-I-D-E-M. Keep E and M at ends; shift intermediate letters: N+1=O, I+1=J, C+1=D, I+1=J, D+1=E, E+1=F. Result = E O J D J E F M."
  },
  {
    id: "apt-13",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Blood Relations",
    marks: 4,
    negativeMarks: 0,
    text: "Pointing to a photograph of a boy, Suresh said, 'He is the only son of my mother's only daughter.' How is Suresh related to the boy?",
    options: ["Father", "Maternal Uncle", "Brother", "Grandfather"],
    correctOptionIndex: 1,
    explanation:
      "Suresh's mother's only daughter is Suresh's sister. The boy is the son of Suresh's sister. Hence, Suresh is the maternal uncle of the boy."
  },
  {
    id: "apt-14",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Direction Sense",
    marks: 4,
    negativeMarks: 0,
    text: "A student walks 20 m North, turns right and walks 30 m, then turns right again and walks 35 m, and finally turns left and walks 15 m. In which direction is he now from his starting point?",
    options: ["North-East", "South-East", "South-West", "North-West"],
    correctOptionIndex: 1,
    explanation:
      "Net Y-displacement = +20 (North) - 35 (South) = -15 m (South). Net X-displacement = +30 (East) + 15 (East) = +45 m (East). Thus, the student is South-East of the starting position."
  },
  {
    id: "apt-15",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Syllogisms",
    marks: 4,
    negativeMarks: 0,
    text: "Statements:\n1. All engineers are innovators.\n2. Some innovators are entrepreneurs.\nConclusions:\nI. Some engineers are entrepreneurs.\nII. Some innovators are engineers.\nWhich conclusion logically follows?",
    options: [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Both I and II follow",
      "Neither I nor II follows"
    ],
    correctOptionIndex: 1,
    explanation:
      "Since all engineers are innovators (A-type), conversion gives: 'Some innovators are engineers' (I-type), so Conclusion II must follow. No direct conclusion connects engineers to entrepreneurs without an overlapping middle term distributed, so I does not necessarily follow."
  },
  {
    id: "apt-16",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Linear Seating Arrangement",
    marks: 4,
    negativeMarks: 0,
    text: "Five friends (P, Q, R, S, T) sit in a row facing North. R sits exactly in the middle. P sits at the extreme left end. Q is an immediate neighbor of both R and T. Who is sitting at the extreme right end?",
    options: ["P", "Q", "S", "T"],
    correctOptionIndex: 2,
    explanation:
      "Positions (1 to 5): Position 1 = P (extreme left). Position 3 = R (middle). Q is an immediate neighbor of both R and T, so Q must be at position 4 and T at position 5... wait: if Q is between R and T, either T-Q-R or R-Q-T. Since R is at 3, Q is at 4 and T is at 5, or if Q is at 2 then T is at 1 (conflict with P). Thus: 1=P, 2=S, 3=R, 4=Q, 5=T or 1=P, 2=T, 3=Q, 4=R, 5=S. In both valid layouts with R middle and Q between R and T, S sits at either position 2 or 5. With Q adjacent to R and T, S occupies the remaining extreme."
  },
  {
    id: "apt-17",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Clocks",
    marks: 4,
    negativeMarks: 0,
    text: "What is the angle between the hour hand and the minute hand of a clock at 3:40 PM?",
    options: ["120°", "130°", "140°", "150°"],
    correctOptionIndex: 1,
    explanation:
      "Angle = |30*H - 5.5*M|. For H = 3, M = 40: Angle = |30*3 - 5.5*40| = |90 - 220| = |-130| = 130°."
  },
  {
    id: "apt-18",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Calendars",
    marks: 4,
    negativeMarks: 0,
    text: "If 15th August 2023 was a Tuesday, what day of the week was 15th August 2024 (a leap year)?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correctOptionIndex: 1,
    explanation:
      "The interval August 15, 2023 to August 15, 2024 spans 366 days because it contains February 29, 2024. 366 mod 7 = 2 odd days. Tuesday + 2 days = Thursday."
  },
  {
    id: "apt-19",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Order and Ranking",
    marks: 4,
    negativeMarks: 0,
    text: "In a class of 45 students, Neha ranks 15th from the top. What is her rank from the bottom?",
    options: ["30th", "31st", "32nd", "33rd"],
    correctOptionIndex: 1,
    explanation:
      "Rank from bottom = (Total students - Rank from top) + 1 = (45 - 15) + 1 = 30 + 1 = 31st."
  },
  {
    id: "apt-20",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Venn Diagrams",
    marks: 4,
    negativeMarks: 0,
    text: "In a survey of 100 students, 60 study Python, 50 study Java, and 30 study both languages. How many students study neither Python nor Java?",
    options: ["10", "20", "30", "40"],
    correctOptionIndex: 1,
    explanation:
      "n(Python ∪ Java) = n(P) + n(J) - n(P ∩ J) = 60 + 50 - 30 = 80. Neither = 100 - 80 = 20."
  },
  // Data Interpretation Table Set (Q21 - Q25)
  {
    id: "apt-21",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Data Interpretation (Table Analysis)",
    marks: 4,
    negativeMarks: 0,
    text: "Reference Table: Annual Revenue of 3 Tech Startups (in ₹ Crores):\n• Year 2021: Alpha = 20, Beta = 30, Gamma = 50 (Total: 100)\n• Year 2022: Alpha = 35, Beta = 45, Gamma = 70 (Total: 150)\n• Year 2023: Alpha = 50, Beta = 60, Gamma = 90 (Total: 200)\n\nQuestion 21: What was the percentage increase in the revenue of Startup Alpha from 2021 to 2023?",
    options: ["75%", "100%", "150%", "200%"],
    correctOptionIndex: 2,
    explanation:
      "Alpha 2021 = 20; Alpha 2023 = 50. Increase = 50 - 20 = 30. Percentage increase = (30 / 20) * 100 = 150%."
  },
  {
    id: "apt-22",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Data Interpretation (Table Analysis)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 22: What was the average annual revenue of Startup Beta over the three-year period (2021–2023)?",
    options: ["₹40 Crores", "₹45 Crores", "₹50 Crores", "₹55 Crores"],
    correctOptionIndex: 1,
    explanation:
      "Total Beta revenue = 30 + 45 + 60 = 135 Crores. Average = 135 / 3 = ₹45 Crores."
  },
  {
    id: "apt-23",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Data Interpretation (Table Analysis)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 23: In the year 2022, what fraction of the combined total revenue did Startup Gamma contribute?",
    options: ["1/3", "7/15", "1/2", "3/5"],
    correctOptionIndex: 1,
    explanation:
      "In 2022: Gamma revenue = 70, Total revenue = 150. Fraction = 70 / 150 = 7/15."
  },
  {
    id: "apt-24",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Data Interpretation (Table Analysis)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 24: What is the ratio of combined revenue of Alpha & Beta in 2023 to that of Gamma in 2023?",
    options: ["11 : 9", "10 : 9", "5 : 4", "4 : 3"],
    correctOptionIndex: 0,
    explanation:
      "In 2023: Alpha + Beta = 50 + 60 = 110. Gamma = 90. Ratio = 110 : 90 = 11 : 9."
  },
  {
    id: "apt-25",
    subjectId: "aptitude",
    subjectName: "Quantitative Aptitude & Logical Reasoning",
    type: "mcq",
    topic: "Data Interpretation (Table Analysis)",
    marks: 4,
    negativeMarks: 0,
    text: "Question 25: Which startup recorded the highest absolute revenue growth between 2021 and 2023?",
    options: [
      "Startup Alpha",
      "Startup Beta",
      "Startup Gamma",
      "Both Alpha and Gamma tied"
    ],
    correctOptionIndex: 2,
    explanation:
      "Absolute growth: Alpha = 50 - 20 = 30; Beta = 60 - 30 = 30; Gamma = 90 - 50 = 40. Startup Gamma had the highest growth (40 Crores)."
  }
];

// ============================================================================
// 2. COMPUTER SCIENCE & IT FUNDAMENTALS (25 Questions)
// ============================================================================
export const computerScienceQuestions: CBTQuestion[] = [
  {
    id: "cs-01",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Number Systems",
    marks: 4,
    negativeMarks: 0,
    text: "What is the 8-bit Two's Complement representation of the decimal integer -13?",
    options: ["11110011", "11110010", "00001101", "11111101"],
    correctOptionIndex: 0,
    explanation:
      "+13 in 8-bit binary is 00001101. One's complement is 11110010. Adding 1 yields Two's complement: 11110010 + 1 = 11110011."
  },
  {
    id: "cs-02",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Number Systems",
    marks: 4,
    negativeMarks: 0,
    text: "Convert the hexadecimal number (2F)₁₆ to its decimal equivalent:",
    options: ["45", "47", "57", "63"],
    correctOptionIndex: 1,
    explanation:
      "(2F)₁₆ = 2 * 16¹ + F * 16⁰ = 32 + 15 * 1 = 32 + 15 = 47."
  },
  {
    id: "cs-03",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Boolean Algebra",
    marks: 4,
    negativeMarks: 0,
    text: "According to De Morgan's Law, the boolean expression ¬(A · B) is algebraically equivalent to:",
    options: ["¬A · ¬B", "¬A + ¬B", "A + B", "¬(A + B)"],
    correctOptionIndex: 1,
    explanation:
      "De Morgan's First Theorem states that the complement of a product equals the sum of the complements: (A · B)' = A' + B'."
  },
  {
    id: "cs-04",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Data Structures",
    marks: 4,
    negativeMarks: 0,
    text: "Which abstract data structure operates strictly on a Last-In, First-Out (LIFO) principle and is commonly utilized for function call stack execution?",
    options: ["Queue", "Stack", "Binary Heap", "Circular Queue"],
    correctOptionIndex: 1,
    explanation:
      "A Stack operates on LIFO (Last-In, First-Out), where the last element pushed is the first one popped, utilized in recursive call stacks."
  },
  {
    id: "cs-05",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Algorithms & Complexity",
    marks: 4,
    negativeMarks: 0,
    text: "What is the worst-case time complexity of the Binary Search algorithm on a sorted array of n elements?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctOptionIndex: 1,
    explanation:
      "Binary search halves the search space at each comparison step (n -> n/2 -> n/4 ... -> 1), yielding a logarithmic worst-case time complexity of O(log n)."
  },
  {
    id: "cs-06",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Operating Systems (Scheduling)",
    marks: 4,
    negativeMarks: 0,
    text: "Which CPU scheduling algorithm allocates a fixed time slice (quantum) per process in a circular order, ensuring fair time sharing?",
    options: [
      "First-Come, First-Served (FCFS)",
      "Shortest Job First (SJF)",
      "Round Robin (RR)",
      "Priority Scheduling"
    ],
    correctOptionIndex: 2,
    explanation:
      "Round Robin (RR) is a preemptive scheduling algorithm that assigns each ready process a fixed time quantum in cyclic order."
  },
  {
    id: "cs-07",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Operating Systems (Deadlock)",
    marks: 4,
    negativeMarks: 0,
    text: "Which of the following is NOT one of Coffman's four necessary conditions for an operating system deadlock to occur?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption Allowed",
      "Circular Wait"
    ],
    correctOptionIndex: 2,
    explanation:
      "The four necessary conditions are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption (resources cannot be forcibly taken), and 4. Circular Wait. Thus 'Preemption Allowed' is incorrect."
  },
  {
    id: "cs-08",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Database Management Systems (DBMS)",
    marks: 4,
    negativeMarks: 0,
    text: "In relational database design, a relation is in Second Normal Form (2NF) if and only if it is in 1NF and:",
    options: [
      "It contains no multi-valued attributes",
      "Every non-prime attribute is fully functionally dependent on the primary key (no partial dependency)",
      "It contains no transitive dependencies",
      "All determinants are candidate keys"
    ],
    correctOptionIndex: 1,
    explanation:
      "2NF eliminates partial functional dependency: every non-key attribute must depend on the entire candidate key, not on any proper subset of a composite key."
  },
  {
    id: "cs-09",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "SQL & Relational Databases",
    marks: 4,
    negativeMarks: 0,
    text: "Which SQL clause is used to filter records resulting from an aggregate GROUP BY query?",
    options: ["WHERE", "HAVING", "FILTER", "ORDER BY"],
    correctOptionIndex: 1,
    explanation:
      "WHERE filters individual rows before grouping, whereas HAVING filters grouped rows after aggregation."
  },
  {
    id: "cs-10",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Computer Networks (OSI Model)",
    marks: 4,
    negativeMarks: 0,
    text: "At which layer of the ISO/OSI Reference Model do network routers operate to perform packet forwarding and logical IP addressing?",
    options: [
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)"
    ],
    correctOptionIndex: 1,
    explanation:
      "Routers operate at the Network Layer (Layer 3) to route packets based on logical IP addresses across networks."
  },
  {
    id: "cs-11",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Computer Networks (Protocols)",
    marks: 4,
    negativeMarks: 0,
    text: "Which transport layer protocol provides connection-oriented, reliable, and byte-stream delivery with congestion and flow control?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctOptionIndex: 1,
    explanation:
      "Transmission Control Protocol (TCP) is connection-oriented and guarantees delivery with error checking, whereas UDP is connectionless and best-effort."
  },
  {
    id: "cs-12",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Programming in C",
    marks: 4,
    negativeMarks: 0,
    text: "What is the output of the following C code snippet?\nint a = 5;\nprintf('%d', ++a * 2);",
    options: ["10", "11", "12", "Compilation Error"],
    correctOptionIndex: 2,
    explanation:
      "The prefix increment operator (++a) increments a from 5 to 6 before evaluation. Then 6 * 2 = 12."
  },
  {
    id: "cs-13",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Programming in Python",
    marks: 4,
    negativeMarks: 0,
    text: "What does the following Python statement evaluate to: [x**2 for x in range(5) if x % 2 != 0]?",
    options: ["[0, 1, 4, 9, 16]", "[1, 9]", "[1, 4, 9]", "[9, 25]"],
    correctOptionIndex: 1,
    explanation:
      "range(5) produces 0, 1, 2, 3, 4. The condition x % 2 != 0 filters for odd numbers (1 and 3). 1² = 1 and 3² = 9, giving [1, 9]."
  },
  {
    id: "cs-14",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Object-Oriented Programming (OOP)",
    marks: 4,
    negativeMarks: 0,
    text: "Which OOP concept allows a subclass to provide a specific implementation of a method that is already provided by its superclass?",
    options: [
      "Method Overloading (Compile-Time)",
      "Method Overriding (Run-Time Polymorphism)",
      "Encapsulation",
      "Abstraction"
    ],
    correctOptionIndex: 1,
    explanation:
      "Method Overriding occurs when a child class redefines a parent class method with the exact same signature, enabling dynamic runtime dispatch."
  },
  {
    id: "cs-15",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Computer Organization (Memory)",
    marks: 4,
    negativeMarks: 0,
    text: "Which type of computer memory is fastest and placed closest to the CPU execution cores?",
    options: ["SRAM Cache (L1/L2)", "DRAM Main Memory", "SSD Storage", "ROM BIOS"],
    correctOptionIndex: 0,
    explanation:
      "Static RAM (SRAM) cache registers and L1 cache are integrated directly onto the CPU silicon die, delivering single-cycle access latency."
  },
  {
    id: "cs-16",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Web Technologies & Security",
    marks: 4,
    negativeMarks: 0,
    text: "What standard cryptographic protocol secures HTTP traffic by encrypting data transmitted between a web client and server over TLS/SSL?",
    options: ["HTTPS (Port 443)", "FTP (Port 21)", "Telnet (Port 23)", "SNMP (Port 161)"],
    correctOptionIndex: 0,
    explanation:
      "HTTPS (HyperText Transfer Protocol Secure) operates over port 443 and encrypts communications using Transport Layer Security (TLS)."
  },
  {
    id: "cs-17",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Software Engineering",
    marks: 4,
    negativeMarks: 0,
    text: "In the Agile software development methodology, what is a short, time-boxed iteration (typically 1–4 weeks) called?",
    options: ["Sprint", "Milestone", "Waterfall", "Epic"],
    correctOptionIndex: 0,
    explanation:
      "In Scrum/Agile, a Sprint is a fixed duration iteration during which the team completes a designated set of product backlog items."
  },
  {
    id: "cs-18",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Data Structures (Trees)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the maximum number of nodes in a binary tree of height h (where a tree with single root node has height h = 0)?",
    options: ["2^h", "2^(h + 1) - 1", "2^(h - 1)", "h² + 1"],
    correctOptionIndex: 1,
    explanation:
      "Level 0 has 1 node, level 1 has 2, up to level h with 2^h nodes. Sum = 1 + 2 + 4 + ... + 2^h = 2^(h + 1) - 1."
  },
  {
    id: "cs-19",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Operating Systems (Virtual Memory)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the phenomenon called when the CPU spends more time swapping pages into and out of secondary memory than executing user instructions?",
    options: ["Paging", "Thrashing", "Fragmentation", "Segmentation"],
    correctOptionIndex: 1,
    explanation:
      "Thrashing occurs when active working sets exceed physical RAM, causing constant page faults and I/O thrashing that degrades CPU throughput."
  },
  {
    id: "cs-20",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Data Structures (Hashing)",
    marks: 4,
    negativeMarks: 0,
    text: "In a hash table, what is the average-case time complexity for inserting or retrieving a key with a well-distributed hash function?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctOptionIndex: 0,
    explanation:
      "With a uniform hash function and low load factor, hash table lookups and insertions achieve O(1) constant average time."
  },
  {
    id: "cs-21",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Computer Networks (Subnetting)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the default subnet mask for a standard Class C IPv4 network address?",
    options: [
      "255.0.0.0 (/8)",
      "255.255.0.0 (/16)",
      "255.255.255.0 (/24)",
      "255.255.255.255 (/32)"
    ],
    correctOptionIndex: 2,
    explanation:
      "Class C IP addresses (192.0.0.0 to 223.255.255.255) allocate 24 bits for the network and 8 bits for host addresses, giving a subnet mask of 255.255.255.0."
  },
  {
    id: "cs-22",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Database Management Systems (ACID)",
    marks: 4,
    negativeMarks: 0,
    text: "Which property of ACID transactions guarantees that either all operations of a transaction succeed, or none are reflected in the database?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correctOptionIndex: 0,
    explanation:
      "Atomicity ('All or nothing') ensures that if any part of a database transaction fails, the entire transaction is rolled back."
  },
  {
    id: "cs-23",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Digital Logic (Flip-Flops)",
    marks: 4,
    negativeMarks: 0,
    text: "Which sequential digital logic circuit acts as an elementary single-bit memory cell?",
    options: ["Multiplexer", "Decoder", "Flip-Flop", "Full Adder"],
    correctOptionIndex: 2,
    explanation:
      "A flip-flop (bistable multivibrator) stores one binary digit (bit) of data in digital sequential circuits."
  },
  {
    id: "cs-24",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Programming Concepts (Recursion)",
    marks: 4,
    negativeMarks: 0,
    text: "What happens if a recursive function does not define or reach a termination base condition?",
    options: [
      "It returns 0 automatically",
      "It causes a Stack Overflow runtime exception",
      "It terminates at 100 iterations",
      "It compiles into an infinite loop with zero memory allocation"
    ],
    correctOptionIndex: 1,
    explanation:
      "Without a base case, each recursive call continues pushing stack frames onto the call stack until memory is exhausted, throwing a Stack Overflow error."
  },
  {
    id: "cs-25",
    subjectId: "computer-science",
    subjectName: "Computer Science & IT Fundamentals",
    type: "mcq",
    topic: "Cybersecurity (Encryption)",
    marks: 4,
    negativeMarks: 0,
    text: "In public-key (asymmetric) cryptography like RSA, which key is used to decrypt a message that was encrypted using the recipient's public key?",
    options: [
      "Sender's private key",
      "Recipient's private key",
      "Sender's public key",
      "A shared symmetric secret key"
    ],
    correctOptionIndex: 1,
    explanation:
      "In asymmetric encryption, data encrypted with the recipient's public key can only be decrypted by the recipient's matching confidential private key."
  }
];

// ============================================================================
// 3. GENERAL AWARENESS & BUSINESS ECONOMICS (25 Questions)
// ============================================================================
export const generalAwarenessQuestions: CBTQuestion[] = [
  {
    id: "ga-01",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "RBI & Monetary Policy",
    marks: 4,
    negativeMarks: 0,
    text: "What is the interest rate at which the Reserve Bank of India (RBI) lends short-term liquidity to commercial banks against government securities?",
    options: ["Reverse Repo Rate", "Repo Rate", "Bank Rate", "Cash Reserve Ratio"],
    correctOptionIndex: 1,
    explanation:
      "The Repo Rate (Repurchase Option Rate) is the benchmark interest rate at which the RBI lends money to commercial banks against approved securities."
  },
  {
    id: "ga-02",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Banking & Liquidity",
    marks: 4,
    negativeMarks: 0,
    text: "The percentage of a commercial bank's Net Demand and Time Liabilities (NDTL) that must be maintained as cash reserves with the RBI is known as:",
    options: [
      "Statutory Liquidity Ratio (SLR)",
      "Cash Reserve Ratio (CRR)",
      "Marginal Standing Facility (MSF)",
      "Capital Adequacy Ratio (CAR)"
    ],
    correctOptionIndex: 1,
    explanation:
      "The Cash Reserve Ratio (CRR) is the fraction of total deposits that commercial banks are legally mandated to park as liquid cash with the central bank."
  },
  {
    id: "ga-03",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Macroeconomics & Public Finance",
    marks: 4,
    negativeMarks: 0,
    text: "What is the difference between the total expenditure of the government and its total receipts (excluding borrowings) termed in the Union Budget?",
    options: [
      "Revenue Deficit",
      "Fiscal Deficit",
      "Primary Deficit",
      "Trade Deficit"
    ],
    correctOptionIndex: 1,
    explanation:
      "Fiscal Deficit = Total Budget Expenditure - Total Budget Receipts excluding borrowings. It reflects the total borrowing requirement of the government."
  },
  {
    id: "ga-04",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Microeconomics (Elasticity)",
    marks: 4,
    negativeMarks: 0,
    text: "If a 10% increase in the price of a commodity leads to a 20% decrease in the quantity demanded, the price elasticity of demand is:",
    options: ["0.5 (Inelastic)", "1.0 (Unitary)", "2.0 (Elastic)", "Zero"],
    correctOptionIndex: 2,
    explanation:
      "Price Elasticity of Demand (Ed) = | % Change in Quantity Demanded / % Change in Price | = | -20% / 10% | = 2.0 (Elastic demand)."
  },
  {
    id: "ga-05",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Marketing Fundamentals",
    marks: 4,
    negativeMarks: 0,
    text: "Who formulated the foundational '4Ps' marketing mix framework (Product, Price, Place, Promotion)?",
    options: [
      "Philip Kotler",
      "E. Jerome McCarthy",
      "Peter Drucker",
      "Michael Porter"
    ],
    correctOptionIndex: 1,
    explanation:
      "E. Jerome McCarthy introduced the 4Ps framework in his 1960 book 'Basic Marketing: A Managerial Approach', which was later popularized globally by Philip Kotler."
  },
  {
    id: "ga-06",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Strategic Management",
    marks: 4,
    negativeMarks: 0,
    text: "In Michael Porter's Five Forces model of competitive analysis, which of the following is NOT one of the five competitive forces?",
    options: [
      "Threat of New Entrants",
      "Bargaining Power of Buyers",
      "Fluctuations in Stock Market Indices",
      "Threat of Substitute Products"
    ],
    correctOptionIndex: 2,
    explanation:
      "Porter's Five Forces are: 1. Threat of new entrants, 2. Threat of substitutes, 3. Bargaining power of buyers, 4. Bargaining power of suppliers, and 5. Rivalry among existing competitors."
  },
  {
    id: "ga-07",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Indian Economy & Taxation",
    marks: 4,
    negativeMarks: 0,
    text: "The Goods and Services Tax (GST) in India was introduced on July 1, 2017, through which constitutional amendment act?",
    options: [
      "99th Amendment Act",
      "100th Amendment Act",
      "101st Amendment Act",
      "103rd Amendment Act"
    ],
    correctOptionIndex: 2,
    explanation:
      "GST was implemented across India by the 101st Constitutional Amendment Act, 2016, unifying numerous central and state indirect taxes."
  },
  {
    id: "ga-08",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Financial Markets & SEBI",
    marks: 4,
    negativeMarks: 0,
    text: "Which statutory regulatory authority oversees and regulates the securities and capital commodity markets in India?",
    options: ["RBI", "SEBI", "IRDAI", "PFRDA"],
    correctOptionIndex: 1,
    explanation:
      "The Securities and Exchange Board of India (SEBI), established under the SEBI Act of 1992, protects investor interests and regulates securities exchanges."
  },
  {
    id: "ga-09",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "National Income Accounting",
    marks: 4,
    negativeMarks: 0,
    text: "Gross Domestic Product (GDP) calculated at market prices minus Net Indirect Taxes equals:",
    options: [
      "GDP at Factor Cost",
      "Net Domestic Product (NDP)",
      "Gross National Product (GNP)",
      "Personal Disposable Income"
    ],
    correctOptionIndex: 0,
    explanation:
      "GDP at Factor Cost = GDP at Market Prices - Indirect Taxes + Subsidies (i.e. minus Net Indirect Taxes)."
  },
  {
    id: "ga-10",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Inflation & Price Indices",
    marks: 4,
    negativeMarks: 0,
    text: "Which headline index is officially used by the Reserve Bank of India as the primary benchmark for measuring retail consumer inflation and framing monetary policy?",
    options: [
      "Wholesale Price Index (WPI)",
      "Consumer Price Index - Combined (CPI-C)",
      "Index of Industrial Production (IIP)",
      "Sensex Index"
    ],
    correctOptionIndex: 1,
    explanation:
      "Following the Urjit Patel Committee recommendations in 2014, the RBI adopted the Consumer Price Index (Combined) as its principal measure for retail inflation targeting (4% ± 2%)."
  },
  {
    id: "ga-11",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Corporate Governance & Economics",
    marks: 4,
    negativeMarks: 0,
    text: "What economic market condition is characterized by a single buyer dominating a market with multiple sellers?",
    options: ["Monopoly", "Monopsony", "Oligopoly", "Duopoly"],
    correctOptionIndex: 1,
    explanation:
      "A Monopsony is a market form where a single entity (such as a single state procurement board) acts as the sole purchaser of goods or services."
  },
  {
    id: "ga-12",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "International Trade & Institutions",
    marks: 4,
    negativeMarks: 0,
    text: "Where is the global headquarters of the World Trade Organization (WTO) situated?",
    options: ["Washington D.C., USA", "Geneva, Switzerland", "Paris, France", "London, UK"],
    correctOptionIndex: 1,
    explanation:
      "The World Trade Organization (WTO), established in 1995 to oversee international trade rules, is headquartered in Geneva, Switzerland."
  },
  {
    id: "ga-13",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Space & Defense Tech (India)",
    marks: 4,
    negativeMarks: 0,
    text: "India became the first nation to soft-land a spacecraft near the lunar South Pole with which historic ISRO mission in August 2023?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan-2"],
    correctOptionIndex: 2,
    explanation:
      "On August 23, 2023, ISRO's Chandrayaan-3 lander (Vikram) made history by successfully achieving a soft landing near the moon's South Pole."
  },
  {
    id: "ga-14",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Indian Polity & Constitution",
    marks: 4,
    negativeMarks: 0,
    text: "Under which Article of the Indian Constitution does the President declare a Financial Emergency?",
    options: ["Article 352", "Article 356", "Article 360", "Article 368"],
    correctOptionIndex: 2,
    explanation:
      "Article 360 empowers the President to proclaim a Financial Emergency if the financial stability or credit of India is threatened. (Article 352 is National Emergency, Article 356 is State President's Rule)."
  },
  {
    id: "ga-15",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Sustainable Development Goals (SDGs)",
    marks: 4,
    negativeMarks: 0,
    text: "How many Sustainable Development Goals (SDGs) were adopted by all United Nations Member States in 2015 as part of the 2030 Agenda?",
    options: ["10", "15", "17", "21"],
    correctOptionIndex: 2,
    explanation:
      "The UN 2030 Agenda for Sustainable Development comprises 17 interconnected Sustainable Development Goals (SDGs) and 169 targets."
  },
  {
    id: "ga-16",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Indian Business & Unicorns",
    marks: 4,
    negativeMarks: 0,
    text: "In startup and venture capital terminology, what is a privately-held startup valued at over $1 Billion termed?",
    options: ["Gazelle", "Centaur", "Unicorn", "Decacorn"],
    correctOptionIndex: 2,
    explanation:
      "A privately-held startup company with a valuation exceeding $1 billion is termed a 'Unicorn', coined by venture capitalist Aileen Lee in 2013."
  },
  {
    id: "ga-17",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Environmental Science & Climate",
    marks: 4,
    negativeMarks: 0,
    text: "The landmark international treaty signed in 1987 to phase out chlorofluorocarbons (CFCs) and protect the stratospheric ozone layer is known as:",
    options: [
      "Kyoto Protocol",
      "Paris Climate Agreement",
      "Montreal Protocol",
      "Basel Convention"
    ],
    correctOptionIndex: 2,
    explanation:
      "The Montreal Protocol on Substances that Deplete the Ozone Layer was finalized in 1987 and is widely regarded as one of the most successful international environmental treaties."
  },
  {
    id: "ga-18",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Banking & Payment Systems",
    marks: 4,
    negativeMarks: 0,
    text: "Which organization developed and operates the Unified Payments Interface (UPI) real-time payment system in India?",
    options: ["RBI", "NPCI (National Payments Corporation of India)", "NITI Aayog", "NASSCOM"],
    correctOptionIndex: 1,
    explanation:
      "The National Payments Corporation of India (NPCI), an umbrella organization established under the guidance of the RBI and IBA, developed UPI, RuPay, and IMPS."
  },
  {
    id: "ga-19",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Indian History & Culture",
    marks: 4,
    negativeMarks: 0,
    text: "Who was the author of the ancient Indian treatise on statecraft, economic policy, and military strategy titled 'Arthashastra'?",
    options: ["Chanakya (Kautilya)", "Aryabhata", "Kalidasa", "Banabhatta"],
    correctOptionIndex: 0,
    explanation:
      "Chanakya (also known as Kautilya or Vishnugupta), prime minister to Chandragupta Maurya, authored the comprehensive treatise 'Arthashastra'."
  },
  {
    id: "ga-20",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Global Economy & Currencies",
    marks: 4,
    negativeMarks: 0,
    text: "Special Drawing Rights (SDRs) are supplementary foreign exchange reserve assets maintained by which international financial organization?",
    options: [
      "World Bank",
      "International Monetary Fund (IMF)",
      "Bank for International Settlements (BIS)",
      "Asian Development Bank (ADB)"
    ],
    correctOptionIndex: 1,
    explanation:
      "The SDR is an international reserve asset created by the IMF in 1969 to supplement its member countries' official foreign exchange reserves."
  },
  {
    id: "ga-21",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Energy & Renewables (India)",
    marks: 4,
    negativeMarks: 0,
    text: "India's largest operational solar park, the Bhadla Solar Park with a capacity of over 2,245 MW, is located in which Indian state?",
    options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Karnataka"],
    correctOptionIndex: 1,
    explanation:
      "The Bhadla Solar Park is located in the Phalodi district of Rajasthan, covering over 14,000 acres in the Thar desert."
  },
  {
    id: "ga-22",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Corporate Law & Mergers",
    marks: 4,
    negativeMarks: 0,
    text: "What regulatory commission enforces fair market competition and prevents anti-competitive monopolistic mergers in India?",
    options: [
      "Competition Commission of India (CCI)",
      "Law Commission of India",
      "Telecom Regulatory Authority of India (TRAI)",
      "National Company Law Tribunal (NCLT)"
    ],
    correctOptionIndex: 0,
    explanation:
      "The Competition Commission of India (CCI) is the statutory body enforcing The Competition Act, 2002 to prevent anti-competitive business agreements and abuse of dominant position."
  },
  {
    id: "ga-23",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Science & Technology Milestones",
    marks: 4,
    negativeMarks: 0,
    text: "Which Indian scientific mission placed a space observatory into a halo orbit around the Sun-Earth Lagrangian Point 1 (L1) in early 2024 to study solar flares and coronal mass ejections?",
    options: ["Aditya-L1", "AstroSat-2", "Solar-B", "Surya-Kiran"],
    correctOptionIndex: 0,
    explanation:
      "ISRO launched Aditya-L1 in September 2023, successfully inserting it into a halo orbit around the L1 point (~1.5 million km from Earth) on January 6, 2024."
  },
  {
    id: "ga-24",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Economic Concepts",
    marks: 4,
    negativeMarks: 0,
    text: "What economic phenomenon describes an economy experiencing stagnant economic growth, high unemployment, and simultaneously high inflation?",
    options: ["Hyperinflation", "Deflation", "Stagflation", "Reflation"],
    correctOptionIndex: 2,
    explanation:
      "Stagflation is an economic condition where slow GDP growth and high unemployment coincide with high rates of price inflation."
  },
  {
    id: "ga-25",
    subjectId: "general-awareness",
    subjectName: "General Awareness & Business Economics",
    type: "mcq",
    topic: "Corporate Governance & Ethics",
    marks: 4,
    negativeMarks: 0,
    text: "Under Section 135 of the Indian Companies Act, 2013, qualifying companies must spend at least what percentage of their average net profits over the three preceding financial years on Corporate Social Responsibility (CSR)?",
    options: ["1%", "2%", "3%", "5%"],
    correctOptionIndex: 1,
    explanation:
      "The Companies Act 2013 mandates that eligible companies spend at least 2% of their average net profits of the past three consecutive financial years on qualifying CSR initiatives."
  }
];

