"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full py-8 px-4 sm:px-6 border-t border-border/80 bg-muted/30">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>{t.copyright}</span>
        <span>{t.madeWith}</span>
      </div>
    </footer>
  )
}
