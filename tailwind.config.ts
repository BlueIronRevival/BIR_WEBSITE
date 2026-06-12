import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bir-navy": "#183649",
        "bir-blue": "#2868a8",
        "bir-cream": "#f5efe3",
        "bir-rust": "#a54c2d",
        "bir-charcoal": "#242a2d",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 35px rgba(24, 54, 73, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
