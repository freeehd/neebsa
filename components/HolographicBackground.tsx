"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const HolographicBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = e
        const { width, height } = backgroundRef.current.getBoundingClientRect()
        const x = (clientX / width - 0.5) * 2
        const y = (clientY / height - 0.5) * 2
        backgroundRef.current.style.setProperty("--mouse-x", x.toString())
        backgroundRef.current.style.setProperty("--mouse-y", y.toString())
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={backgroundRef}
      className="fixed inset-0 z-[-1] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 opacity-50" />
      <div className="absolute inset-0 holographic-foil" />
      <div className="absolute inset-0 noise-overlay" />
    </motion.div>
  )
}

export default HolographicBackground

