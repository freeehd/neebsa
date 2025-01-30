"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { VideoBackground } from "@/components/video-background"
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductShowcase } from "@/components/product-showcase"
import { Testimonials } from "@/components/Testimonials"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/Footer"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative bg-neutral-950 text-neutral-100">
      <NavBar />
      <main>
        <section className="relative h-screen">
          <VideoBackground />
          <motion.div className="absolute inset-0 bg-black/30" style={{ opacity }} />
          <HeroSection />
        </section>
        <FeaturedProducts />
        
        <ProductShowcase />
        <Testimonials />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

