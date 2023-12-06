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
    <div className={`flex-grow relative h-full ${props.className}`}>
      <Hero title="Blog" />
      <SearchBar
        className={'mb-3'}
        formItem={props.searchBar.searchFormItem}
        submitItem={props.searchBar.searchSubmitItem}
        useFormMethods={props.searchBar.useFormMethods}
      />
      <BlogList className={'mb-20'} blogList={props.blogList} />
      <Pagination
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center mb-5 w-96"
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
