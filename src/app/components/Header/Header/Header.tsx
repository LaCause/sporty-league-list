"use client";

import Button from "@/design-system/Button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Theme } from "./Header.model";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (theme === "light" || theme === "dark") root.classList.add(theme);
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>("auto");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "auto";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const cycleTheme = () => {
    const next: Theme =
      theme === "auto" ? "light" : theme === "light" ? "dark" : "auto";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-color-primary-container/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-color-primary text-color-on-primary font-bold"
          >
            SG
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            SportyGroup
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span>Mode : </span>
            <Button
              type="button"
              intent={"outline"}
              aria-label="Changer le thème"
              title={`Thème: ${theme}`}
              onClick={cycleTheme}
            >
              {theme === "dark" ? (
                <span aria-hidden>🌙</span>
              ) : theme === "light" ? (
                <span aria-hidden>☀️</span>
              ) : (
                <span aria-hidden className="text-xs">
                  auto
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
