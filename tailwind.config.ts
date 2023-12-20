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
    },
  },
  plugins: [],
};
export default config;
