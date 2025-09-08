"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      company: "FinTech Capital",
      avatar: "SC",
      rating: 5,
      content: "The real-time analytics and security features have transformed how we manage our crypto investments. The interface is intuitive yet powerful.",
      metric: { label: "ROI Increase", value: "+127%" }
    },
    {
      name: "Marcus Rivera",
      role: "DeFi Trader",
      company: "Independent",
      avatar: "MR",
      rating: 5,
      content: "Finally, a platform that combines institutional-grade security with the speed I need for DeFi trading. The low fees are a game-changer.",
      metric: { label: "Fee Savings", value: "73%" }
    },
    {
      name: "Alex Thompson",
      role: "Crypto Fund Manager",
      company: "Digital Assets Co",
      avatar: "AT",
      rating: 5,
      content: "Bank-grade security without compromising on performance. Our clients trust us more knowing we use this platform for their investments.",
      metric: { label: "Client Growth", value: "+245%" }
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Traders",
      trend: "+23% this month"
    },
    {
      icon: TrendingUp,
      value: "$2.8B",
      label: "Volume Traded",
      trend: "Last 30 days"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      trend: "Security guaranteed"
    }
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[-15%] h-[45vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,115,66,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-20 right-[-10%] h-[50vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(43,255,248,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="maxWidth relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Badge className="mx-auto">Trusted by Professionals</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Join thousands of successful traders
          </h2>
          <p className="text-muted-foreground">
            See how professionals are scaling their crypto portfolios with confidence and security.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, value, label, trend }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary mb-4">
                    <Icon className="size-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-white/80 mb-2">{label}</div>
                  <div className="text-xs text-muted-foreground">{trend}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Star className="size-5 fill-current" />
            <span className="text-sm font-medium">4.9/5 average rating from 2,500+ reviews</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Join our community of professional traders and start scaling your portfolio today.
          </p>
        </div>
      </div>
    </section>
  );
}

type TestimonialCardProps = {
  testimonial: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    content: string;
    metric: { label: string; value: string };
  };
  index: number;
};

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="hover-bubble"
    >
      <Card className="glass-card h-full bg-white/5 border-white/10 group">
        <CardContent className="p-6 h-full flex flex-col">
          {/* Quote Icon */}
          <div className="flex items-start justify-between mb-4">
            <Quote className="size-6 text-primary/60 flex-shrink-0" />
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
          </div>

          {/* Content */}
          <blockquote className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          {/* Metric Badge */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <TrendingUp className="size-3 text-primary" />
              <span className="text-xs text-primary font-medium">
                {testimonial.metric.label}: {testimonial.metric.value}
              </span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-black font-medium text-sm">
              {testimonial.avatar}
            </div>
            <div>
              <div className="text-white font-medium text-sm">{testimonial.name}</div>
              <div className="text-muted-foreground text-xs">
                {testimonial.role} • {testimonial.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
