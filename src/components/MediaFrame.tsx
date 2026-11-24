import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Resilient image container with CLS prevention, descriptive alt text,
 * and automatic CSS/SVG fallback if loading fails.
 */
export function MediaFrame({
  src,
  alt,
  aspectClassName = 'aspect-video',
  className,
  priority = false,
  caption,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure
      className={cn(
        'relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1528]',
        className
      )}
    >
      <div className={cn('relative w-full flex-1 min-h-0 overflow-hidden', aspectClassName)}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1528] via-[#10203A] to-[#081222] p-6 text-center"
          >
            <ImageIcon className="h-8 w-8 text-emerald-400/80" aria-hidden="true" />
            <p className="max-w-xs text-sm text-slate-300">{alt}</p>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060D1A]/65 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
      {caption && (
        <figcaption className="border-t border-slate-800/80 bg-[#091224] px-4 py-2.5 text-xs text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
