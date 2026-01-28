"use client"

import { useLanguage } from "./language-provider"

type ContentItem = {
  name: string
  description: string
  url: string
}

function ContentCard({
  item,
  buttonText,
  icon,
}: {
  item: ContentItem
  buttonText: string
  icon: string
}) {
  return (
    <div className="group p-5 rounded-[1.25rem] border-2 border-border bg-card [box-shadow:var(--shadow-soft)] hover:border-primary/30 hover:[box-shadow:var(--shadow-card-hover)] transition-all duration-300">
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5 text-primary/70" aria-hidden="true">{icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-foreground leading-snug">{item.name}</h4>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {item.description}
          </p>
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
const gameIcons = ["🎮", "🐱", "🪙", "🏙️", "📦", "🎸"]
const toolIcons = ["🖼️", "☺️"]
const prayerIcons = ["🙏"]

export function FeaturedContent() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Games Section */}
        <div id="games" className="scroll-mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t.gamesTitle}
            </h3>
            <span className="text-primary/50 text-lg" aria-hidden="true">✦</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.games.map((game, index) => (
              <ContentCard
                key={game.name}
                item={game}
                buttonText={t.playButton}
                icon={gameIcons[index % gameIcons.length]}
              />
            ))}
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
