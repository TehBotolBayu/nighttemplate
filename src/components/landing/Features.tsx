"use client";

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, LineChart, Wallet, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank‑grade security",
      description: "Multi‑sig wallets, cold storage options, and continuous monitoring to keep funds safe.",
      detail: "24/7 anomaly detection with automated alerts."
    },
    {
      icon: LineChart,
      title: "Real‑time analytics",
      description: "Live PnL, risk metrics, and performance insights tailored to your strategy.",
      detail: "Millisecond updates across assets and exchanges."
    },
    {
      icon: Wallet,
      title: "Low fees, high speed",
      description: "Optimized order routing and fee tiers so more gains stay in your pocket.",
      detail: "Global network with sub‑second settlement."
    }
  ];
  return (
    <section className="relative bg-black py-20">
      <div className="maxWidth">
        <motion.div 
          className="mx-auto max-w-3xl text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mx-auto">Our Features</Badge>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trade, invest, and grow with confidence
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tools and protections designed for modern crypto portfolios — secure by default, fast by design.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15 + 0.5, 
                duration: 0.6,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="feature-card group bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                <CardHeader className="space-y-2">
                  <div className="relative inline-flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_8px_rgba(0,115,66,0.25)]">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    {feature.detail}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 flex items-center justify-center gap-2 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Sparkles className="size-4" />
          <span className="text-sm">Built with modern UI and delightful micro‑interactions</span>
        </motion.div>
      </div>
    </section>
  )
}
