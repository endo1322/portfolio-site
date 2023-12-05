import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { BlogList } from '@/components/organisms/BlogList'
import { HeroType } from '@/types/Common'
import { BlogListType, PaginationType, SearchBarType } from '@/types/Blog'
import Pagination from '@mui/material/Pagination'
import { SearchBar } from '../molecules/SearchBar'

type BlogIndexTemplatePropsType = {
  className: string
  hero: HeroType
  searchBar: SearchBarType
  blogList: BlogListType
  pagination: PaginationType
}

export const BlogIndexTemplate = (props: BlogIndexTemplatePropsType) => {
  return (
    <div className={`${props.className}`}>
      <Hero title="Blog" />
      <SearchBar
        formItem={props.searchBar.searchFormItem}
        submitItem={props.searchBar.searchSubmitItem}
        useFormMethods={props.searchBar.useFormMethods}
      />
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
