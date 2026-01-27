"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  type ReactNode,
} from "react"
import { type Locale, defaultLocale, getTranslations } from "@/lib/i18n"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const FADE_OUT_MS = 180
const FADE_IN_DELAY_MS = 50

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setLocale = useCallback((newLocale: Locale) => {
    if (newLocale === locale) return
    if (transitionRef.current) clearTimeout(transitionRef.current)

    setIsTransitioning(true)
    transitionRef.current = window.setTimeout(() => {
      transitionRef.current = null
      setLocaleState(newLocale)
      window.setTimeout(() => setIsTransitioning(false), FADE_IN_DELAY_MS)
    }, FADE_OUT_MS)
  }, [locale])

  useEffect(() => {
    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current)
    }
  }, [])

  const t = getTranslations(locale)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      <div
        className="transition-opacity duration-200 ease-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
        aria-busy={isTransitioning}
        aria-live="polite"
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
