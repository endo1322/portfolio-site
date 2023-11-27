import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { InputForm } from '@/components/molecules/InputForm'
import { TextareaForm } from '@/components/molecules/TextareaForm'
import { Button } from '@/components/atoms/Button'
import { SelectForm } from '@/components/molecules/SelectForm'
import { Frame } from '@/components/atoms/Frame'
import { FormItemType, SubmitItemType } from '@/types/Contact'

type ContactTemplateType = {
  formItems: FormItemType
  submitItem: SubmitItemType
}

export const ContactTemplate = (props: ContactTemplateType) => {
  return (
    <Frame>
      <form
        className="max-w-3xl flex flex-col p-10"
        onSubmit={props.submitItem.onSubmit}
      >
        <InputForm
          name={props.formItems.name.name}
          type={props.formItems.name.type}
          placeholder={props.formItems.name.placeholder}
          required={props.formItems.name.required}
        />
        <InputForm
          name={props.formItems.mail.name}
          type={props.formItems.mail.type}
          placeholder={props.formItems.mail.placeholder}
          required={props.formItems.mail.required}
        />
        <SelectForm
          name={props.formItems.select.name}
          type={props.formItems.select.type}
          selectItems={props.formItems.select.selectItems}
          required={props.formItems.select.required}
        />
        <TextareaForm
          name={props.formItems.textarea.name}
          type={props.formItems.textarea.type}
          placeholder={props.formItems.textarea.placeholder}
          required={props.formItems.textarea.required}
        />
        <Button type={props.submitItem.type} value={props.submitItem.value} />
      </form>
    </Frame>
  )
}
