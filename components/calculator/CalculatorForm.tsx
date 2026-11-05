"use client";

import { useState, useId, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Tag,
  Sparkles,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_COMMUNITY_URL } from "@/lib/constants";

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
    name: "B.Tech Electronics & Communication Engineering",
    short: "B.Tech ECE",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Mechanical": {
    name: "B.Tech Mechanical Engineering (ME)",
    short: "B.Tech Mechanical",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Civil": {
    name: "B.Tech Civil Engineering (CE)",
    short: "B.Tech Civil",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Electrical": {
    name: "B.Tech Electrical Engineering (EE)",
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
    name: "B.Tech Biotechnology (BT)",
    short: "B.Tech Biotech",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Tech Robotics & Automation": {
    name: "B.Tech Robotics and Automation",
    short: "B.Tech Robotics",
    category: "B.Tech",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "Integrated B.Tech CSE + MBA": {
    name: "Integrated B.Tech (CSE) – MBA (Dual Degree)",
    short: "B.Tech + MBA",
    category: "B.Tech",
    baseFee: 160000,
    durationYears: 5,
    semesters: 10,
    waivers: STANDARD_WAIVERS,
  },

  // Under-Graduate (UG) Top Programmes
  BCA: {
    name: "Bachelor of Computer Applications (BCA)",
    short: "BCA",
    category: "UG",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: STANDARD_WAIVERS,
  },
  BBA: {
    name: "Bachelor of Business Administration (BBA)",
    short: "BBA",
    category: "UG",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: STANDARD_WAIVERS,
  },
  "B.Com": {
    name: "Bachelor of Commerce (B.Com / B.Com Hons)",
    short: "B.Com",
    category: "UG",
    baseFee: 90000,
    durationYears: 3,
    semesters: 6,
    waivers: STANDARD_WAIVERS,
  },
  "B.Sc IT": {
    name: "B.Sc Information Technology (IT)",
    short: "B.Sc IT",
    category: "UG",
    baseFee: 80000,
    durationYears: 3,
    semesters: 6,
    waivers: STANDARD_WAIVERS,
  },
  "B.Pharm": {
    name: "Bachelor of Pharmacy (B.Pharm)",
    short: "B.Pharm",
    category: "UG",
    baseFee: 120000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "B.Des": {
    name: "Bachelor of Design (B.Design Fashion/Product/Interior)",
    short: "B.Des",
    category: "UG",
    baseFee: 140000,
    durationYears: 4,
    semesters: 8,
    waivers: STANDARD_WAIVERS,
  },
  "BA LLB": {
    name: "B.A., LL.B. (Hons.) 5-Year Integrated Law",
    short: "BA LLB",
    category: "UG",
    baseFee: 140000,
    durationYears: 5,
    semesters: 10,
    waivers: STANDARD_WAIVERS,
  },

  // Post-Graduate (PG) Top Programmes
  MBA: {
    name: "Master of Business Administration (MBA)",
    short: "MBA",
    category: "PG",
    baseFee: 220000,
    durationYears: 2,
    semesters: 4,
    waivers: STANDARD_WAIVERS,
  },
  MCA: {
    name: "Master of Computer Applications (MCA)",
    short: "MCA",
    category: "PG",
    baseFee: 100000,
    durationYears: 2,
    semesters: 4,
    waivers: STANDARD_WAIVERS,
  },
  "M.Tech CSE": {
    name: "M.Tech Computer Science & Engineering",
    short: "M.Tech CSE",
    category: "PG",
    baseFee: 100000,
    durationYears: 2,
    semesters: 4,
    waivers: STANDARD_WAIVERS,
  },
  "M.Com": {
    name: "Master of Commerce (M.Com)",
    short: "M.Com",
    category: "PG",
    baseFee: 60000,
    durationYears: 2,
    semesters: 4,
    waivers: STANDARD_WAIVERS,
  },
  "LL.B.": {
    name: "Bachelor of Laws (LL.B. 3-Year Graduate Route)",
    short: "LL.B.",
    category: "PG",
    baseFee: 90000,
    durationYears: 3,
    semesters: 6,
    waivers: STANDARD_WAIVERS,
  },
} as const;

export type TargetBranch = keyof typeof BRANCH_CONFIG;

export const QUICK_POPULAR_BRANCHES: TargetBranch[] = [
  "B.Tech CSE",
  "B.Tech CSE (AI & ML)",
  "BBA",
  "MBA",
  "BCA",
  "B.Tech ECE",
];

export const COURSE_GROUPS: { group: string; branches: TargetBranch[] }[] = [
  {
    group: "B.Tech Engineering Programmes (Official 2027)",
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
    group: "Top Under-Graduate (UG) Programmes",
    branches: [
      "BCA",
      "BBA",
      "B.Com",
      "B.Sc IT",
      "B.Pharm",
      "B.Des",
      "BA LLB",
    ],
  },
  {
    group: "Top Post-Graduate (PG) Programmes",
    branches: [
      "MBA",
      "MCA",
      "M.Tech CSE",
      "M.Com",
      "LL.B.",
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
    jeeMain: "90%+ %ile",
    boardMarks: "90%+ in 12th",
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

const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

const EXAM_FEE_PER_SEM = 4500;

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

  // Lead Gate Form states
  const [leadName, setLeadName] = useState("");
  const [leadWhatsapp, setLeadWhatsapp] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const nameInputId = useId();
  const whatsappInputId = useId();
  const emailInputId = useId();

  // Calculated values
  const branchInfo = BRANCH_CONFIG[targetBranch];
  const tierInfo = SCHOLARSHIP_TIERS[selectedTier];
  const activeWaiver = branchInfo.waivers[selectedTier] ?? tierInfo.defaultWaiver;
  const baseTuition = branchInfo.baseFee;
  const scholarshipAmount = Math.round(baseTuition * activeWaiver);
  const netTuitionPerSem = baseTuition - scholarshipAmount;
  const totalPerSemester = netTuitionPerSem + EXAM_FEE_PER_SEM;

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

  // Form submission
  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanName = leadName.trim();
    const cleanEmail = leadEmail.trim();
    let cleanPhone = leadWhatsapp.trim().replace(/\D/g, "");
    if (cleanPhone.length === 12 && cleanPhone.startsWith("91")) {
      cleanPhone = cleanPhone.slice(2);
    }

    if (!cleanName) {
      setFormError("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setFormError(
        "Please enter a valid 10-digit Indian WhatsApp mobile number (e.g. 9876543210)."
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          whatsapp: cleanPhone,
          email: cleanEmail,
          course: targetBranch,
          calculatedFee: totalPerSemester,
          expectedScore: typeof expectedScore === "number" ? expectedScore : null,
          assignedTier: selectedTier,
          baseTuitionPerSem: baseTuition,
          calculatedScholarshipAmount: scholarshipAmount,
        }),
      });

      const json = await res.json();
      if (!res.ok && !json.success) {
        throw new Error(json.error || "Failed to save details. Please try again.");
      }

      trackLeadConversion(50.0, "INR");
      setIsUnlocked(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Submission error.";
      setFormError(msg);
      if (process.env.NODE_ENV === "development") {
        trackLeadConversion(50.0, "INR");
        setIsUnlocked(true);
      }
    } finally {
      setIsSubmitting(false);
    }
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
    window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
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
                className="inline-flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3 py-1 font-mono font-black text-orange-600 hover:bg-orange-50 transition shadow-sm whitespace-nowrap"
                aria-label="Copy coupon code LPUMZW722"
              >
                <span>{DISCOUNT_CODE}</span>
                {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={handleApplyPortalClick}
                className="hidden sm:inline-flex items-center gap-1 rounded-xl bg-orange-600 px-3 py-1 font-bold text-white hover:bg-orange-500 transition shadow-sm whitespace-nowrap"
              >
                <span>Apply (20% Off)</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
            {copiedCode && (
              <p className="w-full text-[11px] font-bold text-emerald-700 animate-fadeIn">
                ✓ Copied! Paste at admission.lpu.in checkout to save 20%.
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
                    className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all text-center ${
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
                className={`flex-1 rounded-lg py-1.5 transition text-center ${
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
                className={`flex-1 rounded-lg py-1.5 transition text-center ${
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
                className={`flex-1 rounded-lg py-1.5 transition text-center ${
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
                    className={`flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all ${
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
            RIGHT COLUMN (5 cols, sticky): Live Summary & Soft-Gate Card
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
                <span className="font-semibold text-slate-200">{formatINR(EXAM_FEE_PER_SEM)}</span>
              </div>
              <div className="border-t border-slate-800 pt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-300">Total Net / Semester</span>
                  <p className="text-[10px] text-slate-500">Includes official ₹4,500/sem examination fee</p>
                </div>
                <span className="text-xl font-black text-orange-400 sm:text-2xl">
                  {formatINR(totalPerSemester)}
                </span>
              </div>
            </div>
          </div>

          {/* Open Coupon Card (Always Open & Visible for Instant Conversions) */}
          <div className="rounded-2xl border border-orange-500/40 bg-gradient-to-b from-orange-950/40 to-slate-950/70 p-4 text-center space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-orange-400 uppercase tracking-wider flex items-center gap-1">
                <Tag className="h-3 w-3" />
                Official 20% Form Discount
              </span>
              <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Active Code
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-xl sm:text-2xl font-black tracking-widest text-white bg-slate-900/90 px-3.5 py-1 rounded-xl border border-slate-700">
                {DISCOUNT_CODE}
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-3 py-2 text-xs font-bold text-white hover:bg-orange-500 transition shadow-sm whitespace-nowrap"
                aria-label="Copy coupon code LPUMZW722"
              >
                {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-300 leading-tight">
              Reduces application fee from ₹1,000 to <strong className="text-white">₹800</strong> (for girls: <strong className="text-white">₹400</strong>).
            </p>

            {copiedCode && (
              <p className="text-[11px] font-bold text-emerald-400 animate-fadeIn">
                ✓ Copied! Paste at admission.lpu.in checkout.
              </p>
            )}

            <button
              type="button"
              onClick={handleApplyPortalClick}
              className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-orange-600/20 transition hover:from-orange-600 hover:to-amber-600 whitespace-nowrap"
            >
              <span>Apply on Official LPU Portal (20% Off)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>

            {/* WhatsApp Community Desk CTA */}
            <div className="pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleWhatsAppCommunityClick}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 text-xs font-bold shadow-md shadow-emerald-950/40 transition leading-snug text-center cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current text-white" />
                <span>Join LPUNEST 2027 WhatsApp Prep &amp; Cutoff Desk (Free Mock PDFs &amp; Slot Alerts)</span>
              </button>
            </div>
          </div>

          {/* Bottom "Soft Gate" Unlock Box (For 4-Year Schedule + Free Mock Pack) */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 p-5 shadow-inner">
            {!isUnlocked ? (
              /* PRE-UNLOCK STATE: Ultra-Compact Lead Form */
              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                    <Lock className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-extrabold text-white sm:text-sm">
                      Unlock Full 4-Year Breakdown &amp; Free Mock Pack
                    </h4>
                    <p className="mt-0.5 text-[11px] text-slate-400 leading-tight">
                      Get semester-by-semester forecast &amp; printable LPUNEST study resources.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <input
                      id={nameInputId}
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-xl border border-r-0 border-slate-700 bg-slate-950 px-2.5 text-xs font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      id={whatsappInputId}
                      name="whatsapp"
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={10}
                      disabled={isSubmitting}
                      value={leadWhatsapp}
                      onChange={(e) => setLeadWhatsapp(e.target.value)}
                      placeholder="10-digit WhatsApp Number"
                      className="w-full rounded-r-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <input
                      id={emailInputId}
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {formError && (
                    <p className="text-[11px] font-semibold text-rose-400">
                      ⚠️ {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-500 disabled:opacity-60 flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>{isSubmitting ? "Unlocking Breakdown..." : "Get Full 4-Year Breakdown →"}</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 Zero spam. We never share your number.
                  </p>
                </form>

                {/* WhatsApp Community Desk Alternative Button */}
                <div className="pt-2 border-t border-slate-700/60">
                  <button
                    type="button"
                    onClick={handleWhatsAppCommunityClick}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 text-xs font-bold shadow-md shadow-emerald-950/40 transition leading-snug text-center cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current text-white" />
                    <span>Join LPUNEST 2027 WhatsApp Prep &amp; Cutoff Desk (Free Mock PDFs &amp; Slot Alerts)</span>
                  </button>
                </div>
              </div>
            ) : (
              /* POST-UNLOCK STATE: Detailed Schedule & Study Pack */
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Unlock className="h-4 w-4" />
                  <span>4-Year Breakdown &amp; Study Pack Unlocked</span>
                </div>

                {/* Degree Cost Summary Table */}
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-3.5 text-xs space-y-2">
                  <div className="font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex justify-between">
                    <span>{branchInfo.durationYears}-Year Total Forecast</span>
                    <span className="text-emerald-400">Save {formatINR(scholarshipAmount * branchInfo.semesters)}</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex justify-between">
                      <span>Total Net Tuition ({branchInfo.semesters} Sems):</span>
                      <span className="text-white font-medium">{formatINR(netTuitionPerSem * branchInfo.semesters)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Exam Fees ({branchInfo.semesters} Sems):</span>
                      <span className="text-white font-medium">{formatINR(EXAM_FEE_PER_SEM * branchInfo.semesters)}</span>
                    </div>
                    <div className="border-t border-slate-800 pt-1.5 flex justify-between text-xs font-bold text-white">
                      <span>Grand Total Net Payable:</span>
                      <span className="text-orange-400 font-black">{formatINR(totalPerSemester * branchInfo.semesters)}</span>
                    </div>
                  </div>
                </div>

                {/* Study Resources download links */}
                <div className="space-y-2 pt-1 text-center">
                  <Link
                    href="/btech-previous-year-paper"
                    className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-orange-400 hover:text-orange-300 w-full"
                  >
                    <BookOpen className="h-3 w-3" />
                    <span>Download LPUNEST Previous Year Paper (PDF) →</span>
                  </Link>
                  <a
                    href="#mock-test"
                    className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 w-full"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Attempt Free Online Practice Mock Tests →</span>
                  </a>

                  <div className="pt-2 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={handleWhatsAppCommunityClick}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 text-xs font-bold shadow-md shadow-emerald-950/40 transition leading-snug text-center cursor-pointer"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0 fill-current text-white" />
                      <span>Join LPUNEST 2027 WhatsApp Prep &amp; Cutoff Desk (Free Mock PDFs &amp; Slot Alerts)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Diplomatic Fee Accuracy Disclaimer Note */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-[11px] leading-relaxed text-slate-400 space-y-1">
            <span className="font-bold text-slate-300 block">
              Note on Fee Estimates:
            </span>
            <p>
              All tuition, scholarship brackets, hostel, and mess figures calculated above are indicative estimates based on publicly released university reference brochures to help families plan their budget. Because seat quotas, phase-wise scholarship cutoffs, and specialization fees may be updated by the university during the admission cycle, please always verify your final, exact fee structure directly on the official LPU website (www.lpu.in) or admission portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
