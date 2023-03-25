import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { InputForm } from '@/components/molecules/InputForm'
import { TextareaForm } from '@/components/molecules/TextareaForm'
import { Button } from '@/components/atoms/Button'

type FormInputs = {
  name: string
  email: string
  content: string
}

export const ContactForm = () => {
  const useFormMethods = useForm<FormInputs>()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormMethods
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

  return (
    <div className="max-w-3xl bg-white rounded-lg m-auto mb-12">
      <FormProvider {...useFormMethods}>
        <form className="flex flex-col p-10" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            name={'名前'}
            type={'name'}
            placeholder={'問い合わせ 太郎'}
          />
          <InputForm
            name={'メールアドレス'}
            type={'email'}
            placeholder={'example@email.com'}
          />
          <TextareaForm
            name={'内容'}
            type={'content'}
            placeholder={'意見、質問内容'}
          />
          <Button type={'submit'} value={'送信する'} />
        </form>
      </FormProvider>
    </div>
  )
}
