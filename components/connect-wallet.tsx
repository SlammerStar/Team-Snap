"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const { toast } = useToast()

  const handleConnect = async () => {
    setIsConnecting(true)

    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)

      toast({
        title: "Wallet Connected",
        description: "Your wallet has been successfully connected.",
      })
    }, 1500)
  }

  if (isConnected) {
    return (
      <Button variant="outline" className="gap-2">
        <Wallet className="h-4 w-4" />
        <span className="hidden sm:inline">0x1a2...3b4c</span>
      </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Wallet className="h-4 w-4" />
          <span>Connect Wallet</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>Connect your wallet to access the InnoHaat platform</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={handleConnect} disabled={isConnecting} className="w-full justify-start gap-4">
            <img src="/placeholder.svg?height=24&width=24" alt="MetaMask" className="h-6 w-6" />
            <span>MetaMask</span>
            {isConnecting && (
              <div className="ml-auto animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            )}
          </Button>
          <Button variant="outline" className="w-full justify-start gap-4">
            <img src="/placeholder.svg?height=24&width=24" alt="WalletConnect" className="h-6 w-6" />
            <span>WalletConnect</span>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-4">
            <img src="/placeholder.svg?height=24&width=24" alt="Coinbase Wallet" className="h-6 w-6" />
            <span>Coinbase Wallet</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
