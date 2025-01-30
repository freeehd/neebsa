"use client"

import type React from "react"
import { MotionConfig } from "framer-motion"

interface ParallaxProviderProps {
  children: React.ReactNode
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

