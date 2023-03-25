import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { InputForm } from '@/components/molecules/InputForm'
import { TextareaForm } from '@/components/molecules/TextareaForm'
import { Button } from '@/components/atoms/Button'
import { SelectForm } from '@/components/molecules/SelectForm'

type FormInputs = {
  name: string
  email: string
  content: string
}

export type SelectItemType = {
  value: string
  name: string
}

export const ContactForm = () => {
  const useFormMethods = useForm<FormInputs>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useFormMethods
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    reset()
    console.log(data)
  }

  const selectItems: SelectItemType[] = [
    { value: '', name: '選択してください' },
    { value: 'opinion', name: '意見' },
    { value: 'question', name: '質問' },
    { value: 'etcetra', name: 'その他' }
  ]

  return (
    <div className="max-w-3xl bg-white rounded-lg m-auto mb-12">
      <FormProvider {...useFormMethods}>
        <form className="flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
          <InputForm name={'名前'} type={'name'} placeholder={'問合 太郎'} />
          <InputForm
            name={'メールアドレス'}
            type={'email'}
            placeholder={'example@email.com'}
          />
          <SelectForm name={'種類'} type={'select'} selectItems={selectItems} />
          <TextareaForm
            name={'内容'}
            type={'content'}
            placeholder={'意見、質問内容等'}
          />
          <Button type={'submit'} value={'送信する'} />
        </form>
      </FormProvider>
    </div>
  )
}
