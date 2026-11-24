import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BackgroundBeamsProps {
  className?: string;
}

const BEAM_PATHS = [
  'M-120 -60C180 120 420 280 860 360C1220 425 1440 520 1720 680',
  'M-40 -120C280 90 520 220 960 310C1320 385 1540 490 1820 640',
  'M80 -180C360 40 620 180 1040 270C1400 345 1620 460 1920 610',
  'M220 -220C500 10 760 150 1160 240C1500 315 1700 430 1980 580',
];

/**
 * Aceternity UI BackgroundBeams component: architectural ambient curves
 * with subtle emerald stroke travel on dark navy canvas.
 */
export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden select-none',
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-45"
        viewBox="0 0 1600 720"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="emerald-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
          </linearGradient>
        </defs>
        {BEAM_PATHS.map((d, index) => (
          <g key={d}>
            <path d={d} stroke="rgba(148, 163, 184, 0.08)" strokeWidth="1" />
            <motion.path
              d={d}
              stroke="url(#emerald-beam-grad)"
              strokeWidth="1.25"
              strokeDasharray="160 900"
              initial={{ strokeDashoffset: 1060 }}
              animate={{ strokeDashoffset: -1060 }}
              transition={{
                duration: 11 + index * 2.5,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 1.4,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
