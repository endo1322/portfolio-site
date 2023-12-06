import React from 'react'
import { HeroType } from '@/types/Common'
import { Hero } from '../organisms/Hero'
import { HomeBlogListType } from '@/types/Home'
import { SlideBlogList } from '../organisms/SlideBlogList'

type HomeTemplatePropsType = {
  className: string
  hero: HeroType
  blogList: HomeBlogListType
}

export const HomeTemplate = (props: HomeTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
      <SlideBlogList className={'max-w-5xl'} blogList={props.blogList} />
    </div>
  )
}
