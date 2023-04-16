import React from 'react'

type FrameProps = {
  children: React.ReactNode
}

export const Frame = (props: FrameProps) => {
  return (
    <div className="max-w-3xl bg-white rounded-lg m-auto mb-12">
      {props.children}
    </div>
  )
}
