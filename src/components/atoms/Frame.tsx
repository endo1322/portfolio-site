import React from 'react'

type FrameProps = {
  className?: string
  children: React.ReactNode
}

export const Frame = (props: FrameProps) => {
  return (
    <div className={`bg-white rounded-lg ${props.className}`}>
      {props.children}
    </div>
  )
}
