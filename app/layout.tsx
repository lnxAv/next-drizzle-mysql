import type { Metadata } from "next";
import "./globals.css";
import { lekton, lektonBold } from "./font/fonts";
import { NextThemeProvider } from "./providers/themeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lekton.variable} ${lektonBold.variable}`}
      suppressHydrationWarning
    >
      <body className="font-regular">
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
