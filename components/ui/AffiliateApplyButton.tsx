"use client";

import GlowingCtaButton from "@/components/ui/GlowingCtaButton";
import { trackLeadConversion } from "@/lib/gtag";
import { LPUNEST_CONFIG } from "@/config/lpunest";

interface AffiliateApplyButtonProps {
  text: string;
  className?: string;
}

export default function AffiliateApplyButton({
  text,
  className = "",
}: AffiliateApplyButtonProps) {
  const handleClick = () => {
    trackLeadConversion(50.0, "INR");
    window.open(LPUNEST_CONFIG.links.affiliate, "_blank", "noopener,noreferrer");
  };

  return (
    <GlowingCtaButton
      text={text}
      className={className}
      onClick={handleClick}
    />
  );
}
