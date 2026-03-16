"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { useLanguage } from "./language-provider"

const EGGCUTE_URL = "https://eggcute.ifunlove.com"
const PRAY_URL = "https://pray.ifunlove.com"
const KEELUNG_COOK_URL = "https://keelung-cook.ifunlove.com/"
const JUMPER_URL = "https://jumper.ifunlove.com/home"
const STALL_RUN_URL = "https://stall-run.ifunlove.com"
const STREET_FOOD_URL = "https://street-food.ifunlove.com/"
const SUMMARY_URL = "https://summary.ifunlove.com/"
const ZODIAC_URL = "https://zodiac.ifunlove.com/"

type ContentItem = {
  name: string
  description: string
  url: string
}

function ContentCard({
  item,
  buttonText,
  icon,
  featured,
  featuredStyle,
  readMore,
  readLess,
}: {
  item: ContentItem
  buttonText: string
  icon: string
  featured?: boolean
  featuredStyle?: "violet" | "yellow" | "lightblue" | "green" | "lightyellow" | "wheat" | "peach" | "cream"
  readMore: string
  readLess: string
}) {
  const [expanded, setExpanded] = useState(false)
  const [isClamped, setIsClamped] = useState(false)
  const descRef = useRef<HTMLParagraphElement>(null)
  const isEggCute = item.url === EGGCUTE_URL
  const isPrayFeatured = item.url === PRAY_URL && featuredStyle === "yellow"
  const isKeelungCookFeatured = item.url === KEELUNG_COOK_URL && featuredStyle === "lightblue"
  const isJumperFeatured = item.url === JUMPER_URL && featuredStyle === "green"
  const isSummaryFeatured = item.url === SUMMARY_URL && featuredStyle === "lightyellow"
  const isZodiacFeatured = item.url === ZODIAC_URL && featuredStyle === "wheat"
  const isStallRunFeatured = item.url === STALL_RUN_URL && featuredStyle === "peach"
  const isStreetFoodFeatured = item.url === STREET_FOOD_URL && featuredStyle === "cream"

  const checkClamped = () => {
    if (!expanded && descRef.current) {
      setIsClamped(descRef.current.scrollHeight > descRef.current.clientHeight)
    }
  }

  useLayoutEffect(() => {
    checkClamped()
    const ro = new ResizeObserver(checkClamped)
    const el = descRef.current
    if (el) ro.observe(el)
    return () => ro.disconnect()
  }, [expanded, item.description])

  const showToggle = isClamped || expanded

  const descriptionBlock = (
    <>
      <p
        ref={descRef}
        className={`mt-2 text-sm text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}
      >
        {item.description}
      </p>
      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-1.5 text-sm font-medium text-primary hover:underline focus:outline-none focus:underline"
        >
          {expanded ? readLess : readMore}
        </button>
      )}
    </>
  )

  if (isStallRunFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#ffddd0] bg-[#fff0e6] dark:bg-orange-950/20 dark:border-orange-800/40 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#ffd4c4] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#ffddd0] dark:border-t-orange-800/80 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-orange-800 dark:text-orange-200 bg-white/90 dark:bg-orange-900/80 shadow-sm rotate-12 border border-[#ffddd0]/80">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isStreetFoodFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#f5ecd0] bg-[#fef9e7] dark:bg-amber-950/20 dark:border-amber-800/40 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#ede4c4] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#f5ecd0] dark:border-t-amber-800/80 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-amber-800 dark:text-amber-200 bg-white/90 dark:bg-amber-900/80 shadow-sm rotate-12 border border-[#f5ecd0]/80">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isZodiacFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#e8e0d0] bg-[#d2ccbf] dark:bg-amber-950/20 dark:border-amber-800/40 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#ddd5c4] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#e8e0d0] dark:border-t-amber-800/80 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-amber-800 dark:text-amber-200 bg-white/90 dark:bg-amber-900/80 shadow-sm rotate-12 border border-[#e8e0d0]/80">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isSummaryFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#eeee99] bg-[#ffffbb] dark:bg-yellow-950/30 dark:border-yellow-800/50 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#dddd88] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#eeee99] dark:border-t-yellow-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-yellow-800 dark:text-yellow-200 bg-white/90 dark:bg-yellow-900/80 shadow-sm rotate-12 border border-[#eeee99]/80">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isJumperFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#9ed68a] bg-[#d3e2c9] dark:bg-green-950/30 dark:border-green-800/50 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#8ed078] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#9ed68a] dark:border-t-green-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-green-800 dark:text-green-200 bg-white/90 dark:bg-green-900/80 shadow-sm rotate-12 border border-[#9ed68a]/80">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isKeelungCookFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-[#b0e8fb] bg-[#d9f4fd] dark:bg-sky-950/30 dark:border-sky-800/50 p-5 [box-shadow:var(--shadow-soft)] hover:border-[#99e0f9] hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#b0e8fb] dark:border-t-sky-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-sky-700 dark:text-sky-200 bg-white/90 dark:bg-sky-900/80 shadow-sm rotate-12 border border-[#b0e8fb]/70">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isPrayFeatured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-amber-200/60 bg-amber-50/80 dark:bg-amber-950/30 dark:border-amber-800/50 p-5 [box-shadow:var(--shadow-soft)] hover:border-amber-300/70 hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-amber-200/90 dark:border-t-amber-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-amber-700 dark:text-amber-200 bg-white/90 dark:bg-amber-900/80 shadow-sm rotate-12 border border-amber-200/50">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  if (isEggCute && featured) {
    return (
      <div className="group relative overflow-hidden rounded-[1.25rem] border-2 border-violet-200/60 bg-violet-50/80 dark:bg-violet-950/30 dark:border-violet-800/50 p-5 sm:col-span-2 [box-shadow:var(--shadow-soft)] hover:border-violet-300/70 hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
        {/* 右上角折口 + NEW */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-violet-200/90 dark:border-t-violet-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-violet-700 dark:text-violet-200 bg-white/90 dark:bg-violet-900/80 shadow-sm rotate-12 border border-violet-200/50">
            NEW
          </span>
        </div>
        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
            {descriptionBlock}
          </div>
        </div>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
        >
          {buttonText}
          <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
        </a>
      </div>
    )
  }

  return (
    <div className="group p-5 rounded-[1.25rem] border-2 border-border bg-card [box-shadow:var(--shadow-soft)] hover:border-primary/30 hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
          {descriptionBlock}
        </div>
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300"
      >
        {buttonText}
        <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
      </a>
    </div>
  )
}

// Emoji for each: 2048, Longcat, Coins, Color City, Gamebox, Guitarship, Border Maker, Kaomoji, Pray for you
const gameIcons = ["🎮", "🐱", "🪙", "🏙️", "📦", "🎸", "🥚", "🌙", "🍗"]
const toolIcons = ["📝", "🖼️", "☺️", "♒"]
const socialIcons = ["🍳"]
const prayerIcons = ["🙏"]

type AndroidGameItem = ContentItem & { youtubeId?: string }

function AndroidGameCard({
  item,
  buttonText,
  spanTwoCols,
  readMore,
  readLess,
}: {
  item: AndroidGameItem
  buttonText: string
  spanTwoCols?: boolean
  readMore: string
  readLess: string
}) {
  const [expanded, setExpanded] = useState(false)
  const [isClamped, setIsClamped] = useState(false)
  const descRef = useRef<HTMLParagraphElement>(null)
  const isFeatured = spanTwoCols && item.youtubeId

  const checkClamped = () => {
    if (!expanded && descRef.current) {
      setIsClamped(descRef.current.scrollHeight > descRef.current.clientHeight)
    }
  }

  useLayoutEffect(() => {
    checkClamped()
    const ro = new ResizeObserver(checkClamped)
    const el = descRef.current
    if (el) ro.observe(el)
    return () => ro.disconnect()
  }, [expanded, item.description])

  const showToggle = isClamped || expanded

  return (
    <div
      className={`group overflow-hidden rounded-[1.25rem] border-2 [box-shadow:var(--shadow-soft)] transition-all duration-300 ${spanTwoCols ? "sm:col-span-2" : ""} ${isFeatured ? "relative border-pink-200/60 bg-pink-50/80 dark:bg-pink-950/30 dark:border-pink-800/50 hover:border-pink-300/70 hover:[box-shadow:var(--shadow-card-hover)]" : "border-border bg-card hover:border-primary/30 hover:[box-shadow:var(--shadow-card-hover)]"}`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-pink-200/90 dark:border-t-pink-800/90 border-l-[32px] border-l-transparent shadow-sm"
            aria-hidden
          />
          <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider text-pink-700 dark:text-pink-200 bg-white/90 dark:bg-pink-900/80 shadow-sm rotate-12 border border-pink-200/50">
            NEW
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col sm:flex-row sm:gap-6 sm:items-stretch">
        <div className={`flex-1 min-w-0 order-2 sm:order-1 flex flex-col ${isFeatured ? "pr-8" : ""}`}>
          <h4 className="font-bold text-foreground leading-snug flex items-center gap-2">
            <span aria-hidden>🥚</span>
            {item.name}
          </h4>
          <p
            ref={descRef}
            className={`mt-2 text-sm text-muted-foreground leading-relaxed whitespace-pre-line ${!expanded ? "line-clamp-3" : ""}`}
          >
            {item.description}
          </p>
          {showToggle && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-1.5 text-sm font-medium text-primary hover:underline focus:outline-none focus:underline"
            >
              {expanded ? readLess : readMore}
            </button>
          )}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card-link inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-sm font-semibold rounded-[1rem] bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all duration-300 w-fit"
          >
            {buttonText}
            <span className="transition-transform group-hover/card-link:translate-x-0.5" aria-hidden="true">›</span>
          </a>
        </div>
        {item.youtubeId && (
          <div className="flex-shrink-0 w-full sm:w-[min(100%,320px)] aspect-video rounded-xl overflow-hidden bg-muted order-1 sm:order-2">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
              title="Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export function FeaturedContent() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Android Games Section */}
        <div id="android-games" className="scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">📱</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.androidGamesTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">📱</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.androidGames.map((item: AndroidGameItem) => (
              <AndroidGameCard
                key={item.name}
                item={item}
                buttonText={t.playButton}
                spanTwoCols={!!item.youtubeId}
                readMore={t.readMore}
                readLess={t.readLess}
              />
            ))}
          </div>
        </div>

        {/* Web Games Section */}
        <div id="games" className="mt-12 sm:mt-14 scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.gamesTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[...t.games].reverse().map((game) => {
              const originalIndex = t.games.findIndex((g) => g.url === game.url)
              const icon = gameIcons[originalIndex % gameIcons.length]
              return (
              <ContentCard
                key={game.name}
                item={game}
                buttonText={t.playButton}
                  icon={icon}
                  featured={game.url === EGGCUTE_URL}
                  featuredStyle={
                    game.url === JUMPER_URL
                      ? "green"
                      : game.url === STALL_RUN_URL
                        ? "peach"
                        : game.url === STREET_FOOD_URL
                          ? "cream"
                          : undefined
                  }
                  readMore={t.readMore}
                  readLess={t.readLess}
                />
              )
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div id="tools" className="mt-12 sm:mt-14 scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">◎</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.toolsTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">◎</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.tools.map((tool, index) => (
              <ContentCard
                key={tool.name}
                item={tool}
                buttonText={t.openButton}
                icon={toolIcons[index % toolIcons.length]}
                featuredStyle={tool.url === SUMMARY_URL ? "lightyellow" : tool.url === ZODIAC_URL ? "wheat" : undefined}
                readMore={t.readMore}
                readLess={t.readLess}
              />
            ))}
          </div>
        </div>

        {/* Socials Section */}
        <div id="socials" className="mt-12 sm:mt-14 scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.socialTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.social.map((item, index) => (
              <ContentCard
                key={item.name}
                item={item}
                buttonText={t.openButton}
                icon={socialIcons[index % socialIcons.length]}
                featuredStyle={item.url === KEELUNG_COOK_URL ? "lightblue" : undefined}
                readMore={t.readMore}
                readLess={t.readLess}
              />
            ))}
          </div>
        </div>

        {/* Prayers Section */}
        <div id="prayers" className="mt-12 sm:mt-14 scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">✿</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.prayersTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">✿</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.prayers.map((item, index) => (
              <ContentCard
                key={item.name}
                item={item}
                buttonText={t.prayButton}
                icon={prayerIcons[index % prayerIcons.length]}
                featuredStyle={item.url === PRAY_URL ? "yellow" : undefined}
                readMore={t.readMore}
                readLess={t.readLess}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
