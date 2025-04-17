import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VerifiedBadge } from "@/components/verified-badge"

interface Challenge {
  id: string
  title: string
  description: string
  bountyETH: number
  bountyINR: number
  deadline: string
  category: string
  issuer: string
  isVerified: boolean
}

interface ChallengeCardProps {
  challenge: Challenge
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline">{challenge.category}</Badge>
          <div className="text-right">
            <div className="font-bold text-lg text-primary">{challenge.bountyETH} ETH</div>
            <div className="text-xs text-muted-foreground">≈ ₹{challenge.bountyINR.toLocaleString()}</div>
          </div>
        </div>
        <CardTitle className="text-xl mt-2 line-clamp-2">{challenge.title}</CardTitle>
        <div className="flex items-center gap-1 text-sm">
          <span>{challenge.issuer}</span>
          {challenge.isVerified && <VerifiedBadge />}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{challenge.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>Due: {new Date(challenge.deadline).toLocaleDateString()}</span>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/challenges/${challenge.id}`}>
            View
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
