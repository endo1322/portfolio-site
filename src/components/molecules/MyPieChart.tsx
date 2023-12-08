import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { LanguageType } from '@/types/About'

type MyPieChartPropsType = {
  className: string
  width?: number
  height: number
  language: Array<LanguageType>
}

export const MyPieChart = (props: MyPieChartPropsType) => {
  const data: Array<{ value: number; label: string; color: string }> = []
  props.language.map((value) => {
    if (value.percent < 1) return
    data.push({ value: value.percent, label: value.name, color: value.color })
  })

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 0, additionalRadius: -10, color: 'gray' }
        }
      ]}
      width={props.width ? props.width : undefined}
      height={props.height}
    />
  )
}
