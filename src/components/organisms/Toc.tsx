import React from 'react'
import { Frame } from '@/components/atoms/Frame'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TocObject } from '@/types/NotionToObject'

type TocType = {
  className: string
  captions: Array<TocObject>
}

export const Toc = (props: TocType) => {
  return (
    <Frame className={`${props.className}`}>
      <div className="py-8 px-6">
        <div className="text-xl font-bold">目次</div>
        <div>
          <ol>
            {props.captions.map((item, index) => (
              <li>
                <AnchorLink offset="100" href={`#${item.id}`}>
                  {item.text?.plainText}
                </AnchorLink>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Frame>
  )
}
