import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '../organisms/ArticleCard'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType } from '@/types/About'
import { History } from '@/components/organisms/History'
import Image from 'next/image'
import Link from 'next/link'

interface AboutTemplateProps {
  className: string
  hero: HeroType
  history: Array<{ year: string; text: Array<string> }>
  aboutArticleCard: AboutArticleCardType
}

export const AboutTemplate = (props: AboutTemplateProps) => {
  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
      <History className={'max-w-5xl mx-auto'} history={props.history} />
      {/* <ArticleCard
        className="max-w-3xl m-auto mb-12"
        title={props.aboutArticleCard.title}
        contents={props.aboutArticleCard.contents}
      /> */}
    </div>
  )
}
