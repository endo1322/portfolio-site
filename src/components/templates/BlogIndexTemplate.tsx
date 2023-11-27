import React from 'react'
import ReactPaginate from 'react-paginate'
import { Hero } from '@/components/organisms/Hero'
import { BlogList } from '@/components/organisms/BlogList'
import { HeroType } from '@/types/Common'
import { BlogListType, ReactPagenateType } from '@/types/Blog'

type BlogIndexTemplatePropsType = {
  className: string
  hero: HeroType
  blogList: BlogListType
  pagenate: ReactPagenateType
}

export const BlogIndexTemplate = (props: BlogIndexTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title="Blog" />
      <BlogList blogList={props.blogList} />
      <ReactPaginate
        // forcePage={currentPage} // 現在のページをreactのstateで管理したい場合等
        pageCount={props.pagenate.pageCount}
        onPageChange={props.pagenate.onPageChange}
        // marginPagesDisplayed={4} // 先頭と末尾に表示するページ数
        // pageRangeDisplayed={2} // 現在のページの前後をいくつ表示させるか
        containerClassName={props.pagenate.containerClassName} // ul(pagination本体)
        // pageClassName="page-item" // li
        // pageLinkClassName="page-link rounded-full" // a
        // activeClassName="active" // active.li
        // activeLinkClassName="active" // active.li < a

        // 戻る・進む関連
        previousClassName={props.pagenate.previousClassName} // li
        nextClassName={props.pagenate.nextClassName} // li
        previousLabel={props.pagenate.previousLabel} // a
        previousLinkClassName={props.pagenate.previousLinkClassName}
        nextLabel={props.pagenate.nextLabel} // a
        nextLinkClassName={props.pagenate.nextLinkClassName}
        // 先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくする
        disabledClassName={props.pagenate.disabledClassName}
        // 中間ページの省略表記関連
        breakLabel={props.pagenate.breakLabel}
        breakClassName={props.pagenate.breakClassName}
        breakLinkClassName={props.pagenate.breakLinkClassName}
      />
    </div>
  )
}
