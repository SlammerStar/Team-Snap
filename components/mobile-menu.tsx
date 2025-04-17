"use client"

import Link from "next/link"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ConnectWallet } from "@/components/connect-wallet"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4">
            <span className="text-lg font-bold">InnoHaat</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-4">
            <Link
              href="/challenges"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Challenges
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={onClose}
            >
              Dashboard
            </Link>
            <Link href="/about" className="text-lg font-medium transition-colors hover:text-primary" onClick={onClose}>
              About
            </Link>
          </nav>
          <div className="mt-auto py-4 space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/create" onClick={onClose}>
                Post a Challenge
              </Link>
            </Button>
            <ConnectWallet />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
