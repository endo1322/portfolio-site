import React from 'react'
import { HeroType } from '@/types/Common'
import { Hero } from '../organisms/Hero'

type HomeTemplatePropsType = {
  className: string
  hero: HeroType
}

export const HomeTemplate = (props: HomeTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
    </div>
  )
}
