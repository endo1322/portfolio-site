import React from 'react'
import { HeroType } from '@/types/Common'
import { Hero } from '../organisms/Hero'
import { HomeBlogListType, ProfileType } from '@/types/Home'
import { SlideBlogList } from '../organisms/SlideBlogList'
import { Profile } from '../organisms/Profile'

type HomeTemplatePropsType = {
  className: string
  hero: HeroType
  profile: ProfileType
  blogList: HomeBlogListType
}

export const HomeTemplate = (props: HomeTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title={props.hero.title} text={props.hero.text} />
      <Profile className={'max-w-5xl mb-10 m-auto'} profile={props.profile} />
      <SlideBlogList className={'max-w-5xl m-auto'} blogList={props.blogList} />
    </div>
  )
}
