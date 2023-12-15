import React from 'react'

type MyLegendPropsType = {
  className: string
  data: Record<string, { percent: number; color: string }>
}

export const MyLegend = (props: MyLegendPropsType) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      {Object.keys(props.data).map((value, index) => (
        <div key={index} className="flex flex-row w-full h-full items-center">
          <div
            className={`w-3 h-3 mr-2`}
            style={{ backgroundColor: `${props.data[value].color}` }}
          />
          <div className="text-sm">{value}</div>
        </div>
      ))}
    </div>
  )
}
