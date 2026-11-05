"use client";

import { useState, useId, useMemo, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  Copy,
  Check,
  ExternalLink,
  Home as HomeIcon,
  Utensils,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { trackLeadConversion } from "@/lib/gtag";

export const BRANCH_CONFIG = {
  "B.Tech CSE": {
    name: "B.Tech Computer Science & Engineering",
    short: "B.Tech CSE",
    baseFee: 160000,
    durationYears: 4,
    semesters: 8,
  },
  "B.Tech ECE": {
    name: "B.Tech Electronics & Communication",
    short: "B.Tech ECE",
    baseFee: 160000,
    durationYears: 4,
    semesters: 8,
  },
  BBA: {
    name: "Bachelor of Business Administration",
    short: "BBA",
    baseFee: 120000,
    durationYears: 3,
    semesters: 6,
  },
  MBA: {
    name: "Master of Business Administration",
    short: "MBA",
    baseFee: 190000,
    durationYears: 2,
    semesters: 4,
  },
} as const;

export type TargetBranch = keyof typeof BRANCH_CONFIG;

export type ScholarshipTierKey = "CATEGORY_A" | "CATEGORY_B" | "CATEGORY_C" | "NONE";

export interface TierInfo {
  key: ScholarshipTierKey;
  label: string;
  categoryNumber: string;
  waiver: number; // e.g. 0.6 = 60%
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
    waiver: 0.6,
    percentile: "Top 10%",
    lpunestScore: "320 – 400",
    jeeMain: "90%+ %ile",
    boardMarks: "95%+ in 12th",
  },
  CATEGORY_B: {
    key: "CATEGORY_B",
    label: "Category 2",
    categoryNumber: "Cat 2",
    waiver: 0.5,
    percentile: "Top 11% – 20%",
    lpunestScore: "240 – 319",
    jeeMain: "80% – 89.9%",
    boardMarks: "90% – 94.9%",
  },
  CATEGORY_C: {
    key: "CATEGORY_C",
    label: "Category 3",
    categoryNumber: "Cat 3",
    waiver: 0.4,
    percentile: "Top 21% – 35%",
    lpunestScore: "150 – 239",
    jeeMain: "70% – 79.9%",
    boardMarks: "80% – 89.9%",
  },
  NONE: {
    key: "NONE",
    label: "Below Cutoff",
    categoryNumber: "Standard",
    waiver: 0.0,
    percentile: "Standard Slab",
    lpunestScore: "< 150",
    jeeMain: "< 70% %ile",
    boardMarks: "< 80% in 12th",
  },
};

export const HOSTEL_OPTIONS = [
  { id: "day_scholar", label: "Day Scholar (No Hostel)", feePerSem: 0 },
  { id: "4_seater_non_ac", label: "4-Seater Non-AC", feePerSem: 40000 },
  { id: "4_seater_ac", label: "4-Seater AC", feePerSem: 50000 },
  { id: "3_seater_non_ac", label: "3-Seater Non-AC", feePerSem: 45000 },
  { id: "3_seater_ac", label: "3-Seater AC", feePerSem: 57500 },
  { id: "2_seater_ac", label: "2-Seater AC", feePerSem: 70000 },
  { id: "1_seater_ac", label: "1-Seater AC (Single)", feePerSem: 90000 },
] as const;

export type HostelOptionId = (typeof HOSTEL_OPTIONS)[number]["id"];

export const MESS_OPTIONS = [
  { id: "none", label: "None / Day Scholar", feePerSem: 0 },
  { id: "standard_veg", label: "Standard Mess (Vegetarian)", feePerSem: 22500 },
  { id: "special_non_veg", label: "Special Mess (Veg + Non-Veg)", feePerSem: 27500 },
] as const;

export type MessOptionId = (typeof MESS_OPTIONS)[number]["id"];

type BasisMode = "lpunest" | "jee" | "boards";

const DISCOUNT_CODE = "LPUMZW722";
const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

const EXAM_FEE_PER_SEM = 4500;
const LAUNDRY_FEE_PER_SEM_HOSTEL = 2500;

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
  const [hostelId, setHostelId] = useState<HostelOptionId>("4_seater_ac");
  const [messId, setMessId] = useState<MessOptionId>("standard_veg");

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
  const baseTuition = branchInfo.baseFee;
  const scholarshipAmount = Math.round(baseTuition * tierInfo.waiver);
  const netTuitionPerSem = baseTuition - scholarshipAmount;

  const selectedHostel = useMemo(
    () => HOSTEL_OPTIONS.find((h) => h.id === hostelId) ?? HOSTEL_OPTIONS[2],
    [hostelId]
  );
  const selectedMess = useMemo(
    () => MESS_OPTIONS.find((m) => m.id === messId) ?? MESS_OPTIONS[1],
    [messId]
  );

  const isHosteler = selectedHostel.feePerSem > 0;
  const recurringLaundry = isHosteler ? LAUNDRY_FEE_PER_SEM_HOSTEL : 0;
  const totalPerSemester =
    netTuitionPerSem +
    selectedHostel.feePerSem +
    selectedMess.feePerSem +
    EXAM_FEE_PER_SEM +
    recurringLaundry;

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
      if (parsed >= 320) setSelectedTier("CATEGORY_A");
      else if (parsed >= 240) setSelectedTier("CATEGORY_B");
      else if (parsed >= 150) setSelectedTier("CATEGORY_C");
      else setSelectedTier("NONE");
    }
  };

  const handleTierSelect = (tierKey: ScholarshipTierKey) => {
    setSelectedTier(tierKey);
    if (tierKey === "CATEGORY_A") setExpectedScore(350);
    else if (tierKey === "CATEGORY_B") setExpectedScore(275);
    else if (tierKey === "CATEGORY_C") setExpectedScore(190);
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
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      setCopiedCode(false);
    }
  };

  const handleApplyPortalClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="calculator" className="scroll-mt-20 w-full">
      {/* 12-Column Responsive Split-Pane Workbench */}
      <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
        {/* =====================================================================
            LEFT COLUMN (7 cols): Step-by-Step Interactive Inputs
            ===================================================================== */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
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
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(Object.keys(BRANCH_CONFIG) as TargetBranch[]).map((branch) => {
                const isSelected = targetBranch === branch;
                return (
                  <button
                    key={branch}
                    type="button"
                    onClick={() => setTargetBranch(branch)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition-all text-center ${
                      isSelected
                        ? "border-orange-600 bg-orange-50 text-orange-900 shadow-sm"
                        : "border-slate-200 bg-slate-50/70 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {branch}
                  </button>
                );
              })}
            </div>

            {/* Detailed Select Dropdown */}
            <div className="mt-3">
              <select
                id="calc-course"
                value={targetBranch}
                onChange={(e) => setTargetBranch(e.target.value as TargetBranch)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20"
              >
                {(Object.keys(BRANCH_CONFIG) as TargetBranch[]).map((branch) => (
                  <option key={branch} value={branch}>
                    {BRANCH_CONFIG[branch].name} ({BRANCH_CONFIG[branch].durationYears} Years · {formatINR(BRANCH_CONFIG[branch].baseFee)}/sem)
                  </option>
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
                {tierInfo.waiver > 0 ? `${tierInfo.waiver * 100}% Waiver Active` : "Standard Slabs"}
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
                      {tier.waiver > 0 ? `${tier.waiver * 100}% Off` : "0% Off"}
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

          {/* STEP 3: Hostel & Mess Preferences */}
          <div className="border-t border-slate-100 pt-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white shadow-sm">
                3
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                  Hostel &amp; Mess Preferences
                </h3>
                <p className="text-xs text-slate-500">
                  Choose your room type (AC/Non-AC) and optional dining plan.
                </p>
              </div>
            </div>

            {/* Hostel Selector */}
            <div className="space-y-1.5">
              <label
                htmlFor="calc-hostel"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700"
              >
                <HomeIcon className="h-3.5 w-3.5 text-slate-500" />
                Accommodation Room Type
              </label>
              <select
                id="calc-hostel"
                value={hostelId}
                onChange={(e) => setHostelId(e.target.value as HostelOptionId)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20"
              >
                {HOSTEL_OPTIONS.map((hostel) => (
                  <option key={hostel.id} value={hostel.id}>
                    {hostel.label} {hostel.feePerSem > 0 ? `(${formatINR(hostel.feePerSem)}/sem)` : "(₹0)"}
                  </option>
                ))}
              </select>
            </div>

            {/* Mess Selector */}
            <div className="space-y-1.5">
              <label
                htmlFor="calc-mess"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700"
              >
                <Utensils className="h-3.5 w-3.5 text-slate-500" />
                Mess &amp; Dining Plan
              </label>
              <select
                id="calc-mess"
                value={messId}
                onChange={(e) => setMessId(e.target.value as MessOptionId)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20"
              >
                {MESS_OPTIONS.map((mess) => (
                  <option key={mess.id} value={mess.id}>
                    {mess.label} {mess.feePerSem > 0 ? `(${formatINR(mess.feePerSem)}/sem)` : "(₹0)"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN (5 cols, sticky): Live Summary & Soft-Gate Card
            ===================================================================== */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 rounded-3xl bg-slate-900 p-6 sm:p-7 text-white shadow-2xl space-y-6 border border-slate-800">
          {/* Top Live Readout (Always Visible — Zero Gate) */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Live Fee Projection
                </span>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                {tierInfo.label} ({tierInfo.waiver * 100}% Waiver)
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
              {selectedHostel.feePerSem > 0 && (
                <div className="flex items-center justify-between text-slate-400">
                  <span>Hostel ({selectedHostel.label.split("(")[0]})</span>
                  <span className="font-semibold text-slate-200">{formatINR(selectedHostel.feePerSem)}</span>
                </div>
              )}
              {selectedMess.feePerSem > 0 && (
                <div className="flex items-center justify-between text-slate-400">
                  <span>Mess ({selectedMess.label.split("(")[0]})</span>
                  <span className="font-semibold text-slate-200">{formatINR(selectedMess.feePerSem)}</span>
                </div>
              )}
              <div className="border-t border-slate-800 pt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-300">Total Net / Semester</span>
                  <p className="text-[10px] text-slate-500">Includes exam & laundry fee</p>
                </div>
                <span className="text-xl font-black text-orange-400 sm:text-2xl">
                  {formatINR(totalPerSemester)}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom "Soft Gate" Unlock Box (Inside the Card) */}
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
                      Unlock Full 4-Year Breakdown + 80% Discount Code
                    </h4>
                    <p className="mt-0.5 text-[11px] text-slate-400 leading-tight">
                      Get semester-by-semester forecast &amp; coupon <strong className="text-orange-400 font-mono">LPUMZW722</strong>.
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
                    className="w-full rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-orange-500 disabled:opacity-60 flex items-center justify-center gap-1.5"
                  >
                    <span>{isSubmitting ? "Unlocking Breakdown..." : "Unlock Full Breakdown & 80% Code →"}</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 Zero spam. We never share your number.
                  </p>
                </form>
              </div>
            ) : (
              /* POST-UNLOCK STATE: Coupon Code + Detailed 4-Year Schedule */
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Unlock className="h-4 w-4" />
                  <span>Breakdown &amp; Coupon Unlocked</span>
                </div>

                {/* Prominent One-Click Coupon Card */}
                <div className="rounded-xl border border-orange-500/50 bg-orange-950/40 p-3.5 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    Official LPUNEST 80% Form Discount
                  </span>
                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="font-mono text-xl font-black tracking-widest text-white">
                      {DISCOUNT_CODE}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1 rounded-lg bg-orange-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-orange-500 transition"
                      aria-label="Copy coupon code"
                    >
                      {copiedCode ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedCode ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <p className="mt-1 text-[10px] text-slate-300">
                    Reduces form fee from ₹1,000 to ₹200 (for girls: ₹100).
                  </p>
                </div>

                {/* Primary Apply CTA Button */}
                <button
                  type="button"
                  onClick={handleApplyPortalClick}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-orange-600/30 transition hover:from-orange-600 hover:to-amber-600"
                >
                  <span>Apply on Official LPU Portal (80% Off)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>

                {/* 4-Year Cost Summary Table */}
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-xs space-y-2">
                  <div className="font-bold text-slate-200 border-b border-slate-800 pb-1.5 flex justify-between">
                    <span>{branchInfo.durationYears}-Year Total Forecast</span>
                    <span className="text-emerald-400">Save {formatINR(scholarshipAmount * branchInfo.semesters)}</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-400">
                    <div className="flex justify-between">
                      <span>Total Net Tuition ({branchInfo.semesters} Sems):</span>
                      <span className="text-white font-medium">{formatINR(netTuitionPerSem * branchInfo.semesters)}</span>
                    </div>
                    {selectedHostel.feePerSem > 0 && (
                      <div className="flex justify-between">
                        <span>Total Hostel Accommodation:</span>
                        <span className="text-white font-medium">{formatINR(selectedHostel.feePerSem * branchInfo.semesters)}</span>
                      </div>
                    )}
                    {selectedMess.feePerSem > 0 && (
                      <div className="flex justify-between">
                        <span>Total Dining Mess:</span>
                        <span className="text-white font-medium">{formatINR(selectedMess.feePerSem * branchInfo.semesters)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Exam &amp; Recurring Fees:</span>
                      <span className="text-white font-medium">{formatINR((EXAM_FEE_PER_SEM + recurringLaundry) * branchInfo.semesters)}</span>
                    </div>
                    <div className="border-t border-slate-800 pt-1.5 flex justify-between text-xs font-bold text-white">
                      <span>Grand Total Net Payable:</span>
                      <span className="text-orange-400 font-black">{formatINR(totalPerSemester * branchInfo.semesters)}</span>
                    </div>
                  </div>
                </div>

                {/* Study Resources download links */}
                <div className="text-center pt-1">
                  <Link
                    href="/btech-previous-year-paper"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-400 hover:text-orange-300"
                  >
                    <BookOpen className="h-3 w-3" />
                    <span>Download LPUNEST B.Tech Previous Year Paper (PDF) →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
