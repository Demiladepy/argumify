"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap, Play } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAccount, useConnect } from "wagmi"
import { injected } from "wagmi/connectors"

export function HeroSection() {
  const router = useRouter()
  const { isConnected } = useAccount()
  const { connect } = useConnect()

  const handleStartDebating = async () => {
    if (!isConnected) {
      connect({ connector: injected() })
    }
    router.push("/debates")
  }

  const handleExploreMarkets = () => {
    router.push("/markets")
  }

  const handleWatchDemo = () => {
    window.open("https://youtu.be/wI7pizTBMIo?si=WzJZK1FlDmGI6PSM", "_blank")
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Enhanced background with animated gradients */}
  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-accent/10" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Enhanced badge with glow effect */}
            <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 glass-card px-6 py-3 text-sm shadow-lg shadow-primary/10">
            <Zap className="mr-2 h-4 w-4 text-accent animate-pulse" />
            <span className="text-muted-foreground">Powered by Somnia Ecosystem</span> 
          </div>

          {/* Enhanced main heading with better typography */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block sm:inline">Shape the future of markets </span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent animate-[fade-in_1s]">
              with Argumentative
            </span>
          </h1>

          {/* Enhanced subheading */}
          <p className="mb-8 text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
           Experience the next evolution of DeFi,where AI meets prediction markets. Debate intelligently, stake your convictions, and unlock higher yields on Somnia’s ultra-fast blockchain.
          </p>

          {/* Enhanced CTA Buttons with better functionality */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5"
              onClick={handleStartDebating}
              aria-label="Start debating"
            >
              {isConnected ? "Start Debating" : "Connect & Debate"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              onClick={handleExploreMarkets}
            >
              Explore markets
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-lg px-6 py-6 hover:bg-accent/10 transition-all duration-300"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced feature highlights with better design */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-primary/10 shadow-lg">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">Prediction Markets</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Trade future outcomes seamlessly with AI-enhanced liquidity, ensuring efficiency and fair value discovery.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-card border border-border/40 hover:border-accent/30 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent/20 to-accent/10 shadow-lg">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">AI-Moderated Debates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intelligent discourse analysis with sentiment scoring and bias detection
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-card border border-border/40 hover:border-chart-3/30 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-chart-3/20 to-chart-3/10 shadow-lg">
                <Zap className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">Amplified Yields</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Earn enhanced rewards for accurate predictions and quality arguments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
