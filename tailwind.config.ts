import type { Config } from "tailwindcss";

export default {
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
        purple: "var(--purple)",
        green: "var(--green)",
        cream: "var(--cream)",
        "fg-2": "var(--fg-2)",
        "fg-3": "var(--fg-3)",
        "fg-4": "var(--fg-4)",
      },
      fontFamily: {
        serif: ["Libre Caslon Text", "Georgia", "serif"],
        sans: ["Work Sans", "system-ui", "sans-serif"],
        wordmark: ["Cinzel", "Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
