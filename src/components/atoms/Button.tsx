import React from 'react'

type ButtonProps = {
  className: string
  type: string
  value: string
}

export const Button = (props: ButtonProps) => {
  return (
    <input
      className={`h-12 w-32 bg-blue-500 text-lg text-white hover:bg-blue-400 rounded-lg font-bold drop-shadow cursor-pointer ${props.className}`}
      type={props.type}
      value={props.value}
    />
  )
}
