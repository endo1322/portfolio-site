import React from 'react'

interface HeroType {
  title: string
  text?: string[]
}
export const Hero = (props: HeroType) => {
  return (
    <div className="flex flex-col max-w-5xl m-auto">
      <div className="my-9">
        <div className="text-8xl font-righteous">{props.title}</div>
      </div>
      {props.text != undefined ? (
        <div className="max-w-4xl mb-10 m-auto">
          {props.text.map((value, index) => (
            <div className="text-lg font-bold mb-1" key={index}>
              {value}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
