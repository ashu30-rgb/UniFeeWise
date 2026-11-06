"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowRight, Calculator } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackLeadConversion } from "@/lib/gtag";
import { WHATSAPP_COMMUNITY_URL } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Fee Calculator", href: "/#calculator" },
    { label: "Mock Tests", href: "/mock-test", badge: "Free" },
    { label: "Scholarship Cutoffs", href: "/#cutoffs" },
    { label: "LPUNEST Discount", href: "/#discount" },
    { label: "FAQs", href: "/#faq" },
  ];

  const handleWhatsAppClick = () => {
    trackLeadConversion(30.0, "INR");
    window.open(WHATSAPP_COMMUNITY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      {/* Top Subtle Announcement Bar */}
      <div className="border-b border-emerald-900/30 bg-emerald-950 px-4 py-1.5 text-center text-[11px] text-emerald-200">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
            <WhatsAppIcon className="h-3.5 w-3.5 fill-current text-emerald-400" />
            Official Prep Desk:
          </span>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-1 font-bold text-white hover:text-emerald-300 underline underline-offset-2 transition cursor-pointer"
          >
            <span>Join LPUNEST 2027 WhatsApp Desk (Free Mock PDFs &amp; Slot Alerts)</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand & Edition Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 font-black tracking-tight text-slate-900 transition hover:opacity-90 whitespace-nowrap"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white shadow-sm shadow-orange-500/30">
              <Calculator className="h-4 w-4" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-950">
              Uni<span className="text-orange-600">Fee</span>Wise
            </span>
          </Link>
          <span className="hidden items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold text-orange-700 whitespace-nowrap xl:inline-flex">
            <Sparkles className="h-3 w-3 text-orange-500" />
            2027 Admission Edition
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-4 xl:gap-6 lg:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 text-xs xl:text-sm font-semibold tracking-tight text-slate-600 transition hover:text-orange-600 whitespace-nowrap"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[10px] font-extrabold text-emerald-800">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* WhatsApp Subtle Desk Link (Full pill on XL+) */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="hidden items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 whitespace-nowrap xl:inline-flex cursor-pointer shadow-xs"
            title="Join LPUNEST 2027 WhatsApp Prep & Cutoff Desk"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 fill-current text-emerald-600" />
            <span>Join WhatsApp Desk</span>
          </button>

          {/* WhatsApp Compact Icon (on LG screens to save space) */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="hidden items-center justify-center h-8 w-8 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100 cursor-pointer shadow-xs lg:inline-flex xl:hidden"
            title="Join LPUNEST 2027 WhatsApp Prep & Cutoff Desk"
            aria-label="Join WhatsApp Desk"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-600" />
          </button>

          {/* Form Discount CTA */}
          <a
            href="/#calculator"
            className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-orange-500/20 whitespace-nowrap sm:inline-flex"
          >
            <span>Get 20% Form Discount</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile CTA (Compact) */}
          <a
            href="/#calculator"
            className="rounded-full bg-orange-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-orange-700 whitespace-nowrap sm:hidden"
          >
            20% Off Code
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col space-y-3">
            {/* Mobile WhatsApp Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 cursor-pointer shadow-xs"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-600" />
              <span>Join LPUNEST 2027 WhatsApp Desk</span>
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-orange-600"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-extrabold text-emerald-800">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href="/#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm"
              >
                <span>Get 20% Form Discount (Code: LPUMZW722)</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
