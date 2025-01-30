"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-light tracking-wider">
          MUNIQUE
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-neutral-900 bg-opacity-95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink href="#products" onClick={() => setIsOpen(false)}>
              Products
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="text-sm uppercase tracking-wider hover:text-neutral-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

