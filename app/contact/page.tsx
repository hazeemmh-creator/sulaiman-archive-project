'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Message sent! ✅')
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have a tribute, reflection, or question? Reach out to the DigitalArchive team.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your name" className="border p-2 w-full" required />
        <input type="email" name="email" placeholder="Your email" className="border p-2 w-full" required />
        <textarea name="message" placeholder="Your message" className="border p-2 w-full h-32" required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
      {status && <p className="mt-4 text-green-700">{status}</p>}
    </div>
  )
}