/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // 許多瀏覽器會先請求 /favicon.ico，導向我們的 icon 才不會用到快取或預設的 v0 圖
      { source: "/favicon.ico", destination: "/favicon-32x32.png" },
    ]
  },
}

export default nextConfig
