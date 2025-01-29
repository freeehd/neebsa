"use client"
import dynamic from "next/dynamic"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      <ThemeSwitcher />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

