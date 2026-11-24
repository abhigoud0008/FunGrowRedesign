import { m as cn, t as getPageSeo } from "../entry-server.js";
import { useEffect, useState } from "react";
import { m, useMotionTemplate, useMotionValue } from "framer-motion";
import { ChevronDown, Image } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/lib/filters.ts
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function filterProjectExamples(projects, categoryId) {
	if (categoryId === "all") return projects;
	return projects.filter((project) => project.categoryId === categoryId);
}
function validateCompanyInquiry(input) {
	const sanitized = {
		fullName: input.fullName.trim(),
		companyName: input.companyName.trim(),
		workEmail: input.workEmail.trim(),
		category: input.category.trim(),
		projectBrief: input.projectBrief.trim()
	};
	const errors = {};
	if (sanitized.fullName.length < 2) errors.fullName = "Please enter your full name (at least 2 characters).";
	if (sanitized.companyName.length < 2) errors.companyName = "Please enter your company or organisation name.";
	if (!EMAIL_PATTERN.test(sanitized.workEmail)) errors.workEmail = "Please enter a valid email address (for example, name@company.com).";
	if (!sanitized.category) errors.category = "Please choose a primary talent category.";
	if (sanitized.projectBrief.length < 20) errors.projectBrief = "Please share at least 20 characters describing your deliverables and timeline.";
	return {
		valid: Object.keys(errors).length === 0,
		errors,
		sanitized
	};
}
// src/components/SeoHead.tsx
function upsertMeta(attr, key, content) {
	let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute(attr, key);
		document.head.appendChild(tag);
	}
	tag.setAttribute("content", content);
}
/**
* Dynamically synchronises document title, meta description, canonical URL,
* Open Graph tags, Twitter metadata, and Schema.org JSON-LD per route.
*/
function SeoHead({ route }) {
	useEffect(() => {
		const origin = window.location.origin;
		const seo = getPageSeo(route, origin);
		const canonicalUrl = `${origin}${seo.canonicalPath}`;
		document.title = seo.title;
		upsertMeta("name", "description", seo.description);
		upsertMeta("property", "og:title", seo.title);
		upsertMeta("property", "og:description", seo.description);
		upsertMeta("property", "og:url", canonicalUrl);
		upsertMeta("property", "og:type", seo.ogType);
		upsertMeta("name", "twitter:title", seo.title);
		upsertMeta("name", "twitter:description", seo.description);
		let canonical = document.head.querySelector("link[rel=\"canonical\"]");
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", canonicalUrl);
		document.head.querySelectorAll("script[data-funngro-jsonld=\"true\"]").forEach((node) => node.remove());
		seo.jsonLd.forEach((schemaObject) => {
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.setAttribute("data-funngro-jsonld", "true");
			script.textContent = JSON.stringify(schemaObject);
			document.head.appendChild(script);
		});
	}, [route]);
	return null;
}
// src/components/MediaFrame.tsx
/**
* Resilient responsive <picture> container with AVIF/WebP sources, explicit
* dimensions for zero CLS, priority LCP hints for hero media, and fallback UI.
*/
function MediaFrame({ asset, alt, aspectClassName = "aspect-video", className, priority = false, caption }) {
	const [hasError, setHasError] = useState(false);
	return /* @__PURE__ */ jsxs("figure", {
		className: cn("relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1528]", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("relative w-full flex-1 min-h-0 overflow-hidden", aspectClassName),
			children: [!hasError ? /* @__PURE__ */ jsxs("picture", {
				className: "block h-full w-full",
				children: [
					/* @__PURE__ */ jsx("source", {
						type: "image/avif",
						srcSet: asset.avifSrcSet,
						sizes: asset.sizes
					}),
					/* @__PURE__ */ jsx("source", {
						type: "image/webp",
						srcSet: asset.webpSrcSet,
						sizes: asset.sizes
					}),
					/* @__PURE__ */ jsx("img", {
						src: asset.fallbackSrc,
						srcSet: asset.webpSrcSet,
						sizes: asset.sizes,
						width: asset.width,
						height: asset.height,
						alt,
						loading: priority ? "eager" : "lazy",
						decoding: priority ? "sync" : "async",
						fetchPriority: priority ? "high" : "auto",
						referrerPolicy: "no-referrer",
						onError: () => setHasError(true),
						className: "h-full w-full object-cover object-center transition-transform duration-500 ease-out"
					})
				]
			}) : /* @__PURE__ */ jsxs("div", {
				role: "img",
				"aria-label": alt,
				className: "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1528] via-[#10203A] to-[#081222] p-6 text-center",
				children: [/* @__PURE__ */ jsx(Image, {
					className: "h-8 w-8 text-emerald-400/80",
					"aria-hidden": "true"
				}), /* @__PURE__ */ jsx("p", {
					className: "max-w-xs text-sm text-slate-300",
					children: alt
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060D1A]/65 via-transparent to-transparent",
				"aria-hidden": "true"
			})]
		}), caption && /* @__PURE__ */ jsx("figcaption", {
			className: "border-t border-slate-800/80 bg-[#091224] px-4 py-2.5 text-xs text-slate-300",
			children: caption
		})]
	});
}
// src/components/FaqAccordion.tsx
function FaqAccordion({ items, heading, subheading }) {
	const [openId, setOpenId] = useState(items[0]?.id ?? null);
	function toggleItem(id) {
		setOpenId((current) => current === id ? null : id);
	}
	return /* @__PURE__ */ jsx("section", {
		id: "faq",
		"aria-labelledby": "faq-heading",
		className: "border-t border-slate-800/80 py-20 md:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "faq-heading",
					className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
					children: heading
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 text-base leading-relaxed text-slate-300",
					children: subheading
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 divide-y divide-slate-800/80 border-y border-slate-800/80",
				children: items.map((item) => {
					const isOpen = openId === item.id;
					const panelId = `${item.id}-panel`;
					const buttonId = `${item.id}-button`;
					return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs("button", {
						id: buttonId,
						type: "button",
						"aria-expanded": isOpen,
						"aria-controls": panelId,
						onClick: () => toggleItem(item.id),
						className: "flex min-h-[56px] w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-emerald-300",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-base font-semibold text-slate-100 sm:text-lg",
							children: item.question
						}), /* @__PURE__ */ jsx(ChevronDown, {
							className: cn("h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200", isOpen && "rotate-180 text-emerald-400"),
							"aria-hidden": "true"
						})]
					}) }), /* @__PURE__ */ jsx("div", {
						id: panelId,
						role: "region",
						"aria-labelledby": buttonId,
						hidden: !isOpen,
						className: "pb-5 pr-8",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[15px] leading-relaxed text-slate-300",
							children: item.answer
						})
					})] }, item.id);
				})
			})]
		})
	});
}
// src/components/aceternity/Spotlight.tsx
/**
* Aceternity UI Spotlight adapted to deep navy & emerald brand lighting.
* Rendered without initial opacity fade so first paint & LCP remain unblocked.
*/
function Spotlight({ className, fill = "#10B981" }) {
	return /* @__PURE__ */ jsxs("svg", {
		className: cn("pointer-events-none absolute z-0 h-[140%] w-[120%] opacity-[0.22] lg:w-[82%]", className),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 3787 2842",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("g", {
			filter: "url(#funngro-spotlight-blur)",
			children: /* @__PURE__ */ jsx("ellipse", {
				cx: "1924.71",
				cy: "273.501",
				rx: "1924.71",
				ry: "273.501",
				transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
				fill,
				fillOpacity: "0.28"
			})
		}), /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", {
			id: "funngro-spotlight-blur",
			x: "0.860352",
			y: "0.838989",
			width: "3785.16",
			height: "2840.26",
			filterUnits: "userSpaceOnUse",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ jsx("feFlood", {
					floodOpacity: "0",
					result: "BackgroundImageFix"
				}),
				/* @__PURE__ */ jsx("feBlend", {
					mode: "normal",
					in: "SourceGraphic",
					in2: "BackgroundImageFix",
					result: "shape"
				}),
				/* @__PURE__ */ jsx("feGaussianBlur", {
					stdDeviation: "151",
					result: "effect1_foregroundBlur"
				})
			]
		}) })]
	});
}
// src/components/aceternity/BackgroundBeams.tsx
var BEAM_PATHS = [
	"M-120 -60C180 120 420 280 860 360C1220 425 1440 520 1720 680",
	"M-40 -120C280 90 520 220 960 310C1320 385 1540 490 1820 640",
	"M80 -180C360 40 620 180 1040 270C1400 345 1620 460 1920 610",
	"M220 -220C500 10 760 150 1160 240C1500 315 1700 430 1980 580"
];
/**
* Aceternity UI BackgroundBeams component using LazyMotion's lightweight `m`.
*/
function BackgroundBeams({ className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("pointer-events-none absolute inset-0 overflow-hidden select-none", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			className: "h-full w-full opacity-45",
			viewBox: "0 0 1600 720",
			fill: "none",
			preserveAspectRatio: "xMidYMid slice",
			children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
				id: "emerald-beam-grad",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%",
				children: [
					/* @__PURE__ */ jsx("stop", {
						offset: "0%",
						stopColor: "#059669",
						stopOpacity: "0"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "50%",
						stopColor: "#10B981",
						stopOpacity: "0.45"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "100%",
						stopColor: "#34D399",
						stopOpacity: "0"
					})
				]
			}) }), BEAM_PATHS.map((d, index) => /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("path", {
				d,
				stroke: "rgba(148, 163, 184, 0.08)",
				strokeWidth: "1"
			}), /* @__PURE__ */ jsx(m.path, {
				d,
				stroke: "url(#emerald-beam-grad)",
				strokeWidth: "1.25",
				strokeDasharray: "160 900",
				initial: { strokeDashoffset: 1060 },
				animate: { strokeDashoffset: -1060 },
				transition: {
					duration: 11 + index * 2.5,
					repeat: Infinity,
					ease: "linear",
					delay: index * 1.4
				}
			})] }, d))]
		})
	});
}
// src/components/aceternity/CardSpotlight.tsx
/**
* Aceternity UI CardSpotlight adapted for accessible high-contrast navy surfaces.
* Uses LazyMotion `m.div` to minimize Framer Motion bundle weight.
*/
function CardSpotlight({ children, className }) {
	const mouseX = useMotionValue(-300);
	const mouseY = useMotionValue(-300);
	function handleMouseMove(event) {
		const { left, top } = event.currentTarget.getBoundingClientRect();
		mouseX.set(event.clientX - left);
		mouseY.set(event.clientY - top);
	}
	function handleMouseLeave() {
		mouseX.set(-300);
		mouseY.set(-300);
	}
	const spotlightBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.11), transparent 80%)`;
	return /* @__PURE__ */ jsxs("div", {
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className: cn("group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1528]/90 p-6 transition-colors duration-200 hover:border-emerald-500/40 md:p-8", className),
		children: [/* @__PURE__ */ jsx(m.div, {
			className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100",
			style: { background: spotlightBackground },
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10",
			children
		})]
	});
}
export { MediaFrame as a, validateCompanyInquiry as c, FaqAccordion as i, BackgroundBeams as n, SeoHead as o, Spotlight as r, filterProjectExamples as s, CardSpotlight as t };
