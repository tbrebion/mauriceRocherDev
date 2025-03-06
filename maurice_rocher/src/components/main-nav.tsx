"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Add a debug log to verify the click handler is working
  const handleMenuToggle = () => {
    console.log('Menu state before:', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
    console.log('Menu state after:', !isMenuOpen)
  }

  return (
    <nav
      className={cn(
        "flex h-24 items-center border-t border-white/10 bg-black px-8",
        // Mobile/Tablet: adjust height and make space-between
        "lg:justify-between",
        // Desktop: keep original layout
        "relative",
        className
      )}
      {...props}
    >
      {/* Mobile/Tablet Layout */}
      <div className="z-[60]">
      <div className="flex w-full items-center">
        <Link href="/" className="transition-opacity duration-300 hover:opacity-30 lg:hidden">
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={41}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Burger Menu Button - Increased z-index */}
      <button
        onClick={handleMenuToggle}
        className="text-white lg:hidden absolute right-8 top-1/2 -translate-y-1/2"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-4">
          {/* Top bar */}
          <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
          }`} />
          {/* Middle bar */}
          <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`} />
          {/* Bottom bar */}
          <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-full -translate-y-full'
          }`} />
        </div>
      </button>
      </div>
      {/* Mobile Menu - z-50 */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 z-50 bg-black p-4 border-t border-white/10">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <Link href="/oeuvre" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
              OEUVRE
            </Link>
            <Link href="/expositions" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
              EXPOSITIONS
            </Link>
            <Link href="/bio" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
              BIO
            </Link>
            <Link href="/contact" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
              CONTACT
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between">
        <Link href="/oeuvre" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
          OEUVRE
        </Link>
        <Link href="/expositions" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
          EXPOSITIONS
        </Link>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hover:opacity-30">
          <Image
            src="/logo.png"
            alt="Logo"
            width={135}
            height={62}
            className="object-contain"
          />
        </Link>

        <Link href="/bio" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
          BIO
        </Link>
        <Link href="/contact" className="text-sm font-light tracking-widest transition-colors hover:text-gray-400">
          CONTACT
        </Link>
      </div>
    </nav>
  )
}

