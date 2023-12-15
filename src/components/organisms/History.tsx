import React from 'react'
import Link from 'next/link'
import { Sircle } from '../atoms/Sircle'
import { Frame } from '../atoms/Frame'

type HistoryPropsType = {
  className: string
  history: Array<{ year: string; text: Array<string> }>
}

export const History = (props: HistoryPropsType) => {
  return (
    <div className={`${props.className}`}>
      <div className="flex flex-col">
        {props.history.map((value, index) => (
          <div
            key={index}
            className="flex full-container bg-cover bg-fixed bg-no-repeat bg-center z-2 shadow-md"
            style={{
              backgroundImage: `url(/history_bg/${value.year}.png)`
            }}
          >
            <div className="backdrop-blur flex-grow">
              {/* ここから要素 */}
              <div className="flex flex-row h-full relative">
                <div className="w-1/5">
                  <div className="flex sticky top-[7.5rem] h-max w-full">
                    <Sircle
                      clsssName="w-40 h-40 mt-10 mx-auto bg-neutral-400 bg-opacity-70 shadow-lg"
                      item={value.year}
                      itemClassName={'text-3xl text-slate-50 font-bold'}
                    />
                  </div>
                </div>

                <div className="w-3/5 sticky top-[7.5rem] my-auto">
                  <Frame className="bg-neutral-400 bg-opacity-50 w-fit mx-auto rounded-lg shadow-lg">
                    <div className=" text-center py-10 px-5">
                      {value.text.map((item, index) => (
                        <div
                          className="text-xl font-bold mb-1 text-slate-50"
                          key={index}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </Frame>
                </div>
                <div className="absolute right-0 bottom-0">
                  <Link
                    href={'https://dreamstudio.ai/'}
                    className="text-right mb-2 mr-2 text-neutral-400"
                  >
                    {'@The background image was created using StableDiffusion.'}
                  </Link>
                </div>
              </div>
              {/* ここまで要素 */}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex">
        <div className="flex w-5xl mx-auto relative">
          <div className="flex flex-col gap-5">
            {props.history.map((value, index) => (
              <div key={index} className="flex items-center z-10">
                <div className="">
                  <div className="flex items-center rounded-full w-40 h-40 bg-slate-700">
                    <div className="text-white font-bold mx-auto">
                      {value.year}
                    </div>
                  </div>
                </div>

                <div className="w-96">
                  {value.text.map((item, index) => (
                    <div className="text-md font-bold mb-1" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className=" absolute h-full w-2.5 left-[4.725rem] bg-slate-700"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
