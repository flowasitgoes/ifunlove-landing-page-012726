export type Locale = "en" | "zh-TW"

export const locales: Locale[] = ["en", "zh-TW"]
export const defaultLocale: Locale = "en"

export const translations = {
  en: {
    // Header
    logo: "ifunlove",
    siteNameEn: "",
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
    androidGamesTitle: "Android Games",
    gamesTitle: "Web Games",
    toolsTitle: "Tools",
    socialTitle: "Socials",
    prayersTitle: "Prayers",
    playButton: "Play",
    openButton: "Open",
    prayButton: "Enter",
    readMore: "more +",
    readLess: "less -",

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
        name: "Color Dance",
        description: "Follow the color rhythm and piece together the brightest patterns. A free grid coloring game—no download, play in the browser.",
        url: "https://fill-colors.ifunlove.com",
      },
      {
        name: "Platform Jumper",
        description: "Cute, playful UI with musical sounds. No win or lose—just relax. Jump with fun interactions and chords, climb as high as you like or enjoy falling. Endless and stress-free.",
        url: "https://jumper.ifunlove.com/home",
      },
      {
        name: "Guitarship",
        description: "Pilot a guitar-powered spaceship, fire melodic sound waves, and resonate with crystals drifting through space. Life is made of rice and rhythm—let's launch the journey now.",
        url: "https://guitarship.ifunlove.com",
      },
      {
        name: "Egg Cute",
        description: "A cozy 9-grid matching game with cute eggs. Pair them up and enjoy a gentle, healing puzzle—no pressure, just quiet moments of play.",
        url: "https://eggcute.ifunlove.com",
      },
    ],

    // Android Games
    androidGames: [
      {
        name: "Egg Cute",
        description:
          "Egg Cute is now available on Android! 🧡\nDownload the app and start playing!\n\nIt's a cozy 9-grid matching puzzle full of adorable visuals. Match the pairs, relax your mind, and.. \n enjoy a gentle little game —\n easy soothing, just calm and cozy moments.",
        url: "https://play.google.com/store/apps/details?id=com.ifunlove.eggcute",
        youtubeId: "z0bEGhZt9bo",
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

    // Social
    social: [
      {
        name: "Keelung Cooking Platform",
        description:
          "Learn cooking from Keelung grandmas. Local recipes, local stories, authentic cooking — match the local cook teams!",
        url: "https://keelung-cook.ifunlove.com/",
      },
    ],

    // Prayers
    prayers: [
      {
        name: "Pray for you",
        description:
          "Write down today's emotions, thoughts, or feelings. Let's reframe them from a positive perspective and make a prayer for you, through gratitude, calmness, we can again feel happiness, be present and find inner peace.",
        url: "https://pray.ifunlove.com",
      },
    ],

    // Browse by mood
    browseTitle: "Browse by Mood",
    moods: ["Relax", "Think", "Create", "Focus", "Reflect"],

    // About
    aboutTitle: "About",
    aboutText:
      "This is a small personal playground on the internet. Some things are made just because they feel right. No pressure, no goals — just quiet moments of curiosity and joy.",

    // Donation
    donationTitle: "Support this space",
    donationTagline: "If these games and tools brought you a smile, you can support their continued existence.",
    donateViaStripe: "Donate with Stripe",
    donateViaPatreon: "Support on Patreon",
    donateViaBmc: "Buy me a coffee",

    // Footer
    copyright: "© 2026 ifunlove 愛瘋樂",
    madeWith: "Made with care",
  },
  "zh-TW": {
    // Header（愛瘋樂 = ifunlove 中文名，便於搜尋「愛瘋樂」找到本站）
    logo: "愛瘋樂",
    siteNameEn: "ifunlove",
    langSwitch: "EN",

    // Hero
    headline: "小遊戲與柔情便利的小工具，陪你度過日常片刻。",
    subheadline: "無需註冊。無需下載。打開就能玩。",
    ctaGames: "玩遊戲",
    ctaTools: "探索工具",

    // Ad placeholder
    adLabel: "廣告",

    // Featured section
    featuredTitle: "精選",
    androidGamesTitle: "Android 遊戲",
    gamesTitle: "網站遊戲",
    toolsTitle: "工具",
    socialTitle: "社群",
    prayersTitle: "祈願",
    playButton: "開始",
    openButton: "開啟",
    prayButton: "進入",
    readMore: "更多 +",
    readLess: "收合 -",

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
        name: "填色遊戲",
        description: "跟著顏色節奏，一起拼出最亮眼的圖案！網格填色網頁小遊戲，免下載打開即玩。",
        url: "https://fill-colors.ifunlove.com",
      },
      {
        name: "跳躍階梯遊戲",
        description: "可愛療癒的介面，跳躍就像在彈音樂。沒有輸贏，放鬆就好——無限攀爬或盡情落下。每次跳躍都有互動與和絃，無壓力、不會 Game Over，適合小孩與休閒玩家。",
        url: "https://jumper.ifunlove.com/home",
      },
      {
        name: "星際中的吉他戰艦",
        description: "開著吉他戰艦，射出動人的旋律，和宇宙中的水晶及礦石共振。生命是由白米飯構成的——不多說，我們現在就啟程吧！",
        url: "https://guitarship.ifunlove.com",
      },
      {
        name: "小蛋配對",
        description: "療癒系九宮格配對遊戲。和小蛋們一起配對，在輕鬆的節奏裡享受安靜的遊戲時光。",
        url: "https://eggcute.ifunlove.com",
      },
    ],

    // Android Games
    androidGames: [
      {
        name: "小蛋配對",
        description:
          "小蛋配對登上 Android 了！快下載 App 一起玩！！療癒系九宮格配對遊戲。和小蛋們一起配對，在輕鬆的節奏裡享受安靜的遊戲時光。",
        url: "https://play.google.com/store/apps/details?id=com.ifunlove.eggcute",
        youtubeId: "z0bEGhZt9bo",
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

    // Social
    social: [
      {
        name: "向基隆阿嬤學做菜",
        description:
          "基隆廚藝平台：在地食譜、傳說故事、民間功夫。向基隆阿嬤學做菜，一起探索在地滋味。",
        url: "https://keelung-cook.ifunlove.com/",
      },
    ],

    // Prayers
    prayers: [
      {
        name: "為你禱告",
        description:
          "寫下今天的心情、想法或感受，願想，試著用正向的角度重新觀看，並為你寫下一段誠懇的祝福，在感謝中重拾幸福、透過凝聚與寧靜禱告。",
        url: "https://pray.ifunlove.com",
      },
    ],

    // Browse by mood
    browseTitle: "依心情瀏覽",
    moods: ["放鬆", "思考", "創作", "專注", "反思"],

    // About
    aboutTitle: "關於",
    aboutText:
      "愛瘋樂（ifunlove）是網路上的一個小小個人遊樂場。有些東西的存在，只是因為感覺對了。沒有壓力，沒有目標——只有安靜的好奇心與喜悅時刻。",

    // Donation
    donationTitle: "支持這個小天地",
    donationTagline: "若這些小遊戲與工具曾讓你會心一笑，歡迎以一杯咖啡或贊助支持它們繼續存在。",
    donateViaStripe: "以 Stripe 贊助",
    donateViaPatreon: "在 Patreon 支持",
    donateViaBmc: "請我喝杯咖啡",

    // Footer
    copyright: "© 2026 ifunlove 愛瘋樂",
    madeWith: "用心製作",
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
