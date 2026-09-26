"use client";

import GlowingCtaButton from "@/components/ui/GlowingCtaButton";

const AFFILIATE_URL = "https://sms.lpu.in/r96ebAmny";

interface AffiliateApplyButtonProps {
  text: string;
  className?: string;
}

export default function AffiliateApplyButton({
  text,
  className = "",
}: AffiliateApplyButtonProps) {
  return (
    <GlowingCtaButton
      text={text}
      className={className}
      onClick={() => {
        window.open(AFFILIATE_URL, "_blank", "noopener,noreferrer");
      }}
    />
  );
}
