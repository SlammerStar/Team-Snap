import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Milestone, Database, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"
import { ChallengeCard } from "@/components/challenge-card"

export default function Home() {
  // Sample featured challenges
  const featuredChallenges = [
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
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/90 to-primary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Solve India&apos;s Challenges, Earn Crypto Rewards
                </h1>
                <p className="max-w-[600px] text-white/80 md:text-xl">
                  InnoHaat connects organizations with innovators to solve real-world problems using blockchain
                  technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/challenges">
                    Browse Challenges
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                >
                  <Link href="/create">Post a Challenge</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="InnoHaat Platform"
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover lg:order-last -translate-y-20"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How InnoHaat Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our blockchain-powered platform ensures transparency, security, and fair rewards for innovators.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
            <FeatureCard
              icon={Shield}
              title="Full Transparency"
              description="All challenges, submissions, and payments are recorded on the blockchain, ensuring complete transparency and trust."
            />
            <FeatureCard
              icon={Milestone}
              title="Milestone Payments"
              description="Get paid as you progress through challenge milestones with smart contract-enforced payments."
            />
            <FeatureCard
              icon={Database}
              title="IPFS Storage"
              description="Your solutions are securely stored on IPFS, ensuring permanence and decentralized access."
            />
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Challenges</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the latest innovation challenges from verified organizations across India.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            {featuredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="mt-8">
              <Link href="/challenges">
                View All Challenges
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-primary">₹12M+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Total rewards distributed</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-primary">250+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Active challenges</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-primary">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Registered innovators</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-primary">85%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Solution implementation rate</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Ready to Innovate?</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-white/80 md:text-xl">
            Join InnoHaat today and start solving challenges that matter while earning crypto rewards.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/register">Sign Up Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
            >
              <Link href="/create">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
