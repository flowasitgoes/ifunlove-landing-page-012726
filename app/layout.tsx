import React from "react"
import type { Metadata, Viewport } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fontRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

const title = 'ifunlove — Playful Games, Art & Design from Taiwan'
const description =
  'A playful digital universe from Taiwan (愛瘋樂 ifunlove): small web games like Platform Jumper (跳躍階梯遊戲), ColorDance (填色遊戲), Egg Cute (小蛋配對); Pray for you (為你禱告); Keelung Cooking (向基隆阿嬤學做菜). Creative tools, design experiments. No sign-up, no downloads—curious, healing, and made for explorers who love art and play.'
const ogImage = { url: '/og-image.jpg', alt: 'ifunlove — playful games, art & design from Taiwan' }

export const metadata: Metadata = {
  metadataBase: new URL('https://ifunlove.com'),
  title,
  description,
  keywords: [
    '愛瘋樂',
    'ifunlove 愛瘋樂',
    '愛瘋樂 ifunlove',
    '台灣 愛瘋樂',
    '跳躍階梯遊戲',
    'Platform Jumper',
    'platform jumper game',
    '跳躍階梯遊戲 網頁',
    '音樂階梯跳躍',
    '舒壓小遊戲',
    'jump stairs game',
    'endless climb game',
    '填色遊戲',
    'ColorDance',
    'grid color fills',
    'grid coloring game',
    '網格填色',
    '網格填色遊戲',
    'free coloring game web app',
    '小蛋配對',
    'Egg Cute',
    'egg cute matching game',
    '療癒配對遊戲',
    '為你禱告',
    'Pray for you',
    '禱告 網頁',
    'prayer web app',
    '向基隆阿嬤學做菜',
    'Keelung Cooking',
    'keelung cooking platform',
    '基隆廚藝',
    '2048 game',
    'Longcat Maze',
    '長貓咪走迷宮',
    'Guitarship',
    '星際吉他戰艦',
    'Border Maker',
    '邊框製作器',
    'Kaomoji',
    '顏文字',
    'Taiwan digital culture',
    'playful web games',
    'indie games',
    'creative tools',
    'design experiments',
    'art and illustration',
    'Taiwan design',
    'relaxing games',
    'browser games',
    'creative explorers',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'ifunlove',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_TW',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5B0A8' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1918' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ifunlove',
    alternateName: ['愛瘋樂', 'ifunlove 愛瘋樂'],
    url: 'https://ifunlove.com',
    description: description,
    about: [
      {
        '@type': 'Thing',
        name: 'Platform Jumper',
        alternateName: '跳躍階梯遊戲',
        description: 'Music step jump game, endless climb, relaxing web game. No win or lose—just relax.',
      },
      {
        '@type': 'Thing',
        name: 'ColorDance',
        alternateName: ['填色遊戲', 'grid color fills', '網格填色遊戲'],
        description: 'Follow the color rhythm and piece together the brightest patterns. Free grid coloring game—no download, play in the browser.',
      },
      {
        '@type': 'Thing',
        name: 'Egg Cute',
        alternateName: '小蛋配對',
        description: 'A cozy 9-grid matching game with cute eggs. Healing puzzle—no pressure, just quiet moments of play. Available on web and Android.',
      },
      {
        '@type': 'Thing',
        name: 'Pray for you',
        alternateName: '為你禱告',
        description: 'Write down your thoughts and feelings; reframe from a positive perspective and receive a sincere prayer and blessing. Gratitude and inner peace.',
      },
      {
        '@type': 'Thing',
        name: 'Keelung Cooking Platform',
        alternateName: ['向基隆阿嬤學做菜', 'Keelung Cooking'],
        description: 'Learn cooking from Keelung grandmas. Local recipes, local stories, authentic cooking—a community cooking platform from Keelung.',
      },
      {
        '@type': 'Thing',
        name: 'Border Maker',
        alternateName: '邊框製作器',
        description: 'Upload images and create charming, customizable borders. Adjust colors, download and print. Cut-and-paste creative session with friends.',
      },
      {
        '@type': 'Thing',
        name: 'Kaomoji Tool',
        alternateName: '顏文字小幫手',
        description: 'Japanese kaomoji expressions to brighten your messages. Double-click to copy. Hidden surprises like cakes and classic poetry.',
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preload" href="/ifunlove-landing-page.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontRounded.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
