"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  BookOpen,
  CheckCircle2,
  Tag,
  Sparkles,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LPUNEST_CONFIG } from "@/config/lpunest";

const DISCOUNT_CODE = LPUNEST_CONFIG.coupon.code;
const AFFILIATE_URL = LPUNEST_CONFIG.links.affiliate;
const WHATSAPP_COMMUNITY_URL = LPUNEST_CONFIG.links.whatsapp;

const STANDARD_WAIVERS: Record<ScholarshipTierKey, number> = {
  CATEGORY_A: 0.5,
  CATEGORY_B: 0.4,
  CATEGORY_C: 0.3,
  NONE: 0.0,
};

const SPECIALIZED_WAIVERS: Record<ScholarshipTierKey, number> = {
  CATEGORY_A: 0.3,
  CATEGORY_B: 0.25,
  CATEGORY_C: 0.2,
  NONE: 0.0,
};

export const BRANCH_CONFIG = {
  // B.Tech Engineering Programmes (Official 2027)
  "B.Tech CSE": {
    name: "B.Tech Computer Science & Engineering",
    short: "B.Tech CSE",
    category: "B.Tech",
    baseFee: 160000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech CSE (AI & ML)": {
    name: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    short: "B.Tech AI/ML",
    category: "B.Tech",
    baseFee: 180000,
    durationYears: 4,
    semesters: 8,
    waivers: SPECIALIZED_WAIVERS,
  },
  "B.Tech CSE (Data Science)": {
    name: "B.Tech CSE (Data Science with ML)",
    short: "B.Tech Data Science",
    category: "B.Tech",
    baseFee: 180000,
    durationYears: 4,
    semesters: 8,
    waivers: SPECIALIZED_WAIVERS,
  },
  "B.Tech CSE (Cyber Security)": {
    name: "B.Tech CSE (Cyber Security & Block Chain)",
    short: "B.Tech Cyber Security",
    category: "B.Tech",
    baseFee: 180000,
    durationYears: 4,
    semesters: 8,
    waivers: SPECIALIZED_WAIVERS,
  },
  "B.Tech IT": {
    name: "B.Tech Information Technology",
    short: "B.Tech IT",
    category: "B.Tech",
    baseFee: 160000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech ECE": {
    name: "B.Tech Electronics & Communication",
    short: "B.Tech ECE",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Mechanical": {
    name: "B.Tech Mechanical Engineering",
    short: "B.Tech Mechanical",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Civil": {
    name: "B.Tech Civil Engineering",
    short: "B.Tech Civil",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Electrical": {
    name: "B.Tech Electrical Engineering",
    short: "B.Tech Electrical",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Aerospace": {
    name: "B.Tech Aerospace Engineering",
    short: "B.Tech Aerospace",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Biotechnology": {
    name: "B.Tech Biotechnology",
    short: "B.Tech Biotech",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Robotics & Automation": {
    name: "B.Tech Robotics & Automation",
    short: "B.Tech Robotics",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "Integrated B.Tech CSE + MBA": {
    name: "Integrated B.Tech CSE + MBA (5 Years Dual Degree)",
    short: "B.Tech + MBA",
    category: "B.Tech",
    baseFee: 160000,
    durationYears: 5,
    semesters: 10,
    waivers: STANDARD_WAIVERS,
  },

  // Famous Under-Graduate Programmes
  BCA: {
    name: "Bachelor of Computer Applications (BCA)",
    short: "BCA",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "BCA (Hons)": {
    name: "BCA (Honours) / Specializations in Cloud & AI",
    short: "BCA (Hons)",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  BBA: {
    name: "Bachelor of Business Administration (BBA)",
    short: "BBA",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "BBA (Hons)": {
    name: "BBA (Honours) / Financial Markets",
    short: "BBA (Hons)",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  "B.Com": {
    name: "Bachelor of Commerce (B.Com)",
    short: "B.Com",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Sc (Hons) Agriculture": {
    name: "B.Sc (Honours) Agriculture (ICAR Accredited)",
    short: "B.Sc Agriculture",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 4,
    semesters: 8,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Pharm": {
    name: "Bachelor of Pharmacy (B.Pharm - PCI Approved)",
    short: "B.Pharm",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 4,
    semesters: 8,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Sc Biotechnology": {
    name: "B.Sc (Hons) Biotechnology",
    short: "B.Sc Biotech",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "BA LLB (Hons)": {
    name: "BA LLB (Honours) 5-Year Integrated Law",
    short: "BA LLB",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 5,
    semesters: 10,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Design": {
    name: "Bachelor of Design (Fashion / Interior / Product)",
    short: "B.Design",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 4,
    semesters: 8,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Arch": {
    name: "Bachelor of Architecture (COA Approved)",
    short: "B.Arch",
    category: "Under-Graduate",
    baseFee: 120000,
    durationYears: 5,
    semesters: 10,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "B.Physiotherapy": {
    name: "Bachelor of Physiotherapy (BPT)",
    short: "BPT",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 4.5,
    semesters: 8,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },
  "BHMCT (Hotel Management)": {
    name: "Bachelor of Hotel Management & Catering Tech",
    short: "BHMCT",
    category: "Under-Graduate",
    baseFee: 80000,
    durationYears: 4,
    semesters: 8,
    waivers: {
      CATEGORY_A: 0.5,
      CATEGORY_B: 0.4,
      CATEGORY_C: 0.3,
      NONE: 0.0,
    },
  },

  // Famous Post-Graduate Programmes
  MBA: {
    name: "Master of Business Administration (MBA)",
    short: "MBA",
    category: "Post-Graduate",
    baseFee: 200000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.3,
      CATEGORY_B: 0.25,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  "MBA (Specialized)": {
    name: "MBA (Hospital & Healthcare / Supply Chain / FinTech)",
    short: "MBA Specialized",
    category: "Post-Graduate",
    baseFee: 250000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.3,
      CATEGORY_B: 0.25,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  MCA: {
    name: "Master of Computer Applications (MCA)",
    short: "MCA",
    category: "Post-Graduate",
    baseFee: 100000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  "M.Tech CSE": {
    name: "Master of Technology in Computer Science",
    short: "M.Tech CSE",
    category: "Post-Graduate",
    baseFee: 100000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  "M.Pharm": {
    name: "Master of Pharmacy (Pharmaceutics / Pharmacology)",
    short: "M.Pharm",
    category: "Post-Graduate",
    baseFee: 120000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
  "M.Sc Biotechnology": {
    name: "Master of Science in Biotechnology",
    short: "M.Sc Biotech",
    category: "Post-Graduate",
    baseFee: 80000,
    durationYears: 2,
    semesters: 4,
    waivers: {
      CATEGORY_A: 0.4,
      CATEGORY_B: 0.3,
      CATEGORY_C: 0.2,
      NONE: 0.0,
    },
  },
} as const;

export type TargetBranch = keyof typeof BRANCH_CONFIG;

export const QUICK_POPULAR_BRANCHES: TargetBranch[] = [
  "B.Tech CSE",
  "B.Tech CSE (AI & ML)",
  "B.Tech ECE",
  "BCA",
  "BBA",
  "MBA",
];

export const COURSE_GROUPS: { group: string; branches: TargetBranch[] }[] = [
  {
    group: "B.Tech Engineering (4–5 Years)",
    branches: [
      "B.Tech CSE",
      "B.Tech CSE (AI & ML)",
      "B.Tech CSE (Data Science)",
      "B.Tech CSE (Cyber Security)",
      "B.Tech IT",
      "B.Tech ECE",
      "B.Tech Mechanical",
      "B.Tech Civil",
      "B.Tech Electrical",
      "B.Tech Aerospace",
      "B.Tech Biotechnology",
      "B.Tech Robotics & Automation",
      "Integrated B.Tech CSE + MBA",
    ],
  },
  {
    group: "Undergraduate Programmes (3–5 Years)",
    branches: [
      "BCA",
      "BCA (Hons)",
      "BBA",
      "BBA (Hons)",
      "B.Com",
      "B.Sc (Hons) Agriculture",
      "B.Pharm",
      "B.Sc Biotechnology",
      "BA LLB (Hons)",
      "B.Design",
      "B.Arch",
      "B.Physiotherapy",
      "BHMCT (Hotel Management)",
    ],
  },
  {
    group: "Postgraduate Programmes (2 Years)",
    branches: [
      "MBA",
      "MBA (Specialized)",
      "MCA",
      "M.Tech CSE",
      "M.Pharm",
      "M.Sc Biotechnology",
    ],
  },
];

export type ScholarshipTierKey = "CATEGORY_A" | "CATEGORY_B" | "CATEGORY_C" | "NONE";

export interface TierInfo {
  key: ScholarshipTierKey;
  label: string;
  categoryNumber: string;
  defaultWaiver: number;
  percentile: string;
  lpunestScore: string;
  jeeMain: string;
  boardMarks: string;
}

export const SCHOLARSHIP_TIERS: Record<ScholarshipTierKey, TierInfo> = {
  CATEGORY_A: {
    key: "CATEGORY_A",
    label: "Category 1",
    categoryNumber: "Cat 1",
    defaultWaiver: 0.5,
    percentile: "Top 10%",
    lpunestScore: "300 – 400",
    jeeMain: "≥ 90% %ile",
    boardMarks: "≥ 90% in 12th",
  },
  CATEGORY_B: {
    key: "CATEGORY_B",
    label: "Category 2",
    categoryNumber: "Cat 2",
    defaultWaiver: 0.4,
    percentile: "Top 11% – 20%",
    lpunestScore: "212 – 299",
    jeeMain: "80% – 89.9%",
    boardMarks: "85% – 89.9%",
  },
  CATEGORY_C: {
    key: "CATEGORY_C",
    label: "Category 3",
    categoryNumber: "Cat 3",
    defaultWaiver: 0.3,
    percentile: "Top 21% – 35%",
    lpunestScore: "150 – 211",
    jeeMain: "70% – 79.9%",
    boardMarks: "75% – 84.9%",
  },
  NONE: {
    key: "NONE",
    label: "Below Cutoff",
    categoryNumber: "Standard",
    defaultWaiver: 0.0,
    percentile: "Standard Slab",
    lpunestScore: "< 150",
    jeeMain: "< 70% %ile",
    boardMarks: "< 75% in 12th",
  },
};

type BasisMode = "lpunest" | "jee" | "boards";

const EXAM_FEE_PER_SEM = LPUNEST_CONFIG.fees.examFeeSemester;

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

interface CalculatorFormProps {
  initialBranch?: string;
}

export default function CalculatorForm({ initialBranch }: CalculatorFormProps) {
  const validInitialBranch: TargetBranch =
    initialBranch && initialBranch in BRANCH_CONFIG
      ? (initialBranch as TargetBranch)
      : "B.Tech CSE";

  // Calculator inputs state
  const [targetBranch, setTargetBranch] = useState<TargetBranch>(validInitialBranch);
  const [basisMode, setBasisMode] = useState<BasisMode>("lpunest");
  const [selectedTier, setSelectedTier] = useState<ScholarshipTierKey>("CATEGORY_A");
  const [expectedScore, setExpectedScore] = useState<number | "">(340);
  const [copiedCode, setCopiedCode] = useState(false);

  // Calculated values
  const branchInfo = BRANCH_CONFIG[targetBranch];
  const tierInfo = SCHOLARSHIP_TIERS[selectedTier];
  const activeWaiver = branchInfo.waivers[selectedTier] ?? tierInfo.defaultWaiver;
  const baseTuition = branchInfo.baseFee;
  const scholarshipAmount = Math.round(baseTuition * activeWaiver);
  const netTuitionPerSem = baseTuition - scholarshipAmount;
  const totalPerSemester = netTuitionPerSem + EXAM_FEE_PER_SEM;
  const totalDegreeCost = totalPerSemester * branchInfo.semesters;
  const totalScholarshipSavings = scholarshipAmount * branchInfo.semesters;

  // Handle Score Input change
  const handleScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setExpectedScore("");
      return;
    }
    const parsed = Number(val);
    if (!Number.isNaN(parsed)) {
      setExpectedScore(parsed);
      if (parsed >= 300) setSelectedTier("CATEGORY_A");
      else if (parsed >= 212) setSelectedTier("CATEGORY_B");
      else if (parsed >= 150) setSelectedTier("CATEGORY_C");
      else setSelectedTier("NONE");
    }
  };

  const handleTierSelect = (tierKey: ScholarshipTierKey) => {
    setSelectedTier(tierKey);
    if (tierKey === "CATEGORY_A") setExpectedScore(340);
    else if (tierKey === "CATEGORY_B") setExpectedScore(250);
    else if (tierKey === "CATEGORY_C") setExpectedScore(180);
    else setExpectedScore(120);
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

  const handleWhatsAppCommunityClick = () => {
    trackLeadConversion(30.0, "INR");
    if (WHATSAPP_COMMUNITY_URL.startsWith("http")) {
      window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = WHATSAPP_COMMUNITY_URL;
    }
  };

  return (
    <div id="calculator" className="scroll-mt-20 w-full">
      {/* 12-Column Responsive Split-Pane Workbench */}
      <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
        {/* =====================================================================
            LEFT COLUMN (7 cols): Step-by-Step Interactive Inputs
            ===================================================================== */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-7">
          {/* Open Coupon Direct Conversion Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-xs shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-600 text-white shadow-xs">
                <Tag className="h-3.5 w-3.5" />
              </span>
              <span className="font-extrabold text-orange-950">
                Official LPUNEST 20% Form Discount:
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3 py-1 font-mono font-black text-orange-600 hover:bg-orange-50 transition shadow-sm whitespace-nowrap cursor-pointer"
                aria-label="Copy coupon code LPUMZW722"
              >
                <span>{DISCOUNT_CODE}</span>
                {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={handleApplyPortalClick}
                className="hidden sm:inline-flex items-center gap-1 rounded-xl bg-orange-600 px-3 py-1 font-bold text-white hover:bg-orange-500 transition shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Apply (20% Off)</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
            {copiedCode && (
              <p className="w-full text-[11px] font-bold text-emerald-700 animate-fadeIn">
                ✓ Copied! Paste at checkout on admission.lpu.in to save 20%.
              </p>
            )}
          </div>

          {/* STEP 1: Program & Stream Selection */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white shadow-sm">
                1
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                  Select Program &amp; Stream
                </h3>
                <p className="text-xs text-slate-500">
                  Base tuition fees are locked per university brochure regulations.
                </p>
              </div>
            </div>

            {/* Quick Pills for Common Programs */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
              {QUICK_POPULAR_BRANCHES.map((branch) => {
                const isSelected = targetBranch === branch;
                return (
                  <button
                    key={branch}
                    type="button"
                    onClick={() => setTargetBranch(branch)}
                    className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all text-center cursor-pointer ${
                      isSelected
                        ? "border-orange-600 bg-orange-50 text-orange-900 shadow-sm ring-1 ring-orange-500"
                        : "border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {BRANCH_CONFIG[branch].short}
                  </button>
                );
              })}
            </div>

            {/* Detailed Select Dropdown Grouped by Official Category */}
            <div className="mt-3">
              <select
                id="calc-course"
                value={targetBranch}
                onChange={(e) => setTargetBranch(e.target.value as TargetBranch)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20"
              >
                {COURSE_GROUPS.map((grp) => (
                  <optgroup key={grp.group} label={grp.group}>
                    {grp.branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {BRANCH_CONFIG[branch].name} ({BRANCH_CONFIG[branch].durationYears} Years · {formatINR(BRANCH_CONFIG[branch].baseFee)}/sem)
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* STEP 2: Expected Scholarship Basis */}
          <div className="border-t border-slate-100 pt-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white shadow-sm">
                  2
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                    Expected Scholarship Basis
                  </h3>
                  <p className="text-xs text-slate-500">
                    Qualify via LPUNEST exam, JEE Main, or 12th Board marks.
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 sm:inline-block">
                {activeWaiver > 0 ? `${Math.round(activeWaiver * 100)}% Waiver Active` : "Standard Slabs"}
              </span>
            </div>

            {/* Segmented Mode Tabs */}
            <div className="mt-4 flex rounded-xl bg-slate-100 p-1 text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setBasisMode("lpunest")}
                className={`flex-1 rounded-lg py-1.5 transition text-center cursor-pointer ${
                  basisMode === "lpunest"
                    ? "bg-white font-bold text-slate-950 shadow-sm"
                    : "hover:text-slate-900"
                }`}
              >
                LPUNEST Score
              </button>
              <button
                type="button"
                onClick={() => setBasisMode("jee")}
                className={`flex-1 rounded-lg py-1.5 transition text-center cursor-pointer ${
                  basisMode === "jee"
                    ? "bg-white font-bold text-slate-950 shadow-sm"
                    : "hover:text-slate-900"
                }`}
              >
                JEE Main %ile
              </button>
              <button
                type="button"
                onClick={() => setBasisMode("boards")}
                className={`flex-1 rounded-lg py-1.5 transition text-center cursor-pointer ${
                  basisMode === "boards"
                    ? "bg-white font-bold text-slate-950 shadow-sm"
                    : "hover:text-slate-900"
                }`}
              >
                12th Board %
              </button>
            </div>

            {/* Tier Selectable Radio Cards */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {(Object.keys(SCHOLARSHIP_TIERS) as ScholarshipTierKey[]).map((key) => {
                const tier = SCHOLARSHIP_TIERS[key];
                const isSelected = selectedTier === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTierSelect(key)}
                    className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-orange-600 bg-orange-50/70 shadow-sm ring-1 ring-orange-500"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="text-xs font-black text-slate-900">
                        {tier.categoryNumber}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="h-4 w-4 text-orange-600" />
                      )}
                    </div>
                    <span className="mt-1 text-sm font-black text-slate-950">
                      {branchInfo.waivers[key] > 0 ? `${Math.round(branchInfo.waivers[key] * 100)}% Off` : "0% Off"}
                    </span>
                    <span className="mt-1 text-[11px] font-medium text-slate-500">
                      {basisMode === "lpunest"
                        ? tier.lpunestScore
                        : basisMode === "jee"
                        ? tier.jeeMain
                        : tier.boardMarks}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive LPUNEST Score Input Slider */}
            {basisMode === "lpunest" && (
              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between text-xs">
                  <label htmlFor="calc-score" className="font-bold text-slate-700">
                    Exact LPUNEST Score (0–400):
                  </label>
                  <span className="font-mono text-sm font-extrabold text-orange-600">
                    {expectedScore === "" ? 0 : expectedScore} / 400
                  </span>
                </div>
                <div className="mt-2.5 flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={400}
                    step={5}
                    value={expectedScore === "" ? 0 : expectedScore}
                    onChange={handleScoreChange}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-orange-600"
                  />
                  <input
                    id="calc-score"
                    type="number"
                    min={0}
                    max={400}
                    value={expectedScore}
                    onChange={handleScoreChange}
                    placeholder="Score"
                    className="w-20 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-center text-xs font-bold text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN (5 cols, sticky): Live Summary & Instant Action Card
            ===================================================================== */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 rounded-3xl bg-slate-900 p-6 sm:p-7 text-white shadow-2xl space-y-6 border border-slate-800">
          {/* Top Live Readout (Always Visible — Zero Gate) */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 whitespace-nowrap">
                  Live Fee Projection
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                {tierInfo.label} ({Math.round(activeWaiver * 100)}% Waiver)
              </span>
            </div>

            {/* Readout Numbers */}
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Base Tuition ({targetBranch})</span>
                <span className="font-semibold text-slate-200">{formatINR(baseTuition)}</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-semibold">
                <span>Scholarship Saved / Semester</span>
                <span>− {formatINR(scholarshipAmount)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Net Tuition / Semester</span>
                <span className="font-bold text-white text-sm">{formatINR(netTuitionPerSem)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Semester Examination Fee</span>
                <span className="font-semibold text-slate-200">
                  {formatINR(EXAM_FEE_PER_SEM)}
                </span>
              </div>
              <div className="border-t border-slate-800 pt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-300">Total Net / Semester</span>
                  <p className="text-[10px] text-slate-500">
                    Includes official ₹4,500/sem examination fee
                  </p>
                </div>
                <span className="text-xl font-black text-orange-400 sm:text-2xl">
                  {formatINR(totalPerSemester)}
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              COMPLETE 4-YEAR / DEGREE NET PAYABLE BREAKDOWN (Always Open — Zero Gate)
              =================================================================== */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-inner space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white">
                  Complete {branchInfo.durationYears}-Year ({branchInfo.semesters} Semesters) Net Breakdown
                </h3>
                <p className="text-[10px] text-slate-400">
                  Degree tuition forecast based on your selected scholarship bracket
                </p>
              </div>
              {scholarshipAmount > 0 && (
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400 whitespace-nowrap">
                  Save {formatINR(totalScholarshipSavings)} Total
                </span>
              )}
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Total Net Tuition ({branchInfo.semesters} Sems):</span>
                <span className="font-semibold text-slate-200">{formatINR(netTuitionPerSem * branchInfo.semesters)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Total Examination Fees ({branchInfo.semesters} Sems):</span>
                <span className="font-semibold text-slate-200">{formatINR(EXAM_FEE_PER_SEM * branchInfo.semesters)}</span>
              </div>
              <div className="border-t border-slate-800 pt-2.5 flex items-baseline justify-between text-white">
                <div>
                  <span className="text-xs font-bold text-slate-300">Grand Total Net Payable:</span>
                  <p className="text-[10px] text-slate-500">Official indicative {branchInfo.durationYears}-year total</p>
                </div>
                <span className="text-xl sm:text-2xl font-black text-orange-400">
                  {formatINR(totalDegreeCost)}
                </span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              HIGH-CONVERSION INSTANT ACTION BOX (Replacing Old Form)
              =================================================================== */}
          <div className="rounded-2xl border border-orange-500/40 bg-gradient-to-b from-orange-950/40 via-slate-900/90 to-slate-950 p-5 shadow-xl space-y-4">
            {/* Interactive One-Click Coupon Box */}
            <div
              role="button"
              tabIndex={0}
              onClick={handleCopyCode}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCopyCode();
                }
              }}
              className="group relative cursor-pointer rounded-2xl border-2 border-dashed border-orange-500/60 bg-slate-950/80 p-4 text-center transition hover:border-orange-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Click to copy coupon code LPUMZW722"
            >
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                <Tag className="h-3.5 w-3.5" />
                <span>Official 20% Form Discount (Boys: ₹800 | Girls: ₹400)</span>
              </div>

              <div className="mt-2.5 flex items-center justify-center gap-3">
                <span className="font-mono text-2xl font-black tracking-widest text-white">
                  {DISCOUNT_CODE}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition group-hover:bg-orange-500">
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedCode ? "Copied!" : "Click to Copy"}</span>
                </span>
              </div>

              <p className="mt-2 text-[11px] text-slate-300">
                {copiedCode ? (
                  <span className="font-bold text-emerald-400 animate-fadeIn">
                    ✓ Copied! Paste at checkout on admission.lpu.in
                  </span>
                ) : (
                  <span>Reduces official application form kit from ₹1,000 to ₹800 (for girls: ₹400).</span>
                )}
              </p>
            </div>

            {/* Primary CTA Button */}
            <button
              type="button"
              onClick={handleApplyPortalClick}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-600/25 transition hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-600/40 cursor-pointer"
            >
              <span>Apply on Official LPU Portal (20% Off) ↗</span>
            </button>

            {/* Secondary WhatsApp Community CTA Button */}
            <button
              type="button"
              onClick={handleWhatsAppCommunityClick}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 text-xs font-bold shadow-md shadow-emerald-950/40 transition text-center cursor-pointer"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current text-white" />
              <span>Join LPUNEST 2027 WhatsApp Prep &amp; Cutoff Desk</span>
            </button>

            {/* Quick Helpful Links */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
              <Link
                href="/mock-test"
                className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <Sparkles className="h-3 w-3" />
                <span>Attempt Free Mock Tests →</span>
              </Link>
              <Link
                href="/btech-previous-year-paper"
                className="inline-flex items-center gap-1 font-semibold text-orange-400 hover:text-orange-300 transition"
              >
                <BookOpen className="h-3 w-3" />
                <span>Download Sample PDF →</span>
              </Link>
            </div>
          </div>

          {/* Diplomatic Fee Accuracy Disclaimer Note */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-[11px] leading-relaxed text-slate-400 space-y-1">
            <span className="font-bold text-slate-300 block">
              Note on Fee Estimates:
            </span>
            <p>
              All tuition, scholarship brackets, and semester examination fee figures calculated above are indicative estimates based on publicly released university reference brochures to help families plan their budget. Because seat quotas, phase-wise scholarship cutoffs, and specialization fees may be updated by the university during the admission cycle, please always verify your final, exact fee structure directly on the official LPU website (www.lpu.in) or admission portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
