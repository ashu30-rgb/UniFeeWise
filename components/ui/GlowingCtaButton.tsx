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
        "inline-flex items-center justify-center rounded-lg px-6 py-3",
        "bg-gradient-to-r from-orange-500 to-amber-500",
        "font-bold text-white",
        "shadow-[0_0_15px_rgba(249,115,22,0.4)]",
        "transition-all duration-200",
        "hover:scale-105 hover:from-orange-600 hover:to-amber-600",
        "hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]",
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
