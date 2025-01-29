"use client"

import { useEffect, useState } from "react"
import type { JSX } from "react" // Added import for JSX

const Bubble = ({ size, left, animationDuration }: { size: number; left: number; animationDuration: number }) => (
  <div
    className="absolute bottom-0 rounded-full bg-white bg-opacity-30 animate-float"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      animationDuration: `${animationDuration}s`,
    }}
  ></div>
)

const Sparkle = ({
  size,
  top,
  left,
  animationDuration,
}: { size: number; top: number; left: number; animationDuration: number }) => (
  <svg
    className="absolute animate-twinkle"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      animationDuration: `${animationDuration}s`,
    }}
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#FFD700" />
  </svg>
)

export default function FloatingElements() {
  const [elements, setElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const bubbles = Array.from({ length: 15 }, (_, i) => (
      <Bubble
        key={`bubble-${i}`}
        size={Math.random() * 40 + 20}
        left={Math.random() * 100}
        animationDuration={Math.random() * 10 + 5}
      />
    ))

    const sparkles = Array.from({ length: 20 }, (_, i) => (
      <Sparkle
        key={`sparkle-${i}`}
        size={Math.random() * 16 + 8}
        top={Math.random() * 100}
        left={Math.random() * 100}
        animationDuration={Math.random() * 3 + 1}
      />
    ))

    setElements([...bubbles, ...sparkles])
  }, [])

  return <>{elements}</>
}

