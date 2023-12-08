import React from 'react'

type SirclePropsType = {
  clsssName: string
  item: string
  itemClassName: string
}

export const Sircle = (props: SirclePropsType) => {
  return (
    <div
      className={`flex items-center rounded-full w-40 h-40 bg-white ${props.clsssName}`}
    >
      <div className={`mx-auto ${props.itemClassName}`}>{props.item}</div>
    </div>
  )
}
