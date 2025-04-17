"use client"
import { ArrowLeft, ArrowRight, ChevronRight, Info, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { IPFSUpload } from "@/components/ipfs-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TransactionStatus } from "@/components/transaction-status"
import { set } from "date-fns"

export default function CreateChallenge() {
  const [tabValue, setTabValue] = useState("details")
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Create a Challenge</h1>
        <p className="text-muted-foreground">
          Post a new innovation challenge and find solutions from talented innovators
        </p>
      </div>

      <Tabs value={tabValue} onValueChange={setTabValue} className="mt-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="details">Challenge Details</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="deploy">Deploy Contract</TabsTrigger>
          </TabsList>
          <div className="hidden sm:block text-sm text-muted-foreground">Step 1 of 3</div>
        </div>

        {/* Challenge Details Tab */}
        <TabsContent value="details" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide the core details about your innovation challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Challenge Title</Label>
                <Input id="title" placeholder="Enter a clear, descriptive title" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="supply-chain">Supply Chain</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Submission Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="bounty-eth">Bounty (ETH)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>The total amount in ETH to be awarded for this challenge</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input id="bounty-eth" type="number" step="0.01" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bounty-inr">Bounty (INR)</Label>
                  <Input id="bounty-inr" type="number" placeholder="0" disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="short-description">Short Description</Label>
                <Textarea
                  id="short-description"
                  placeholder="Brief overview of the challenge (max 200 characters)"
                  className="resize-none"
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">This will appear in challenge listings and cards</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="full-description">Full Description</Label>
                <Textarea
                  id="full-description"
                  placeholder="Detailed description of the challenge, requirements, and expected outcomes"
                  className="min-h-[200px]"
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Upload any supporting documents or resources for participants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <IPFSUpload multiple />
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button size="lg" onClick={() => setTabValue("milestones")}>
              Continue to Milestones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Define Milestones</CardTitle>
              <CardDescription>
                Break down your challenge into milestones with specific deliverables and payment allocations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Milestone 1 */}
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Milestone 1</h3>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete Milestone</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="milestone-1-title">Title</Label>
                    <Input id="milestone-1-title" placeholder="e.g., Concept and Design" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="milestone-1-description">Description</Label>
                    <Textarea
                      id="milestone-1-description"
                      placeholder="What should be delivered for this milestone?"
                      rows={2}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="milestone-1-percentage">Percentage of Total Bounty</Label>
                      <div className="flex items-center">
                        <Input id="milestone-1-percentage" type="number" placeholder="20" />
                        <span className="ml-2">%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="milestone-1-deadline">Deadline</Label>
                      <Input id="milestone-1-deadline" type="date" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Milestone 2</h3>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete Milestone</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="milestone-2-title">Title</Label>
                    <Input id="milestone-2-title" placeholder="e.g., Working Prototype" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="milestone-2-description">Description</Label>
                    <Textarea
                      id="milestone-2-description"
                      placeholder="What should be delivered for this milestone?"
                      rows={2}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="milestone-2-percentage">Percentage of Total Bounty</Label>
                      <div className="flex items-center">
                        <Input id="milestone-2-percentage" type="number" placeholder="30" />
                        <span className="ml-2">%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="milestone-2-deadline">Deadline</Label>
                      <Input id="milestone-2-deadline" type="date" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Add Milestone Button */}
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Another Milestone
              </Button>

              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium">Milestone Allocation</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Total allocation: 50% of bounty (0.25 ETH)</p>
                <div className="w-full bg-background rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "50%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Milestone allocations must total 100% to proceed</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Details
            </Button>
            <Button size="lg" onClick={() => setTabValue("deploy")}>
              Continue to Deploy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* Deploy Contract Tab */}
        <TabsContent value="deploy" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Review and Deploy</CardTitle>
              <CardDescription>Review your challenge details and deploy the smart contract</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Challenge Title</h3>
                  <p>Smart Water Management System</p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">Category</h3>
                  <p>Agriculture</p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">Bounty</h3>
                  <p>0.5 ETH (≈ ₹75,000)</p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">Deadline</h3>
                  <p>June 15, 2023</p>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">Milestones</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <div className="font-medium">Concept and Design (20%)</div>
                      <div className="text-sm text-muted-foreground">Due: April 30, 2023</div>
                    </li>
                    <li>
                      <div className="font-medium">Working Prototype (30%)</div>
                      <div className="text-sm text-muted-foreground">Due: May 20, 2023</div>
                    </li>
                    <li>
                      <div className="font-medium">Field Testing (30%)</div>
                      <div className="text-sm text-muted-foreground">Due: June 5, 2023</div>
                    </li>
                    <li>
                      <div className="font-medium">Final Delivery (20%)</div>
                      <div className="text-sm text-muted-foreground">Due: June 15, 2023</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Smart Contract Details</h3>
                  <Button variant="outline" size="sm">
                    View Contract
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Contract Type</span>
                    <span className="font-medium">InnoHaat Challenge Contract</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Network</span>
                    <span className="font-medium">Polygon Mumbai Testnet</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Gas Fee</span>
                    <span className="font-medium">0.002 ETH (≈ ₹300)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Amount (Bounty + Gas)</span>
                    <span className="font-medium">0.502 ETH (≈ ₹75,300)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium">Important Information</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  By deploying this challenge, you are committing to fund the bounty amount (0.5 ETH) which will be
                  locked in the smart contract. The funds will be released to innovators as they complete milestones and
                  their submissions are approved by you.
                </p>
              </div>

              {/* Transaction Status - would be dynamic in real implementation */}
              <TransactionStatus status="idle" />
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Milestones
            </Button>
            <Button size="lg">
              Deploy Challenge Contract
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
