import React, { Fragment } from 'react'
import { BloglinkCard } from '../molecules/BloglinkCard'
import { MultiSelect, RichText } from '@/types/Notion'
import { Frame } from '@/components/atoms/Frame'
import { CustomTagText } from '../atoms/CustomTagText'
import { BlockObject } from '@/types/NotionToObject'
import { Tag } from '../atoms/Tag'
import Link from 'next/link'

interface ArticleCardProps {
  className: string
  title: Array<RichText>
  multiSelect?: Array<MultiSelect>
  date?: {
    createDate: string
    updateDate: string
  }
  contents: Array<BlockObject>
}

// export const Text = ({
//   customTag,
//   annotations,
//   richText,
//   textClassName
// }: TextProps) => {
//   if (!richText) {
//     return null
//   }
//   return (
//     <div>
//       {richText.map((value, index) => {
//         switch (value.type) {
//           case 'text': {
//             // console.log("text", value)
//             const {
//               annotations: {
//                 bold,
//                 code,
//                 color,
//                 italic,
//                 strikethrough,
//                 underline
//               },
//               text
//             } = value
//             return (
//               <CustomTagText
//                 customTag={customTag}
//                 annotations={annotations}
//                 text={text?.content}
//                 textClassName={textClassName}
//               />
//               // <span
//               //   className={
//               //     textClassName +
//               //     [bold ? 'font-bold' : ''] +
//               //     // [code ? styles.code : ""] +
//               //     // [italic ? styles.italic : ""] +
//               //     // [strikethrough ? styles.strikethrough : ""] +
//               //     [underline ? 'underline' : '']
//               //   }
//               //   key={index}
//               //   // style={color !== "default" ? { color } : {}}
//               // >
//               //   {text?.content}
//               //   {/* {text?.link ? <a href={text.link.url}>{text.content}</a> : text.content} */}
//               // </span>
//             )
//           }
//           case 'mention': {
//             const {
//               annotations: {
//                 bold,
//                 code,
//                 color,
//                 italic,
//                 strikethrough,
//                 underline
//               },
//               mention
//             } = value
//             const blogUrl: string = `/blog/${mention?.page.id}`
//             // console.log("mention ", value)
//             return (
//               <BloglinkCard
//                 url={`/blog/${mention?.page.id}`}
//                 title={value['plain_text']}
//                 key={index}
//               />
//               // <Link href={blogUrl} key={index}>
//               //   <span
//               //     className={
//               //       textClassName +
//               //       [bold ? "font-bold" : ""] +
//               //       // [code ? styles.code : ""] +
//               //       // [italic ? styles.italic : ""] +
//               //       // [strikethrough ? styles.strikethrough : ""] +
//               //       [underline ? "underline" : ""]
//               //     }
//               //     // style={color !== "default" ? { color } : {}}
//               //   >
//               //     {value["plain_text"]}
//               //   </span>
//               // </Link>
//             )
//           }
//           default:
//             return null
//         }
//       })}
//     </div>
//   )
// }

// const renderNestedList = (block: Block) => {
//   const { type } = block
//   const value = block[type]
//   if (!value) return null

//   const isNumberedList = value.children[0].type === 'numbered_list_item'

//   if (isNumberedList) {
//     return <ol>{value.children.map((block) => renderBlock(block))}</ol>
//   }
//   return <ul>{value.children.map((block) => renderBlock(block))}</ul>
// }

// const renderBlock = (block: Block) => {
//   const { type, id } = block
//   // const value = block[type as keyof Block]

//   switch (type) {
//     case 'paragraph':
//       if (block['paragraph']?.['rich_text'].length != 0) {
//         return (
//           <div className="mb-2">
//             <Text
//               customTag={'div'}
//               richText={block['paragraph']?.['rich_text']}
//               textClassName={''}
//             />
//           </div>
//         )
//       } else {
//         return (
//           <div>
//             <br />
//           </div>
//         )
//       }
//     case 'heading_1':
//       return (
//         <Text
//           customTag={'h1'}
//           richText={block['heading_1']?.['rich_text']}
//           textClassName={'border-b-2 pb-3 mt-9 mb-5 text-3xl font-bold'}
//         />
//         // <h1 className="border-b-2 pb-3 mt-9 mb-5">
//         //   <Text
//         //     richText={block['heading_1']?.['rich_text']}
//         //     textClassName={'text-3xl font-bold'}
//         //   />
//         // </h1>
//       )
//     case 'heading_2':
//       return (
//         <h2 className="border-b-2 pb-1 mt-7 mb-3">
//           <Text
//             customTag={'h2'}
//             richText={block['heading_2']?.['rich_text']}
//             textClassName={'text-2xl font-bold'}
//           />
//         </h2>
//       )
//     case 'bulleted_list_item':
//       return (
//         <div className="flex mb-2">
//           <span className="mr-1 font-bold">・</span>
//           <Text
//             customTag={'div'}
//             richText={block['bulleted_list_item']?.['rich_text']}
//             textClassName={''}
//           />
//         </div>
//       )
//     // case 'heading_3':
//     //   return (
//     //     <h3>
//     //       <Text
//     //         text={value['rich_text']}
//     //         textClassName={'my-8 text-4xl font-bold'}
//     //       />
//     //     </h3>
//     //   )
//     // case 'callout':
//     //   return (
//     //     <OutlineBlock />
//     //   )
//     // case 'bulleted_list_item':
//     // case 'numbered_list_item':
//     //   return (
//     //     <li>
//     //       <Text text={value['rich_text']} />
//     //       {!!value.children && renderNestedList(block)}
//     //     </li>
//     //   )
//     // case 'to_do':
//     //   return (
//     //     <div>
//     //       <label htmlFor={id}>
//     //         <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
//     //         <Text text={value['rich_text']} />
//     //       </label>
//     //     </div>
//     //   )
//     // case 'toggle':
//     //   return (
//     //     <details>
//     //       <summary>
//     //         <Text text={value['rich_text']} />
//     //       </summary>
//     //       {value.children?.map((block) => (
//     //         <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//     //       ))}
//     //     </details>
//     //   )
//     // case 'child_page':
//     //   return <p>{value.title}</p>
//     // case 'image':
//     //   const src =
//     //     value.type === 'external' ? value.external.url : value.file.url
//     //   const caption = value.caption ? value.caption[0]?.plain_text : ''
//     //   return (
//     //     <figure>
//     //       <img src={src} alt={caption} />
//     //       {caption && <figcaption>{caption}</figcaption>}
//     //     </figure>
//     //   )
//     // case 'divider':
//     //   return <hr key={id} />
//     // case 'quote':
//     //   return <blockquote key={id}>{value['rich_text'][0].plain_text}</blockquote>
//     // case 'code':
//     //   return (
//     //     <pre className={styles.pre}>
//     //       <code className={styles.code_block} key={id}>
//     //         {value['rich_text'][0].plain_text}
//     //       </code>
//     //     </pre>
//     //   )
//     // case 'file':
//     //   const src_file =
//     //     value.type === 'external' ? value.external.url : value.file.url
//     //   const splitSourceArray = src_file.split('/')
//     //   const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
//     //   const caption_file = value.caption ? value.caption[0]?.plain_text : ''
//     //   return (
//     //     <figure>
//     //       <div className={styles.file}>
//     //         📎{' '}
//     //         <Link href={src_file} passHref>
//     //           {lastElementInArray.split('?')[0]}
//     //         </Link>
//     //       </div>
//     //       {caption_file && <figcaption>{caption_file}</figcaption>}
//     //     </figure>
//     //   )
//     // case 'bookmark':
//     //   const href = value.url
//     //   return (
//     //     <a href={href} target="_brank" className={styles.bookmark}>
//     //       {href}
//     //     </a>
//     //   )
//     default:
//       console.log('default', block)
//       // return `❌ Unsupported block (${
//       //   type === 'unsupported' ? 'unsupported by Notion API' : type
//       // })`
//       return (
//         <section id="dog">
//           <span role="img">🐶</span>
//         </section>
//       )
//   }
// }

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <Frame className={`${props.className}`}>
      <article className="py-8 px-6">
        {props.date ? (
          <div className="flex text-sm">
            <div className="mr-2">
              投稿日
              <time className="ml-1" dateTime={props.date.createDate}>
                {props.date.createDate.match('\\d{4}-\\d{2}-\\d{2}')}
              </time>
            </div>
            <div>
              更新日
              <time className="ml-1" dateTime={props.date.updateDate}>
                {props.date.updateDate.match('\\d{4}-\\d{2}-\\d{2}')}
              </time>
            </div>
          </div>
        ) : (
          <></>
        )}
        <CustomTagText
          customTag={'h1'}
          text={props.title[0].plain_text}
          textClassName={'flex justify-center mt-3 pb-3 text-4xl font-bold'}
        />
        {props.multiSelect ? (
          <ul className="flex flex-row gap-1 flex-wrap relative mb-2">
            {props.multiSelect.map((value) => (
              <Link key={value.id} href={`/blog?tagId=${value.id}`}>
                <Tag
                  className={''}
                  id={value.id}
                  name={value.name}
                  color={value.color}
                ></Tag>
              </Link>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <section>
          {props.contents.map((content) => (
            <Fragment key={content.id}>
              {content.textType == 'mention' ? (
                <BloglinkCard
                  url={content.text?.url}
                  title={content.text?.plainText}
                />
              ) : (
                <CustomTagText
                  customTag={content.tag}
                  annotations={content.text?.annotations}
                  text={content.text?.plainText}
                  textClassName={content.textClassName}
                  id={content.id}
                />
              )}
            </Fragment>
          ))}
        </section>
      </article>
    </Frame>
  )
}
