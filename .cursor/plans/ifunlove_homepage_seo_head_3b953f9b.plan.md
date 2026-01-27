---
name: ifunlove Homepage SEO Head
overview: 在既有 Next.js App Router 的 `metadata` 上，补全以「Taiwan + Play + Art + Games + Design + Culture」为核心的 SEO 叙事，包含 Title、Meta description、keywords、canonical、Open Graph、Twitter Card、icons、themeColor、语言与地区设置，并保持长期可发现度与品牌语气。
todos: []
isProject: false
---

# ifunlove 首页 SEO &lt;head&gt; 优化方案

## 现状摘要

- **实现位置**：[app/layout.tsx](app/layout.tsx) 已通过 Next.js 的 `Metadata` 导出配置 head。
- **已有项**：`title`、`description`、`generator`、`icons`（light/dark 32x32、svg、apple）。
- **语言**：仅客户端切换（`LanguageProvider`），URL 无 locale 段，首页为单一路径。
- **静态资源**：`public/` 内已有 `icon.svg`、`icon-light-32x32.png`、`icon-dark-32x32.png`、`apple-icon.png`，暂无专用 OG/Twitter 大图。

## 叙事与原则

- **主线索**：台湾 → 游戏/工具/艺术/设计 →  playful、治愈、好奇、实验感。
- **语气**：温暖、有想像力、友好、不企业腔、不冰冷、不硬销。
- **SEO**：优先自然语句与情境（“discover Taiwan through play”、“creative explorers”），避免堆砌关键词；标题与描述承担主要信息，keywords 作补充。

---

## 1. 建议的文案与字段内容

### Title（约 50–60 字符）

- **建议**：`ifunlove — Playful Games, Art & Design from Taiwan`
- **备选**：`ifunlove — Discover Taiwan Through Play, Art & Gentle Tools`
- 保留 “ifunlove” 品牌 + “Taiwan” + “Play/Art/Design” 便于辨识与记忆。

### Meta description（约 155–160 字符）

- **建议**：  

`A playful digital universe from Taiwan: small web games, creative tools, and design experiments. No sign-up, no downloads—curious, healing, and made for explorers who love art and play.`

- 覆盖：台湾、小游戏、创意工具、设计实验、好奇/治愈、目标受众（explorers, art, play），并维持友好语气。

### Keywords（meta keywords，可选）

- 以概念与情境为主，例如：  

`Taiwan digital culture, playful web games, indie games, creative tools, design experiments, art and illustration, Taiwan design, relaxing games, browser games, creative explorers`

- 可依产品迭代微调，不追求长尾堆砌。

### Canonical 与 metadataBase

- **Canonical**：`https://ifunlove.com/`（首页唯一 canonical）。
- **metadataBase**：`https://ifunlove.com`，便于所有相对 URL（如图片、og:url）解析到正确域名。

---

## 2. Open Graph（OG）

在 `metadata.openGraph` 中设置：

| 字段 | 建议值 |

|------|--------|

| `title` | 与 `<title>` 一致（见上） |

| `description` | 与 meta description 一致 |

| `url` | `https://ifunlove.com/` |

| `siteName` | `ifunlove` |

| `type` | `website` |

| `locale` | `en_US`（主站以英文为主） |

| `images` | 见下「OG/Twitter 图片」 |

不采用 `locale.alternate`，因当前 URL 不含语言路径；若日后改为 `/en`、`/zh-TW`，再在对应 layout/page 的 metadata 中加 alternates。

---

## 3. Twitter Card

在 `metadata.twitter` 中设置：

- `card: summary_large_image`
- `title`、`description` 与 OG 一致
- `images` 与 OG 同一张图即可（若 Next 支持共用，可只配一处并由 `metadataBase` 解析）
- 可不设 `site`/`creator`，除非已有固定 @ 帐号要绑

---

## 4. Favicon 与 App Icons

- **保持现有** [app/layout.tsx](app/layout.tsx) 的 `icons` 配置即可：  

light/dark 32x32、`/icon.svg`、`apple: '/apple-icon.png'`。

- 若之后做 PWA，再在 `manifest` 或同一 `icons` 中补充 192/512。
- **Theme color**：在 `metadata.themeColor` 中设一个主色，建议偏暖、 playful（例如 `#F5B0A8` 或 `#F4D35E`），需与 [app/globals.css](app/globals.css) 或 design tokens 一致；可提供 `media: '(prefers-color-scheme: light)'` / `dark` 两个值。

---

## 5. 语言与地区

- **&lt;html&gt;**：保持 `lang="en"`；若日后按 URL 做 i18n，再在相应 layout 用 `locale` 或中间件设 `lang`。
- **Metadata**：  
  - `openGraph.locale: 'en_US'` 已足够。  
  - 暂不设 `alternates.languages`，避免与当前单 URL 矛盾。

---

## 6. OG / Twitter 大图

- 目前项目内**没有** 1200×630 的 OG 专用图。
- **建议**：  
  - 在 `public/` 下新增一张 `og-image.png`（或 `og-home.png`），尺寸 1200×630，风格与「legendary online universe department store」一致，可含 logo、品牌字样与台湾/游戏/艺术等视觉元素。  
  - 在 metadata 中设置 `openGraph.images`、`twitter.images` 为 `/og-image.png`（或通过 `metadataBase` 的相对路径），并设 `openGraph.images[].alt`（以及若支持则设 Twitter image alt）为简短描述，例如：`ifunlove — playful games, art & design from Taiwan`。

若短期内不做图，可先用 `apple-icon.png` 或 `placeholder-logo.png` 作为临时 OG 图，并在计划中注明「待替换为正式 og-image」。

---

## 7. 实施方式（Next.js Metadata）

全部在 [app/layout.tsx](app/layout.tsx) 的 `metadata` 对象中完成，不写原始 `<head>` 标签。结构示意：

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://ifunlove.com'),
  title: '...',
  description: '...',
  keywords: ['...'],
  alternates: { canonical: '/' },
  openGraph: { title, description, url: '/', siteName, type, locale, images },
  twitter: { card: 'summary_large_image', title, description, images },
  icons: { /* 保持现有 */ },
  themeColor: [ { media: '(prefers-color-scheme: light)', color: '...' }, { media: '(prefers-color-scheme: dark)', color: '...' } ],
  // 视需求保留或移除 generator
}
```

- `metadataBase` 使用 `new URL('https://ifunlove.com')`。
- `alternates.canonical` 使用 `'/'`，Next 会与 `metadataBase` 拼成 `https://ifunlove.com/`。

---

## 8. 文案与资源清单（便于直接粘贴）

- **Title**：`ifunlove — Playful Games, Art & Design from Taiwan`
- **Description**：`A playful digital universe from Taiwan: small web games, creative tools, and design experiments. No sign-up, no downloads—curious, healing, and made for explorers who love art and play.`
- **Canonical**：`/`（配合 `metadataBase`）
- **OG/Twitter image**：`/og-image.png`（需新增 1200×630 资产，或暂时用现有图）
- **Theme color**：需从现有品牌色中选定一枚（例如 light / dark 各一）

---

## 9. 可选后续增强

- 若未来上多语言路由（如 `/en`、`/zh-TW`）：在对应 segment 的 layout/page 使用 `generateMetadata` 或静态 `metadata`，设 `alternates.canonical`、`openGraph.url`、`alternates.languages`。
- 若做 PWA：在 layout 的 `metadata` 中加 `manifest: '/manifest.json'`，并在 manifest 中定义 192/512 icons 与 theme_color。

---

## 10. 小结

- 在**不改路由、不新增页面**的前提下，仅在 [app/layout.tsx](app/layout.tsx) 扩展 `metadata` 即可完成：  

title、description、keywords、canonical、OG、Twitter、icons、themeColor、语言/地区设定。

- 叙事上紧扣「Taiwan + Play + Art + Games + Design + Culture」，语气温暖、好奇、偏长期可发现度。
- 唯一可能的新增文件是 `public/og-image.png`（或先用现有图作过渡）。