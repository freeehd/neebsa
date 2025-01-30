"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-light text-center mb-12"
        >
          About Munique
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/icon.png?height=600&width=600"
              alt="Munique Makeup Studio"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-300">
              Munique is more than just a makeup brand; it's a celebration of individuality and self-expression. Our
              premium products are crafted to enhance your unique beauty, empowering you to create looks that are simply
              Munique.
            </p>
            <p className="text-lg text-neutral-300">
              Founded on the principle that everyone deserves to feel confident and beautiful, Munique combines
              cutting-edge formulas with stunning pigments to deliver makeup that performs as beautifully as it looks.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-light mb-2">100+</h3>
                <p className="text-sm text-neutral-400">Unique Shades</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light mb-2">50+</h3>
                <p className="text-sm text-neutral-400">Countries Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light mb-2">10+</h3>
                <p className="text-sm text-neutral-400">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light mb-2">1M+</h3>
                <p className="text-sm text-neutral-400">Happy Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

