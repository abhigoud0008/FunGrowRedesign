import type { ReactNode, MouseEvent } from 'react';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
}

/**
 * Aceternity UI CardSpotlight adapted for accessible high-contrast navy surfaces.
 * Uses hairline slate borders and cursor-following subtle emerald sheen.
 */
export function CardSpotlight({ children, className }: CardSpotlightProps) {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-300);
    mouseY.set(-300);
  }

  const spotlightBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.11), transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1528]/90 p-6 transition-colors duration-200 hover:border-emerald-500/40 md:p-8',
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
