"use client";

import { Badge } from "@/components/ui/badge";
import { Wallet, SlidersHorizontal, LineChart, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      desc: "Link your wallet securely and verify in seconds.",
    },
    {
      icon: SlidersHorizontal,
      title: "Choose Strategy",
      desc: "Pick risk profiles or customize your trading rules.",
    },
    {
      icon: LineChart,
      title: "Track in Real-time",
      desc: "Monitor PnL, risk, and performance with live analytics.",
    },
    {
      icon: Rocket,
      title: "Scale Confidently",
      desc: "Low fees and global execution to grow faster.",
    },
  ] as const;

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-12%] h-[38vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(43,255,248,0.14),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-[-12%] h-[42vh] w-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,115,66,0.20),transparent_60%)] blur-3xl" />
      </div>

      <div className="maxWidth relative">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Badge className="mx-auto">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Get started in four simple steps
          </h2>
          <p className="text-muted-foreground">
            A streamlined flow to connect, configure, monitor, and scale — all
            with bank-grade security.
          </p>
        </div>

        {/* Stepper style distinct from Features */}
        <div className="relative mt-12">
          {/* Connector line on desktop with running light */}
          <div
            aria-hidden
            className="pointer-events-none hidden md:block absolute left-0 right-0 top-8 h-px"
          >
            <div className="hiw-connector" />
            <div className="hiw-runner" />
          </div>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <StepItem
                key={title}
                index={i}
                Icon={Icon}
                title={title}
                desc={desc}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

type StepItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  index: number;
};

function StepItem({ Icon, title, desc, index }: StepItemProps) {
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
    <li className="relative flex flex-col items-center text-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        whileHover={{
          scale: 1.06,
          y: -4,
          boxShadow: "0 0 38px rgba(0,115,66,0.28)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 20, mass: 0.5 }}
        className="hover-bubble group inline-flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md"
      >
        <Icon className="size-7" />
      </motion.div>
      <div className="mt-4 text-white text-base font-medium">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground max-w-[18rem]">{desc}</p>
      <span className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] text-black/80 text-xs px-2 py-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
        Step {index + 1}
      </span>
    </li>
  );
}
