"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  { id: 1, name: "Radiant Foundation", image: "/1.png?height=400&width=300" },
  { id: 2, name: "Velvet Lipstick", image: "/2.png?height=400&width=300" },
  { id: 3, name: "Shimmer Eyeshadow", image: "/3.png?height=400&width=300" },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="py-20 px-6 bg-neutral-950">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-light text-center mb-12"
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-wider">View Details</span>
                </div>
              </div>
              <h3 className="text-lg font-light mt-4 text-center">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

