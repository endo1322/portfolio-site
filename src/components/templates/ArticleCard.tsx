import React, { Fragment } from 'react'

export const Text = ({ text, textClassName }) => {
  if (!text) {
    return null
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span className={textClassName} key={index}>
        {text.content}
      </span>
      // <span
      //   className={[
      //     bold ? styles.bold : "",
      //     code ? styles.code : "",
      //     italic ? styles.italic : "",
      //     strikethrough ? styles.strikethrough : "",
      //     underline ? styles.underline : "",
      //   ].join(" ")}
      //   style={color !== "default" ? { color } : {}}
      // >
      //   {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      // </span>
    )
  })
}

const renderNestedList = (block) => {
  const { type } = block
  const value = block[type]
  if (!value) return null

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>
}

const renderBlock = (block) => {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value['rich_text']} textClassName={'text-base'} />
        </p>
      )
    case 'heading_1':
      return (
        <h1 className="border-b-2 pb-3 mb-5">
          <Text
            text={value['rich_text']}
            textClassName={'my-8 text-4xl font-bold'}
          />
        </h1>
      )
    // case 'heading_2':
    //   return (
    //     <h2>
    //       <Text text={value['rich_text']} />
    //     </h2>
    //   )
    // case 'heading_3':
    //   return (
    //     <h3>
    //       <Text text={value['rich_text']} />
    //     </h3>
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
      console.log('default', value['rich_text'])
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`
  }
}

export const ArticleCard = (props) => {
  return (
    <div className="max-w-3xl bg-white rounded-lg m-auto">
      <article className="py-8 px-6">
        <div className="flex text-sm">
          <div className="mr-2">
            投稿日
            <time className="ml-1" dateTime={props.createdDate}>
              {props.createdDate.match('\\d{4}-\\d{2}-\\d{2}')}
            </time>
          </div>
          <div>
            更新日
            <time className="ml-1" dateTime={props.lastEditedDate}>
              {props.lastEditedDate.match('\\d{4}-\\d{2}-\\d{2}')}
            </time>
          </div>
        </div>

        <h1 className="flex justify-center mb-7">
          <Text textClassName={'text-4xl font-bold'} text={props.title} />
        </h1>
        <section>
          {props.blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </article>
    </div>
  )
}
