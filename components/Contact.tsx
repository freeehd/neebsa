"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formState)
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 px-6 bg-background bg-opacity-70 texture">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        <span className="wavy-text">Get in Touch</span>
      </h2>
      <motion.form
        className="max-w-md mx-auto blob bg-white bg-opacity-70 p-8 depth-shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleInputChange}
            className="rounded-full border-pink-300 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleInputChange}
            className="rounded-full border-pink-300 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleInputChange}
            rows={4}
            className="rounded-2xl border-pink-300 focus:ring-pink-500"
          />
        </div>
        <Button type="submit" className="cute-button w-full">
          Send Message
        </Button>
      </motion.form>
    </section>
  )
}

