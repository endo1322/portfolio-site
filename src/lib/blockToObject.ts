import React, { ElementType } from 'react'
import { Block, RichText, Page } from '@/types/Notion'
import {
  BlockObject,
  PageObject,
  RichTextObject,
  TocObject,
  TagObject
} from '@/types/NotionToObject'

const richTextToObject = (richTexts: Array<RichText>): RichTextObject => {
  const richText = richTexts[0]
  const type = richText.type
  const { annotations, plain_text } = richText
  let url = ''
  if (type == 'mention') {
    url = `/blog/${richText.mention?.page.id}`
  }
  return {
    type: type,
    annotations: annotations,
    plainText: plain_text,
    url: url
  }
}

export const blockToObject = (blocks: Array<Block>) => {
  const Objects: Array<BlockObject> = []
  const toc: Array<TocObject> = []
  let ct = 0
  console.log(blocks)
  blocks.map((block) => {
    const type = block.type
    let tag: ElementType | undefined = undefined
    let richText = undefined
    let textClassName = ''
    let text = undefined
    switch (type) {
      case 'paragraph':
        if (block['paragraph']?.['rich_text'].length != 0) {
          tag = 'div'
          richText = block['paragraph']?.['rich_text']
          // const textType = richText?[0]
          // switch ()
          textClassName = 'mb-2'
        } else {
          tag = 'br'
        }
        break
      case 'heading_1':
        tag = 'h1'
        richText = block['heading_1']?.['rich_text']
        textClassName = 'border-b-2 pb-3 mt-9 mb-5 text-3xl font-bold'
        break
      case 'heading_2':
        tag = 'h2'
        richText = block['heading_2']?.['rich_text']
        textClassName = 'border-b-2 pb-1 mt-7 mb-3 text-2xl font-bold'
        break
      case 'bulleted_list_item':
        tag = 'li'
        richText = block['bulleted_list_item']?.['rich_text']
        textClassName = ''
        break
      // case 'heading_3':
      //   return (
      //     <h3>
      //       <Text
      //         text={value['rich_text']}
      //         textClassName={'my-8 text-4xl font-bold'}
      //       />
      //     </h3>
      //   )
      // case 'callout':
      //   return (
      //     <OutlineBlock />
      //   )
      // case 'bulleted_list_item':
      // case 'numbered_list_item':
      //   return (
      //     <li>
      //       <Text text={value['rich_text']} />
      //       {!!value.children && renderNestedList(block)}
      //     </li>
      //   )
      // case 'to_do':
      //   return (
      //     <div>
      //       <label htmlFor={id}>
      //         <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
      //         <Text text={value['rich_text']} />
      //       </label>
      //     </div>
      //   )
      // case 'toggle':
      //   return (
      //     <details>
      //       <summary>
      //         <Text text={value['rich_text']} />
      //       </summary>
      //       {value.children?.map((block) => (
      //         <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      //       ))}
      //     </details>
      //   )
      // case 'child_page':
      //   return <p>{value.title}</p>
      // case 'image':
      //   const src =
      //     value.type === 'external' ? value.external.url : value.file.url
      //   const caption = value.caption ? value.caption[0]?.plain_text : ''
      //   return (
      //     <figure>
      //       <img src={src} alt={caption} />
      //       {caption && <figcaption>{caption}</figcaption>}
      //     </figure>
      //   )
      // case 'divider':
      //   return <hr key={id} />
      // case 'quote':
      //   return <blockquote key={id}>{value['rich_text'][0].plain_text}</blockquote>
      // case 'code':
      //   return (
      //     <pre className={styles.pre}>
      //       <code className={styles.code_block} key={id}>
      //         {value['rich_text'][0].plain_text}
      //       </code>
      //     </pre>
      //   )
      // case 'file':
      //   const src_file =
      //     value.type === 'external' ? value.external.url : value.file.url
      //   const splitSourceArray = src_file.split('/')
      //   const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
      //   const caption_file = value.caption ? value.caption[0]?.plain_text : ''
      //   return (
      //     <figure>
      //       <div className={styles.file}>
      //         📎{' '}
      //         <Link href={src_file} passHref>
      //           {lastElementInArray.split('?')[0]}
      //         </Link>
      //       </div>
      //       {caption_file && <figcaption>{caption_file}</figcaption>}
      //     </figure>
      //   )
      // case 'bookmark':
      //   const href = value.url
      //   return (
      //     <a href={href} target="_brank" className={styles.bookmark}>
      //       {href}
      //     </a>
      //   )
      default:
        console.log('default', block)
        break
    }
    if (richText != undefined) {
      text = richTextToObject(richText)
    }
    if (tag == 'h1' || tag == 'h2') {
      toc.push({
        id: ct,
        type: type,
        text: text
      })
    }
    Objects.push({
      id: ct,
      type: type,
      tag: tag,
      text: text,
      textType: text?.type,
      textClassName: textClassName
    })
    ct = ct + 1
  })
  return {
    blocks: Objects,
    toc: toc
  }
}

export const databaseToObject = (pages: Array<Page>) => {
  const Pages: Array<PageObject> = []
  const Tags: TagObject = {}
  pages.forEach((value) => {
    const multiSelect: Array<TagObject> = []
    value.properties.tag.multi_select.forEach((item) => {
      const tag = {
        [item.id]: { name: item.name, color: item.color, pageId: [value.id] }
      }
      if (!(item.id in Tags)) {
        Object.assign(Tags, tag)
      } else {
        Tags[item.id].pageId.push(value.id)
      }
      multiSelect.push(tag)
    })
    Pages.push({
      id: value.id,
      createdTime: value.created_time,
      lastEditedTime: value.last_edited_time,
      object: value.object,
      properties: {
        title: value.properties.title.title[0].plain_text,
        tag: multiSelect
      },
      url: value.url
    })
  })
  return {
    pages: Pages,
    tags: Tags
  }
}
