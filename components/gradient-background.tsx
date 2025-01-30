"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GradientBackgroundProps {
  className?: string
  mousePosition: { x: number; y: number }
}

export function GradientBackground({ className, mousePosition }: GradientBackgroundProps) {
  const [gradientColors, setGradientColors] = useState([
    "rgba(26, 0, 51, 0.3)",
    "rgba(76, 0, 151, 0.3)",
    "rgba(126, 87, 194, 0.3)",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientColors((prevColors) => {
        const newColors = prevColors.map((color) => {
          const [r, g, b, a] = color.match(/\d+(\.\d+)?/g)!.map(Number)
          const newR = Math.max(26, Math.min(126, r + Math.random() * 10 - 5))
          const newG = Math.max(0, Math.min(87, g + Math.random() * 10 - 5))
          const newB = Math.max(51, Math.min(194, b + Math.random() * 10 - 5))
          return `rgba(${newR}, ${newG}, ${newB}, ${a})`
        })
        return newColors
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={className}
      style={{
        background: `radial-gradient(
          circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
          ${gradientColors[0]},
          ${gradientColors[1]},
          ${gradientColors[2]}
        )`,
      }}
      animate={{
        background: `radial-gradient(
          circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
          ${gradientColors[0]},
          ${gradientColors[1]},
          ${gradientColors[2]}
        )`,
      }}
      transition={{ duration: 1.5 }}
    />
  )
}

