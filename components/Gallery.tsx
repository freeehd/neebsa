"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/makeup1.jpg", alt: "Natural Glow Look" },
  { src: "/makeup2.jpg", alt: "Elegant Evening Makeup" },
  { src: "/makeup3.jpg", alt: "Bridal Beauty" },
  { src: "/makeup4.jpg", alt: "Bold Lip Statement" },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-16 px-6 bg-background">
      <h2 className="section-title">Gallery</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div className="relative h-96 rounded-lg overflow-hidden shadow-xl" whileHover={{ scale: 1.02 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex].src || "/placeholder.svg"}
                alt={images[activeIndex].alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-md p-2 rounded-full text-primary hover:bg-white/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-md p-2 rounded-full text-primary hover:bg-white/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full mx-2 ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

