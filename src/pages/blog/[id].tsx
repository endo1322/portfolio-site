import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getBlocks, getDatabase, getPage } from '@/lib/notion'
import { databaseId } from '.'
import { getBlock } from '@notionhq/client/build/src/api-endpoints'

interface BloggPageProps {
  id: string
}

export const Text = ({ text }) => {
  if (!text) {
    return null
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <div key={index}>{text.content}</div>
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
      console.log('paragraph', value)
      return (
        <p>
          <Text text={value['rich_text']} />
        </p>
      )
    case 'heading_1':
      console.log('heading_1', value)
      return (
        <h1>
          <Text text={value['rich_text']} />
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

export default function BlogPage(props: BloggPageProps) {
  console.log('page', props.page)
  console.log('blocks', props.blocks)
  if (!props.page || !props.blocks) {
    return <div />
  }
  return (
    <div>
      <article className="">
        <h1 className="">
          <Text text={props.page.properties.Title.title} />
        </h1>
        <section>
          {props.blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/blog">
            <div className="">← Go home</div>
          </Link>
        </section>
      </article>
    </div>
  )
  //   return <div className="container flex justify-center text-5xl">a</div>
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const id = context.params['id']
  const page = await getPage(id)
  const blocks = await getBlocks(page.id)

  //   console.log(id)

  return {
    props: {
      page: page,
      blocks: blocks
    },
    revalidate: 60
  }
}
