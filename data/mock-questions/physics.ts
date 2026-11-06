import { CBTQuestion } from "./types";

export const physicsQuestions: CBTQuestion[] = [
  {
    id: "phy-01",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Mechanics & Projectile Motion",
    marks: 4,
    negativeMarks: 0,
    text: "A projectile is thrown from the ground such that its horizontal range R is related to its maximum height H by the relation R = 4√3 H. What is the angle of projection with the horizontal?",
    options: ["30°", "45°", "60°", "75°"],
    correctOptionIndex: 0,
    explanation:
      "We know R = (u² sin 2θ) / g = (2u² sin θ cos θ) / g, and H = (u² sin² θ) / (2g). Therefore, R / H = (4 cos θ) / (sin θ) = 4 / tan θ. Given R = 4√3 H, we have 4 / tan θ = 4√3  =>  tan θ = 1 / √3  =>  θ = 30°."
  },
  {
    id: "phy-02",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Work, Energy & Power",
    marks: 4,
    negativeMarks: 0,
    text: "A variable force F = (3x² + 2x) N acts on a particle of mass 2 kg moving along the x-axis. The work done by this force in displacing the particle from x = 0 m to x = 2 m is:",
    options: ["8 J", "10 J", "12 J", "16 J"],
    correctOptionIndex: 2,
    explanation:
      "Work done W = ∫ F dx from 0 to 2 = ∫ (3x² + 2x) dx = [x³ + x²] from 0 to 2 = (2³ + 2²) - 0 = 8 + 4 = 12 J."
  },
  {
    id: "phy-03",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Rotational Motion",
    marks: 4,
    negativeMarks: 0,
    text: "A solid cylinder and a hollow cylinder of the same mass M and outer radius R roll down an inclined plane without slipping. What is the ratio of the moment of inertia of the solid cylinder to that of the hollow cylinder about their central cylindrical axes?",
    options: ["1 : 2", "2 : 1", "1 : 1", "1 : 4"],
    correctOptionIndex: 0,
    explanation:
      "For a solid cylinder of mass M and radius R, I_solid = (1/2) M R². For a thin-walled hollow cylinder, I_hollow = M R². Hence, the ratio I_solid / I_hollow = ((1/2) M R²) / (M R²) = 1/2 or 1 : 2."
  },
  {
    id: "phy-04",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Gravitation",
    marks: 4,
    negativeMarks: 0,
    text: "The escape velocity on Earth is approximately 11.2 km/s. What would be the escape velocity on a hypothetical planet whose mass is twice that of Earth (2M) and radius is twice that of Earth (2R)?",
    options: ["5.6 km/s", "11.2 km/s", "22.4 km/s", "15.8 km/s"],
    correctOptionIndex: 1,
    explanation:
      "Escape velocity is given by v_e = √(2GM / R). For the new planet, v_e' = √(2G(2M) / (2R)) = √(2GM / R) = v_e = 11.2 km/s."
  },
  {
    id: "phy-05",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Thermodynamics",
    marks: 4,
    negativeMarks: 0,
    text: "A Carnot engine operates between a source at 127°C and a sink at 27°C. What is the theoretical maximum thermal efficiency of this engine?",
    options: ["20%", "25%", "33.3%", "50%"],
    correctOptionIndex: 1,
    explanation:
      "Convert temperatures to Kelvin: T_hot = 127 + 273 = 400 K, T_cold = 27 + 273 = 300 K. Carnot efficiency η = 1 - (T_cold / T_hot) = 1 - (300 / 400) = 1 - 0.75 = 0.25 or 25%."
  },
  {
    id: "phy-06",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Kinetic Theory & Thermodynamics",
    marks: 4,
    negativeMarks: 0,
    text: "For an ideal gas with ratio of specific heats γ = Cp / Cv at pressure P, the adiabatic bulk modulus of elasticity is:",
    options: ["P", "γ P", "P / γ", "γ / P"],
    correctOptionIndex: 1,
    explanation:
      "For an adiabatic process, PV^γ = constant. Differentiating: P γ V^(γ-1) dV + V^γ dP = 0  =>  dP / ( -dV / V ) = γ P. Since bulk modulus B = - V (dP / dV), B_adiabatic = γ P. (Whereas isothermal bulk modulus B_iso = P)."
  },
  {
    id: "phy-07",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Oscillations (SHM)",
    marks: 4,
    negativeMarks: 0,
    text: "A particle executes simple harmonic motion (SHM) with amplitude A and angular frequency ω. At what displacement x from the mean position does the magnitude of its velocity equal half of its maximum velocity?",
    options: ["x = A / 2", "x = (√3 / 2) A", "x = A / √2", "x = A / 4"],
    correctOptionIndex: 1,
    explanation:
      "Velocity in SHM is v = ω √(A² - x²). Maximum velocity v_max = ω A. Given v = (1/2) v_max: ω √(A² - x²) = (1/2) ω A  =>  √(A² - x²) = A / 2  =>  A² - x² = A² / 4  =>  x² = 3A² / 4  =>  x = (√3 / 2) A."
  },
  {
    id: "phy-08",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Wave Motion & Acoustics",
    marks: 4,
    negativeMarks: 0,
    text: "What is the ratio of the fundamental frequency of an open organ pipe of length L to that of a closed organ pipe of the same length L?",
    options: ["1 : 2", "2 : 1", "1 : 4", "4 : 1"],
    correctOptionIndex: 1,
    explanation:
      "Fundamental frequency of an open organ pipe: f_open = v / (2L). Fundamental frequency of a closed organ pipe: f_closed = v / (4L). Therefore, f_open / f_closed = (v / 2L) / (v / 4L) = 4 / 2 = 2 : 1."
  },
  {
    id: "phy-09",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Electrostatics & Gauss's Law",
    marks: 4,
    negativeMarks: 0,
    text: "A point charge q is placed at one of the eight corners of a cube of side a. The total electric flux passing through the entire cube is:",
    options: ["q / ε₀", "q / (2ε₀)", "q / (6ε₀)", "q / (8ε₀)"],
    correctOptionIndex: 3,
    explanation:
      "By symmetry, 8 identical cubes sharing that corner are required to completely enclose the point charge q. According to Gauss's Law, the total flux through the 8 cubes is q / ε₀. Hence, the flux passing through one cube is q / (8ε₀)."
  },
  {
    id: "phy-10",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Capacitance",
    marks: 4,
    negativeMarks: 0,
    text: "A parallel plate capacitor of plate area A and separation d has capacitance C₀ = ε₀A / d. A metallic conducting slab of thickness t (where t < d) is inserted between the plates. The new capacitance C becomes:",
    options: ["C₀ d / (d - t)", "C₀ (d - t) / d", "C₀ d / (d + t)", "C₀"],
    correctOptionIndex: 0,
    explanation:
      "For a conducting slab, dielectric constant K = ∞. The effective dielectric thickness reduces the air gap to (d - t). Hence C = ε₀A / (d - t) = (ε₀A / d) * (d / (d - t)) = C₀ d / (d - t)."
  },
  {
    id: "phy-11",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Current Electricity",
    marks: 4,
    negativeMarks: 0,
    text: "A copper wire of cross-sectional area A carries a steady electric current I. If the free electron density is n and the electronic charge is e, the drift velocity vd of electrons is given by:",
    options: ["vd = I / (n e A)", "vd = (n e A) / I", "vd = (I n e) / A", "vd = I A / (n e)"],
    correctOptionIndex: 0,
    explanation:
      "The fundamental relationship between current and drift velocity is I = n e A vd. Solving for drift velocity yields vd = I / (n e A)."
  },
  {
    id: "phy-12",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Current Electricity (Wheatstone Bridge)",
    marks: 4,
    negativeMarks: 0,
    text: "In a balanced Wheatstone bridge network, the ratio arms P and Q have resistances 10 Ω and 20 Ω respectively. If resistance R in the third arm is 15 Ω, what is the resistance S in the fourth arm?",
    options: ["7.5 Ω", "15 Ω", "30 Ω", "40 Ω"],
    correctOptionIndex: 2,
    explanation:
      "The condition for a balanced Wheatstone bridge is P / Q = R / S. Substituting the known values: 10 / 20 = 15 / S  =>  1 / 2 = 15 / S  =>  S = 30 Ω."
  },
  {
    id: "phy-13",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Current Electricity & Heating",
    marks: 4,
    negativeMarks: 0,
    text: "An electric heater connected to a constant voltage source V dissipates power P. If the heating element is replaced by another element of twice the resistance connected across the same voltage V, the new power dissipated is:",
    options: ["4 P", "2 P", "P / 2", "P / 4"],
    correctOptionIndex: 2,
    explanation:
      "Power dissipated across a constant voltage supply is P = V² / R. If R' = 2R, then P' = V² / (2R) = (1/2) (V² / R) = P / 2."
  },
  {
    id: "phy-14",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Magnetic Effects of Current",
    marks: 4,
    negativeMarks: 0,
    text: "What is the magnetic field induction B at the center of a circular wire loop of radius R carrying a steady current I?",
    options: ["μ₀ I / (2 R)", "μ₀ I / (4π R)", "μ₀ I / (2π R)", "μ₀ I / R"],
    correctOptionIndex: 0,
    explanation:
      "By the Biot-Savart Law, B = ∫ (μ₀ I dl sin 90°) / (4π R²) = (μ₀ I / (4π R²)) * 2πR = μ₀ I / (2 R)."
  },
  {
    id: "phy-15",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Electromagnetic Induction",
    marks: 4,
    negativeMarks: 0,
    text: "A conducting straight rod of length l moves with constant velocity v perpendicular to its length and perpendicular to a uniform magnetic field B. The motional electromotive force (EMF) induced across the ends of the rod is:",
    options: ["B l v", "B² l v", "B l² v / 2", "B l v²"],
    correctOptionIndex: 0,
    explanation:
      "The Lorentz force on charge carrier q inside the moving rod is F = q(v × B). The electric field produced along the rod is E = v B. Hence, motional EMF e = E * l = B l v."
  },
  {
    id: "phy-16",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Alternating Current (AC)",
    marks: 4,
    negativeMarks: 0,
    text: "In a series LCR alternating circuit with inductance L and capacitance C, the condition for electrical resonance is achieved at resonant angular frequency ω₀ equal to:",
    options: ["ω₀ = √(LC)", "ω₀ = 1 / √(LC)", "ω₀ = 1 / (LC)", "ω₀ = L / C"],
    correctOptionIndex: 1,
    explanation:
      "At resonance, inductive reactance equals capacitive reactance: X_L = X_C  =>  ω₀ L = 1 / (ω₀ C)  =>  ω₀² = 1 / (LC)  =>  ω₀ = 1 / √(LC)."
  },
  {
    id: "phy-17",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Alternating Current (AC)",
    marks: 4,
    negativeMarks: 0,
    text: "What is the power factor cos φ of a series LCR circuit when it is operating exactly at its resonant frequency?",
    options: ["0.0", "0.5", "0.707 (1/√2)", "1.0"],
    correctOptionIndex: 3,
    explanation:
      "At resonance, XL = XC, so net reactance X = XL - XC = 0. The circuit impedance Z = √(R² + X²) = R. Therefore, the power factor is cos φ = R / Z = R / R = 1.0 (purely resistive)."
  },
  {
    id: "phy-18",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Ray Optics",
    marks: 4,
    negativeMarks: 0,
    text: "A biconvex glass lens of refractive index n_g = 1.5 has focal length f_air in air. When completely immersed in water of refractive index n_w = 4/3, its focal length f_water becomes:",
    options: ["f_air / 4", "f_air / 2", "2 f_air", "4 f_air"],
    correctOptionIndex: 3,
    explanation:
      "By Lens Maker's Formula: 1/f_air = (1.5 - 1) * K = 0.5 * K. In water: 1/f_water = ((1.5 / (4/3)) - 1) * K = (9/8 - 1) * K = (1/8) * K. Dividing equations: (1/f_air) / (1/f_water) = 0.5 / (1/8) = 4  =>  f_water = 4 f_air."
  },
  {
    id: "phy-19",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Dual Nature of Matter & Radiation",
    marks: 4,
    negativeMarks: 0,
    text: "A proton and an alpha particle are accelerated through the same electrostatic potential difference V. What is the ratio of the de Broglie wavelength of the proton to that of the alpha particle (λp : λα)? (Mass of alpha = 4 * m_p, Charge of alpha = 2 * e)",
    options: ["1 : √8", "√8 : 1", "2 : 1", "4 : 1"],
    correctOptionIndex: 1,
    explanation:
      "The de Broglie wavelength is λ = h / √(2 m q V). Therefore: λp / λα = √( (m_α * q_α) / (m_p * q_p) ) = √( (4 m_p * 2 e) / (m_p * e) ) = √8 = 2√2. So the ratio is √8 : 1."
  },
  {
    id: "phy-20",
    subjectId: "physics",
    subjectName: "Physics",
    type: "mcq",
    topic: "Semiconductors & Logic Gates",
    marks: 4,
    negativeMarks: 0,
    text: "What is the boolean output Y of a two-input NOR gate when both inputs A and B are set to logical 0 (A = 0, B = 0)?",
    options: ["0", "1", "High Impedance", "Undefined"],
    correctOptionIndex: 1,
    explanation:
      "A NOR gate boolean expression is Y = ¬(A + B). When A = 0 and B = 0, A + B = 0. Inverting 0 gives ¬(0) = 1."
  },
  {
    id: "phy-21",
    subjectId: "physics",
    subjectName: "Physics",
    type: "numerical",
    topic: "Current Electricity",
    marks: 4,
    negativeMarks: 0,
    text: "Five resistors of resistance 4 Ω each are arranged in a balanced Wheatstone bridge network across terminals A and B, with one 4 Ω resistor connected across the galvanometer branch. What is the equivalent resistance between terminals A and B in Ohms? (Enter integer value)",
    numericalAnswer: 4,
    explanation:
      "Since all 4 arm resistors are 4 Ω, P/Q = R/S = 4/4 = 1. The bridge is balanced, meaning no current flows through the central 4 Ω resistor. The upper branch has two 4 Ω resistors in series (8 Ω) and the lower branch has two 4 Ω resistors in series (8 Ω). These two parallel branches yield R_eq = (8 * 8) / (8 + 8) = 4 Ω."
  },
  {
    id: "phy-22",
    subjectId: "physics",
    subjectName: "Physics",
    type: "numerical",
    topic: "Nuclear Physics",
    marks: 4,
    negativeMarks: 0,
    text: "When a nucleus of Uranium-238 (²³⁸₉₂U) decays via a radioactive series into stable Lead-206 (²⁰⁶₈₂Pb), how many alpha (α) particles are emitted in total? (Enter integer value)",
    numericalAnswer: 8,
    explanation:
      "Each alpha decay decreases the mass number A by 4 and atomic number Z by 2. Total change in mass number ΔA = 238 - 206 = 32. Number of alpha particles n_α = ΔA / 4 = 32 / 4 = 8. (Check atomic number: 92 - 2*(8) + 6*(β-) = 92 - 16 + 6 = 82)."
  },
  {
    id: "phy-23",
    subjectId: "physics",
    subjectName: "Physics",
    type: "numerical",
    topic: "Ray Optics",
    marks: 4,
    negativeMarks: 0,
    text: "A student holds a thin convex glass lens of focal length 25 cm in air. What is the optical power of this lens in Dioptres (D)? (Enter integer value)",
    numericalAnswer: 4,
    explanation:
      "Power P in Dioptres is given by P = 100 / f (in cm). For f = +25 cm: P = 100 / 25 = +4 D."
  },
  {
    id: "phy-24",
    subjectId: "physics",
    subjectName: "Physics",
    type: "numerical",
    topic: "Radioactivity & Modern Physics",
    marks: 4,
    negativeMarks: 0,
    text: "A radioactive sample decays such that 75% of the original nuclei disintegrate in 16 minutes. What is the half-life of this radioactive substance in minutes? (Enter integer value)",
    numericalAnswer: 8,
    explanation:
      "If 75% decays, the remaining un-decayed fraction is 25% = 1/4 = (1/2)². This corresponds to exactly 2 half-lives (n = 2). Given 2 * T_half = 16 minutes, T_half = 16 / 2 = 8 minutes."
  },
  {
    id: "phy-25",
    subjectId: "physics",
    subjectName: "Physics",
    type: "numerical",
    topic: "Alternating Current",
    marks: 4,
    negativeMarks: 0,
    text: "In a purely inductive AC circuit connected to a sinusoidal voltage source, what is the phase difference between the applied alternating voltage and the resulting alternating current in degrees? (Enter integer value)",
    numericalAnswer: 90,
    explanation:
      "In a purely inductive circuit, the alternating voltage leads the alternating current by a phase angle of π/2 radians, which equals 90 degrees."
  }
];
