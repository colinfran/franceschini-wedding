/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.svg", "/apple-icon.png", "/manifest.webmanifest", "/api", "/api/*"]
}