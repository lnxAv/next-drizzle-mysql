import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        dark: "#1E1E1E",
      },
      fontFamily: {
        regular: ["var(--font-lekton)"],
        bold: ["var(--font-lektonBold)"],
      },
      animation: {
        float: "float 20s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0,0)" },
          "40%": { transform: "translate(-0.20rem, 0.10rem)" },
          "60%": { transform: "translate(0.30rem,0.25rem)" },
          "80%": { transform: "translate(0.10rem,-0.30rem)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
