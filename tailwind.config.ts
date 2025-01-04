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
      },
      fontFamily: {
        // libreCaslon: ["Libre Caslon Text", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
