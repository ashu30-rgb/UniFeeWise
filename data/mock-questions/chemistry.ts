import { CBTQuestion } from "./types";

export const chemistryQuestions: CBTQuestion[] = [
  {
    id: "chem-01",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Solutions & Stoichiometry",
    marks: 4,
    negativeMarks: 0,
    text: "How many grams of sodium hydroxide (NaOH, molar mass = 40 g/mol) are required to prepare 500 mL of a 0.25 M aqueous solution?",
    options: ["2.5 g", "5.0 g", "10.0 g", "20.0 g"],
    correctOptionIndex: 1,
    explanation:
      "Molarity M = (mass / molar mass) * (1000 / volume in mL). Thus: mass = (M * molar mass * V) / 1000 = (0.25 * 40 * 500) / 1000 = 5.0 g."
  },
  {
    id: "chem-02",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Atomic Structure",
    marks: 4,
    negativeMarks: 0,
    text: "Which of the following sets of quantum numbers (n, l, ml, ms) correctly describes an electron in a 3d subshell?",
    options: [
      "n = 3, l = 2, ml = +1, ms = +1/2",
      "n = 3, l = 1, ml = 0, ms = -1/2",
      "n = 3, l = 3, ml = +2, ms = +1/2",
      "n = 2, l = 2, ml = -1, ms = +1/2"
    ],
    correctOptionIndex: 0,
    explanation:
      "For a 3d orbital, the principal quantum number n = 3, azimuthal quantum number l = 2 (s=0, p=1, d=2). Magnetic quantum number ml can take any integer value from -l to +l (-2, -1, 0, +1, +2). Hence n=3, l=2, ml=+1, ms=+1/2 is valid."
  },
  {
    id: "chem-03",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Chemical Kinetics",
    marks: 4,
    negativeMarks: 0,
    text: "A first-order chemical reaction has a rate constant k = 6.93 × 10⁻³ s⁻¹. What is the half-life (t₁/₂) of this reaction in seconds?",
    options: ["50 s", "100 s", "144 s", "200 s"],
    correctOptionIndex: 1,
    explanation:
      "For a first-order reaction, t₁/₂ = 0.693 / k. Substituting k: t₁/₂ = 0.693 / (6.93 × 10⁻³) = 100 seconds."
  },
  {
    id: "chem-04",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Electrochemistry",
    marks: 4,
    negativeMarks: 0,
    text: "According to Faraday's second law of electrolysis, when the same quantity of electric charge is passed through different electrolytes, the masses of substances deposited at the electrodes are directly proportional to their:",
    options: [
      "Atomic numbers",
      "Chemical equivalent weights",
      "Valencies",
      "Densities"
    ],
    correctOptionIndex: 1,
    explanation:
      "Faraday's second law states that W₁ / W₂ = E₁ / E₂, meaning the masses deposited are proportional to their respective chemical equivalent weights (E = Atomic Mass / Valency)."
  },
  {
    id: "chem-05",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Solutions & Colligative Properties",
    marks: 4,
    negativeMarks: 0,
    text: "What is the theoretical Van't Hoff factor (i) for Potassium Ferrocyanide K₄[Fe(CN)₆] assuming complete (100%) electrolytic dissociation in dilute aqueous solution?",
    options: ["3", "4", "5", "6"],
    correctOptionIndex: 2,
    explanation:
      "K₄[Fe(CN)₆] dissociates into 4 K⁺ cations and 1 [Fe(CN)₆]⁴⁻ complex anion: K₄[Fe(CN)₆] -> 4K⁺ + [Fe(CN)₆]⁴⁻. Total number of ions produced per formula unit n = 4 + 1 = 5. Assuming 100% dissociation (α = 1), i = 1 + (n - 1)α = 1 + (5 - 1)*1 = 5."
  },
  {
    id: "chem-06",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Thermodynamics",
    marks: 4,
    negativeMarks: 0,
    text: "For a chemical process occurring at constant temperature and pressure, the criterion for absolute spontaneity at all temperatures is:",
    options: [
      "ΔH > 0 and ΔS > 0",
      "ΔH < 0 and ΔS > 0",
      "ΔH > 0 and ΔS < 0",
      "ΔH < 0 and ΔS < 0"
    ],
    correctOptionIndex: 1,
    explanation:
      "Gibbs free energy change is ΔG = ΔH - TΔS. If ΔH is negative (exothermic) and ΔS is positive (increase in disorder), then -TΔS is always negative. Thus ΔG is strictly negative (< 0) at all temperatures, ensuring spontaneous reaction."
  },
  {
    id: "chem-07",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Ionic Equilibrium",
    marks: 4,
    negativeMarks: 0,
    text: "What is the pH of a 1.0 × 10⁻⁸ M aqueous solution of hydrochloric acid (HCl) at 25°C?",
    options: ["8.00", "7.00", "6.98", "6.02"],
    correctOptionIndex: 2,
    explanation:
      "In very dilute acidic solutions, H⁺ ions from water self-ionization (1.0 × 10⁻⁷ M) cannot be neglected. Total [H⁺] = [H⁺]_acid + [H⁺]_water ≈ 10⁻⁸ + 10⁻⁷ = 1.1 × 10⁻⁷ M. Hence pH = -log(1.1 × 10⁻⁷) ≈ 7 - 0.041 = 6.96 to 6.98 (slightly acidic, never basic)."
  },
  {
    id: "chem-08",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Chemical Bonding & VSEPR",
    marks: 4,
    negativeMarks: 0,
    text: "According to VSEPR theory, what is the hybridization of the central Xenon atom and the molecular geometry of Xenon Tetrafluoride (XeF₄)?",
    options: [
      "sp³d, See-saw",
      "sp³d², Square planar",
      "sp³d², Octahedral",
      "sp³d³, Pentagonal planar"
    ],
    correctOptionIndex: 1,
    explanation:
      "Xenon has 8 valence electrons. With 4 fluorine single bonds, there are 4 bonding pairs and (8 - 4)/2 = 2 lone pairs. Steric number = 4 + 2 = 6, which corresponds to sp³d² hybridization with an octahedral electron geometry and a square planar molecular geometry."
  },
  {
    id: "chem-09",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Molecular Orbital Theory",
    marks: 4,
    negativeMarks: 0,
    text: "According to Molecular Orbital Theory (MOT), what is the bond order of the superoxide ion (O₂⁻)?",
    options: ["1.0", "1.5", "2.0", "2.5"],
    correctOptionIndex: 1,
    explanation:
      "O₂⁻ has 17 valence electrons. Its electronic configuration in valence shells is: σ2s² σ*2s² σ2pz² π2px² π2py² π*2px² π*2py¹. Bonding electrons = 10, Antibonding electrons = 7. Bond order = (10 - 7) / 2 = 3 / 2 = 1.5."
  },
  {
    id: "chem-10",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "d- and f-Block Elements",
    marks: 4,
    negativeMarks: 0,
    text: "Zirconium (Zr, 4d series) and Hafnium (Hf, 5d series) exhibit almost identical atomic and ionic radii primarily due to:",
    options: [
      "Diagonal relationship",
      "Inert pair effect",
      "Lanthanoid contraction",
      "Identical electronic configurations"
    ],
    correctOptionIndex: 2,
    explanation:
      "The filling of 4f orbitals before 5d causes poor shielding of nuclear charge by f-electrons. This steady shrinkage across the 14 lanthanoids (Lanthanoid Contraction) offsets the expected increase in size down the group, making Zr (160 pm) and Hf (159 pm) virtually identical."
  },
  {
    id: "chem-11",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Coordination Compounds",
    marks: 4,
    negativeMarks: 0,
    text: "What is the systematic IUPAC name of the coordination compound [Co(NH₃)₅Cl]Cl₂?",
    options: [
      "Pentaamminechlorocobalt(III) chloride",
      "Pentaamminechlorocobalt(II) chloride",
      "Chloropentaamminecobalt(III) dichloride",
      "Pentaamminechlorocobaltate(III) chloride"
    ],
    correctOptionIndex: 0,
    explanation:
      "Ligands are listed alphabetically: ammine (NH₃) before chlorido/chloro (Cl). The cation complex is named first: 'Pentaamminechlorocobalt'. The oxidation state of Co: x + 5(0) + (-1) + 2(-1) = 0 => x = +3, written as (III). Anion is chloride. Thus: Pentaamminechlorocobalt(III) chloride."
  },
  {
    id: "chem-12",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Crystal Field Theory",
    marks: 4,
    negativeMarks: 0,
    text: "In an octahedral coordination field, the d-orbitals of a transition metal ion split into two degenerate sets: t₂g and eg. The t₂g set comprises which orbitals?",
    options: [
      "dx²-y² and dz²",
      "dxy, dyz, and dzx",
      "dxy, dx²-y², and dz²",
      "dyz, dzx, and dz²"
    ],
    correctOptionIndex: 1,
    explanation:
      "The ligands approach along the Cartesian x, y, and z axes. Orbitals pointing between the axes (dxy, dyz, dzx) experience lower electrostatic repulsion and form the lower-energy triply degenerate t₂g set."
  },
  {
    id: "chem-13",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "d-Block Elements & Magnetism",
    marks: 4,
    negativeMarks: 0,
    text: "What is the spin-only magnetic moment (μ) of a high-spin Fe²⁺ (Z = 26) ion in Bohr Magnetons (BM)?",
    options: ["0.0 BM", "2.83 BM", "4.90 BM", "5.92 BM"],
    correctOptionIndex: 2,
    explanation:
      "Fe: [Ar] 3d⁶ 4s². Fe²⁺: [Ar] 3d⁶. In a high-spin state, 3d⁶ has 4 unpaired electrons (n = 4). Spin-only magnetic moment μ = √(n(n+2)) = √(4(4+2)) = √24 ≈ 4.90 BM."
  },
  {
    id: "chem-14",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Periodic Classification & Oxides",
    marks: 4,
    negativeMarks: 0,
    text: "Which of the following metal oxides is amphoteric in nature, reacting with both acids and strong bases?",
    options: ["Na₂O", "CaO", "Al₂O₃", "SO₂"],
    correctOptionIndex: 2,
    explanation:
      "Na₂O and CaO are strongly basic metal oxides; SO₂ is an acidic non-metal oxide. Al₂O₃ (and ZnO) is amphoteric, reacting with HCl to form AlCl₃ and with aqueous NaOH to form sodium aluminate Na[Al(OH)₄]."
  },
  {
    id: "chem-15",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Haloalkanes (Organic Chemistry)",
    marks: 4,
    negativeMarks: 0,
    text: "Which of the following alkyl halides undergoes nucleophilic substitution via the S_N1 mechanism most rapidly?",
    options: [
      "CH₃–Cl (Chloromethane)",
      "CH₃–CH₂–Cl (Chloroethane)",
      "(CH₃)₂CH–Cl (2-Chloropropane)",
      "(CH₃)₃C–Cl (2-Chloro-2-methylpropane)"
    ],
    correctOptionIndex: 3,
    explanation:
      "The rate-determining step in an S_N1 reaction is carbocation formation. Tertiary (3°) carbocations (like the tert-butyl carbocation) are the most stable due to hyperconjugation and inductive stabilization (+I). Hence (CH₃)₃C–Cl reacts fastest."
  },
  {
    id: "chem-16",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Aldehydes & Ketones",
    marks: 4,
    negativeMarks: 0,
    text: "When an equimolar mixture of Benzaldehyde (C₆H₅CHO) and Formaldehyde (HCHO) is treated with concentrated aqueous NaOH (Crossed Cannizzaro Reaction), the major oxidation and reduction products formed are:",
    options: [
      "Sodium formate + Benzyl alcohol",
      "Sodium benzoate + Methanol",
      "Benzoic acid + Formic acid",
      "Benzyl alcohol + Methanol"
    ],
    correctOptionIndex: 0,
    explanation:
      "Formaldehyde is less sterically hindered and more electrophilic than benzaldehyde, so hydroxide attacks HCHO preferentially. Formaldehyde oxidizes to sodium formate (HCOONa), while benzaldehyde is reduced to benzyl alcohol (C₆H₅CH₂OH)."
  },
  {
    id: "chem-17",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Alcohols, Phenols & Ethers",
    marks: 4,
    negativeMarks: 0,
    text: "The Lucas reagent consists of concentrated HCl and anhydrous ZnCl₂. When tested with a primary (1°), secondary (2°), and tertiary (3°) alcohol at room temperature, turbidity appears immediately with:",
    options: [
      "Primary (1°) alcohol only",
      "Secondary (2°) alcohol only",
      "Tertiary (3°) alcohol only",
      "Both primary and secondary alcohols"
    ],
    correctOptionIndex: 2,
    explanation:
      "The Lucas test proceeds via carbocation intermediate formation. Tertiary alcohols form stable 3° carbocations immediately, producing insoluble alkyl chloride turbidity within seconds. 2° alcohols take ~5 minutes, while 1° alcohols do not react at room temperature."
  },
  {
    id: "chem-18",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Phenols & Named Reactions",
    marks: 4,
    negativeMarks: 0,
    text: "In the Reimer-Tiemann reaction of phenol with chloroform (CHCl₃) in aqueous NaOH to form salicylaldehyde, the active electrophilic intermediate is:",
    options: [
      "Carbocation (:CH⁺)",
      "Dichlorocarbene (:CCl₂)",
      "Trichloromethyl radical (•CCl₃)",
      "Chloronium ion (Cl⁺)"
    ],
    correctOptionIndex: 1,
    explanation:
      "Deprotonation of chloroform by hydroxide generates the trichloromethyl carbanion (⁻CCl₃), which eliminates a chloride ion via α-elimination to generate neutral, electron-deficient singlet Dichlorocarbene (:CCl₂), the active electrophile."
  },
  {
    id: "chem-19",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Amines",
    marks: 4,
    negativeMarks: 0,
    text: "What is the correct order of basic strength of methyl-substituted amines in aqueous solution?",
    options: [
      "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
      "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃",
      "CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃",
      "(CH₃)₂NH > (CH₃)₃N > CH₃NH₂ > NH₃"
    ],
    correctOptionIndex: 0,
    explanation:
      "In aqueous solution, basicity depends on inductive effect (+I), hydration energy (H-bonding), and steric hindrance. For methyl derivatives, the combined stability order of conjugate ammonium cations is 2° > 1° > 3° > NH₃ (i.e. (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃)."
  },
  {
    id: "chem-20",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "mcq",
    topic: "Biomolecules",
    marks: 4,
    negativeMarks: 0,
    text: "In the double-helical structure of DNA, Adenine pairs with Thymine via how many complementary hydrogen bonds?",
    options: ["1", "2", "3", "4"],
    correctOptionIndex: 1,
    explanation:
      "Watson-Crick base pairing specifies that Adenine forms 2 hydrogen bonds with Thymine (A = T), while Guanine forms 3 hydrogen bonds with Cytosine (G ≡ C)."
  },
  {
    id: "chem-21",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "numerical",
    topic: "Atomic Structure & d-Block",
    marks: 4,
    negativeMarks: 0,
    text: "What is the number of unpaired electrons in the gaseous ferric cation Fe³⁺ (atomic number Z = 26)? (Enter integer value)",
    numericalAnswer: 5,
    explanation:
      "Neutral Fe has electronic configuration [Ar] 3d⁶ 4s². Fe³⁺ loses the two 4s electrons and one 3d electron, giving [Ar] 3d⁵. In the 3d subshell, by Hund's rule, all 5 orbitals are singly occupied, so there are 5 unpaired electrons."
  },
  {
    id: "chem-22",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "numerical",
    topic: "Redox Reactions",
    marks: 4,
    negativeMarks: 0,
    text: "What is the oxidation state of Chromium (Cr) in Potassium Dichromate (K₂Cr₂O₇)? (Enter integer value)",
    numericalAnswer: 6,
    explanation:
      "Let oxidation state of Cr be x. Potassium is +1 and Oxygen is -2. Then: 2(+1) + 2(x) + 7(-2) = 0  =>  2 + 2x - 14 = 0  =>  2x = 12  =>  x = +6."
  },
  {
    id: "chem-23",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "numerical",
    topic: "Coordination Compounds",
    marks: 4,
    negativeMarks: 0,
    text: "In the complex ion [Co(en)₃]³⁺, where 'en' represents the bidentate ethylenediamine ligand, what is the coordination number of the central Cobalt ion? (Enter integer value)",
    numericalAnswer: 6,
    explanation:
      "Ethylenediamine (en = NH₂CH₂CH₂NH₂) is a bidentate ligand containing 2 nitrogen donor atoms. Since there are 3 en ligands attached, the total number of metal-ligand coordinate bonds is 3 × 2 = 6."
  },
  {
    id: "chem-24",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "numerical",
    topic: "Chemical Bonding & Organic Chemistry",
    marks: 4,
    negativeMarks: 0,
    text: "What is the total number of sigma (σ) bonds present in a single Benzene molecule (C₆H₆)? (Enter integer value)",
    numericalAnswer: 12,
    explanation:
      "In Benzene, there are 6 carbon-carbon (C-C) sigma bonds in the hexagonal ring and 6 carbon-hydrogen (C-H) sigma bonds. Total sigma bonds = 6 + 6 = 12 (along with 3 delocalized pi bonds)."
  },
  {
    id: "chem-25",
    subjectId: "chemistry",
    subjectName: "Chemistry",
    type: "numerical",
    topic: "Chemical Kinetics",
    marks: 4,
    negativeMarks: 0,
    text: "A chemical reaction has a rate constant k with units mol⁻¹ · L · s⁻¹ (or L · mol⁻¹ · s⁻¹). What is the overall order of this reaction? (Enter integer value)",
    numericalAnswer: 2,
    explanation:
      "The general SI unit of rate constant is (mol/L)^(1-n) · s⁻¹. For unit mol⁻¹ · L · s⁻¹, we have 1 - n = -1  =>  n = 2. Thus, it is a second-order reaction."
  }
];

