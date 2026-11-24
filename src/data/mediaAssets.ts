export interface MediaAsset {
  fallbackSrc: string;
  avifSrcSet: string;
  webpSrcSet: string;
  sizes: string;
  width: number;
  height: number;
  preloadAvifSrcSet: string;
}

export const MEDIA_ASSETS = {
  heroCompany: {
    fallbackSrc: '/assets/images/hero_company_workspace-800.jpg',
    avifSrcSet:
      '/assets/images/hero_company_workspace-480.avif 480w, /assets/images/hero_company_workspace-800.avif 800w, /assets/images/hero_company_workspace-1200.avif 1200w',
    webpSrcSet:
      '/assets/images/hero_company_workspace-480.webp 480w, /assets/images/hero_company_workspace-800.webp 800w, /assets/images/hero_company_workspace-1200.webp 1200w',
    preloadAvifSrcSet:
      '/assets/images/hero_company_workspace-480.avif 480w, /assets/images/hero_company_workspace-800.avif 800w, /assets/images/hero_company_workspace-1200.avif 1200w',
    sizes: '(max-width: 1023px) calc(100vw - 2rem), 560px',
    width: 1376,
    height: 768,
  },
  heroTeen: {
    fallbackSrc: '/assets/images/hero_teen_creator-800.jpg',
    avifSrcSet:
      '/assets/images/hero_teen_creator-480.avif 480w, /assets/images/hero_teen_creator-800.avif 800w, /assets/images/hero_teen_creator-1200.avif 1200w',
    webpSrcSet:
      '/assets/images/hero_teen_creator-480.webp 480w, /assets/images/hero_teen_creator-800.webp 800w, /assets/images/hero_teen_creator-1200.webp 1200w',
    preloadAvifSrcSet:
      '/assets/images/hero_teen_creator-480.avif 480w, /assets/images/hero_teen_creator-800.avif 800w, /assets/images/hero_teen_creator-1200.avif 1200w',
    sizes: '(max-width: 1023px) calc(100vw - 2rem), 560px',
    width: 1376,
    height: 768,
  },
  capabilityWeb: {
    fallbackSrc: '/assets/images/capability_web_engineering-800.jpg',
    avifSrcSet:
      '/assets/images/capability_web_engineering-480.avif 480w, /assets/images/capability_web_engineering-800.avif 800w, /assets/images/capability_web_engineering-1200.avif 1200w',
    webpSrcSet:
      '/assets/images/capability_web_engineering-480.webp 480w, /assets/images/capability_web_engineering-800.webp 800w, /assets/images/capability_web_engineering-1200.webp 1200w',
    preloadAvifSrcSet:
      '/assets/images/capability_web_engineering-480.avif 480w, /assets/images/capability_web_engineering-800.avif 800w, /assets/images/capability_web_engineering-1200.avif 1200w',
    sizes: '(max-width: 767px) calc(100vw - 3rem), 460px',
    width: 1200,
    height: 896,
  },
  capabilityContent: {
    fallbackSrc: '/assets/images/capability_content_media-800.jpg',
    avifSrcSet:
      '/assets/images/capability_content_media-480.avif 480w, /assets/images/capability_content_media-800.avif 800w, /assets/images/capability_content_media-1200.avif 1200w',
    webpSrcSet:
      '/assets/images/capability_content_media-480.webp 480w, /assets/images/capability_content_media-800.webp 800w, /assets/images/capability_content_media-1200.webp 1200w',
    preloadAvifSrcSet:
      '/assets/images/capability_content_media-480.avif 480w, /assets/images/capability_content_media-800.avif 800w, /assets/images/capability_content_media-1200.avif 1200w',
    sizes: '(max-width: 767px) calc(100vw - 3rem), 460px',
    width: 1200,
    height: 896,
  },
} as const satisfies Record<string, MediaAsset>;
