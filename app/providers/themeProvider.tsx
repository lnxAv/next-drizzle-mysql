"use client";

// ? === Next-Themes ===
// ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
