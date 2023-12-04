import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { BlogList } from '@/components/organisms/BlogList'
import { HeroType } from '@/types/Common'
import { BlogListType, PaginationType } from '@/types/Blog'
import Pagination from '@mui/material/Pagination'

type BlogIndexTemplatePropsType = {
  className: string
  hero: HeroType
  blogList: BlogListType
  pagination: PaginationType
}

export const BlogIndexTemplate = (props: BlogIndexTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title="Blog" />
      <BlogList blogList={props.blogList} />
      <Pagination
        className="flex justify-center mb-2"
        count={props.pagination.pageCount}
        onChange={(e, page) =>
          props.pagination.onPageChange({ selected: page })
        }
        size="large"
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
