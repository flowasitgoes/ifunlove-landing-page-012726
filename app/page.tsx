"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AdBanner } from "@/components/ad-banner"
import { FeaturedContent } from "@/components/featured-content"
import { BrowseByMood } from "@/components/browse-by-mood"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Hero />

          {/* Ad Banner - Top */}
          <AdBanner />

          <FeaturedContent />

          {/* Ad Banner - Between Sections */}
          <AdBanner />

          <BrowseByMood />

          <About />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
