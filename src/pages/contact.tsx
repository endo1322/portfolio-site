import Link from 'next/link'
import React from 'react'
import { Hero } from '@/components/organisms/Hero'
import { ContactForm } from '@/components/templates/ContactForm'

export default function Contact() {
  return (
    <div className="container">
      <Hero title="Contact" />
      <ContactForm />
    </div>
  )
}
