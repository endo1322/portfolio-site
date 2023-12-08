import React from 'react'
import Link from 'next/link'

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
                <div className="flex sticky top-[7.5rem] z-10 h-max w-1/5 justify-center mt-10">
                  <div className="flex items-center rounded-full w-40 h-40 bg-neutral-400 bg-opacity-70 shadow-lg">
                    <div className=" text-3xl text-slate-50 font-bold mx-auto">
                      {value.year}
                    </div>
                  </div>
                </div>

                <div className="w-3/5 my-auto sticky top-[7.5rem]">
                  <div className=" bg-neutral-400 bg-opacity-50 text-center w-fit py-10 px-5 mx-auto rounded-lg shadow-lg">
                    {value.text.map((item, index) => (
                      <div
                        className="text-xl font-bold mb-1 text-slate-50"
                        key={index}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute right-0 bottom-0">
                  <div className="text-right mb-2 mr-2">
                    <p className=" text-neutral-400">
                      <Link href={'https://dreamstudio.ai/'}>
                        {
                          '@The background image was created using StableDiffusion.'
                        }
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* ここまで要素 */}
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
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
      </div>
    </div>
  )
}
