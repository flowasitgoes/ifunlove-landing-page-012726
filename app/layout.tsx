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
  'A playful digital universe from Taiwan (愛瘋樂 ifunlove): small web games like Platform Jumper (跳躍階梯遊戲), ColorDance (填色遊戲), 2:03 AM (凌晨兩點零三分), Street food with Travelers! (10國的旅人來到台灣啦), Egg Cute (小蛋配對); Pray for you (為你禱告); Keelung Cooking (向基隆阿嬤學做菜). Tools: Video Digest (Youtube 摘要博客), 12.fun (music visualizer). Creative tools, design experiments. No sign-up, no downloads—curious, healing, and made for explorers who love art and play.'
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
    'Video Digest',
    'Youtube 摘要博客',
    'YouTube 摘要',
    'summary ifunlove',
    '12.fun',
    'Twelve Zodiac',
    'music visualizer',
    '互動音樂視覺化',
    '十二星座 視覺',
    'zodiac ifunlove',
    'roguelike',
    '旅遊',
    '旅遊 遊戲',
    '2:03 AM',
    '凌晨兩點零三分',
    'stall run game',
    'night market game Taiwan',
    'Night Market Fried Chicken',
    '夜市鹹酥雞',
    'Street food with Travelers',
    '10國的旅人來到台灣啦',
    'Taiwan night market game',
    '台灣夜市 遊戲',
    'street food game',
    '鹹酥雞 遊戲',
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
      {
        '@type': 'Thing',
        name: 'Video Digest',
        alternateName: ['Youtube 摘要博客', 'YouTube 摘要'],
        description: 'Turn long YouTube videos into clear, readable articles. A blog that turns video content into structured, easy-to-read text.',
      },
      {
        '@type': 'Thing',
        name: '12.fun',
        alternateName: ['Twelve Zodiac', '互動音樂視覺化'],
        description: 'Interactive music visualizer and generative art. Twelve zodiac themes—upload your music, choose music, and watch the visuals flow.',
      },
      {
        '@type': 'Thing',
        name: '2:03 AM',
        alternateName: '凌晨兩點零三分',
        description: 'A night market in Taiwan. Run through the street at 2 a.m. as travelers line up for fried chicken. Talk to strangers, buy a bag when ready—a small stall run game.',
      },
      {
        '@type': 'Thing',
        name: 'Street food with Travelers!',
        alternateName: ['10國的旅人來到台灣啦', '夜市鹹酥雞'],
        description: 'A cute, abstract little game where you meet 10 travelers from around the world at a night market: Iceland, Mongolia, Bhutan, Madagascar, Paraguay, Slovenia, Namibia, Albania, Greenland, and Bolivia. Taiwan\'s street food culture brings everyone together.',
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
