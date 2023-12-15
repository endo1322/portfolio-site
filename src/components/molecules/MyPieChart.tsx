import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'

type MyPieChartPropsType = {
  className: string
  width?: number
  height?: number
  data: Record<string, { percent: number; color: string }>
  label: string
}

export const MyPieChart = (props: MyPieChartPropsType) => {
  const data: Array<{ value: number; label: string; color: string }> = []
  Object.keys(props.data).map((value) => {
    data.push({
      value: props.data[value].percent,
      label: value,
      color: props.data[value].color
    })
  })

  return (
    <div className={`flex flex-col items-center ${props.className}`}>
      <PieChart
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 0, additionalRadius: -10, color: 'gray' }
          }
        ]}
        slotProps={{ legend: { hidden: true } }}

        // width={props.width ? props.width : props.height}
        // height={props.height}
      />
      <p className="mt-2 font-bold">{props.label}</p>
    </div>
  )
}
