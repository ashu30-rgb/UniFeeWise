import Image from "next/image";
import CalculatorForm from "@/components/calculator/CalculatorForm";

const CAMPUS_IMAGE =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80";

export default function Home() {
  return (
    <main className="min-h-screen bg-lpu-dark text-foreground">
      <section className="relative isolate min-h-[70vh] w-full overflow-hidden">
        <Image
          src={CAMPUS_IMAGE}
          alt="Lovely Professional University campus architecture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-lpu-dark via-lpu-dark/70 to-lpu-dark/40" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            UniFeeWise × LPU
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Scholarship & ROI Calculator for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              LPUNEST 2026
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-gray-300 sm:text-lg">
            Calculate your exact{" "}
            <span className="font-semibold text-orange-400">LPUNEST 2026</span>{" "}
            scholarship, semester fees, and ROI instantly — built for LPU
            aspirants.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 w-full max-w-xl px-4 pb-16">
        <CalculatorForm />
      </section>
    </main>
  );
}
