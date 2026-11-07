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

export const metadata: Metadata = {
  metadataBase: new URL("https://unifeewise.vercel.app"),
  title: {
    default: "LPUNEST 2027 Fee Calculator, Free Mock Test & Coupon Code LPUMZW722 | UniFeeWise",
    template: "%s | UniFeeWise",
  },
  description:
    "Calculate your exact 4-year LPU tuition and scholarship bracket in 30 seconds. Practice 100-question free CBT mock tests and unlock 20% off LPUNEST form with coupon LPUMZW722.",
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
    title: "LPUNEST 2027 Fee Calculator, Free Mock Test & Coupon Code LPUMZW722 | UniFeeWise",
    description:
      "Estimate exact 4-year tuition, predict your Category 1 scholarship, and practice 100-question computer-based mock tests. Save 20% on LPUNEST form with coupon LPUMZW722.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LPUNEST 2027 Fee Calculator, Free Mock Test & Coupon Code LPUMZW722",
    description:
      "Free 4-year fee breakdown, CBT mock test simulator, and official 20% discount coupon LPUMZW722 for LPUNEST 2027.",
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
