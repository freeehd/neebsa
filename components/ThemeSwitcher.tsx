"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const themes = [
  { name: "pink", primary: "#FF69B4", secondary: "#FFB6C1" },
  { name: "blue", primary: "#87CEEB", secondary: "#ADD8E6" },
  { name: "purple", primary: "#DDA0DD", secondary: "#E6E6FA" },
  { name: "green", primary: "#98FB98", secondary: "#90EE90" },
]

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", themes[currentTheme].primary)
    document.documentElement.style.setProperty("--color-secondary", themes[currentTheme].secondary)
  }, [currentTheme])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const cycleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme + 1) % themes.length)
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((theme, index) => (
            <DropdownMenuItem key={theme.name} onClick={() => setCurrentTheme(index)}>
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: theme.primary }}></div>
              {theme.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" size="icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
        <span className="sr-only">Toggle dark mode</span>
      </Button>
    </div>
  )
}

