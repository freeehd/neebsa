"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react" // Added import for React

interface ParallaxTextProps {
  children: React.ReactNode
  baseVelocity?: number
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useRef(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useTransform(scrollY, [0, 1000], [0, 5], { clamp: false })
  const smoothVelocity = useTransform(scrollVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const velocityFactor = useTransform(smoothVelocity, (latestVelocity) => {
    const velocity = latestVelocity * baseVelocity
    if (velocity < 0) {
      baseX.current += 0.1
    } else if (velocity > 0) {
      baseX.current -= 0.1
    }
    if (baseX.current < -100) {
      baseX.current = 0
    } else if (baseX.current > 0) {
      baseX.current = -100
    }
    return baseX.current
  })

  return (
    <div className="parallax text-4xl font-bold text-white opacity-5 overflow-hidden whitespace-nowrap">
      <motion.div className="scroller" style={{ x: velocityFactor }}>
        <span className="mr-4">{children} </span>
        <span className="mr-4">{children} </span>
        <span className="mr-4">{children} </span>
        <span className="mr-4">{children} </span>
      </motion.div>
    </div>
  )
}

