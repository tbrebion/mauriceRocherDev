import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  return (
    <nav
      className={cn("flex h-24 items-center justify-between border-t border-white/10 bg-black px-8", className)}
      {...props}
    >
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
    </nav>
  )
}

