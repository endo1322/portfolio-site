import { TagObject } from '@/types/NotionToObject'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tag } from '../atoms/Tag'

interface BlogBoxCardProps {
  id: string
  title: string
  coverUrl: string | null
  createdDate: RegExpMatchArray | null
  multiSelect: TagObject
  //   onSetBool: (e: { selectedTagId: string }) => void
}

export const BlogBoxCard = (props: BlogBoxCardProps) => {
  const blogUrl: string = `/blog/${props.id}`
  //   return (
  //     <div className="flex flex-col items-center w-96 h-80 p-2 bg-white  hover:bg-neutral-300 rounded-lg relative">
  //       <Link href={blogUrl} className="inset-0 absolute" />
  //       {props.coverUrl && (
  //         <div className="flex-shrink-0 mb-1">
  //           <Image
  //             className="rounded-md"
  //             src={props.coverUrl}
  //             width={368}
  //             height={193}
  //             alt={`Picture of ${props.title}`}
  //           />
  //         </div>
  //       )}
  //       <div className="flex-grow min-w-0 px-2">
  //         <div className="">{props.createdDate}</div>
  //         <div className="pl-2 max-h-[5.25rem]">
  //           <div className="text-xl mb-1 max-h-[3.5rem] overflow-hidden">
  //             {props.title}
  //           </div>
  //           <ul className="flex flex-row gap-1 flex-wrap">
  //             {Object.keys(props.multiSelect).map((key) => (
  //               <button
  //                 key={`${props.id}${key}`}
  //                 //   onClick={() => {
  //                 //     props.onSetBool({ selectedTagId: key })
  //                 //   }}
  //               >
  //                 <Tag
  //                   className=""
  //                   id={key}
  //                   name={props.multiSelect[key].name}
  //                   color={props.multiSelect[key].color}
  //                 ></Tag>
  //               </button>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className="flex flex-col w-80 h-72 p-2 bg-white hover:bg-neutral-300 rounded-lg relative shadow-lg transform ease-in duration-300 hover:scale-105 hover:shadow-none">
      <Link href={blogUrl} className="inset-0 absolute" />
      {props.coverUrl && (
        <div className=" shrink mb-1">
          <Image
            className="rounded-md"
            src={props.coverUrl}
            width={305.6}
            height={160}
            alt={`Picture of ${props.title}`}
          />
        </div>
      )}
      <div className="flex-grow px-2">
        <div className="">{props.createdDate}</div>
        <div className="pl-1 max-h-[5.25rem] overflow-hidden">
          <div className="text-xl mb-1 truncate">{props.title}</div>
          <ul className="flex flex-row gap-1 flex-wrap">
            {Object.keys(props.multiSelect).map((key) => (
              <button key={`${props.id}${key}`}>
                <Tag
                  className=""
                  id={key}
                  name={props.multiSelect[key].name}
                  color={props.multiSelect[key].color}
                ></Tag>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
