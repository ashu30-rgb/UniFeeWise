import CalculatorForm from "@/components/calculator/CalculatorForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
      <div className="mx-auto mt-12 w-full max-w-xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
            Scholarship & ROI Calculator
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:text-lg">
            Calculate your exact LPUNEST 2026 scholarship, semester fees, and
            ROI instantly.
          </p>
        </header>

        <CalculatorForm />
      </div>
    </main>
  );
}
