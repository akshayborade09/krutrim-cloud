export const siteConfig = {
  name: "Krutrim Cloud UI",
  url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://ui.shadcn.com",
  description:
    "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/akshayborade09/krutrim-cloud",
  },
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
