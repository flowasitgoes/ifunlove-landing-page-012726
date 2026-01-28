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
  'A playful digital universe from Taiwan: small web games, creative tools, and design experiments. No sign-up, no downloads—curious, healing, and made for explorers who love art and play.'
const ogImage = { url: '/og-image.jpg', alt: 'ifunlove — playful games, art & design from Taiwan' }

export const metadata: Metadata = {
  metadataBase: new URL('https://ifunlove.com'),
  title,
  description,
  keywords: [
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
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'ifunlove',
    type: 'website',
    locale: 'en_US',
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preload" href="/ifunlove-landing-page.png" as="image" />
      </head>
      <body className={`${fontRounded.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
