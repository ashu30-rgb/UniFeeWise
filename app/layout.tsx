import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPUNEST 2027 Fee & Scholarship Calculator | UniFeeWise",
  description:
    "Calculate your exact 4-year LPU tuition and scholarship bracket in 30 seconds. Unlock 20% discount on LPUNEST application form with code LPUMZW722.",
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
