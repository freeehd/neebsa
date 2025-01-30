"use client"

import { motion } from "framer-motion"

interface GlowingButtonProps {
  className?: string
  children?: React.ReactNode
}

export function GlowingButton({ className, children }: GlowingButtonProps) {
  return (
    <motion.button
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
      whileHover={{
        boxShadow: "0px 0px 20px rgba(156, 39, 176, 0.5)",
      }}
    >
      {children}
    </motion.button>
  )
}

