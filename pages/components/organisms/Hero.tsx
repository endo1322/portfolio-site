import React from 'react'

interface HeroType {
  title: string
}
export const Hero = (props: HeroType) => {
  return (
    <div>
      <div className="flex justify-center text-8xl my-9">{props.title}</div>
    </div>
  )
}
