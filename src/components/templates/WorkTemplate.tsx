import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { HeroType } from '@/types/Common'

type WorkTemplatePropsType = {
  className: string
  hero: HeroType
}

export const WorkTemplate = (props: WorkTemplatePropsType) => {
  return (
    <div className={props.className}>
      <Hero title={props.hero.title} />
    </div>
  )
}
