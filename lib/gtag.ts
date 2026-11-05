/* eslint-disable @typescript-eslint/no-explicit-any */
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Fires a Google Ads conversion event for lead captures and CTA conversions.
 * Reads NEXT_PUBLIC_GOOGLE_ADS_ID and NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL.
 */
export function trackLeadConversion(value = 50.0, currency = "INR") {
  if (typeof window === "undefined") {
    return;
  }

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (typeof (window as any).gtag === "function") {
    if (adsId && conversionLabel) {
      (window as any).gtag("event", "conversion", {
        send_to: `${adsId}/${conversionLabel}`,
        value: value,
        currency: currency,
      });
    } else {
      // Graceful fallback for development / unconfigured environments
      console.log(
        "[Google Ads] Conversion event simulated (IDs not configured):",
        {
          value,
          currency,
        }
      );
    }
  } else {
    // gtag not loaded yet or blocked by user extensions
    if (process.env.NODE_ENV === "development") {
      console.log("[Google Ads] window.gtag is not defined on window.");
    }
  }
}
