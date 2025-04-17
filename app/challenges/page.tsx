import { Search, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pagination } from "@/components/pagination"
import { ChallengeCard } from "@/components/challenge-card"

export default function ChallengePage() {
  // Sample challenges data
  const challenges = [
    {
      id: "1",
      title: "Smart Water Management System",
      description: "Design an IoT-based solution for monitoring and optimizing water usage in agricultural settings",
      bountyETH: 0.5,
      bountyINR: 75000,
      deadline: "2023-06-15",
      category: "Agriculture",
      issuer: "Ministry of Agriculture",
      isVerified: true,
    },
    {
      id: "2",
      title: "Decentralized Healthcare Records",
      description:
        "Create a secure blockchain solution for storing and sharing patient medical records across healthcare providers",
      bountyETH: 0.75,
      bountyINR: 112500,
      deadline: "2023-06-30",
      category: "Healthcare",
      issuer: "National Health Authority",
      isVerified: true,
    },
    {
      id: "3",
      title: "Rural Supply Chain Tracking",
      description: "Develop a blockchain-based system to track agricultural products from farm to market",
      bountyETH: 0.6,
      bountyINR: 90000,
      deadline: "2023-07-10",
      category: "Supply Chain",
      issuer: "Farmer Producer Organization",
      isVerified: false,
    },
    {
      id: "4",
      title: "Blockchain-Based Land Registry",
      description: "Create a secure and transparent system for land records management using blockchain technology",
      bountyETH: 1.2,
      bountyINR: 180000,
      deadline: "2023-08-05",
      category: "Government",
      issuer: "Department of Land Resources",
      isVerified: true,
    },
    {
      id: "5",
      title: "Decentralized Microgrid Solution",
      description: "Design a blockchain solution for peer-to-peer energy trading in rural communities",
      bountyETH: 0.8,
      bountyINR: 120000,
      deadline: "2023-07-25",
      category: "Energy",
      issuer: "Ministry of Power",
      isVerified: true,
    },
    {
      id: "6",
      title: "Digital Identity for Unbanked",
      description: "Develop a blockchain-based digital identity solution for unbanked populations",
      bountyETH: 0.9,
      bountyINR: 135000,
      deadline: "2023-08-15",
      category: "Finance",
      issuer: "Financial Inclusion Council",
      isVerified: true,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Explore Challenges</h1>
        <p className="text-muted-foreground">
          Browse and filter through innovation challenges from organizations across India
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="my-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search challenges..." className="pl-8" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="supply-chain">Supply Chain</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Bounty Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Bounties</SelectItem>
              <SelectItem value="low">Up to ₹50,000</SelectItem>
              <SelectItem value="medium">₹50,000 - ₹100,000</SelectItem>
              <SelectItem value="high">₹100,000+</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Verified Organizations Only</DropdownMenuItem>
              <DropdownMenuItem>Ending Soon</DropdownMenuItem>
              <DropdownMenuItem>Recently Added</DropdownMenuItem>
              <DropdownMenuItem>Most Funded</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination />
      </div>
    </div>
  )
}
