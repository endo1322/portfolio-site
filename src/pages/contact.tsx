import Link from 'next/link'
import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ContactForm } from '@/components/templates/ContactForm'

export default function Contact() {
  return (
    <div className="container">
      <Hero
        title="Contact"
        text={[
          '　当ポートフォリオサイトをご覧いただき、誠にありがとうございます。',
          '　ここでは、皆様からサイト運営者である私に対する意見や質問等を受け付けております。何かございましたら、お気軽に下記フォームよりお問い合わせくださいませ。',
          '　できる限り、私も皆様の声にお応えしたいと考えておりますので、積極的に返信させていただきます。ただし、返信を希望されない場合は、メールアドレスの欄は空白でも構いません。'
        ]}
      />
      <ContactForm />
    </div>
  )
}
