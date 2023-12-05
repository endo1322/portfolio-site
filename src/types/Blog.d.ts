import { RichText, Page, MultiSelect } from '@/types/Notion'
import {
  BlockObject,
  PageObject,
  TagObject,
  TagProperty,
  TocObject
} from '@/types/NotionToObject'

export type BlogArticleCardType = {
  title: Array<RichText>
  multiSelect: Array<MultiSelect>
  date: {
    createDate: string
    updateDate: string
  }
  contents: Array<BlockObject>
  toc: Array<TocObject>
}

export type LinkType = {
  href: string
  tag: string
}

export type BlogListType = {
  currentBlog: Array<PageObject>
  selectedTags: TagObject
  onSetBool: (e: { selectedTagId: string }) => void
}

export type PaginationType = {
  pageCount: number
  onPageChange: (e: { selected: number }) => void
}

export type SearchFormType = {
  text: string
}

export type SearchFormItemType = {
  keyword: {
    name: string
    type: string
    placeholder: string
    required: false
  }
}

export type SearchSubmitItemType = {
  type: string
  value: string
  onSubmit: (data: any) => void
}

type useFormMethodsType<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = {
  watch: UseFormWatch<TFieldValues>
  getValues: UseFormGetValues<TFieldValues>
  getFieldState: UseFormGetFieldState<TFieldValues>
  setError: UseFormSetError<TFieldValues>
  clearErrors: UseFormClearErrors<TFieldValues>
  setValue: UseFormSetValue<TFieldValues>
  trigger: UseFormTrigger<TFieldValues>
  formState: FormState<TFieldValues>
  resetField: UseFormResetField<TFieldValues>
  reset: UseFormReset<TFieldValues>
  handleSubmit: UseFormHandleSubmit<TFieldValues>
  unregister: UseFormUnregister<TFieldValues>
  control: Control<TFieldValues, TContext>
  register: UseFormRegister<TFieldValues>
  setFocus: UseFormSetFocus<TFieldValues>
}

export type SearchBarType = {
  searchFormItem: SearchFormItemType
  searchSubmitItem: SearchSubmitItemType
  useFormMethods: useFormMethodsType
}
