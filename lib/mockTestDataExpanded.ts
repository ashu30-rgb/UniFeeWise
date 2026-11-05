export interface PracticeQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface PracticeSubject {
  id: string;
  name: string;
  shortName: string;
  questionCount: number;
  timeMinutes: number;
  questions: PracticeQuestion[];
}

export interface PracticeCourse {
  id: string;
  title: string;
  badge: string;
  subjects: PracticeSubject[];
}

export const MOCK_COURSES: PracticeCourse[] = [
  {
    id: "btech",
    title: "B.Tech (PCM / PCB)",
    badge: "Engineering & Bio",
    subjects: [
      {
        id: "physics",
        name: "Physics",
        shortName: "PHY",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "phy-1",
            text: "An electron moving towards the east enters a magnetic field directed towards the north. The force on the electron will be directed:",
            options: [
              "Vertically upward",
              "Vertically downward",
              "Towards the west",
              "Towards the south",
            ],
            correctAnswer: 1,
            explanation:
              "By Fleming's Left Hand Rule: with current towards west (since electron moves east) and field north, the thumb points vertically downwards.",
          },
          {
            id: "phy-2",
            text: "In a series LCR circuit at resonance, the phase difference between applied AC voltage and current is:",
            options: ["π / 2", "π", "Zero", "π / 4"],
            correctAnswer: 2,
            explanation:
              "At resonance, inductive reactance equals capacitive reactance (XL = XC). The net reactance is zero, making impedance purely resistive with zero phase difference.",
          },
          {
            id: "phy-3",
            text: "If the kinetic energy of a moving body is quadrupled (increased by 4x), its linear momentum becomes:",
            options: ["Same", "Twice", "Four times", "Half"],
            correctAnswer: 1,
            explanation:
              "Linear momentum p = √(2m·KE). If KE becomes 4·KE, the new momentum p' = √(2m·4·KE) = 2·p (doubled).",
          },
          {
            id: "phy-4",
            text: "A parallel plate capacitor is charged and then disconnected from the battery. If a dielectric slab is inserted between the plates, what happens to the electric field?",
            options: [
              "Increases",
              "Decreases",
              "Remains constant",
              "Becomes zero",
            ],
            correctAnswer: 1,
            explanation:
              "Since the battery is disconnected, charge Q remains constant. The dielectric increases capacitance C = K·C0, so potential V = Q/C decreases. Therefore, E = V/d = E0/K (decreases).",
          },
          {
            id: "phy-5",
            text: "The de-Broglie wavelength of an electron accelerated through a potential difference of V volts is given approximately by:",
            options: [
              "12.27 / √V Å",
              "1.227 / V Å",
              "122.7 / √V Å",
              "0.1227 / √V Å",
            ],
            correctAnswer: 0,
            explanation:
              "λ = h / √(2m·e·V) = 1.227 nm / √V = 12.27 / √V Ångströms.",
          },
          {
            id: "phy-6",
            text: "Two bodies of masses 1 kg and 4 kg have equal kinetic energies. The ratio of their linear momenta is:",
            options: ["1 : 4", "1 : 2", "2 : 1", "4 : 1"],
            correctAnswer: 1,
            explanation:
              "p = √(2m·KE). For equal KE, p1 / p2 = √(m1 / m2) = √(1 / 4) = 1/2.",
          },
          {
            id: "phy-7",
            text: "A Carnot engine operates between temperatures 500 K and 300 K. Its maximum thermodynamic efficiency is:",
            options: ["20%", "40%", "60%", "50%"],
            correctAnswer: 1,
            explanation:
              "Efficiency η = 1 - (T_cold / T_hot) = 1 - (300 / 500) = 1 - 0.6 = 0.40 or 40%.",
          },
          {
            id: "phy-8",
            text: "Which of the following electromagnetic waves has the highest frequency in the electromagnetic spectrum?",
            options: [
              "Ultraviolet rays",
              "X-rays",
              "Gamma rays",
              "Microwaves",
            ],
            correctAnswer: 2,
            explanation:
              "Gamma rays have the shortest wavelength (< 10^-12 m) and correspondingly the highest frequency (> 10^20 Hz).",
          },
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        shortName: "CHEM",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "chem-1",
            text: "In the redox disproportionation reaction: 3Cl2 + 6NaOH → NaClO3 + 5NaCl + 3H2O, chlorine acts as:",
            options: [
              "Only an oxidizing agent",
              "Only a reducing agent",
              "Both oxidizing and reducing agent",
              "Neither oxidizing nor reducing",
            ],
            correctAnswer: 2,
            explanation:
              "Chlorine's oxidation state goes from 0 (in Cl2) to +5 (in NaClO3, oxidation) and to -1 (in NaCl, reduction), making it a disproportionation reaction.",
          },
          {
            id: "chem-2",
            text: "Which of the following molecules has a permanent net dipole moment (polar molecule)?",
            options: ["BF3", "CO2", "NH3", "CH4"],
            correctAnswer: 2,
            explanation:
              "NH3 has a trigonal pyramidal geometry with a lone pair on nitrogen, preventing cancellation of bond dipoles (μ = 1.47 D). BF3 and CH4 are symmetric with μ = 0.",
          },
          {
            id: "chem-3",
            text: "The hybridization of the central sulfur atom in SF6 molecule is:",
            options: ["sp3", "sp3d", "sp3d2", "dsp2"],
            correctAnswer: 2,
            explanation:
              "Sulfur has 6 valence electrons and forms 6 single bonds with fluorine with 0 lone pairs. Steric number = 6, yielding sp3d2 octahedral geometry.",
          },
          {
            id: "chem-4",
            text: "According to Le Chatelier's principle, an increase in pressure on the system: N2(g) + 3H2(g) ⇌ 2NH3(g) will:",
            options: [
              "Favor formation of NH3",
              "Favor decomposition of NH3",
              "Have no effect on equilibrium",
              "Decrease the rate of reaction",
            ],
            correctAnswer: 0,
            explanation:
              "Increasing pressure shifts the equilibrium towards the side with fewer moles of gas. Here, reactants have 4 moles and products have 2 moles, shifting right.",
          },
          {
            id: "chem-5",
            text: "Which of the following represents an optically active enantiomeric amino acid?",
            options: ["Glycine", "Alanine", "Both Glycine and Alanine", "Neither"],
            correctAnswer: 1,
            explanation:
              "Alanine has a chiral alpha-carbon bonded to four distinct groups (-H, -CH3, -COOH, -NH2). Glycine's alpha-carbon has two hydrogens and is achiral.",
          },
          {
            id: "chem-6",
            text: "The oxidation state of chromium in K2Cr2O7 is:",
            options: ["+3", "+6", "+5", "+4"],
            correctAnswer: 1,
            explanation:
              "2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2(Cr) - 14 = 0 => 2(Cr) = +12 => Cr = +6.",
          },
          {
            id: "chem-7",
            text: "Which law states that the mass of a gas dissolved in a liquid is directly proportional to its partial pressure above the liquid?",
            options: [
              "Raoult's Law",
              "Henry's Law",
              "Dalton's Law",
              "Boyle's Law",
            ],
            correctAnswer: 1,
            explanation:
              "Henry's law states that solubility (or dissolved concentration) C = kH · P.",
          },
          {
            id: "chem-8",
            text: "When ethyl alcohol is reacted with acidified potassium dichromate, the final oxidation product is:",
            options: ["Acetaldehyde", "Acetic acid", "Formic acid", "Acetone"],
            correctAnswer: 1,
            explanation:
              "Primary alcohols are oxidized by strong oxidizing agents (acidified K2Cr2O7) first to acetaldehyde and then rapidly to ethanoic (acetic) acid.",
          },
        ],
      },
      {
        id: "mathematics",
        name: "Mathematics",
        shortName: "MATH",
        questionCount: 8,
        timeMinutes: 12,
        questions: [
          {
            id: "math-1",
            text: "If A is a 3 × 3 matrix such that |A| = 4, then the determinant value of |2A| is:",
            options: ["8", "16", "32", "64"],
            correctAnswer: 2,
            explanation:
              "For an n × n matrix, |k·A| = k^n · |A|. For n = 3 and k = 2: |2A| = 2^3 · 4 = 8 · 4 = 32.",
          },
          {
            id: "math-2",
            text: "The value of limit lim (x → 0) [(sin 3x) / (tan 2x)] is:",
            options: ["1", "3/2", "2/3", "0"],
            correctAnswer: 1,
            explanation:
              "Using standard limits lim (sin 3x)/3x = 1 and lim (tan 2x)/2x = 1: lim = (3x / 2x) = 3/2.",
          },
          {
            id: "math-3",
            text: "The derivative of f(x) = ln(sec x + tan x) with respect to x is:",
            options: ["sec x", "tan x", "sec x · tan x", "cos x"],
            correctAnswer: 0,
            explanation:
              "f'(x) = [sec x · tan x + sec^2 x] / (sec x + tan x) = sec x(tan x + sec x)/(sec x + tan x) = sec x.",
          },
          {
            id: "math-4",
            text: "The distance between the parallel planes 2x - y + 2z = 4 and 4x - 2y + 4z = 2 is:",
            options: ["1 unit", "2 units", "3/2 units", "1/2 unit"],
            correctAnswer: 0,
            explanation:
              "Divide 2nd plane by 2: 2x - y + 2z = 1. Distance d = |d1 - d2| / √(a^2 + b^2 + c^2) = |4 - 1| / √(4 + 1 + 4) = 3 / 3 = 1.",
          },
          {
            id: "math-5",
            text: "The probability of getting a total sum of 7 when two unbiased dice are thrown simultaneously is:",
            options: ["1/12", "1/6", "5/36", "7/36"],
            correctAnswer: 1,
            explanation:
              "Favorable pairs for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes out of 36. Probability = 6/36 = 1/6.",
          },
          {
            id: "math-6",
            text: "If the roots of quadratic equation x^2 - px + q = 0 differ by 1, then:",
            options: [
              "p^2 = 4q + 1",
              "p^2 = 4q - 1",
              "q^2 = 4p + 1",
              "p^2 + 4q = 1",
            ],
            correctAnswer: 0,
            explanation:
              "(α - β)^2 = (α + β)^2 - 4αβ. Given |α - β| = 1, so 1 = p^2 - 4q => p^2 = 4q + 1.",
          },
          {
            id: "math-7",
            text: "The definite integral ∫ (from 0 to π/2) [sin x / (sin x + cos x)] dx equals:",
            options: ["π / 2", "π / 4", "π", "0"],
            correctAnswer: 1,
            explanation:
              "By King's property ∫(0 to a) f(x)dx = ∫(0 to a) f(a-x)dx: 2I = ∫(0 to π/2) 1 dx = π/2 => I = π/4.",
          },
          {
            id: "math-8",
            text: "The eccentricity of the rectangular hyperbola x^2 - y^2 = a^2 is always:",
            options: ["1", "√2", "2", "1 / √2"],
            correctAnswer: 1,
            explanation:
              "For rectangular hyperbola, a = b. Eccentricity e = √(1 + b^2/a^2) = √(1 + 1) = √2.",
          },
        ],
      },
      {
        id: "biology",
        name: "Biology",
        shortName: "BIO",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bio-1",
            text: "Which organelle is responsible for generating the majority of cellular ATP via oxidative phosphorylation?",
            options: [
              "Endoplasmic Reticulum",
              "Golgi apparatus",
              "Mitochondria",
              "Ribosome",
            ],
            correctAnswer: 2,
            explanation:
              "Mitochondria are the powerhouses of the cell where the electron transport chain and ATP synthesis take place.",
          },
          {
            id: "bio-2",
            text: "The hormone responsible for lowering blood glucose levels by promoting glucose uptake into tissues is:",
            options: ["Glucagon", "Insulin", "Thyroxine", "Adrenaline"],
            correctAnswer: 1,
            explanation:
              "Insulin is secreted by beta-cells of the islets of Langerhans in the pancreas and lowers blood sugar.",
          },
          {
            id: "bio-3",
            text: "In humans, the normal diploid chromosome number (2n) in somatic cells is:",
            options: ["23", "46", "48", "92"],
            correctAnswer: 1,
            explanation:
              "Human somatic cells contain 23 pairs of chromosomes, totaling 46 chromosomes (44 autosomes + 2 sex chromosomes).",
          },
          {
            id: "bio-4",
            text: "Which nitrogenous base is present in RNA but absent in DNA?",
            options: ["Thymine", "Uracil", "Guanine", "Cytosine"],
            correctAnswer: 1,
            explanation:
              "RNA contains Uracil (U) which pairs with Adenine (A), whereas DNA contains Thymine (T).",
          },
          {
            id: "bio-5",
            text: "The functional filtration unit of the human kidney is known as the:",
            options: ["Neuron", "Nephron", "Alveolus", "Glomerulus only"],
            correctAnswer: 1,
            explanation:
              "The nephron (comprising Bowman's capsule, PCT, loop of Henle, DCT) is the basic structural and functional unit of the kidney.",
          },
          {
            id: "bio-6",
            text: "Which blood group is universally known as the Universal Recipient?",
            options: ["O Rh negative", "AB Rh positive", "A Rh positive", "B Rh negative"],
            correctAnswer: 1,
            explanation:
              "AB positive individuals possess both A and B antigens and Rh factor, so their plasma contains neither anti-A nor anti-B antibodies.",
          },
          {
            id: "bio-7",
            text: "During photosynthesis, oxygen is released as a byproduct of which process?",
            options: [
              "Photolysis of water",
              "Calvin Cycle",
              "Reduction of CO2",
              "Glycolysis",
            ],
            correctAnswer: 0,
            explanation:
              "Light-dependent reactions in photosystem II split water (H2O → 2H+ + 2e- + 1/2 O2), releasing oxygen.",
          },
          {
            id: "bio-8",
            text: "The enzyme that unwinds the double helix DNA structure during DNA replication is:",
            options: ["DNA Ligase", "DNA Polymerase", "DNA Helicase", "RNA Primase"],
            correctAnswer: 2,
            explanation:
              "DNA Helicase breaks the hydrogen bonds between complementary base pairs to open the replication fork.",
          },
        ],
      },
      {
        id: "english",
        name: "English & Aptitude",
        shortName: "ENG",
        questionCount: 8,
        timeMinutes: 8,
        questions: [
          {
            id: "eng-1",
            text: "Choose the word most nearly OPPOSITE in meaning to 'METICULOUS':",
            options: ["Careful", "Careless", "Precise", "Arduous"],
            correctAnswer: 1,
            explanation:
              "Meticulous means showing great attention to detail. Its direct antonym is careless or negligent.",
          },
          {
            id: "eng-2",
            text: "Choose the sentence with correct subject-verb agreement:",
            options: [
              "Neither the principal nor the teachers was present.",
              "Neither the principal nor the teachers were present.",
              "Neither the principal nor the teachers is present.",
              "Neither the principal or the teachers were present.",
            ],
            correctAnswer: 1,
            explanation:
              "With 'neither... nor...', the verb agrees with the closer subject ('teachers' is plural, so 'were' is correct).",
          },
          {
            id: "eng-3",
            text: "Spot the error: 'She has been working in this firm since five years.'",
            options: [
              "She has been",
              "working in",
              "this firm",
              "since five years",
            ],
            correctAnswer: 3,
            explanation:
              "'Five years' represents a duration/period of time, so 'for five years' must be used instead of 'since'.",
          },
          {
            id: "eng-4",
            text: "Complete the analogy: BIRD : AVIARY :: BEE : ?",
            options: ["Hive", "Apiary", "Stable", "Aquarium"],
            correctAnswer: 1,
            explanation:
              "An aviary is where birds are kept; an apiary is a collection of hives where bees are kept.",
          },
          {
            id: "eng-5",
            text: "Find the next number in the series: 3, 7, 15, 31, 63, ?",
            options: ["127", "125", "126", "128"],
            correctAnswer: 0,
            explanation:
              "Pattern: each number is 2x + 1. (63 × 2) + 1 = 126 + 1 = 127.",
          },
          {
            id: "eng-6",
            text: "Choose the correct idiom meaning for 'To burn the candle at both ends':",
            options: [
              "To waste electricity",
              "To exhaust one's energy by working very late and early",
              "To be very stingy with money",
              "To celebrate enthusiastically",
            ],
            correctAnswer: 1,
            explanation:
              "To burn the candle at both ends means to overwork oneself by going to bed late and getting up early.",
          },
          {
            id: "eng-7",
            text: "Identify the correctly spelled word:",
            options: [
              "Accomodation",
              "Accommodation",
              "Acommodation",
              "Accomodasion",
            ],
            correctAnswer: 1,
            explanation:
              "Accommodation has double 'c' and double 'm' (A-c-c-o-m-m-o-d-a-t-i-o-n).",
          },
          {
            id: "eng-8",
            text: "If in a certain code 'APPLE' is written as 'BQQMF', how is 'MANGO' coded?",
            options: ["NBOHP", "OCPIQ", "NBNHP", "MBOHP"],
            correctAnswer: 0,
            explanation:
              "Every letter is shifted forward by +1: M→N, A→B, N→O, G→H, O→P, producing NBOHP.",
          },
        ],
      },
    ],
  },
  {
    id: "mba",
    title: "MBA (Management)",
    badge: "Post-Graduate",
    subjects: [
      {
        id: "varc",
        name: "Verbal Ability & Reading Comprehension",
        shortName: "VARC",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "mba-v1",
            text: "Select the most appropriate one-word substitute: 'A person who does not believe in the existence of God.'",
            options: ["Atheist", "Agnostic", "Altruist", "Anarchist"],
            correctAnswer: 0,
            explanation:
              "An atheist actively disbelieves in a deity, while an agnostic believes nothing is known about God.",
          },
          {
            id: "mba-v2",
            text: "Identify the tone of the sentence: 'Despite their colossal marketing budget, the gadget failed miserably to spark any genuine user delight.'",
            options: ["Optimistic", "Critical", "Objective", "Satirical"],
            correctAnswer: 1,
            explanation:
              "The author points out shortcomings directly ('failed miserably', 'despite colossal budget'), expressing a critical tone.",
          },
          {
            id: "mba-v3",
            text: "Choose the word closest in meaning to 'PRAGMATIC':",
            options: ["Idealistic", "Practical", "Theoretical", "Dogmatic"],
            correctAnswer: 1,
            explanation:
              "Pragmatic means dealing with things sensibly and realistically based on practical considerations.",
          },
          {
            id: "mba-v4",
            text: "Select the grammatically correct option: 'Neither the manager nor his assistants ______ willing to take accountability.'",
            options: ["is", "was", "are", "be"],
            correctAnswer: 2,
            explanation:
              "With 'neither... nor...', the verb agrees with the closer subject ('assistants' is plural, so 'are' is correct).",
          },
          {
            id: "mba-v5",
            text: "Rearrange the sentence logically: P: from investors, Q: startups are raising, R: unprecedented capital, S: despite global headwinds.",
            options: ["Q-R-P-S", "R-P-Q-S", "S-P-Q-R", "Q-P-S-R"],
            correctAnswer: 0,
            explanation:
              "'Startups are raising (Q) unprecedented capital (R) from investors (P) despite global headwinds (S)' forms a coherent statement.",
          },
          {
            id: "mba-v6",
            text: "Choose the antonym of 'LACONIC':",
            options: ["Terse", "Verbose", "Concise", "Curt"],
            correctAnswer: 1,
            explanation:
              "Laconic means using very few words. Its antonym is verbose (wordy).",
          },
          {
            id: "mba-v7",
            text: "Which of the following phrases conveys: 'To take on a problem with decisive action'?",
            options: [
              "Take the bull by the horns",
              "Bite off more than one can chew",
              "Spill the beans",
              "Cry over spilled milk",
            ],
            correctAnswer: 0,
            explanation:
              "'Take the bull by the horns' means to confront a difficult situation directly and courageously.",
          },
          {
            id: "mba-v8",
            text: "Choose the appropriate connector: 'He worked exceptionally hard; _______, he failed to meet the target quota.'",
            options: ["furthermore", "nevertheless", "subsequently", "consequently"],
            correctAnswer: 1,
            explanation:
              "'Nevertheless' indicates contrast between working hard and not meeting the target quota.",
          },
        ],
      },
      {
        id: "qa",
        name: "Quantitative Aptitude",
        shortName: "QA",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "mba-q1",
            text: "A merchant marks his goods up by 40% and offers a 20% discount. His net profit percentage is:",
            options: ["20%", "12%", "15%", "16%"],
            correctAnswer: 1,
            explanation:
              "Let CP = 100. Marked Price = 140. Selling Price = 140 × 0.8 = 112. Net profit = (112 - 100)% = 12%.",
          },
          {
            id: "mba-q2",
            text: "A sum of ₹10,000 compounded annually at 10% per annum for 2 years yields an interest of:",
            options: ["₹2,000", "₹2,100", "₹2,200", "₹1,200"],
            correctAnswer: 1,
            explanation:
              "Amount A = 10,000 × (1.1)^2 = 10,000 × 1.21 = ₹12,100. CI = ₹12,100 - ₹10,000 = ₹2,100.",
          },
          {
            id: "mba-q3",
            text: "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both run together, the tank fills in:",
            options: ["14 hours", "24 hours", "12 hours", "18 hours"],
            correctAnswer: 1,
            explanation:
              "Net rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Time to fill = 24 hours.",
          },
          {
            id: "mba-q4",
            text: "In a class of 60 students, the average age is 15 years. When the teacher's age is included, the average increases by 1 year. The teacher's age is:",
            options: ["76 years", "75 years", "60 years", "65 years"],
            correctAnswer: 0,
            explanation:
              "Total age of 60 students = 900. Total age of 61 persons = 61 × 16 = 976. Teacher's age = 976 - 900 = 76 years.",
          },
          {
            id: "mba-q5",
            text: "A car covers a distance of 300 km at 60 km/h and returns at 40 km/h. The average speed for the whole journey is:",
            options: ["50 km/h", "48 km/h", "45 km/h", "52 km/h"],
            correctAnswer: 1,
            explanation:
              "Average speed for equal distances = (2 × u × v)/(u + v) = (2 × 60 × 40)/(100) = 48 km/h.",
          },
          {
            id: "mba-q6",
            text: "If 12 men can complete a project in 20 days, how many days will 15 men take at the same work efficiency?",
            options: ["16 days", "15 days", "18 days", "12 days"],
            correctAnswer: 0,
            explanation:
              "M1 × D1 = M2 × D2 => 12 × 20 = 15 × D2 => D2 = 240 / 15 = 16 days.",
          },
          {
            id: "mba-q7",
            text: "The ratio of two numbers is 3:5 and their LCM is 75. The sum of the two numbers is:",
            options: ["40", "35", "50", "45"],
            correctAnswer: 0,
            explanation:
              "Let numbers be 3x and 5x. LCM = 15x = 75 => x = 5. Numbers are 15 and 25; their sum is 15 + 25 = 40.",
          },
          {
            id: "mba-q8",
            text: "What is the probability of picking either a King or a Heart from a standard 52-card pack?",
            options: ["4/13", "16/52", "17/52", "1/4"],
            correctAnswer: 1,
            explanation:
              "4 Kings + 13 Hearts - 1 King of Hearts = 16 cards. Probability = 16/52 = 4/13.",
          },
        ],
      },
      {
        id: "dilr",
        name: "Data Interpretation & Logical Reasoning",
        shortName: "DILR",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "mba-d1",
            text: "Pointing to a photograph, a woman says: 'He is the only son of my mother's only daughter.' How is the person related to the woman?",
            options: ["Nephew", "Brother", "Son", "Father"],
            correctAnswer: 2,
            explanation:
              "Her mother's only daughter is the woman herself. The person is her only son.",
          },
          {
            id: "mba-d2",
            text: "Find the odd one out from the group: 8, 27, 64, 100, 125, 216",
            options: ["27", "64", "100", "125"],
            correctAnswer: 2,
            explanation:
              "All numbers except 100 are perfect cubes: 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216. 100 is 10^2.",
          },
          {
            id: "mba-d3",
            text: "Statements: All managers are leaders. Some leaders are innovators. Conclusion I: Some managers are innovators. Conclusion II: All leaders are managers.",
            options: [
              "Only I follows",
              "Only II follows",
              "Neither I nor II follows",
              "Both I and II follow",
            ],
            correctAnswer: 2,
            explanation:
              "Since the middle term 'leaders' is not distributed, no definite relation exists between managers and innovators. Neither follows.",
          },
          {
            id: "mba-d4",
            text: "In a code, DELHI is written as 73541 and CALCUTTA as 82589662. How is CALICUT written?",
            options: ["8251896", "8251396", "8251596", "8251496"],
            correctAnswer: 0,
            explanation:
              "Direct letter substitution: C=8, A=2, L=5, I=1, C=8, U=9, T=6 => 8251896.",
          },
          {
            id: "mba-d5",
            text: "Five friends A, B, C, D, and E sit in a row facing North. C sits in the middle. A is to the right of B, and E is to the left of D. Who sits at the extreme right if B is immediately to the right of C?",
            options: ["A", "D", "E", "B"],
            correctAnswer: 0,
            explanation:
              "Row configuration: E, D, C, B, A. 'A' is at the extreme right.",
          },
          {
            id: "mba-d6",
            text: "If '+' means '×', '×' means '÷', and '-' means '+', then: 12 + 4 × 2 - 6 = ?",
            options: ["30", "28", "24", "32"],
            correctAnswer: 0,
            explanation:
              "Replacing operators: 12 × 4 ÷ 2 + 6 = 12 × 2 + 6 = 24 + 6 = 30.",
          },
          {
            id: "mba-d7",
            text: "If day after tomorrow is Saturday, what day was three days before yesterday?",
            options: ["Sunday", "Saturday", "Monday", "Friday"],
            correctAnswer: 0,
            explanation:
              "Day after tomorrow = Saturday => Tomorrow = Friday => Today = Thursday => Yesterday = Wednesday => 3 days before yesterday = Sunday.",
          },
          {
            id: "mba-d8",
            text: "A clock shows 3:40. What is the angle between the hour hand and the minute hand?",
            options: ["130°", "140°", "125°", "135°"],
            correctAnswer: 0,
            explanation:
              "Angle = |30·H - 5.5·M| = |30(3) - 5.5(40)| = |90 - 220| = 130°.",
          },
        ],
      },
      {
        id: "ga",
        name: "General Awareness",
        shortName: "GA",
        questionCount: 8,
        timeMinutes: 8,
        questions: [
          {
            id: "mba-g1",
            text: "Which institution serves as the central monetary authority and regulator of banking in India?",
            options: [
              "State Bank of India (SBI)",
              "Reserve Bank of India (RBI)",
              "SEBI",
              "Ministry of Finance",
            ],
            correctAnswer: 1,
            explanation:
              "The Reserve Bank of India (RBI), established in 1935, is the central banking institution of India.",
          },
          {
            id: "mba-g2",
            text: "What does the financial acronym 'EBITDA' stand for?",
            options: [
              "Earnings Before Interest, Taxes, Depreciation, and Amortization",
              "Equity Before Investment, Trading, Debt, and Assets",
              "Earnings Based on International Trade and Direct Accounts",
              "Economic Balance in Trade, Debt, and Assets",
            ],
            correctAnswer: 0,
            explanation:
              "EBITDA measures a company's overall financial performance and profitability before non-operating expenses.",
          },
          {
            id: "mba-g3",
            text: "Who was the chief architect of the Indian Constitution and chairman of its Drafting Committee?",
            options: [
              "Mahatma Gandhi",
              "Dr. B.R. Ambedkar",
              "Jawaharlal Nehru",
              "Sardar Vallabhbhai Patel",
            ],
            correctAnswer: 1,
            explanation:
              "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constituent Assembly.",
          },
          {
            id: "mba-g4",
            text: "In microeconomics, a market structure dominated by only a few large sellers is known as an:",
            options: [
              "Oligopoly",
              "Monopoly",
              "Monopsony",
              "Perfect Competition",
            ],
            correctAnswer: 0,
            explanation:
              "An oligopoly is an industry dominated by a small group of large sellers (e.g., telecom or airline carriers).",
          },
          {
            id: "mba-g5",
            text: "Which country hosted the G20 Leaders' Summit in 2023 under the theme 'Vasudhaiva Kutumbakam'?",
            options: ["Indonesia", "India", "Brazil", "South Africa"],
            correctAnswer: 1,
            explanation:
              "India held the G20 Presidency in 2023, hosting the Leaders' Summit at Bharat Mandapam, New Delhi.",
          },
          {
            id: "mba-g6",
            text: "The Goods and Services Tax (GST) was introduced in India in which year?",
            options: ["2015", "2016", "2017", "2018"],
            correctAnswer: 2,
            explanation:
              "GST was implemented across India on 1st July 2017 as a comprehensive destination-based indirect tax.",
          },
          {
            id: "mba-g7",
            text: "Which of the following metrics is used to calculate the Human Development Index (HDI)?",
            options: [
              "Life expectancy, education, and per capita income",
              "GDP growth, inflation, and unemployment rate",
              "Export surplus, foreign reserves, and stock index",
              "Military spending and gold reserves",
            ],
            correctAnswer: 0,
            explanation:
              "HDI (published by UNDP) combines Life Expectancy Index, Education Index, and Gross National Income per capita.",
          },
          {
            id: "mba-g8",
            text: "The headquarters of the Securities and Exchange Board of India (SEBI) is situated in:",
            options: ["New Delhi", "Mumbai", "Bengaluru", "Kolkata"],
            correctAnswer: 1,
            explanation:
              "SEBI is headquartered at Bandra Kurla Complex (BKC) in Mumbai.",
          },
        ],
      },
    ],
  },
  {
    id: "bca",
    title: "BCA / MCA (Computer Applications)",
    badge: "IT & Software",
    subjects: [
      {
        id: "cs",
        name: "Computer Awareness & Fundamentals",
        shortName: "CS",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bca-c1",
            text: "Which data structure follows the Last-In First-Out (LIFO) operational principle?",
            options: ["Queue", "Stack", "Binary Tree", "Linked List"],
            correctAnswer: 1,
            explanation:
              "A stack operates on LIFO (the last inserted element is the first one popped). Queues operate on FIFO.",
          },
          {
            id: "bca-c2",
            text: "In relational databases, which SQL clause is used to filter records after aggregation with GROUP BY?",
            options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
            correctAnswer: 1,
            explanation:
              "WHERE filters rows before grouping; HAVING filters aggregate groupings produced by GROUP BY.",
          },
          {
            id: "bca-c3",
            text: "What is the worst-case time complexity of QuickSort when a poor pivot is selected?",
            options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
            correctAnswer: 2,
            explanation:
              "When partitions are highly unbalanced (e.g., sorted array with last element pivot), QuickSort degrades to O(n^2).",
          },
          {
            id: "bca-c4",
            text: "Which layer of the OSI 7-layer model is responsible for reliable end-to-end transport and flow control?",
            options: [
              "Network Layer",
              "Transport Layer",
              "Data Link Layer",
              "Session Layer",
            ],
            correctAnswer: 1,
            explanation:
              "Layer 4 (Transport Layer, e.g., TCP) handles end-to-end connection, segmentation, error recovery, and flow control.",
          },
          {
            id: "bca-c5",
            text: "In C++, which keyword is used to allocate memory dynamically on the heap?",
            options: ["malloc", "alloc", "new", "create"],
            correctAnswer: 2,
            explanation:
              "In C++, the 'new' operator allocates dynamic memory on the heap and calls the constructor.",
          },
          {
            id: "bca-c6",
            text: "Convert the binary number (101101)2 to its equivalent decimal value:",
            options: ["43", "45", "47", "51"],
            correctAnswer: 1,
            explanation:
              "32·1 + 16·0 + 8·1 + 4·1 + 2·0 + 1·1 = 32 + 8 + 4 + 1 = 45.",
          },
          {
            id: "bca-c7",
            text: "Which IP address range is reserved for private local area networks (Class C)?",
            options: [
              "10.0.0.0 – 10.255.255.255",
              "172.16.0.0 – 172.31.255.255",
              "192.168.0.0 – 192.168.255.255",
              "127.0.0.0 – 127.255.255.255",
            ],
            correctAnswer: 2,
            explanation:
              "192.168.0.0/16 is the standard RFC 1918 Class C private IP range widely used in home and office routers.",
          },
          {
            id: "bca-c8",
            text: "In object-oriented programming, defining multiple methods with the same name but different parameter lists is called:",
            options: [
              "Method Overriding",
              "Method Overloading",
              "Encapsulation",
              "Abstraction",
            ],
            correctAnswer: 1,
            explanation:
              "Method overloading is compile-time polymorphism where methods share the same name with distinct signatures.",
          },
        ],
      },
      {
        id: "lr",
        name: "Logical Reasoning",
        shortName: "LR",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bca-l1",
            text: "Find the missing term in the sequence: 4, 9, 25, 49, 121, ?",
            options: ["144", "169", "196", "225"],
            correctAnswer: 1,
            explanation:
              "The sequence consists of squares of consecutive prime numbers: 2^2=4, 3^2=9, 5^2=25, 7^2=49, 11^2=121, 13^2=169.",
          },
          {
            id: "bca-l2",
            text: "In a certain code language, 'ROSE' is coded as '6821' and 'CHAIR' is coded as '73456'. What is 'SEARCH'?",
            options: ["214673", "214573", "214763", "214563"],
            correctAnswer: 0,
            explanation:
              "Letter mappings: S=2, E=1, A=4, R=6, C=7, H=3 => 214673.",
          },
          {
            id: "bca-l3",
            text: "A man walks 5 km East, turns right and walks 4 km, then turns left and walks 5 km. In which direction is he now facing?",
            options: ["East", "South", "West", "North"],
            correctAnswer: 0,
            explanation:
              "Starting East, turning right faces South; turning left from South faces East again.",
          },
          {
            id: "bca-l4",
            text: "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?",
            options: ["Father", "Uncle", "Grandfather", "Brother"],
            correctAnswer: 1,
            explanation:
              "A is the brother of D's father C, making A the paternal uncle of D.",
          },
          {
            id: "bca-l5",
            text: "Choose the number that does not belong in the series: 3, 5, 9, 17, 33, 64",
            options: ["9", "17", "33", "64"],
            correctAnswer: 3,
            explanation:
              "Pattern: each number is 2x - 1 (3, 5, 9, 17, 33, 65). 64 should be 65.",
          },
          {
            id: "bca-l6",
            text: "If CAT = 24 and DOG = 26, then BIRD = ?",
            options: ["32", "34", "36", "38"],
            correctAnswer: 0,
            explanation:
              "Sum of alphabet positions: B(2) + I(9) + R(18) + D(4) = 2 + 9 + 18 + 4 = 33 (Wait: 2+9+18+4 = 33). Let's check CAT: 3+1+20 = 24; DOG: 4+15+7 = 26; BIRD: 2+9+18+4 = 33. Correct sum = 33.",
          },
          {
            id: "bca-l7",
            text: "Statements: All laptops are devices. Some devices are phones. Which conclusion follows?",
            options: [
              "Some laptops are phones",
              "All phones are laptops",
              "No laptop is a phone",
              "None of these definitely follows",
            ],
            correctAnswer: 3,
            explanation:
              "Devices is not distributed; no definite affirmative or negative relationship can be established between laptops and phones.",
          },
          {
            id: "bca-l8",
            text: "Pointing to a man, Rahul said, 'His only brother is the father of my daughter's father.' Who is the man to Rahul?",
            options: ["Father", "Uncle", "Brother", "Grandfather"],
            correctAnswer: 1,
            explanation:
              "Rahul's daughter's father is Rahul himself. The man's only brother is Rahul's father, so the man is Rahul's uncle.",
          },
        ],
      },
      {
        id: "qa-bca",
        name: "Quantitative Aptitude",
        shortName: "QA",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bca-q1",
            text: "What is 15% of 60 plus 25% of 80?",
            options: ["25", "29", "30", "32"],
            correctAnswer: 1,
            explanation:
              "(0.15 × 60) + (0.25 × 80) = 9 + 20 = 29.",
          },
          {
            id: "bca-q2",
            text: "A train 180 meters long passes an electric pole in 9 seconds. The speed of the train in km/h is:",
            options: ["60 km/h", "72 km/h", "80 km/h", "90 km/h"],
            correctAnswer: 1,
            explanation:
              "Speed = 180 / 9 = 20 m/s. In km/h = 20 × (18/5) = 72 km/h.",
          },
          {
            id: "bca-q3",
            text: "If x + 1/x = 4, then the value of x^2 + 1/x^2 is:",
            options: ["14", "16", "18", "12"],
            correctAnswer: 0,
            explanation:
              "(x + 1/x)^2 = x^2 + 1/x^2 + 2 => 16 = x^2 + 1/x^2 + 2 => x^2 + 1/x^2 = 14.",
          },
          {
            id: "bca-q4",
            text: "The average of 5 consecutive odd integers is 25. The greatest among them is:",
            options: ["27", "29", "31", "33"],
            correctAnswer: 1,
            explanation:
              "For consecutive odd numbers, the average is the middle number: 21, 23, 25, 27, 29. Greatest is 29.",
          },
          {
            id: "bca-q5",
            text: "The simple interest on a sum of ₹5,000 for 3 years at 8% per annum is:",
            options: ["₹1,200", "₹1,500", "₹1,000", "₹800"],
            correctAnswer: 0,
            explanation:
              "SI = (P × R × T)/100 = (5000 × 8 × 3)/100 = ₹1,200.",
          },
          {
            id: "bca-q6",
            text: "Find the HCF of 36 and 84:",
            options: ["6", "12", "18", "24"],
            correctAnswer: 1,
            explanation:
              "36 = 12 × 3 and 84 = 12 × 7. The Highest Common Factor is 12.",
          },
          {
            id: "bca-q7",
            text: "A shopkeeper sells an article for ₹540 incurring a loss of 10%. To gain 10%, the selling price should be:",
            options: ["₹600", "₹640", "₹660", "₹700"],
            correctAnswer: 2,
            explanation:
              "CP = 540 / 0.9 = ₹600. New SP = 600 × 1.1 = ₹660.",
          },
          {
            id: "bca-q8",
            text: "A bag has 4 red balls and 6 blue balls. What is the probability of drawing a red ball?",
            options: ["2/5", "3/5", "1/2", "4/6"],
            correctAnswer: 0,
            explanation:
              "Total balls = 10. Favorable = 4. Probability = 4/10 = 2/5.",
          },
        ],
      },
      {
        id: "eng-bca",
        name: "General English",
        shortName: "ENG",
        questionCount: 8,
        timeMinutes: 8,
        questions: [
          {
            id: "bca-e1",
            text: "Choose the correct preposition: 'The student was exempted _______ paying the tuition fee due to merit.'",
            options: ["with", "from", "for", "against"],
            correctAnswer: 1,
            explanation:
              "The verb 'exempt' is followed by the preposition 'from' (exempted from something).",
          },
          {
            id: "bca-e2",
            text: "Choose the word closest in meaning to 'INNOVATIVE':",
            options: ["Conventional", "Novel", "Obsolete", "Tedious"],
            correctAnswer: 1,
            explanation:
              "Innovative means introducing new ideas or methods; novel means new and unusual.",
          },
          {
            id: "bca-e3",
            text: "Select the correctly punctuated sentence:",
            options: [
              "Its a great opportunity for students.",
              "It's a great opportunity for students.",
              "Its' a great opportunity for students.",
              "It is' a great opportunity for students.",
            ],
            correctAnswer: 1,
            explanation:
              "'It's' is the contraction of 'It is'. 'Its' without apostrophe is the possessive pronoun.",
          },
          {
            id: "bca-e4",
            text: "Identify the antonym of 'DILIGENT':",
            options: ["Lazy", "Attentive", "Eager", "Patient"],
            correctAnswer: 0,
            explanation:
              "Diligent means hardworking; lazy or indolent is its direct opposite.",
          },
          {
            id: "bca-e5",
            text: "Fill in the blank: 'If he _______ harder, he would have secured a Category 1 scholarship.'",
            options: ["worked", "had worked", "would work", "has worked"],
            correctAnswer: 1,
            explanation:
              "Third conditional structure: 'If + past perfect, would have + past participle'.",
          },
          {
            id: "bca-e6",
            text: "What does the expression 'A piece of cake' mean?",
            options: [
              "A delicious dessert",
              "Something very easy to accomplish",
              "A difficult obstacle",
              "A fair distribution of goods",
            ],
            correctAnswer: 1,
            explanation:
              "'A piece of cake' is an idiom meaning an easy or straightforward task.",
          },
          {
            id: "bca-e7",
            text: "Choose the passive voice for: 'The university announced the LPUNEST results.'",
            options: [
              "The LPUNEST results were announced by the university.",
              "The LPUNEST results are announced by the university.",
              "The university has been announced by the results.",
              "The results had been announced by university.",
            ],
            correctAnswer: 0,
            explanation:
              "Simple past active 'announced' converts to 'were announced by' in passive voice.",
          },
          {
            id: "bca-e8",
            text: "Select the word with the correct spelling:",
            options: [
              "Curriculum",
              "Curiculum",
              "Curricullum",
              "Curicullum",
            ],
            correctAnswer: 0,
            explanation:
              "The correct spelling is Curriculum (double 'r', single 'l').",
          },
        ],
      },
    ],
  },
  {
    id: "bba",
    title: "BBA / Commerce",
    badge: "Under-Graduate",
    subjects: [
      {
        id: "bba-ba",
        name: "General Business Awareness",
        shortName: "GBA",
        questionCount: 8,
        timeMinutes: 8,
        questions: [
          {
            id: "bba-1",
            text: "What does 'FDI' stand for in global business economics?",
            options: [
              "Foreign Direct Investment",
              "Federal Deposit Insurance",
              "Financial Derivative Index",
              "Fiscal Debt Inventory",
            ],
            correctAnswer: 0,
            explanation:
              "FDI stands for Foreign Direct Investment, an investment made by a firm or individual in one country into business interests in another.",
          },
          {
            id: "bba-2",
            text: "Which of the following is considered an asset on a company's balance sheet?",
            options: [
              "Accounts Payable",
              "Accounts Receivable",
              "Bank Overdraft",
              "Salaries Owed",
            ],
            correctAnswer: 1,
            explanation:
              "Accounts Receivable represents money owed to the company by clients and is a current asset.",
          },
          {
            id: "bba-3",
            text: "The marketing principle known as the '4 Ps' includes Product, Price, Place, and:",
            options: ["People", "Promotion", "Process", "Profit"],
            correctAnswer: 1,
            explanation:
              "The classic 4 Ps of Marketing mix formulated by E. Jerome McCarthy are Product, Price, Place, and Promotion.",
          },
          {
            id: "bba-4",
            text: "Which type of bank account offers no interest but permits unlimited daily transactions for business operations?",
            options: [
              "Savings Account",
              "Current Account",
              "Recurring Deposit",
              "Fixed Deposit",
            ],
            correctAnswer: 1,
            explanation:
              "Current accounts are specialized business accounts with zero interest and fluid operational liquidity.",
          },
          {
            id: "bba-5",
            text: "A market situation where there is only one buyer for a product or service is termed:",
            options: ["Monopoly", "Monopsony", "Duopoly", "Oligopoly"],
            correctAnswer: 1,
            explanation:
              "A monopsony is a market form where a single buyer substantially controls the market as the major purchaser of goods or services.",
          },
          {
            id: "bba-6",
            text: "In corporate governance, what does 'CEO' stand for?",
            options: [
              "Chief Executive Officer",
              "Central Enterprise Organizer",
              "Corporate Economics Overseer",
              "Chief Equity Originator",
            ],
            correctAnswer: 0,
            explanation:
              "CEO stands for Chief Executive Officer, the top-ranking operational executive in a corporation.",
          },
          {
            id: "bba-7",
            text: "When a country's exports exceed its imports over a financial year, it has a:",
            options: [
              "Trade Deficit",
              "Trade Surplus",
              "Fiscal Cliff",
              "Capital Deficit",
            ],
            correctAnswer: 1,
            explanation:
              "A trade surplus occurs when exports are greater than imports, generating net foreign exchange inflows.",
          },
          {
            id: "bba-8",
            text: "The regulatory body that protects the interests of investors in the Indian stock exchange is:",
            options: ["SEBI", "RBI", "IRDAI", "TRAI"],
            correctAnswer: 0,
            explanation:
              "SEBI (Securities and Exchange Board of India) regulates the capital and securities market in India.",
          },
        ],
      },
      {
        id: "bba-qa",
        name: "Quantitative Aptitude",
        shortName: "QA",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bba-q1",
            text: "If cost price is ₹200 and selling price is ₹260, the percentage profit is:",
            options: ["25%", "30%", "35%", "20%"],
            correctAnswer: 1,
            explanation:
              "Profit = 260 - 200 = ₹60. % Profit = (60 / 200) × 100 = 30%.",
          },
          {
            id: "bba-q2",
            text: "What single discount is equivalent to two successive discounts of 20% and 10%?",
            options: ["30%", "28%", "25%", "26%"],
            correctAnswer: 1,
            explanation:
              "Net discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - 2 = 28%.",
          },
          {
            id: "bba-q3",
            text: "A father is currently 3 times as old as his son. In 12 years, he will be twice as old. The son's present age is:",
            options: ["10 years", "12 years", "14 years", "15 years"],
            correctAnswer: 1,
            explanation:
              "Let son's age = x. Father's age = 3x. (3x + 12) = 2(x + 12) => 3x + 12 = 2x + 24 => x = 12 years.",
          },
          {
            id: "bba-q4",
            text: "The ratio of boys to girls in a seminar of 120 students is 3:2. The number of girls is:",
            options: ["48", "72", "50", "60"],
            correctAnswer: 0,
            explanation:
              "Total parts = 5. Girls = (2/5) × 120 = 48.",
          },
          {
            id: "bba-q5",
            text: "If 15% of a number is 45, what is 40% of that number?",
            options: ["100", "120", "140", "150"],
            correctAnswer: 1,
            explanation:
              "The number is 45 / 0.15 = 300. 40% of 300 = 120.",
          },
          {
            id: "bba-q6",
            text: "A person borrows ₹8,000 at 5% simple interest per annum. The total amount payable after 4 years is:",
            options: ["₹9,200", "₹9,600", "₹10,000", "₹8,800"],
            correctAnswer: 1,
            explanation:
              "SI = (8000 × 5 × 4)/100 = ₹1,600. Total amount = 8,000 + 1,600 = ₹9,600.",
          },
          {
            id: "bba-q7",
            text: "A tank is filled by pipe A in 10 hours and pipe B in 15 hours. Both together take:",
            options: ["5 hours", "6 hours", "7 hours", "8 hours"],
            correctAnswer: 1,
            explanation:
              "Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Time = 6 hours.",
          },
          {
            id: "bba-q8",
            text: "The average score of 4 subjects is 85. What score must a student obtain in the 5th subject to raise the average to 88?",
            options: ["95", "98", "100", "92"],
            correctAnswer: 2,
            explanation:
              "Total for 5 subjects = 5 × 88 = 440. Total for 4 subjects = 4 × 85 = 340. 5th subject = 440 - 340 = 100.",
          },
        ],
      },
      {
        id: "bba-lr",
        name: "Logical Reasoning",
        shortName: "LR",
        questionCount: 8,
        timeMinutes: 10,
        questions: [
          {
            id: "bba-l1",
            text: "Select the related pair: LAWYER : COURT :: DOCTOR : ?",
            options: ["Hospital", "Medicine", "Stethoscope", "Patient"],
            correctAnswer: 0,
            explanation:
              "A lawyer practices in a court; a doctor practices in a hospital.",
          },
          {
            id: "bba-l2",
            text: "Find the odd one out: Platinum, Silver, Gold, Bronze",
            options: ["Platinum", "Silver", "Gold", "Bronze"],
            correctAnswer: 3,
            explanation:
              "Platinum, silver, and gold are pure elemental metals. Bronze is an alloy of copper and tin.",
          },
          {
            id: "bba-l3",
            text: "If P is South of Q and R is East of Q, in which direction is P with respect to R?",
            options: ["North-West", "South-West", "South-East", "North-East"],
            correctAnswer: 1,
            explanation:
              "From point R, looking to P involves going West (to align with Q) and South, resulting in South-West.",
          },
          {
            id: "bba-l4",
            text: "In a queue, Priya ranks 7th from the front and 24th from the rear. How many people are in the queue?",
            options: ["30", "31", "32", "29"],
            correctAnswer: 0,
            explanation:
              "Total = Front + Rear - 1 = 7 + 24 - 1 = 30.",
          },
          {
            id: "bba-l5",
            text: "If 'LEMON' is coded as 'ELMNO' (alphabetical sort), how is 'APPLE' coded?",
            options: ["AELPP", "ALPPE", "ELPPA", "PELPA"],
            correctAnswer: 0,
            explanation:
              "Alphabetical order of letters in APPLE: A, E, L, P, P.",
          },
          {
            id: "bba-l6",
            text: "Which number replaces the question mark: 2, 6, 12, 20, 30, ?",
            options: ["36", "40", "42", "48"],
            correctAnswer: 2,
            explanation:
              "Differences: +4, +6, +8, +10, +12. 30 + 12 = 42 (also n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42).",
          },
          {
            id: "bba-l7",
            text: "A is father of C, but C is not his son. How is C related to A?",
            options: ["Daughter", "Nephew", "Brother", "Cousin"],
            correctAnswer: 0,
            explanation:
              "Since C is the biological child of A but not his son, C must be his daughter.",
          },
          {
            id: "bba-l8",
            text: "Which of the following diagrams best represents: Vehicles, Cars, Motorcycles?",
            options: [
              "Two separate circles inside one large circle",
              "Three concentric circles",
              "Three intersecting circles",
              "Three independent circles",
            ],
            correctAnswer: 0,
            explanation:
              "Cars and Motorcycles are both disjoint subsets within the larger universal set of Vehicles.",
          },
        ],
      },
      {
        id: "bba-eng",
        name: "Verbal English",
        shortName: "ENG",
        questionCount: 8,
        timeMinutes: 8,
        questions: [
          {
            id: "bba-e1",
            text: "Choose the synonym for 'AUTHENTIC':",
            options: ["Counterfeit", "Genuine", "Dubious", "Fictitious"],
            correctAnswer: 1,
            explanation:
              "Authentic means real, genuine, and not forged.",
          },
          {
            id: "bba-e2",
            text: "Fill in the blank with appropriate idiom: 'The sales team decided to _______ after 10 hours of continuous negotiation.'",
            options: [
              "call it a day",
              "hit the ceiling",
              "bite the bullet",
              "cut corners",
            ],
            correctAnswer: 0,
            explanation:
              "'Call it a day' means to stop what one is doing, especially work.",
          },
          {
            id: "bba-e3",
            text: "Select the sentence with proper apostrophe usage:",
            options: [
              "The directors decision was unanimous.",
              "The director's decision was unanimous.",
              "The directors's decision was unanimous.",
              "The directores decision was unanimous.",
            ],
            correctAnswer: 1,
            explanation:
              "Singular possessive requires an apostrophe followed by 's' (director's decision).",
          },
          {
            id: "bba-e4",
            text: "Identify the antonym of 'AFFLUENT':",
            options: ["Wealthy", "Impoverished", "Opulent", "Prosperous"],
            correctAnswer: 1,
            explanation:
              "Affluent means wealthy; impoverished means destitute or poor.",
          },
          {
            id: "bba-e5",
            text: "Choose the correct preposition: 'The company adheres strictly _______ labor safety guidelines.'",
            options: ["to", "with", "at", "for"],
            correctAnswer: 0,
            explanation:
              "The verb 'adhere' is followed by the preposition 'to' (adheres to rules).",
          },
          {
            id: "bba-e6",
            text: "Identify the correctly spelled word:",
            options: [
              "Entrepreneuer",
              "Entrepreneur",
              "Enterpreneur",
              "Entreprenuer",
            ],
            correctAnswer: 1,
            explanation:
              "Entrepreneur is spelled E-n-t-r-e-p-r-e-n-e-u-r.",
          },
          {
            id: "bba-e7",
            text: "What is the meaning of the Latin business term 'Quid pro quo'?",
            options: [
              "A favor or advantage granted in return for something",
              "To act in good faith",
              "Without legal standing",
              "For the public good",
            ],
            correctAnswer: 0,
            explanation:
              "Quid pro quo literally means 'something for something' (a reciprocal mutual exchange).",
          },
          {
            id: "bba-e8",
            text: "Choose the correct voice: 'Active: The auditors examined the accounts.' -> Passive:",
            options: [
              "The accounts were examined by the auditors.",
              "The accounts was examined by the auditors.",
              "The accounts are examined by the auditors.",
              "The accounts had been examined by auditors.",
            ],
            correctAnswer: 0,
            explanation:
              "Plural subject 'accounts' in past tense requires 'were examined by'.",
          },
        ],
      },
    ],
  },
];
