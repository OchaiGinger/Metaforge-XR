"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism bg-background/80">
      <div className="max-w-7xl mx-auto responsive-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-mono font-bold responsive-text-lg text-primary neon-text">Metaforge XR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:neon-text focus-neon"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:neon-text focus-neon"
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:neon-text focus-neon"
            >
              Industries & Get Started
            </Link>
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors duration-300 hover:neon-text focus-neon"
            >
              Team & Contact
            </Link>

            <Button
              className="gradient-neon neon-glow hover:shadow-lg transition-all duration-300 font-semibold focus-neon"
              asChild
            >
              <Link href="/industries#get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus-neon"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden glassmorphism bg-background/95 rounded-lg mt-2 p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors duration-300 py-2 focus-neon"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors duration-300 py-2 focus-neon"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className="block text-foreground hover:text-primary transition-colors duration-300 py-2 focus-neon"
              onClick={() => setIsOpen(false)}
            >
              Industries & Get Started
            </Link>
            <Link
              href="/team"
              className="block text-foreground hover:text-primary transition-colors duration-300 py-2 focus-neon"
              onClick={() => setIsOpen(false)}
            >
              Team & Contact
            </Link>
            <Button
              className="w-full gradient-neon neon-glow hover:shadow-lg transition-all duration-300 font-semibold focus-neon mt-4"
              asChild
            >
              <Link href="/industries#get-started" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
