"use client"

import { motion } from "framer-motion"

interface KineticTypographyProps {
  text: string
}

export function KineticTypography({ text }: KineticTypographyProps) {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  return (
    <motion.h1 className="text-6xl font-thin tracking-widest">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

