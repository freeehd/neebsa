"use client"

import React from "react"
import { motion } from "framer-motion"

interface OrbitingCirclesProps {
  children: React.ReactNode[]
  iconSize?: number
  radius?: number
}

export function OrbitingCircles({ children, iconSize = 24, radius = 100 }: OrbitingCirclesProps) {
  const numIcons = React.Children.count(children)
  const angleStep = (2 * Math.PI) / numIcons

  return (
    <div className="relative" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
      {React.Children.map(children, (child, index) => {
        const angle = angleStep * index
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
            }}
            initial={{ x, y, opacity: 0, scale: 0 }}
            animate={{
              x,
              y,
              opacity: 1,
              scale: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 0.2,
            }}
          >
            {React.cloneElement(child as React.ReactElement, {
            })}
          </motion.div>
        )
      })}
    </div>
  )
}

