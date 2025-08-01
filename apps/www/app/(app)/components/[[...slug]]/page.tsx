import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
// import { OpenInV0Cta } from "@/components/open-in-v0-cta"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { badgeVariants } from "@/registry/new-york/ui/badge"

interface ComponentPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: ComponentPageProps) {
  const slug = params.slug?.join("/") || ""
  // Look for components specifically
  const doc = allDocs.find((doc) => doc.slugAsParams === `components/${slug}`)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(`/components/${doc.slugAsParams.replace('components/', '')}`),
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
    },
  }
}

export async function generateStaticParams(): Promise<
  ComponentPageProps["params"][]
> {
  return allDocs
    .filter((doc) => doc.slugAsParams.startsWith('components/'))
    .map((doc) => ({
      slug: doc.slugAsParams.replace('components/', '').split("/"),
    }))
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Components</div>
          {doc.slugAsParams.split("/").map((segment, index) => {
            if (segment === "components") return null
            return (
              <div key={index} className="flex items-center space-x-1">
                <ChevronRight className="h-3.5 w-3.5" />
                <div className="truncate">{segment}</div>
              </div>
            )
          })}
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      )}
    </main>
  )
} 