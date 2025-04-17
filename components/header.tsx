"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/connect-wallet"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-6">
            <span className="text-xl font-bold text-primary">InnoHaat</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/challenges" className="font-medium transition-colors hover:text-primary">
              Challenges
            </Link>
            <Link href="/dashboard" className="font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600" asChild>
              <Link href="/create">Post a Challenge</Link>
            </Button>
            <ConnectWallet />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
