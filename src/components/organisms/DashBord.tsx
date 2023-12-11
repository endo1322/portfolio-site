import React from 'react'
import { HeatMap } from '@/components/molecules/HeatMap'
import {
  DaylyActivityType,
  LanguageType,
  YearlyActivityType
} from '@/types/About'
import { MyPieChart } from '../molecules/MyPieChart'
import { MyBarChart } from '../molecules/MyBarChart'
import { Frame } from '../atoms/Frame'
import { ProfileCard } from '../molecules/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faChartColumn, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { PieChart } from '@mui/x-charts'
import { MyLegend } from '../molecules/MyLegend'

type DashBordPropsType = {
  className: string
  heatMap: YearlyActivityType
  pieChart: Array<Array<LanguageType>>
  barChart: Array<Array<DaylyActivityType>>
}

export const DashBord = (props: DashBordPropsType) => {
  const pieLegendList: Record<string, { percent: number; color: string }> = {}
  const myPieChartList: Array<
    Record<
      string,
      {
        percent: number
        color: string
      }
    >
  > = []
  props.pieChart.forEach((value) => {
    const myPieChartObject: Record<string, { percent: number; color: string }> =
      {}
    let otherObject = { percent: 0, color: '#16ce40' }
    let flag = true
    console.log(value)
    value.forEach((item) => {
      if (flag && item.name != 'Other' && item.percent > 1) {
        myPieChartObject[item.name] = {
          percent: item.percent,
          color: item.color
        }
        if (!(item.name in pieLegendList)) {
          pieLegendList[item.name] = {
            percent: item.percent,
            color: item.color
          }
        }
      } else {
        flag = false
        otherObject.percent = otherObject.percent + item.percent
      }
    })
    myPieChartObject['Other'] = otherObject
    myPieChartList.push(myPieChartObject)
  })
  pieLegendList['Other'] = { percent: 0, color: '#16ce40' }

  return (
    <div className={`p-5 ${props.className}`}>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-row h-[60%] justify-between gap-5 bg-lime-100">
          <div className="flex flex-col w-1/3 justify-between gap-5 bg-lime-200">
            <div className="flex h-1/5 w-full items-center justify-center bg-lime-400">
              <h1 className="text-4xl font-bold">My Recent Activity</h1>
            </div>

            <div className="flex h-4/5 w-full">
              <ProfileCard className="shadow-lg min-w-[14rem]" />
            </div>
          </div>
          <div className="flex flex-col w-2/3 justify-between gap-5 bg-slate-50">
            <Frame className="flex flex-col h-full p-5 bg-white shadow-lg">
              <div className="flex flex-row items-center ml-5">
                <FontAwesomeIcon icon={faChartPie} size="lg" />
                <p className="font-bold text-xl ml-2">
                  Percentage of Languages
                </p>
              </div>
              <div className="flex flex-row h-full p-3 pb-0 w-full">
                <div className="flex w-4/5 overflow-auto">
                  <div className="flex flex-row w-full justify-around ml-5 gap-5 min-w-[30rem]">
                    {myPieChartList.map((value) => (
                      <div className="flex flex-col items-center">
                        <MyPieChart className="" data={value} />
                        <p className="mt-2 font-bold">last Week</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-1/5">
                  <MyLegend
                    className={'flex w-full h-full ml-5 justify-center'}
                    data={pieLegendList}
                  />
                </div>
              </div>
            </Frame>
            <Frame className="flex flex-col h-full shadow-lg p-5 pr-8">
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center ml-5">
                  <FontAwesomeIcon icon={faCalendar} size="lg" />
                  <p className="font-bold text-xl ml-2">Coding Carendar</p>
                </div>
                <div className="w-full p-3 pb-0 overflow-x-auto">
                  <HeatMap
                    className={'min-w-[56rem]  mx-auto'}
                    activity={props.heatMap}
                  />
                </div>
              </div>
            </Frame>
          </div>
        </div>
        <div className="flex flex-col h-[40%] bg-blue-300">
          {/* <Frame className="flex flex-col p-5 m-5 bg-white shadow-lg">
            <div className="">
              <div className="flex flex-row items-center ml-5">
                <FontAwesomeIcon icon={faChartColumn} size="lg" />
                <p className="font-bold text-xl ml-2">Coding Activity</p>
              </div>
              <div className="flex flex-row p-3 pb-0 w-full overflow-auto">
                <div className="flex flex-col items-center flex-grow">
                  <MyBarChart
                    clsssName=""
                    width={500}
                    height={280}
                    daylyActivity={props.barChart[0]}
                    boolYAxis={true}
                  />
                  <p className="mt-2 font-bold">last Week</p>
                </div>
                <div className="flex flex-col items-center flex-grow">
                  <MyBarChart
                    clsssName=""
                    width={500}
                    height={280}
                    daylyActivity={props.barChart[1]}
                    boolYAxis={false}
                  />
                  <p className="mt-2 font-bold">last Month</p>
                </div>
              </div>
            </div>
          </Frame> */}
        </div>
      </div>
    </div>
  )
}
