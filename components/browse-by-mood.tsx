"use client"

import { useLanguage } from "./language-provider"

export function BrowseByMood() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 sm:py-14 px-4 sm:px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-muted-foreground/50 text-base" aria-hidden="true">◐</span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
            {t.browseTitle}
          </h3>
          <span className="text-muted-foreground/50 text-base" aria-hidden="true">◐</span>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          {t.moods.map((mood) => (
            <button
              key={mood}
              type="button"
              className="px-5 py-2.5 text-sm sm:text-base font-semibold rounded-[1.1rem] border-2 border-border bg-card text-foreground [box-shadow:var(--shadow-soft)] hover:bg-accent/80 hover:border-primary/25 hover:[box-shadow:var(--shadow-card)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
