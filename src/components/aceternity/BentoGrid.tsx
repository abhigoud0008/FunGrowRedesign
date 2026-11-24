import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { CardSpotlight } from './CardSpotlight';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  indexLabel: string;
  title: string;
  description: string;
  className?: string;
}

export function BentoGridItem({
  indexLabel,
  title,
  description,
  className,
}: BentoGridItemProps) {
  return (
    <CardSpotlight className={cn('flex flex-col justify-between', className)}>
      <div>
        <span className="font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums">
          {indexLabel}.
        </span>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-slate-50">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </CardSpotlight>
  );
}
