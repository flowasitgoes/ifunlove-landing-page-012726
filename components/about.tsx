"use client"

import { useLanguage } from "./language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5">
          {t.aboutTitle}
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground leading-loose text-pretty">
          {t.aboutText}
        </p>
      </div>
    </section>
  )
}
