"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const lipstickColors = [
  "#FF0000", // Red
  "#FF69B4", // Hot Pink
  "#FF1493", // Deep Pink
  "#C71585", // Medium Violet Red
  "#8E4585", // Plum
]

export default function VirtualMakeup() {
  const [currentColor, setCurrentColor] = useState(lipstickColors[0])

  return (
    <section id="virtual-makeup" className="py-16 px-6 bg-background-end bg-opacity-70 texture">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">
        <span className="wavy-text">Try Our Virtual Makeup</span>
      </h2>
      <div className="max-w-md mx-auto blob bg-white bg-opacity-70 p-8 depth-shadow">
        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Cartoon face */}
          <div className="absolute inset-0 rounded-full bg-[#FFE4B5]"></div>
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-black"></div>
          </div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-white">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-black"></div>
          </div>
          {/* Lips */}
          <motion.div
            className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-8 rounded-full"
            style={{ backgroundColor: currentColor }}
            animate={{ backgroundColor: currentColor }}
          ></motion.div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full mb-4">
              Choose Lipstick Color
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="grid grid-cols-5 gap-2">
              {lipstickColors.map((color) => (
                <motion.button
                  key={color}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentColor(color)}
                ></motion.button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <p className="text-center text-secondary">Click to choose a lipstick color!</p>
      </div>
    </section>
  )
}

