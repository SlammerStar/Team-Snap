import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, ArrowUpRight, Award, CheckCircle2, Clock, Download, FileText, Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your challenges, submissions, and earnings</p>
      </div>

      {/* Wallet and Stats Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        {/* Wallet Card */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Withdraw
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-bold">1.25 ETH</div>
                <p className="text-xs text-muted-foreground">≈ ₹187,500</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">₹45,000</div>
                <p className="text-xs text-muted-foreground">Available for withdrawal</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="mr-2">
                View Transactions
              </Button>
              <Button size="sm">Add Funds</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹235,000</div>
            <p className="text-xs text-muted-foreground">+₹45,000 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solutions Submitted</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">8 accepted, 2 pending, 2 rejected</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="active" className="mt-8">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>

        {/* Active Challenges Tab */}
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Active Challenge Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge>Agriculture</Badge>
                  <Badge variant="outline" className="text-amber-500 border-amber-500">
                    In Progress
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">Smart Water Management System</CardTitle>
                <CardDescription>Ministry of Agriculture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Milestone:</span>
                    <span className="font-medium">Working Prototype</span>
                  </div>
                  <Progress value={30} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>30% Complete</span>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Due: May 20, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/challenges/1">View Details</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/challenges/1?tab=submit">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Active Challenge Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge>Healthcare</Badge>
                  <Badge variant="outline" className="text-amber-500 border-amber-500">
                    In Progress
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">Decentralized Healthcare Records</CardTitle>
                <CardDescription>National Health Authority</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current Milestone:</span>
                    <span className="font-medium">Concept Design</span>
                  </div>
                  <Progress value={15} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>15% Complete</span>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Due: May 15, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/challenges/2">View Details</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/challenges/2?tab=submit">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Explore More Card */}
            <Card className="flex flex-col justify-center items-center p-6 border-dashed">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Explore More Challenges</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Find new opportunities that match your skills and interests
              </p>
              <Button asChild>
                <Link href="/challenges">Browse Challenges</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>

        {/* Submissions Tab */}
        <TabsContent value="submissions" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-8 gap-4 p-4 font-medium border-b">
              <div className="col-span-3">Challenge</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-1">Milestone</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Actions</div>
            </div>

            {/* Submission Row */}
            <div className="grid grid-cols-8 gap-4 p-4 items-center hover:bg-muted/50">
              <div className="col-span-3 flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Challenge"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <div className="font-medium">Smart Water Management System</div>
                  <div className="text-sm text-muted-foreground">Ministry of Agriculture</div>
                </div>
              </div>
              <div className="col-span-1 text-sm">May 1, 2023</div>
              <div className="col-span-1 text-sm">Concept Design</div>
              <div className="col-span-1">
                <Badge variant="outline" className="text-green-500 border-green-500">
                  Approved
                </Badge>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Next Milestone
                </Button>
              </div>
            </div>

            {/* Submission Row */}
            <div className="grid grid-cols-8 gap-4 p-4 items-center hover:bg-muted/50">
              <div className="col-span-3 flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Challenge"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <div className="font-medium">Decentralized Healthcare Records</div>
                  <div className="text-sm text-muted-foreground">National Health Authority</div>
                </div>
              </div>
              <div className="col-span-1 text-sm">Apr 28, 2023</div>
              <div className="col-span-1 text-sm">Concept Design</div>
              <div className="col-span-1">
                <Badge variant="outline" className="text-amber-500 border-amber-500">
                  Pending
                </Badge>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View
                </Button>
              </div>
            </div>

            {/* Submission Row */}
            <div className="grid grid-cols-8 gap-4 p-4 items-center hover:bg-muted/50">
              <div className="col-span-3 flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Challenge"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <div>
                  <div className="font-medium">Rural Supply Chain Tracking</div>
                  <div className="text-sm text-muted-foreground">Farmer Producer Organization</div>
                </div>
              </div>
              <div className="col-span-1 text-sm">Apr 15, 2023</div>
              <div className="col-span-1 text-sm">Final Delivery</div>
              <div className="col-span-1">
                <Badge variant="outline" className="text-red-500 border-red-500">
                  Rejected
                </Badge>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Resubmit
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Earnings Tab */}
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
              <CardDescription>Your earnings from completed challenges and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                <Activity className="h-16 w-16 text-muted" />
                {/* This would be a chart in a real implementation */}
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-medium">Recent Transactions</h3>

                <div className="rounded-md border">
                  {/* Transaction Row */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Smart Water Management - Milestone 1</div>
                        <div className="text-sm text-muted-foreground">May 2, 2023</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">+0.1 ETH</div>
                      <div className="text-sm text-muted-foreground">≈ ₹15,000</div>
                    </div>
                  </div>

                  {/* Transaction Row */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Rural Supply Chain - Milestone 2</div>
                        <div className="text-sm text-muted-foreground">Apr 20, 2023</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">+0.15 ETH</div>
                      <div className="text-sm text-muted-foreground">≈ ₹22,500</div>
                    </div>
                  </div>

                  {/* Transaction Row */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-2">
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Digital Identity - Final Payment</div>
                        <div className="text-sm text-muted-foreground">Apr 5, 2023</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">+0.2 ETH</div>
                      <div className="text-sm text-muted-foreground">≈ ₹30,000</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline">View All Transactions</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
