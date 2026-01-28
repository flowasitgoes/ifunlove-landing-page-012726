"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
// import { AdBanner } from "@/components/ad-banner"
import { FeaturedContent } from "@/components/featured-content"
import { BrowseByMood } from "@/components/browse-by-mood"
import { About } from "@/components/about"
import { Donation } from "@/components/donation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Hero />

          {/* 廣告區塊暫未使用，日後有再開啟 */}
          {/* <AdBanner /> */}

          <FeaturedContent />

          {/* <AdBanner /> */}

          <BrowseByMood />

          <About />

          <Donation />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
