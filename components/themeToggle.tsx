import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkMode } from "./svg";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="toggle-dark-mode"
      onClick={() => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
      }}
    >
      <DarkMode
        primary="fill-dark dark:fill-light"
        secondary="fill-light dark:fill-dark"
        className="relative top-0 w-5 h-5 rounded-sm"
      />
    </button>
  );
}
