"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SpinningSphere from "./3DSphere"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Ambient gradients and glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-20%] h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(43,255,248,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,115,66,0.25),transparent_65%)] blur-3xl" />
        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-[conic-gradient(at_top_right,transparent,rgba(0,115,66,0.25),transparent)] blur-2xl" />
      </div>

      <div className="maxWidth relative">
        <div className="grid min-h-[85svh] grid-cols-1 items-center gap-10 py-28 md:py-32 lg:grid-cols-2">
          {/* Left content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="outline" className="bg-white/5 border-white/15 text-white rounded-full px-3 py-1">
                Empowering Global Startup Growth
              </Badge>
            </motion.div>
            <motion.h1 
              className="heroTitle text-balance leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              YOUR CRYPTO REVOLUTION OPPORTUNITIES
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Seamless and Secure Crypto Solutions — empowering you to trade, invest, and grow with confidence.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                className="rounded-full px-6 py-6 text-sm font-medium bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] text-black shadow-[inset_0_1px_0_rgba(255,255,255,.35)] hover:opacity-90"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 text-sm font-medium border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                See Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
              <SpinningSphere />
            </div>

            {/* Floating glass card */}
            <motion.div 
              className="absolute bottom-6 right-2 sm:right-6"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            >
              <Card className="bg-white/10 border-white/10 backdrop-blur-md text-white min-w-[260px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Quick Quote</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3 pt-0">
                  <div>
                    <div className="text-xs text-muted-foreground">Sell</div>
                    <div className="text-lg font-semibold">1.500</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Buy</div>
                    <div className="text-lg font-semibold">0.01587</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
  
