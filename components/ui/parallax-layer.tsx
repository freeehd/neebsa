"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxLayer({ children, speed = 1, className }: ParallaxLayerProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200 * speed])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

