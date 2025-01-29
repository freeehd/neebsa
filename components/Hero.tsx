"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {text}
    </motion.span>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/Muniquq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <motion.div
        className="relative z-10 text-center text-white max-w-3xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-light mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedText text="Munique" className="shimmer" />
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-light mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatedText text="Simply Munique" />
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Discover the art of effortless beauty with our curated collection of premium cosmetics.
        </motion.p>
        <Button
          variant="outline"
          size="lg"
          className="elegant-button bg-transparent border-2 border-white hover:bg-white hover:text-black"
        >
          Explore Collection
        </Button>
      </motion.div>
    </section>
  )
}

