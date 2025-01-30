"use client"

import { useEffect, useRef } from "react"

export function LiquidAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    const color = "rgba(158, 122, 255, 0.3)"

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = color

      const w = canvas.width
      const h = canvas.height
      ctx.beginPath()
      ctx.moveTo(0, h / 2)

      for (let i = 0; i < w; i++) {
        const y = Math.sin(i * 0.01 + time) * 50 + h / 2
        ctx.lineTo(i, y)
      }

      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()
      ctx.fill()

      time += 0.05
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

