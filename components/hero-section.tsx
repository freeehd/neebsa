"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-light tracking-wider mb-4"
        >
          MUNIQUE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-light tracking-wide"
        >
          Elevate Your Beauty
        </motion.p>
      </div>
    </div>
  )
}

