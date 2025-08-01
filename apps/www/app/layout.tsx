import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@shadcn",
  },
  icons: {
    icon: [
      {
        url: "/favicon-krutrim.svg",
        type: "image/svg+xml",
      },
      {
        url: "/krutrim-logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon-krutrim.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Explicit favicon links for better browser support */}
          <link rel="icon" type="image/svg+xml" href="/favicon-krutrim.svg?v=2" />
          <link rel="icon" type="image/svg+xml" href="/krutrim-logo.svg?v=2" />
          <link rel="shortcut icon" href="/favicon-krutrim.svg?v=2" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.svg?v=2" />
          <meta name="msapplication-TileImage" content="/krutrim-logo.svg" />
          {/* Removed dark mode detection script - only light mode */}
        </head>
        <body
          className={cn(
            "min-h-svh bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            enableColorScheme
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-svh flex-col bg-background">
                {children}
              </div>
            </div>
            <TailwindIndicator />
            <Analytics />
            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
