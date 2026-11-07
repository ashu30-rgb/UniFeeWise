"use client";

import type { ButtonHTMLAttributes } from "react";

export interface GlowingCtaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function GlowingCtaButton({
  text,
  onClick,
  className = "",
  type = "button",
  ...rest
}: GlowingCtaButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3.5",
        "bg-gradient-to-r from-orange-500 to-amber-500",
        "font-bold text-white tracking-tight",
        "border-t border-white/25",
        "shadow-[0_8px_20px_rgba(249,115,22,0.28)]",
        "transition-all duration-150",
        "hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_10px_25px_rgba(255,107,0,0.35)]",
        "active:scale-[0.97]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b00]",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {text}
    </button>
  );
}
