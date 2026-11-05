"use client";

import GlowingCtaButton from "@/components/ui/GlowingCtaButton";
import { trackLeadConversion } from "@/lib/gtag";

const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

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
    window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <GlowingCtaButton
      text={text}
      className={className}
      onClick={handleClick}
    />
  );
}
