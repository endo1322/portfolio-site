import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { HeroType } from '@/types/Common'
import { AboutArticleCardType, DashboardType } from '@/types/About'
import { Dashboard } from '@/components/organisms/Dashboard'
import { History } from '@/components/organisms/History'

interface AboutTemplateProps {
  className: string
  hero: HeroType
  history: Array<{ year: string; text: Array<string> }>
  dashboard: DashboardType
  aboutArticleCard: AboutArticleCardType
}

export const AboutTemplate = (props: AboutTemplateProps) => {
  return (
    <div className={`${props.className}`}>
      {/* <Hero title={props.hero.title} text={props.hero.text} /> */}
      <Dashboard
        className={
          'flex full-y-container mb-5 max-w-[100rem] min-w-[60rem] justify-center'
        }
        heatMap={props.dashboard.heatMap}
        pieChart={props.dashboard.pieChart}
        barChart={props.dashboard.barChart}
      />
      <History
        className={'flex flex-col max-w-5xl mx-auto'}
        history={props.history}
      />
    </div>
  )
}
