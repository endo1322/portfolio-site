import React, { useState, useEffect } from 'react'
import { Toc } from '@/components/organisms/Toc'
import { TocObject } from '@/types/NotionToObject'
import { ArticleCard } from '../organisms/ArticleCard'
import { useMediaQuery } from 'react-responsive'
import { HeroType } from '@/types/Common'
import { BlogArticleCardType, LinkType } from '@/types/Blog'
import { Hero } from '../organisms/Hero'
import Link from 'next/link'

interface BlogTemplateProps {
  className: string
  hero: HeroType
  blogArticleCard: BlogArticleCardType
  link: LinkType
}

export const BlogTemplate = (props: BlogTemplateProps) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} />
      <div className="flex flex-row m-auto max-w-7xl gap-10 mb-12">
        <ArticleCard
          className="max-w-3xl m-auto"
          title={props.blogArticleCard.title}
          date={props.blogArticleCard.date}
          contents={props.blogArticleCard.contents}
        />
        {mounted && (
          <TocDynamic
            className="sticky top-28 shrink-0 h-fit w-72"
            toc={props.blogArticleCard.toc}
          />
        )}
      </div>
      <Link href={props.link.href}>
        <div className="flex justify-center my-2 text-lg">{props.link.tag}</div>
      </Link>
    </div>
  )
}

type TocDynamicProps = {
  className: string
  toc: Array<TocObject>
}

const TocDynamic = (props: TocDynamicProps) => {
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 1024px)' })
  return isDesktop ? (
    <Toc className={`${props.className}`} captions={props.toc} />
  ) : (
    <></>
  )
}
