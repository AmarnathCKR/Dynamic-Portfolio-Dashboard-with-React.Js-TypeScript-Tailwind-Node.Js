/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;

    const stored = localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme: Theme = stored ?? (systemDark ? "dark" : "light");

    root.classList.toggle("dark", initialTheme === "dark");

    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    const isDark = root.classList.contains("dark");
    const nextTheme: Theme = isDark ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}
