import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" disabled>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 p-0" aria-current="page">
        1
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
        2
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
        3
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 p-0" disabled>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
      </Button>
      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
        10
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
