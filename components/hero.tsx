"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

const HERO_BG_SRC = "/ifunlove-landing-page.png"

export function Hero() {
  const { t } = useLanguage()
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = HERO_BG_SRC
    img.onload = () => setBgLoaded(true)
  }, [])

  return (
    <section
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-end md:justify-center px-4 sm:px-6 pb-10 md:pb-0 overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-no-repeat transition-opacity duration-700 ease-out [background-size:100%] [background-position:center_10%] md:[background-size:70%] md:[background-position:right]"
        style={{
          backgroundImage: `url('${HERO_BG_SRC}')`,
          opacity: bgLoaded ? 1 : 0,
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-3xl mx-auto md:ml-0 md:mr-[300px] text-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-relaxed text-balance tracking-tight">
          {t.headline}
        </h2>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {t.subheadline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#games"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-[1.25rem] bg-primary text-primary-foreground shadow-[0_4px_14px_oklch(0.55_0.1_155/0.25)] hover:shadow-[0_6px_20px_oklch(0.55_0.1_155/0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <span className="group-hover:animate-bounce" aria-hidden="true">›</span>
            {t.ctaGames}
          </a>
          <a
            href="#tools"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-[1.25rem] border-2 border-border bg-card text-foreground shadow-[0_2px_10px_oklch(0.4_0.02_80/0.06)] hover:shadow-[0_4px_14px_oklch(0.5_0.03_80/0.08)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 hover:[background:color-mix(in_oklab,var(--accent)_100%,transparent)] hover:[border-color:color-mix(in_oklab,lab(78_23.56_29.63)_100%,transparent)]"
          >
            {t.ctaTools}
          </a>
        </div>
      </div>
    </section>
  )
}
