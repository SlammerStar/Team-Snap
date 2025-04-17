import { CheckCircle } from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function VerifiedBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CheckCircle className="h-4 w-4 text-primary fill-primary" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified Organization</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
