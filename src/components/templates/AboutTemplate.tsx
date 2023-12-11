import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '../organisms/ArticleCard'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType, WakaTimeType } from '@/types/About'
import { History } from '@/components/organisms/History'
import { DashBord } from '../organisms/DashBord'

interface AboutTemplateProps {
  className: string
  hero: HeroType
  history: Array<{ year: string; text: Array<string> }>
  wakaTime: WakaTimeType
  aboutArticleCard: AboutArticleCardType
}

export const AboutTemplate = (props: AboutTemplateProps) => {
  console.log(props.wakaTime)

  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />

      <DashBord
        className={'flex full-y-container max-w-[100rem] bg-red-200 '}
        heatMap={props.wakaTime.activity.yearly}
        pieChart={[
          props.wakaTime.language.weekly.data,
          props.wakaTime.language.monthly.data,
          props.wakaTime.language.yearly.data
        ]}
        barChart={[
          props.wakaTime.activity.weekly.data,
          props.wakaTime.activity.monthly.data
        ]}
      />
      {/* <History className={'max-w-5xl mx-auto'} history={props.history} /> */}
      {/* <ArticleCard
           className="max-w-3xl m-auto mb-12"
           title={props.aboutArticleCard.title}
           contents={props.aboutArticleCard.contents}
         /> */}
    </div>
  )
}
