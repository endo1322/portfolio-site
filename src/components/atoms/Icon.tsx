import React from 'react'

type IconPropsType = {
  className: string
  src: string
  alt: string
  maxWidth: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <img
      className={`rounded-full max-w-full h-auto align-middle  ${props.className}`}
      src={props.src}
      alt={props.alt}
      style={{ maxWidth: props.maxWidth, minHeight: props.maxWidth }}
    />
  )
}
