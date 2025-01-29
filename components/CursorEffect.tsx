"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "pink",
      mixBlendMode: "difference" as const,
    },
  }

  useEffect(() => {
    const textElements = ["h1", "h2", "h3", "p", "a", "button"]
    const mouseOver = () => setCursorVariant("text")
    const mouseLeave = () => setCursorVariant("default")

    textElements.forEach((element) => {
      const elements = document.querySelectorAll(element)
      elements.forEach((el) => {
        el.addEventListener("mouseover", mouseOver)
        el.addEventListener("mouseleave", mouseLeave)
      })
    })

    return () => {
      textElements.forEach((element) => {
        const elements = document.querySelectorAll(element)
        elements.forEach((el) => {
          el.removeEventListener("mouseover", mouseOver)
          el.removeEventListener("mouseleave", mouseLeave)
        })
      })
    }
  }, [])

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}

