import React from 'react'

interface HeroType {
  title: string
}
export const Hero = (props: HeroType) => {
  return (
    <div className="flex justify-center my-9">
      <div className="text-8xl">{props.title}</div>
    </div>
  )
}
