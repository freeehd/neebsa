"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { name: "Personalized Consultations", description: "Tailored beauty advice for your unique style", icon: "👤" },
  { name: "Luxury Makeovers", description: "Transform your look with our premium products", icon: "✨" },
  { name: "Skincare Rituals", description: "Revitalize your skin with our curated treatments", icon: "🌿" },
  { name: "Bridal Beauty", description: "Elegant looks for your special day", icon: "👰" },
]

const ServiceCard = ({ service }: { service: typeof services[number] }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
      <Card className="w-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow rounded-lg border-none">
        <CardHeader className="text-center pb-2">
          <div className="text-4xl mb-2">{service.icon}</div>
          <CardTitle className="text-xl font-semibold text-primary">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-muted">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-secondary bg-opacity-30">
      <h2 className="section-title">Our Services</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </motion.div>
    </section>
  )
}

