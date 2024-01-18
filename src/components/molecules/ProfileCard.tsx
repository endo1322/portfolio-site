import React, { useEffect, useRef, useState } from 'react'
import { Frame } from '@/components/atoms/Frame'
import { Icon } from '../atoms/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { Tag } from '@/components/atoms/Tag'
import { useWindowSize } from '@/lib/useWindowSize'
import { Tooltip } from 'react-tooltip'

type ProfileCardType = {
  className: string
}

export const ProfileCard = (props: ProfileCardType) => {
  const tagListRef = useRef<HTMLInputElement>(null)
  const windowSize = useWindowSize()
  const [overflowTagNum, setOverflowTagNum] = useState<number>(0)
  const [overflowTags, setOverflowTags] = useState<Array<string>>([])
  useEffect(() => {
    const parentRight = tagListRef.current?.getClientRects()[0].right
    const parentBottom = tagListRef.current?.getClientRects()[0].bottom
    let overflowNum = 0
    const overflowTags: Array<string> = []
    if (parentRight && parentBottom) {
      const liElements = tagListRef.current?.querySelectorAll('li')
      liElements?.forEach((li) => {
        const chaildLeft = li.getClientRects()[0].left
        const chaildTop = li.getClientRects()[0].top
        if (chaildLeft > parentRight || chaildTop > parentBottom) {
          overflowNum = overflowNum + 1
          overflowTags.push(li.id)
        }
      })
      setOverflowTagNum(overflowNum)
      setOverflowTags(overflowTags)
    }
  }, [, windowSize])

  const xURL = process.env.NEXT_PUBLIC_X_URL || ''
  const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL || ''
  const atcoderURL = process.env.NEXT_PUBLIC_ATCODER_URL || ''

  return (
    <Frame
      className={`flex flex-col flex-grow p-5 items-center rounded-xl ${props.className}`}
    >
      <div className="flex flex-col items-center w-4/5 pb-3 border-b-2">
        <Icon
          className="shadow-lg mb-5"
          src="/icon.svg"
          alt="about profile icon"
          maxWidth="100px"
        />
        <div className=" mb-1">
          <p className="font-bold text-xl">ぼんd/bond</p>
        </div>
        <div className="flex flex-col items-center gap-0.5 mb-1.5">
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faLocationDot} size="sm" />
            <p className=" text-gray-500 text-sm ml-1">Shizuoka University</p>
          </div>
          <div className="">
            <p className="text-gray-500 text-sm h-5 whitespace-nowrap">
              Computer Science Major
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Link href={xURL} className="w-[36px]">
            <FontAwesomeIcon
              className="rounded-full p-1.5 shadow-md border-b"
              icon={faXTwitter}
              size="xl"
            />
          </Link>
          <Link href={githubURL} className="w-[36px]">
            <FontAwesomeIcon
              className="rounded-full p-1.5 shadow-md border-b"
              icon={faGithub}
              size="xl"
            />
          </Link>
          <Link href={atcoderURL} className="w-[36px]">
            <Icon
              className="shadow-md p-1.5 border-b w-full"
              src="/atcoder.svg"
              alt="about profile icon"
              maxWidth="36px"
            />
          </Link>
          <Link href={'/contact'} className="w-[36px]">
            <FontAwesomeIcon
              className="rounded-full p-1.5 shadow-md border-b"
              icon={faPaperPlane}
              size="xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-1 w-4/5">
        <div className="flex flex-row items-center mb-1">
          <p className="text-lg font-bold text-left">Skils</p>
          {overflowTagNum > 0 && (
            <>
              <a
                className="ml-1 mb-0.5 text-center p-0.5 h-[1.375rem] w-[1.375rem] bg-gray-200 rounded-full items-center justify-center cursor-pointer"
                data-tooltip-id="tagnum-tooltip"
                data-tooltip-html={overflowTags.join('</br>')}
              >
                <div className="text-sm text-gray-500">{`+${overflowTagNum}`}</div>
              </a>
              <Tooltip id="tagnum-tooltip" />
            </>
          )}
        </div>
        <div ref={tagListRef} className="h-[3.25rem] overflow-hidden">
          <ul className="flex flex-row flex-wrap gap-x-2 gap-y-1 relative">
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="TypeScript"
            />
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="Node.js"
            />
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="React"
            />
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="Next.js"
            />
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="Tailwind CSS"
            />
            <Tag
              className=" text-gray-500 bg-gray-200 rounded-xl"
              color=""
              name="Python"
            />
          </ul>
        </div>
      </div>
    </Frame>
  )
}
