import { Lekton } from "next/font/google";

// ? == Fonts ==
// ? https://nextjs.org/docs/app/building-your-application/optimizing/fonts

export const lekton = Lekton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lekton",
});

export const lektonBold = Lekton({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-lektonBold",
});
