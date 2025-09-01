"use client"

import Link from "next/link"
import Image from "next/image"
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
            <Image
              src="/meta_forge_xr.png"
              alt="Metaforge XR Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-mono font-bold responsive-text-lg text-primary n

