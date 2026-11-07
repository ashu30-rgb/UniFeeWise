import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_DESCRIPTION =
  "UniFeeWise (unifeewise.vercel.app) is a free LPU 2027 admission toolkit: calculate exact 4-year B.Tech/MBA/BCA tuition, hostel & mess fees after LPUNEST or JEE scholarship, practice free 100-question CBT mock tests, and use verified coupon code LPUMZW722 for a flat 20% discount on the LPUNEST application form (₹800 Boys / ₹400 Girls).";

export const metadata: Metadata = {
  metadataBase: new URL("https://unifeewise.vercel.app"),
  title: {
    default:
      "UniFeeWise — LPUNEST 2027 Fee Calculator, Free CBT Mock Test & 20% Coupon Code (LPUMZW722)",
    template: "%s | UniFeeWise",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "lpunest 2027",
    "lpunest coupon code",
    "lpunest coupon code 2027",
    "lpunest discount code",
    "lpunest mock test",
    "lpunest mock test 2027",
    "lpunest previous year question paper",
    "lpunest fee calculator",
    "lpu btech cse fees",
    "lpu scholarship slab 2027",
    "LPUMZW722",
  ],
  applicationName: "UniFeeWise",
  authors: [{ name: "UniFeeWise Alumni & Student Network" }],
  creator: "UniFeeWise",
  publisher: "UniFeeWise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://unifeewise.vercel.app",
    siteName: "UniFeeWise",
    title:
      "UniFeeWise — LPUNEST 2027 Fee Calculator, Free CBT Mock Test & 20% Coupon Code (LPUMZW722)",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UniFeeWise — LPUNEST 2027 Fee Calculator, Free CBT Mock Test & 20% Coupon Code (LPUMZW722)",
    description: SITE_DESCRIPTION,
  },
  appleWebApp: {
    capable: true,
    title: "UniFeeWise",
    statusBarStyle: "default",
  },
  alternates: {
    canonical: "https://unifeewise.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "KHFkR-oJ0SPQIinQJS6iNf0j6BMAHfOqptG2vMS_v5M",
  },
  other: {
    "ai-content-summary": SITE_DESCRIPTION,
    abstract: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-444176056";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Names Verification Schema (Strips '- Vercel' suffix) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://unifeewise.vercel.app/#website",
              name: "UniFeeWise",
              alternateName: [
                "UniFeeWise LPUNEST Calculator",
                "UniFeeWise LPU Fee & Mock Test Hub",
              ],
              url: "https://unifeewise.vercel.app/",
            }),
          }}
        />

        <meta
          name="google-site-verification"
          content="KHFkR-oJ0SPQIinQJS6iNf0j6BMAHfOqptG2vMS_v5M"
        />
        <link rel="help" type="text/markdown" href="/llms.txt" title="LLM Context" />
        <link
          rel="alternate"
          type="text/plain"
          href="https://unifeewise.vercel.app/llms.txt"
          title="LLM Summary & Verified LPUNEST 2027 Data"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `,
          }}
        />
        <StructuredData />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased font-sans`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
