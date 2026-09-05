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
        "inline-flex items-center justify-center rounded-lg bg-[#58a6ff] px-6 py-3",
        "font-bold text-[#0d1117]",
        "shadow-[0_0_15px_rgba(88,166,255,0.4)]",
        "transition-all duration-200",
        "hover:scale-105 hover:shadow-[0_0_25px_rgba(88,166,255,0.7)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58a6ff]",
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
