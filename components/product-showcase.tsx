"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Radiant Foundation",
    description: "Flawless coverage with a natural glow",
    image: "/1.png?height=600&width=400",
  },
  {
    id: 2,
    name: "Velvet Lipstick",
    description: "Rich, long-lasting color in a smooth finish",
    image: "/3.png?height=600&width=400",
  },
  {
    id: 3,
    name: "Shimmer Eyeshadow",
    description: "Intense, buildable color with a metallic sheen",
    image: "/2.png?height=600&width=400",
  },
]

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <section className="py-20 px-6 bg-neutral-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">Discover Our Collection</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[2/3] w-full max-w-md mx-auto"
              >
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-light mb-4">{selectedProduct.name}</h3>
                <p className="text-neutral-300 mb-6">{selectedProduct.description}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`px-4 py-2 border border-neutral-700 rounded-full text-sm transition-colors ${
                    selectedProduct.id === product.id
                      ? "bg-neutral-100 text-neutral-900"
                      : "bg-transparent text-neutral-100 hover:bg-neutral-800"
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

