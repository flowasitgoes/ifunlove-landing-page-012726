"use client"

import { useLanguage } from "./language-provider"

export function AdBanner() {
  const { t } = useLanguage()

  return (
    <div className="w-full px-4 sm:px-6 py-4">
      <div className="max-w-3xl mx-auto">
        <div
          className="w-full h-20 sm:h-24 rounded-[1.25rem] border-2 border-dashed border-border/50 bg-muted/40 flex items-center justify-center"
          role="complementary"
          aria-label={t.adLabel}
        >
          <span className="text-sm text-muted-foreground/60">{t.adLabel}</span>
        </div>
      </div>
    </div>
  )
}
