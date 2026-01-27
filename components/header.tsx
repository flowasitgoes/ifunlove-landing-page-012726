"use client"

import { useLanguage } from "./language-provider"

export function Header() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className="w-full py-6 px-4 sm:px-6 bg-background/40 backdrop-blur-sm">
      <header className="w-full">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">~</span>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground tracking-wide">
            {t.logo}
          </h1>
          <span className="text-2xl" aria-hidden="true">~</span>
        </div>
        <div className="flex items-center rounded-[1.25rem] border-2 border-border bg-card overflow-hidden shadow-[0_2px_8px_oklch(0.5_0.02_80/0.06)]">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              locale === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
            aria-label="Switch to English"
            aria-pressed={locale === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLocale("zh-TW")}
            className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              locale === "zh-TW"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
            aria-label="Switch to Traditional Chinese"
            aria-pressed={locale === "zh-TW"}
          >
            中文
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}
