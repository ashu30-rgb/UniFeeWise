import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lpu: {
          dark: "#0d1117",
          surface: "#161b22",
          orange: "#ff6b00",
          amber: "#f97316",
        },
        accent: {
          DEFAULT: "#ff6b00",
          soft: "#f97316",
          glow: "rgba(255, 107, 0, 0.4)",
        },
      },
      boxShadow: {
        "lpu-glow": "0 0 20px rgba(255, 107, 0, 0.4)",
        "lpu-glow-lg": "0 0 28px rgba(249, 115, 22, 0.55)",
      },
      backgroundImage: {
        "lpu-cta":
          "linear-gradient(90deg, #f97316 0%, #ff6b00 50%, #f59e0b 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0.85) 55%, #0d1117 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
