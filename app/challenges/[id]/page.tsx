import Link from "next/link"
import Image from "next/image"
import { Calendar, CheckCircle2, Clock, Download, Send, Upload, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MilestoneTracker } from "@/components/milestone-tracker"
import { VerifiedBadge } from "@/components/verified-badge"
import { IPFSUpload } from "@/components/ipfs-upload"

export default function ChallengeDetail({ params }: { params: { id: string } }) {
  // This would normally be fetched from an API based on the ID
  const challenge = {
    id: params.id,
    title: "Smart Water Management System",
    description:
      "Design an IoT-based solution for monitoring and optimizing water usage in agricultural settings. The solution should include sensors for soil moisture, water flow, and weather conditions, with a dashboard for farmers to monitor and control irrigation systems remotely.\n\nThe system should be low-cost, durable, and suitable for rural Indian conditions with limited connectivity. It should demonstrate at least 30% water savings compared to traditional irrigation methods while maintaining or improving crop yields.",
    longDescription:
      "India faces significant water scarcity challenges, particularly in agricultural regions. With agriculture consuming over 80% of India's freshwater resources, there is an urgent need for smart water management solutions that can optimize usage while ensuring crop productivity.\n\nThe ideal solution will combine hardware sensors, IoT connectivity, and a user-friendly interface that works on basic smartphones. The system should be able to operate with intermittent internet connectivity and be powered by renewable energy sources where possible.\n\nThe solution should include:\n\n1. Low-cost soil moisture and water flow sensors\n2. A central control unit for data processing\n3. Mobile application for farmers with minimal technical knowledge\n4. Optional weather prediction integration\n5. Data analytics for optimization recommendations\n\nThe winning solution will be piloted in 5 villages across Maharashtra, with potential for nationwide scaling if successful.",
    bountyETH: 0.5,
    bountyINR: 75000,
    deadline: "2023-06-15",
    category: "Agriculture",
    issuer: "Ministry of Agriculture",
    issuerLogo: "/placeholder.svg?height=100&width=100",
    isVerified: true,
    participants: 12,
    submissions: 3,
    createdAt: "2023-04-01",
    milestones: [
      {
        title: "Concept and Design",
        description: "Submit detailed design documents and prototype plans",
        percentage: 20,
        status: "completed",
        dueDate: "2023-04-30",
      },
      {
        title: "Working Prototype",
        description: "Deliver functional prototype with basic sensor integration",
        percentage: 30,
        status: "in-progress",
        dueDate: "2023-05-20",
      },
      {
        title: "Field Testing",
        description: "Complete field testing in at least one agricultural setting",
        percentage: 30,
        status: "pending",
        dueDate: "2023-06-05",
      },
      {
        title: "Final Delivery",
        description: "Complete solution with documentation and deployment guide",
        percentage: 20,
        status: "pending",
        dueDate: "2023-06-15",
      },
    ],
    discussions: [
      {
        id: "1",
        user: "Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40",
        content:
          "Is it possible to use existing irrigation systems with this solution, or does it require completely new hardware?",
        timestamp: "2023-04-10T10:30:00Z",
        replies: [
          {
            id: "1-1",
            user: "Ministry of Agriculture",
            avatar: "/placeholder.svg?height=40&width=40",
            content:
              "The solution should be adaptable to existing irrigation systems where possible, but we're open to innovative approaches that may require new hardware if they demonstrate significant benefits.",
            timestamp: "2023-04-10T14:15:00Z",
          },
        ],
      },
      {
        id: "2",
        user: "Priya Singh",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "What is the expected battery life for the sensors if they're deployed in remote areas?",
        timestamp: "2023-04-12T09:45:00Z",
        replies: [],
      },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-8">
          {/* Challenge Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {challenge.category}
              </Badge>
              <span className="text-sm text-muted-foreground">
                Posted on {new Date(challenge.createdAt).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">{challenge.title}</h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src={challenge.issuerLogo || "/placeholder.svg"}
                  alt={challenge.issuer}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{challenge.issuer}</span>
                {challenge.isVerified && <VerifiedBadge />}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{challenge.participants} participants</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Upload className="h-4 w-4" />
                <span>{challenge.submissions} submissions</span>
              </div>
            </div>
          </div>

          {/* Tabs for Description, Milestones, Discussions */}
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>

            {/* Description Tab */}
            <TabsContent value="description" className="space-y-6 pt-4">
              <div className="prose max-w-none">
                <p className="text-lg font-medium">{challenge.description}</p>
                <div className="mt-6 whitespace-pre-line">{challenge.longDescription}</div>
              </div>

              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-lg font-semibold mb-2">Submission Requirements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Complete technical documentation</li>
                  <li>Working prototype or proof-of-concept</li>
                  <li>Cost analysis and implementation plan</li>
                  <li>Video demonstration (max 5 minutes)</li>
                </ul>
              </div>
            </TabsContent>

            {/* Milestones Tab */}
            <TabsContent value="milestones" className="pt-4">
              <MilestoneTracker milestones={challenge.milestones} />
            </TabsContent>

            {/* Discussions Tab */}
            <TabsContent value="discussions" className="space-y-6 pt-4">
              {challenge.discussions.map((discussion) => (
                <div key={discussion.id} className="space-y-4">
                  <div className="flex gap-3">
                    <Image
                      src={discussion.avatar || "/placeholder.svg"}
                      alt={discussion.user}
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{discussion.user}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(discussion.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p>{discussion.content}</p>
                    </div>
                  </div>

                  {/* Replies */}
                  {discussion.replies.length > 0 && (
                    <div className="ml-12 space-y-4">
                      {discussion.replies.map((reply) => (
                        <div key={reply.id} className="flex gap-3">
                          <Image
                            src={reply.avatar || "/placeholder.svg"}
                            alt={reply.user}
                            width={32}
                            height={32}
                            className="rounded-full h-8 w-8"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{reply.user}</span>
                              <span className="text-xs text-muted-foreground">
                                {new Date(reply.timestamp).toLocaleString()}
                              </span>
                            </div>
                            <p>{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Add Comment Form */}
              <div className="flex gap-3 mt-6">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Your Avatar"
                  width={40}
                  height={40}
                  className="rounded-full h-10 w-10"
                />
                <div className="flex-1 space-y-2">
                  <Textarea placeholder="Ask a question or leave a comment..." />
                  <div className="flex justify-end">
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Submit Solution Section */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Solution</CardTitle>
              <CardDescription>Upload your solution files to IPFS and submit them to the blockchain</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <IPFSUpload />
              <Button className="w-full" size="lg">
                <Upload className="mr-2 h-4 w-4" />
                Submit Solution
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="space-y-6">
          {/* Challenge Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Bounty</span>
                <div className="text-right">
                  <div className="font-bold text-lg text-primary">{challenge.bountyETH} ETH</div>
                  <div className="text-sm text-muted-foreground">≈ ₹{challenge.bountyINR.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Deadline</span>
                <div className="flex items-center gap-1 text-right">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{new Date(challenge.deadline).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Time Remaining</span>
                <div className="flex items-center gap-1 text-right">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>14 days</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Register for Challenge
              </Button>

              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Resources
              </Button>
            </CardContent>
          </Card>

          {/* Related Challenges */}
          <Card>
            <CardHeader>
              <CardTitle>Related Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/challenges/4" className="flex items-start gap-3 group">
                <div className="rounded-md bg-muted p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Rural Supply Chain Tracking
                  </h4>
                  <p className="text-sm text-muted-foreground">Bounty: 0.6 ETH</p>
                </div>
              </Link>

              <Link href="/challenges/5" className="flex items-start gap-3 group">
                <div className="rounded-md bg-muted p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Decentralized Microgrid Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">Bounty: 0.8 ETH</p>
                </div>
              </Link>

              <Link href="/challenges/6" className="flex items-start gap-3 group">
                <div className="rounded-md bg-muted p-2">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    Digital Identity for Unbanked
                  </h4>
                  <p className="text-sm text-muted-foreground">Bounty: 0.9 ETH</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
