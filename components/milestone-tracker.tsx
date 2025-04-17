import { CheckCircle2, Clock, Hourglass } from "lucide-react"

import { Progress } from "@/components/ui/progress"

interface Milestone {
  title: string
  description: string
  percentage: number
  status: "pending" | "in-progress" | "completed"
  dueDate: string
}

interface MilestoneTrackerProps {
  milestones: Milestone[]
}

export function MilestoneTracker({ milestones }: MilestoneTrackerProps) {
  // Calculate total progress
  const totalProgress = milestones.reduce((acc, milestone) => {
    if (milestone.status === "completed") {
      return acc + milestone.percentage
    }
    return acc
  }, 0)

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Overall Progress</span>
          <span>{totalProgress}% Complete</span>
        </div>
        <Progress value={totalProgress} className="h-2" />
      </div>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l last:border-l-0">
            {/* Status indicator */}
            <div className="absolute -left-[9px] top-0">
              {milestone.status === "completed" ? (
                <div className="rounded-full bg-primary p-1">
                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                </div>
              ) : milestone.status === "in-progress" ? (
                <div className="rounded-full bg-amber-500 p-1">
                  <Clock className="h-4 w-4 text-white" />
                </div>
              ) : (
                <div className="rounded-full bg-muted p-1">
                  <Hourglass className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{milestone.title}</h3>
                <div className="text-sm font-medium">{milestone.percentage}% of bounty</div>
              </div>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                </div>
                <div>
                  {milestone.status === "completed" ? (
                    <span className="text-green-500">Completed</span>
                  ) : milestone.status === "in-progress" ? (
                    <span className="text-amber-500">In Progress</span>
                  ) : (
                    <span>Pending</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
