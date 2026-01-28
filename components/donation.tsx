"use client"

import { useLanguage } from "@/components/language-provider"

const STRIPE_URL = process.env.NEXT_PUBLIC_STRIPE_DONATE_URL ?? ""
const PATREON_URL = process.env.NEXT_PUBLIC_PATREON_URL ?? ""
const BMC_URL = process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL ?? ""

const links = [
  { url: STRIPE_URL, labelKey: "donateViaStripe" as const, color: "bg-[#635bff] hover:bg-[#5248e8] text-white border-0" },
  { url: PATREON_URL, labelKey: "donateViaPatreon" as const, color: "bg-[#ff424d] hover:bg-[#e63942] text-white border-0" },
  { url: BMC_URL, labelKey: "donateViaBmc" as const, color: "border-2 border-amber-600/80 bg-amber-500/10 text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 hover:border-amber-600" },
].filter((item) => item.url)

export function Donation() {
  const { t } = useLanguage()

  if (links.length === 0) return null

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-border/80 bg-muted/20">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
          {t.donationTitle}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed text-pretty mb-8">
          {t.donationTagline}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map(({ url, labelKey, color }) => (
            <a
              key={labelKey}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[1.25rem] text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${color}`}
            >
              {t[labelKey]}
              <span className="text-xs opacity-80" aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
