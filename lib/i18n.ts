export type Locale = "en" | "zh-TW"

export const locales: Locale[] = ["en", "zh-TW"]
export const defaultLocale: Locale = "en"

export const translations = {
  en: {
    // Header
    logo: "ifunlove",
    langSwitch: "中文",

    // Hero
    headline: "Small games and gentle tools for everyday moments.",
    subheadline:
      "No sign-up. No downloads. Just open and play.",
    ctaGames: "Play a Game",
    ctaTools: "Explore Tools",

    // Ad placeholder
    adLabel: "Advertisement",

    // Featured section
    featuredTitle: "Featured",
    gamesTitle: "Games",
    toolsTitle: "Tools",
    playButton: "Play",
    openButton: "Open",

    // Games
    games: [
      {
        name: "2048 – Play with YouTube Music",
        description: "A playful 2048 game where you can listen to your favorite albums on YouTube while playing. Enjoy the puzzle challenge alongside immersive background projections that turn music into a visual experience.",
        url: "https://2048.ifunlove.com",
      },
      {
        name: "Longcat Maze",
        description: "A very long cat wakes up inside a mysterious maze—how unbelievable! Guide her stretchy body, twist through the corridors, and help her find the exit back to the world.",
        url: "https://cat-maze.ifunlove.com",
      },
      {
        name: "Catch the Coins",
        description: "The world is full of hidden treasures. Test your hand-eye coordination and catch the shimmering coins before they disappear from sight!",
        url: "https://coins.ifunlove.com",
      },
      {
        name: "Color Memory City",
        description: "The sun has drained all the colors from the city. Use your memory to recall the missing hues and bring life back to the city objects, guided by flashing lights and rhythmic music.",
        url: "https://fill-colors.ifunlove.com",
      },
      {
        name: "Uncle Gamebox",
        description: "A nostalgic game box inspired by early-2000s classics. Open it up to discover four retro mini-games and relive the joy of simple, timeless gameplay.",
        url: "https://gamebox.ifunlove.com",
      },
      {
        name: "Guitarship",
        description: "Pilot a guitar-powered spaceship, fire melodic sound waves, and resonate with crystals drifting through space. Life is made of rice and rhythm—let's launch the journey now.",
        url: "https://guitarship.ifunlove.com",
      },
    ],

    // Tools
    tools: [
      {
        name: "Border Maker",
        description: "Upload your favorite images and create charming, customizable borders. Adjust colors, download and print your designs, and invite friends to join in a fun cut-and-paste creative session together.",
        url: "https://border-maker.ifunlove.com",
      },
      {
        name: "Kaomoji Tool",
        description: "A delightful collection of Japanese kaomoji expressions to brighten your messages. Double-click to copy and paste, and discover hidden surprises like cakes and classic poetry along the way.",
        url: "https://kaomoji.ifunlove.com",
      },
    ],

    // Browse by mood
    browseTitle: "Browse by Mood",
    moods: ["Relax", "Think", "Create", "Focus", "Reflect"],

    // About
    aboutTitle: "About",
    aboutText:
      "This is a small personal playground on the internet. Some things are made just because they feel right. No pressure, no goals — just quiet moments of curiosity and joy.",

    // Footer
    copyright: "© 2026 ifunlove",
    madeWith: "Made with care",
  },
  "zh-TW": {
    // Header
    logo: "ifunlove",
    langSwitch: "EN",

    // Hero
    headline: "小遊戲與溫柔的小工具，陪你度過日常片刻。",
    subheadline: "無需註冊。無需下載。打開就能玩。",
    ctaGames: "玩遊戲",
    ctaTools: "探索工具",

    // Ad placeholder
    adLabel: "廣告",

    // Featured section
    featuredTitle: "精選",
    gamesTitle: "遊戲",
    toolsTitle: "工具",
    playButton: "開始",
    openButton: "開啟",

    // Games
    games: [
      {
        name: "聽 YouTube 音樂，玩 2048！",
        description: "一款可以在 YouTube 上面邊聽自己喜歡的專輯，然後享受 2048 樂趣的小遊戲，背後還有精彩的投影可以觀看呦！",
        url: "https://2048.ifunlove.com",
      },
      {
        name: "長貓咪走迷宮",
        description: "一隻身體很長的貓咪忽然在迷宮裡面醒來，真是太不可思議了！她迫不及待地想要出來，請你進入她的身軀，引領她找到世界的入口吧！",
        url: "https://cat-maze.ifunlove.com",
      },
      {
        name: "40擺在眼前！",
        description: "世界是充滿財富的，出動你的手眼協調，讓我們把忽隱忽現的銅板收集起來吧！",
        url: "https://coins.ifunlove.com",
      },
      {
        name: "填色記憶遊戲",
        description: "城市的顏色被熱情的太陽蒸發了，目前的城市暫時看不到顏色。聰明的你已經在短時間內記住曾經出現的色彩，請你搭配著閃爍的音樂，為城市的物件填入生動的顏色吧！",
        url: "https://fill-colors.ifunlove.com",
      },
      {
        name: "史萊姆的遊戲盒子",
        description: "一款西元 2000 年左右盛行的古早遊戲盒子，打開後會發現有四款復古的小遊戲可以遊玩！動動手，試試這些充滿回憶的經典玩法吧！",
        url: "https://gamebox.ifunlove.com",
      },
      {
        name: "星際中的吉他戰艦",
        description: "開著吉他戰艦，射出動人的旋律，和宇宙中的水晶及礦石共振。生命是由白米飯構成的——不多說，我們現在就啟程吧！",
        url: "https://guitarship.ifunlove.com",
      },
    ],

    // Tools
    tools: [
      {
        name: "華麗的邊框製作器",
        description: "上傳你喜愛的個性化圖片，製作可愛動人的邊框，不僅可以更改填色，還能夠下載並且儲存列印，邀請你的朋友一起來動手剪剪貼貼吧！",
        url: "https://border-maker.ifunlove.com",
      },
      {
        name: "顏文字小幫手",
        description: "盛裝豐富表情的日本顏文字被引進到本站啦！在你與朋友或家人傳遞訊息時，加入無限想像與美意。雙擊即可複製貼上，還藏有蛋糕與唐詩彩蛋喔！",
        url: "https://kaomoji.ifunlove.com",
      },
    ],

    // Browse by mood
    browseTitle: "依心情瀏覽",
    moods: ["放鬆", "思考", "創作", "專注", "反思"],

    // About
    aboutTitle: "關於",
    aboutText:
      "這是網路上的一個小小個人遊樂場。有些東西的存在，只是因為感覺對了。沒有壓力，沒有目標——只有安靜的好奇心與喜悅時刻。",

    // Footer
    copyright: "© 2026 ifunlove",
    madeWith: "用心製作",
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
