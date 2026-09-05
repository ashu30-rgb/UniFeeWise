"use client";

import { useEffect, useId, useState, type FormEvent } from "react";

export interface LeadFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
}

interface LeadGateDialogProps {
  isOpen: boolean;
  isSubmitting?: boolean;
  onClose: () => void;
  onSubmit: (leadData: LeadFormData) => void | Promise<void>;
}

export default function LeadGateDialog({
  isOpen,
  isSubmitting = false,
  onClose,
  onSubmit,
}: LeadGateDialogProps) {
  const titleId = useId();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !whatsappNumber.trim()) {
      setFormError("Please fill in all fields to unlock your results.");
      return;
    }

    setFormError(null);
    await onSubmit({
      fullName: fullName.trim(),
      email: email.trim(),
      whatsappNumber: whatsappNumber.trim(),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={() => {
        if (!isSubmitting) {
          onClose();
        }
      }}
    >
      <div
        className="w-full max-w-md rounded-xl border border-gray-800 bg-[#161b22] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5">
          <h2
            id={titleId}
            className="text-xl font-bold text-[#e6edf3]"
          >
            Unlock Your Scholarship Results
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your details to view your exact fees and claim the exclusive
            20% application discount code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lead-fullName"
              className="text-sm font-medium text-[#e6edf3]"
            >
              Full Name
            </label>
            <input
              id="lead-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              disabled={isSubmitting}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-3 py-2.5 text-[#e6edf3] placeholder:text-gray-500 outline-none transition focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] disabled:opacity-60"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lead-email"
              className="text-sm font-medium text-[#e6edf3]"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-3 py-2.5 text-[#e6edf3] placeholder:text-gray-500 outline-none transition focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] disabled:opacity-60"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="lead-whatsapp"
              className="text-sm font-medium text-[#e6edf3]"
            >
              WhatsApp Number
            </label>
            <input
              id="lead-whatsapp"
              name="whatsappNumber"
              type="tel"
              autoComplete="tel"
              required
              disabled={isSubmitting}
              value={whatsappNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#0d1117] px-3 py-2.5 text-[#e6edf3] placeholder:text-gray-500 outline-none transition focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] disabled:opacity-60"
              placeholder="+91 98765 43210"
            />
          </div>

          {formError ? (
            <p className="text-sm text-red-400" role="alert">
              {formError}
            </p>
          ) : null}

          <div className="mt-2 flex gap-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 disabled:opacity-60"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-lg bg-[#238636] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2ea043] disabled:opacity-60"
            >
              {isSubmitting ? "Unlocking..." : "See My Results"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
