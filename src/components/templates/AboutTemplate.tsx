import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '../organisms/ArticleCard'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType } from '@/types/About'

interface AboutTemplateProps {
  className: string
  hero: HeroType
  aboutArticleCard: AboutArticleCardType
}

export const AboutTemplate = (props: AboutTemplateProps) => {
  return (
    <div className={props.className}>
      <Hero title={props.hero.title} text={props.hero.text} />
      <ArticleCard
        className="max-w-3xl m-auto mb-12"
        title={props.aboutArticleCard.title}
        contents={props.aboutArticleCard.contents}
      />
    </div>
  )
}
