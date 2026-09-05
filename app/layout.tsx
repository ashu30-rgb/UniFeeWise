import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPUNEST 2026 Calculator | UniFeeWise",
  description: "Calculate your LPUNEST 2026 ROI with UniFeeWise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0d1117] text-[#e6edf3] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
