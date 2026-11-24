import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import type { MediaAsset } from '../data/mediaAssets';

interface MediaFrameProps {
  asset: MediaAsset;
  alt: string;
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Resilient responsive <picture> container with AVIF/WebP sources, explicit
 * dimensions for zero CLS, priority LCP hints for hero media, and fallback UI.
 */
export function MediaFrame({
  asset,
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
          <picture className="block h-full w-full">
            <source type="image/avif" srcSet={asset.avifSrcSet} sizes={asset.sizes} />
            <source type="image/webp" srcSet={asset.webpSrcSet} sizes={asset.sizes} />
            <img
              src={asset.fallbackSrc}
              srcSet={asset.webpSrcSet}
              sizes={asset.sizes}
              width={asset.width}
              height={asset.height}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              fetchPriority={priority ? 'high' : 'auto'}
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out"
            />
          </picture>
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
        <figcaption className="border-t border-slate-800/80 bg-[#091224] px-4 py-2.5 text-xs text-slate-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
