import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ArticleCard } from '../organisms/ArticleCard'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType, WakaTimeType } from '@/types/About'
import { History } from '@/components/organisms/History'
import { HeatMap } from '@/components/molecules/HeatMap'
import { PieChart } from '@mui/x-charts/PieChart'
import { MyBarChart } from '../molecules/MyBarChart'

interface AboutTemplateProps {
  className: string
  hero: HeroType
  history: Array<{ year: string; text: Array<string> }>
  wakaTime: WakaTimeType
  aboutArticleCard: AboutArticleCardType
}

export const AboutTemplate = (props: AboutTemplateProps) => {
  console.log(props.wakaTime)
  // const data = []
  // props.wakaTime.language.yearly.data.map((value) => {
  //   if (value.percent < 1) return
  //   data.push({ value: value.percent, label: value.name, color: value.color })
  // })

  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
      {/* <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 0, additionalRadius: -10, color: 'gray' }
          }
        ]}
        height={200}
      /> */}
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
