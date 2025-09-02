import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, LineChart, Wallet, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="maxWidth">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Badge className="mx-auto">Our Features</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Trade, invest, and grow with confidence
          </h2>
          <p className="text-muted-foreground">
            Tools and protections designed for modern crypto portfolios — secure by default, fast by design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="feature-card group bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
            <CardHeader className="space-y-2">
              <div className="relative inline-flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_8px_rgba(0,115,66,0.25)]">
                <Shield className="size-5" />
              </div>
              <CardTitle className="text-white">Bank‑grade security</CardTitle>
              <CardDescription>
                Multi‑sig wallets, cold storage options, and continuous monitoring to keep funds safe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                24/7 anomaly detection with automated alerts.
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card group bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
            <CardHeader className="space-y-2">
              <div className="relative inline-flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_8px_rgba(0,115,66,0.25)]">
                <LineChart className="size-5" />
              </div>
              <CardTitle className="text-white">Real‑time analytics</CardTitle>
              <CardDescription>
                Live PnL, risk metrics, and performance insights tailored to your strategy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Millisecond updates across assets and exchanges.
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card group bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
            <CardHeader className="space-y-2">
              <div className="relative inline-flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_8px_rgba(0,115,66,0.25)]">
                <Wallet className="size-5" />
              </div>
              <CardTitle className="text-white">Low fees, high speed</CardTitle>
              <CardDescription>
                Optimized order routing and fee tiers so more gains stay in your pocket.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Global network with sub‑second settlement.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-primary">
          <Sparkles className="size-4" />
          <span className="text-sm">Built with modern UI and delightful micro‑interactions</span>
        </div>
      </div>
    </section>
  )
}
