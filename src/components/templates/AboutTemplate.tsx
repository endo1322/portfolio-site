import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '../organisms/ArticleCard'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType, WakaTimeType } from '@/types/About'
import { History } from '@/components/organisms/History'
import { HeatMap } from '@/components/molecules/HeatMap'
import { MyPieChart } from '@/components/molecules/MyPieChart'
import { MyBarChart } from '@/components/molecules/MyBarChart'

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

      <MyPieChart
        className=""
        height={200}
        language={props.wakaTime.language.weekly.data}
      />
      <MyPieChart
        className=""
        height={200}
        language={props.wakaTime.language.yearly.data}
      />

      <MyBarChart
        clsssName=""
        width={500}
        height={300}
        daylyActivity={props.wakaTime.activity.monthly.data}
      />
      <MyBarChart
        clsssName=""
        width={500}
        height={300}
        daylyActivity={props.wakaTime.activity.weekly.data}
      />
      {/* <HeatMap activity={props.wakaTime.activity.yearly} /> */}
      {/* <History className={'max-w-5xl mx-auto'} history={props.history} /> */}
      {/* <ArticleCard
           className="max-w-3xl m-auto mb-12"
           title={props.aboutArticleCard.title}
           contents={props.aboutArticleCard.contents}
         /> */}
    </div>
  )
}
