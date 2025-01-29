"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Lily", quote: "I felt like a real-life princess after my makeover!", emoji: "👸" },
  {
    name: "Sophia",
    quote: "The holographic makeup was out of this world! Literally sparkling all night.",
    emoji: "✨",
  },
  { name: "Emma", quote: "Cutesy Makeup made me feel adorable and confident. Best experience ever!", emoji: "🥰" },
]

const TestimonialCard = ({ testimonial }) => (
  <motion.div className="blob bg-white bg-opacity-70 p-6 shadow-md depth-shadow" whileHover={{ scale: 1.05 }}>
    <p className="text-lg mb-4 text-pink-700 italic">"{testimonial.quote}"</p>
    <div className="flex items-center justify-end">
      <p className="font-semibold text-pink-500 mr-2">- {testimonial.name}</p>
      <span className="text-2xl">{testimonial.emoji}</span>
    </div>
  </motion.div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 texture">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        <span className="wavy-text">Glowing Reviews</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-8"
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

