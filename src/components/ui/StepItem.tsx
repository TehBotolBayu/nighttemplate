"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type StepItemProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  index: number;
};

function StepItem({ Icon, title, desc, index }: StepItemProps) {
  const ref = useRef<HTMLDivElement>(null);

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

export default StepItem;
