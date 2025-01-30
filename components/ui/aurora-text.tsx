"use client"
import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AuroraTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  Component?: React.ElementType
}

export function AuroraText({ children, Component = "span", className, ...props }: AuroraTextProps) {
  return (
    <Component className={cn("relative", className)} {...props}>
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#0066FF] via-[#9933FF] to-[#FF99F0] blur-2xl"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: "linear",
        }}
      />
      <span className="relative">{children}</span>
    </Component>
  )
}

