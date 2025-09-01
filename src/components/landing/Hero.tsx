import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SpinningSphere from "./3DSphere"

export default function HeroSection() {
    return (
      <section className="relative bg-black h-screen">
        <div className="maxWidth  h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
            {/* Left side content */}
            <div className="text-center lg:text-left space-y-6">
            <Badge variant="default">Badge</Badge>
              <h1 className="heroTitle">
                YOUR CRYPTO REVOLUTION OPPORTUNITIES
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Seamless and Secure Crypto Solutions - Empowering You to Trade, Invest, and Grow with Confidence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button>
                  Get Started
                </Button>
                <Button>
                  See Our Services
                </Button>
              </div>
            </div>
  
            {/* Right side image */}
            <div className="flex justify-center lg:justify-end">
                <SpinningSphere />
            </div>  
          </div>
        </div>
      </section>
    )
  }
  