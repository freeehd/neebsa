"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Makeup Artist",
    quote: "Munique's products have transformed my clients' looks. The quality and pigmentation are unmatched.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Beauty Influencer",
    quote: "I've tried countless brands, but Munique stands out for its innovative formulas and stunning color range.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Olivia Martinez",
    role: "Fashion Model",
    quote:
      "Munique's makeup not only looks great on camera but feels amazing on my skin. It's my go-to for every shoot.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-6 bg-neutral-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-8">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
              </div>
              <blockquote className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</blockquote>
              <p className="text-lg font-light">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-neutral-400">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center">
            <button
              onClick={prevTestimonial}
              className="bg-neutral-800 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-neutral-800 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

