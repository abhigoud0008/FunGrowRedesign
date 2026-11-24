import { StrictMode, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Navigate, Route, Routes, StaticRouter, useLocation, useNavigate } from "react-router-dom";
import { MotionConfig, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Image, Menu, Send, Smartphone, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// src/components/Navbar.tsx
function Navbar() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const isTeenPage = location.pathname.startsWith("/teen");
	const ctaTarget = isTeenPage ? "#app-download" : "#contact-brief";
	const ctaLabel = isTeenPage ? "Get the App" : "Share a Brief";
	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 border-b border-slate-800/80 bg-[#060D1A]/90 backdrop-blur-md",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/company",
					className: "font-display text-xl font-bold tracking-tight text-slate-50 transition-colors hover:text-emerald-400 whitespace-nowrap shrink-0",
					children: "Funngro"
				}),
				/* @__PURE__ */ jsxs("nav", {
					"aria-label": "Primary navigation",
					className: "hidden md:flex items-center gap-7 text-sm font-medium text-slate-300",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/company",
							className: cn("whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8", !isTeenPage && "text-emerald-400 underline underline-offset-8"),
							children: "For Companies"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/teen",
							className: cn("whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8", isTeenPage && "text-emerald-400 underline underline-offset-8"),
							children: "For Teens"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#how-it-works",
							className: "whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8",
							children: "How It Works"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#faq",
							className: "whitespace-nowrap shrink-0 py-1 transition-colors hover:text-slate-50 hover:underline hover:underline-offset-8",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ jsx("a", {
						href: ctaTarget,
						className: "hidden sm:inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0",
						children: ctaLabel
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setMobileOpen((prev) => !prev),
						"aria-expanded": mobileOpen,
						"aria-controls": "mobile-navigation-drawer",
						"aria-label": mobileOpen ? "Close navigation menu" : "Open navigation menu",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-800 bg-[#0B1528] text-slate-200 transition-colors hover:border-slate-700 hover:text-white md:hidden",
						children: mobileOpen ? /* @__PURE__ */ jsx(X, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ jsx(Menu, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					})]
				})
			]
		}), mobileOpen && /* @__PURE__ */ jsx("nav", {
			id: "mobile-navigation-drawer",
			"aria-label": "Mobile navigation",
			className: "border-t border-slate-800/90 bg-[#081122] px-4 pb-5 pt-3 md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/company",
						className: cn("flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors", !isTeenPage ? "bg-emerald-500/10 text-emerald-300" : "text-slate-200 hover:bg-slate-800/60"),
						children: "For Companies"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/teen",
						className: cn("flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors", isTeenPage ? "bg-emerald-500/10 text-emerald-300" : "text-slate-200 hover:bg-slate-800/60"),
						children: "For Teens"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#how-it-works",
						onClick: () => setMobileOpen(false),
						className: "flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/60",
						children: "How It Works"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#faq",
						onClick: () => setMobileOpen(false),
						className: "flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/60",
						children: "FAQ"
					}),
					/* @__PURE__ */ jsx("a", {
						href: ctaTarget,
						onClick: () => setMobileOpen(false),
						className: "mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400",
						children: ctaLabel
					})
				]
			})
		})]
	});
}
// src/data/teenData.ts
var TEEN_HOW_IT_WORKS = [
	{
		step: "01",
		title: "Download the official app & build your profile",
		description: "Create an account on the Funngro app with parent or guardian consent, highlight your interests, and complete skill orientation."
	},
	{
		step: "02",
		title: "Browse scoped company projects",
		description: "Explore remote-friendly briefs across coding, design, testing, content, and marketing with clear instructions before applying."
	},
	{
		step: "03",
		title: "Complete milestones on your schedule",
		description: "Work on real deliverables around school and college hours, submit drafts for review, and incorporate constructive feedback."
	},
	{
		step: "04",
		title: "Build portfolio proof & earn responsibly",
		description: "Receive approved project payouts within the platform framework while documenting genuine work experience early."
	}
];
var TEEN_CATEGORIES = [
	{
		id: "all",
		label: "All Categories",
		description: "Explore illustrative example briefs across all five core tracks."
	},
	{
		id: "web-dev",
		label: "Website Development",
		description: "Responsive landing pages, portfolio sites, HTML/CSS fixes, and React components."
	},
	{
		id: "app-dev",
		label: "App Development",
		description: "Mobile UI screens, prototype flows, basic feature modules, and cross-platform testing."
	},
	{
		id: "content",
		label: "Content Creation",
		description: "Short-form video editing, product explainer scripts, blog drafts, and social graphics."
	},
	{
		id: "testing",
		label: "Software Testing",
		description: "Exploratory bug reporting, signup flow audits, and mobile responsiveness checks."
	},
	{
		id: "marketing",
		label: "Marketing",
		description: "Social media calendars, brand trend research, and student audience insights."
	}
];
var ILLUSTRATIVE_PROJECTS = [
	{
		id: "ex-web-1",
		categoryId: "web-dev",
		categoryLabel: "Website Development",
		title: "Responsive Event Registration Landing Page",
		summary: "Build a clean single-page event site from a Figma wireframe with accessible forms, mobile navigation, and fast image loading.",
		deliverables: [
			"Mobile-friendly HTML/React page",
			"Validated registration form",
			"Cross-browser layout check"
		],
		skillsPracticed: [
			"Semantic HTML",
			"Tailwind CSS",
			"Responsive Grids"
		],
		estimatedScope: "Illustrative Example · 4–6 hours scoped"
	},
	{
		id: "ex-app-1",
		categoryId: "app-dev",
		categoryLabel: "App Development",
		title: "Habit Tracker Onboarding Screen Prototype",
		summary: "Implement three interactive mobile onboarding screens with clean state transitions and accessible button targets.",
		deliverables: [
			"3 interactive screen views",
			"Input state handling",
			"Walkthrough screen recording"
		],
		skillsPracticed: [
			"React Native / Flutter UI",
			"Component State",
			"Mobile Ergonomics"
		],
		estimatedScope: "Illustrative Example · 5–8 hours scoped"
	},
	{
		id: "ex-content-1",
		categoryId: "content",
		categoryLabel: "Content Creation",
		title: "60-Second Product Walkthrough Reel & Captions",
		summary: "Edit raw product screen recordings into a crisp vertical explainer video with readable subtitles and structured pacing.",
		deliverables: [
			"9:16 vertical MP4 cut",
			"Burned-in accessible captions",
			"2 thumbnail frame options"
		],
		skillsPracticed: [
			"Video Pacing",
			"Visual Storytelling",
			"Copy Editing"
		],
		estimatedScope: "Illustrative Example · 3–4 hours scoped"
	},
	{
		id: "ex-testing-1",
		categoryId: "testing",
		categoryLabel: "Software Testing",
		title: "Checkout & Signup Flow QA Audit (Android)",
		summary: "Walk through a staging mobile app build, document edge-case UI overlaps, and log clear reproduction steps for developers.",
		deliverables: [
			"Structured bug log sheet",
			"Annotated issue screenshots",
			"Onboarding clarity notes"
		],
		skillsPracticed: [
			"QA Documentation",
			"Edge-Case Thinking",
			"UX Observation"
		],
		estimatedScope: "Illustrative Example · 2–3 hours scoped"
	},
	{
		id: "ex-marketing-1",
		categoryId: "marketing",
		categoryLabel: "Marketing",
		title: "Campus Audience Social Calendar & Hook Ideas",
		summary: "Research how student communities engage with study productivity tools and draft a two-week organic content plan.",
		deliverables: [
			"10 post concepts with hooks",
			"Format & hashtag notes",
			"Audience tone summary"
		],
		skillsPracticed: [
			"Audience Research",
			"Campaign Planning",
			"Concise Copywriting"
		],
		estimatedScope: "Illustrative Example · 3–5 hours scoped"
	},
	{
		id: "ex-web-2",
		categoryId: "web-dev",
		categoryLabel: "Website Development",
		title: "Technical SEO & Accessibility Metadata Cleanup",
		summary: "Audit heading hierarchy, image alt descriptions, and meta descriptions across a five-page static marketing website.",
		deliverables: [
			"Updated H1–H3 structure",
			"Descriptive alt text sheet",
			"Meta tag recommendations"
		],
		skillsPracticed: [
			"Technical SEO",
			"Web Accessibility",
			"Clean Markup"
		],
		estimatedScope: "Illustrative Example · 3–4 hours scoped"
	}
];
var TEEN_BENEFITS = [
	{
		number: "01",
		title: "Real portfolio work beyond classroom exercises",
		description: "Replace hypothetical school assignments with tangible briefs that demonstrate how you solve actual product, content, or testing problems."
	},
	{
		number: "02",
		title: "Professional communication & deadline habits",
		description: "Practice reading client briefs carefully, asking clarifying questions, accepting review notes, and delivering clean work on time."
	},
	{
		number: "03",
		title: "Study-first flexibility",
		description: "Choose remote, milestone-based briefs that fit around school exams, college classes, and family commitments."
	},
	{
		number: "04",
		title: "Guided financial awareness",
		description: "Learn how scoped project compensation, budgeting, and saving work in practice under guardian-approved oversight."
	}
];
var TEEN_FAQS = [
	{
		id: "teen-faq-1",
		question: "Do I need prior work experience to start on Funngro?",
		answer: "No prior corporate job is required. Building a few honest practice samples—such as a small website, video edit, or app review—helps companies understand what you can deliver."
	},
	{
		id: "teen-faq-2",
		question: "Is there any guarantee of fixed monthly earnings?",
		answer: "No. Project availability, selection, and compensation depend on active company briefs, your skill track, and the quality of deliverables approved. This redesign intentionally avoids earnings guarantees."
	},
	{
		id: "teen-faq-3",
		question: "Are the project cards on this page live active jobs?",
		answer: "No. Every project card displayed on this assessment redesign is clearly marked as an Illustrative Example to show the format and skill expectations of typical briefs. Live opportunities appear inside the official Funngro app."
	},
	{
		id: "teen-faq-4",
		question: "Is parent or guardian consent needed for teens?",
		answer: "Yes. Funngro emphasises safe, supervised participation for teenagers and young learners, including parental or guardian involvement during onboarding."
	},
	{
		id: "teen-faq-5",
		question: "Where do I download the official Funngro mobile app?",
		answer: "You can install the official Funngro app directly from the Google Play Store for Android or the Apple App Store for iOS using the official links at the bottom of this page."
	}
];
var OFFICIAL_LINKS = {
	website: "https://www.funngro.com/",
	googlePlay: "https://play.google.com/store/apps/details?id=com.wishbanc.funngro",
	appStore: "https://apps.apple.com/in/app/funngro/id1579361075"
};
// src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-slate-800/90 bg-[#040914] py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/company",
								className: "font-display text-xl font-bold tracking-tight text-slate-50",
								children: "Funngro"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 max-w-sm text-sm leading-relaxed text-slate-400",
								children: "Connecting businesses with supervised young digital talent across web builds, content creation, software testing, and marketing."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 text-xs leading-relaxed text-slate-400",
								children: "Unofficial Funngro website redesign created for a frontend development, UI/UX, and technical SEO skill assessment. No fabricated statistics, testimonials, or earnings guarantees are included."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3 md:col-start-7",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-sm font-semibold text-slate-200",
							children: "Platform Pages"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-2.5 text-sm text-slate-400",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/company",
									className: "transition-colors hover:text-emerald-400",
									children: "For Companies (/company)"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/teen",
									className: "transition-colors hover:text-emerald-400",
									children: "For Teens (/teen)"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#how-it-works",
									className: "transition-colors hover:text-emerald-400",
									children: "How It Works"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#faq",
									className: "transition-colors hover:text-emerald-400",
									children: "Frequently Asked Questions"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-sm font-semibold text-slate-200",
							children: "Official Funngro Resources"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-2.5 text-sm text-slate-400",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: OFFICIAL_LINKS.website,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400",
									children: [/* @__PURE__ */ jsx("span", { children: "funngro.com" }), /* @__PURE__ */ jsx(ArrowUpRight, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: OFFICIAL_LINKS.googlePlay,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400",
									children: [/* @__PURE__ */ jsx("span", { children: "Google Play Store" }), /* @__PURE__ */ jsx(ArrowUpRight, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: OFFICIAL_LINKS.appStore,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400",
									children: [/* @__PURE__ */ jsx("span", { children: "Apple App Store" }), /* @__PURE__ */ jsx(ArrowUpRight, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})]
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ jsx("p", { children: "Unofficial Funngro Skill Assessment Redesign · Built with React, Tailwind CSS, Framer Motion & React Router." }), /* @__PURE__ */ jsx("p", {
					className: "font-mono tabular-nums",
					children: "Routes: /company · /teen"
				})]
			})]
		})
	});
}
// src/data/companyData.ts
var COMPANY_BENEFITS = [
	{
		number: "01",
		title: "Direct access to digitally fluent youth talent",
		description: "Work with screened student creators, developers, and testers who live inside modern mobile apps, short-form media, and web tools every day.",
		span: "wide"
	},
	{
		number: "02",
		title: "Defined deliverables with transparent scope",
		description: "Every engagement starts with a scoped brief and milestone checklist rather than open-ended hourly retainers.",
		span: "standard"
	},
	{
		number: "03",
		title: "Built-in coordination and quality review",
		description: "Structured brief templates, submission checkpoints, and platform oversight help lean teams ship campaigns without extra HR overhead.",
		span: "standard"
	},
	{
		number: "04",
		title: "Genuine Gen-Z product and market perspective",
		description: "Gather candid usability notes, campus feedback, and creative messaging tailored for younger digital audiences directly from your target demographic.",
		span: "wide"
	}
];
var TALENT_CATEGORIES = [
	{
		id: "web-app",
		label: "Web & App Development",
		headline: "Responsive websites, landing pages, and prototype builds",
		summary: "Engage young frontend and mobile developers for focused landing pages, WordPress or React updates, bug fixes, and interactive product prototypes.",
		deliverables: [
			"Responsive campaign microsites & landing pages",
			"HTML/CSS/React layout refinements and UI polish",
			"Basic mobile app screen builds and API wiring",
			"Cross-device browser layout verification"
		],
		idealFor: "Startups and D2C teams needing rapid web turnarounds",
		imageSrc: "/src/assets/images/capability_web_engineering_1795535471362.jpg",
		imageAlt: "Laptop displaying responsive website wireframes and clean frontend HTML code on a dark studio desk"
	},
	{
		id: "content-media",
		label: "Content & Video Creation",
		headline: "Short-form video edits, social reels, and brand storytelling",
		summary: "Collaborate with creative storytellers to produce product explainers, UGC-style demos, blog drafts, and visual social assets built for modern feeds.",
		deliverables: [
			"Vertical short-form reels and product walkthrough clips",
			"Social carousel graphics and thumbnail templates",
			"SEO blog articles, product copy, and newsletter drafts",
			"Podcast or webinar highlight cuts with captions"
		],
		idealFor: "Consumer brands building consistent organic media pipelines",
		imageSrc: "/src/assets/images/capability_content_media_1795535471151.jpg",
		imageAlt: "Young creator adjusting a mirrorless camera on a desk tripod alongside a studio microphone and editing tablet"
	},
	{
		id: "marketing",
		label: "Digital Marketing & Social",
		headline: "Community campaigns, social calendars, and campus outreach",
		summary: "Partner with digital-native marketers who understand current platform formats, creator trends, and peer-to-peer product discovery.",
		deliverables: [
			"Monthly social media content calendars and scheduling",
			"Competitor messaging and trend audits across platforms",
			"Student community outreach and feedback surveys",
			"Email campaign formatting and UTM link hygiene"
		],
		idealFor: "Marketing teams expanding reach among student and youth cohorts",
		imageSrc: "/src/assets/images/hero_company_workspace_1795535470034.jpg",
		imageAlt: "Product and marketing team reviewing analytics dashboards and campaign wireframes together"
	},
	{
		id: "qa-testing",
		label: "Software Testing & Research",
		headline: "Real-device QA testing, usability notes, and data hygiene",
		summary: "Run structured bug hunts and UX walkthroughs on real Android and iOS handsets before shipping releases to the broader public.",
		deliverables: [
			"Exploratory mobile app testing across varied screen sizes",
			"Step-by-step bug reproduction logs with screenshots",
			"First-time user onboarding friction reports",
			"Catalog tagging, spreadsheet cleanup, and desk research"
		],
		idealFor: "Product managers seeking fresh eyes before a release milestone",
		imageSrc: "/src/assets/images/hero_teen_creator_1795535470988.jpg",
		imageAlt: "Young developer testing a web application interface at a quiet desk workspace"
	}
];
var HIRING_PROCESS = [
	{
		step: "01",
		title: "Define your project brief",
		description: "Outline your deliverable goals, preferred skill track, review criteria, and timeline in a clear one-page brief."
	},
	{
		step: "02",
		title: "Review matched applicants",
		description: "Evaluate shortlisted teen freelancers based on their skill category, sample work, and readiness for your brief."
	},
	{
		step: "03",
		title: "Run scoped milestones",
		description: "Share reference materials and track progress through structured checkpoints with parent-acknowledged platform oversight."
	},
	{
		step: "04",
		title: "Approve work & settle payout",
		description: "Verify completed deliverables against your brief and release payment securely once milestones meet your standard."
	}
];
var CAMPAIGN_OPPORTUNITIES = [
	{
		id: "beta-testing",
		category: "Product & QA",
		title: "Pre-launch app beta & usability sprints",
		summary: "Put your Android, iOS, or web build in front of structured youth testers to catch edge-case UI glitches and confusing onboarding copy.",
		outcome: "Actionable bug logs and annotated user-flow recordings."
	},
	{
		id: "ugc-content",
		category: "Creative Media",
		title: "Authentic short-form video & social asset kits",
		summary: "Commission batches of product unboxings, feature explainers, and tutorial clips recorded in relatable home and campus environments.",
		outcome: "Ready-to-publish vertical video packs and caption copy."
	},
	{
		id: "web-sprint",
		category: "Web Engineering",
		title: "Campaign microsites & landing page refreshes",
		summary: "Ship clean, mobile-responsive event pages, waitlist sites, and documentation layouts without pulling core engineers off product work.",
		outcome: "Semantic HTML/React pages tested across mobile breakpoints."
	},
	{
		id: "market-pulse",
		category: "Research & Growth",
		title: "Gen-Z brand perception & campus pulse studies",
		summary: "Understand how younger consumers discover, evaluate, and talk about products in your category through structured qualitative briefs.",
		outcome: "Organised survey synthesis and messaging recommendations."
	}
];
var COMPANY_FAQS = [
	{
		id: "comp-faq-1",
		question: "What types of projects are best suited for teen freelancers?",
		answer: "Well-scoped digital tasks with clear deliverables work best—such as landing page builds, short-form video editing, social media design kits, exploratory QA testing, content writing, and structured market research."
	},
	{
		id: "comp-faq-2",
		question: "How does Funngro handle age eligibility and parental oversight?",
		answer: "Funngro is built specifically for supervised youth participation. Teens onboard with guardian awareness and platform guidelines so project scopes remain age-appropriate, remote-friendly, and transparent."
	},
	{
		id: "comp-faq-3",
		question: "How do businesses review quality before releasing payment?",
		answer: "Projects are structured around clear milestones and acceptance criteria set in your initial brief. You review submitted deliverables against those requirements before final approval."
	},
	{
		id: "comp-faq-4",
		question: "Can we run multi-creator campaigns instead of single-person tasks?",
		answer: "Yes. Companies can structure broader campaigns—such as parallel mobile app testing cohorts or multi-creator short-form content sprints—to gather diverse outputs under one unified brief."
	},
	{
		id: "comp-faq-5",
		question: "Do we need an existing HR vendor setup to submit a brief?",
		answer: "No. You can start by sharing your project scope and timeline through the inquiry form on this page or via the official Funngro platform channels."
	}
];
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
// src/lib/seo.ts
function buildOrganizationJsonLd(baseUrl) {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Funngro",
		url: baseUrl,
		sameAs: [
			OFFICIAL_LINKS.website,
			OFFICIAL_LINKS.googlePlay,
			OFFICIAL_LINKS.appStore
		],
		description: "Platform connecting businesses with supervised teen freelancers for digital projects across engineering, content, testing, and marketing."
	};
}
function buildFaqJsonLd(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer
			}
		}))
	};
}
function getPageSeo(route, origin = "https://funngro-redesign.vercel.app") {
	const cleanOrigin = origin.replace(/\/+$/, "");
	if (route === "/teen") return {
		route: "/teen",
		title: "Funngro for Teens — Real Projects & Digital Skills",
		description: "Explore real-world freelance project tracks in web development, apps, content creation, QA testing, and marketing for teens on Funngro.",
		canonicalPath: "/teen",
		ogType: "website",
		jsonLd: [
			buildOrganizationJsonLd(cleanOrigin),
			{
				"@context": "https://schema.org",
				"@type": "MobileApplication",
				name: "Funngro",
				operatingSystem: "Android, iOS",
				applicationCategory: "BusinessApplication",
				downloadUrl: [OFFICIAL_LINKS.googlePlay, OFFICIAL_LINKS.appStore],
				description: "Mobile platform for teens to explore scoped real-world digital projects under supervised guidelines."
			},
			buildFaqJsonLd(TEEN_FAQS)
		]
	};
	return {
		route: "/company",
		title: "Funngro for Companies — Hire Skilled Teen Freelancers",
		description: "Partner with supervised, digitally fluent teen freelancers for web builds, content production, QA testing, and marketing sprints on Funngro.",
		canonicalPath: "/company",
		ogType: "website",
		jsonLd: [
			buildOrganizationJsonLd(cleanOrigin),
			{
				"@context": "https://schema.org",
				"@type": "Service",
				serviceType: "Youth Freelance Project Staffing & Digital Campaigns",
				provider: {
					"@type": "Organization",
					name: "Funngro"
				},
				areaServed: "India",
				description: "Scoped project collaboration connecting businesses with vetted teen talent across engineering, design, testing, and content."
			},
			buildFaqJsonLd(COMPANY_FAQS)
		]
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
* Resilient image container with CLS prevention, descriptive alt text,
* and automatic CSS/SVG fallback if loading fails.
*/
function MediaFrame({ src, alt, aspectClassName = "aspect-video", className, priority = false, caption }) {
	const [hasError, setHasError] = useState(false);
	return /* @__PURE__ */ jsxs("figure", {
		className: cn("relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0B1528]", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("relative w-full flex-1 min-h-0 overflow-hidden", aspectClassName),
			children: [!hasError ? /* @__PURE__ */ jsx("img", {
				src,
				alt,
				loading: priority ? "eager" : "lazy",
				decoding: priority ? "sync" : "async",
				referrerPolicy: "no-referrer",
				onError: () => setHasError(true),
				className: "h-full w-full object-cover object-center transition-transform duration-500 ease-out"
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
			className: "border-t border-slate-800/80 bg-[#091224] px-4 py-2.5 text-xs text-slate-400",
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
* Uses GPU-composited opacity/transform and respects reduced motion.
*/
function Spotlight({ className, fill = "#10B981" }) {
	return /* @__PURE__ */ jsxs(motion.svg, {
		initial: {
			opacity: 0,
			scale: .96
		},
		animate: {
			opacity: .22,
			scale: 1
		},
		transition: {
			duration: .9,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: cn("pointer-events-none absolute z-0 h-[140%] w-[120%] lg:w-[82%]", className),
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
* Aceternity UI BackgroundBeams component: architectural ambient curves
* with subtle emerald stroke travel on dark navy canvas.
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
			}), /* @__PURE__ */ jsx(motion.path, {
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
* Uses hairline slate borders and cursor-following subtle emerald sheen.
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
		children: [/* @__PURE__ */ jsx(motion.div, {
			className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100",
			style: { background: spotlightBackground },
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative z-10",
			children
		})]
	});
}
// src/components/aceternity/BentoGrid.tsx
function BentoGrid({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid grid-cols-1 gap-6 md:grid-cols-3", className),
		children
	});
}
function BentoGridItem({ indexLabel, title, description, className }) {
	return /* @__PURE__ */ jsx(CardSpotlight, {
		className: cn("flex flex-col justify-between", className),
		children: /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsxs("span", {
				className: "font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums",
				children: [indexLabel, "."]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-3 font-display text-xl font-semibold tracking-tight text-slate-50",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-[15px] leading-relaxed text-slate-300",
				children: description
			})
		] })
	});
}
// src/pages/CompanyPage.tsx
var INITIAL_FORM = {
	fullName: "",
	companyName: "",
	workEmail: "",
	category: TALENT_CATEGORIES[0].label,
	projectBrief: ""
};
function CompanyPage() {
	const [activeCategoryId, setActiveCategoryId] = useState(TALENT_CATEGORIES[0].id);
	const [formState, setFormState] = useState(INITIAL_FORM);
	const [formErrors, setFormErrors] = useState({});
	const [submittedBrief, setSubmittedBrief] = useState(null);
	const activeCategory = TALENT_CATEGORIES.find((cat) => cat.id === activeCategoryId) ?? TALENT_CATEGORIES[0];
	function handleFieldChange(field, value) {
		setFormState((prev) => ({
			...prev,
			[field]: value
		}));
		if (formErrors[field]) setFormErrors((prev) => {
			const next = { ...prev };
			delete next[field];
			return next;
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
		const validation = validateCompanyInquiry(formState);
		if (!validation.valid) {
			setFormErrors(validation.errors);
			return;
		}
		setFormErrors({});
		setSubmittedBrief(validation.sanitized);
		setFormState(INITIAL_FORM);
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SeoHead, { route: "/company" }),
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden border-b border-slate-800/80 pb-20 pt-14 md:pb-28 md:pt-20",
			children: [
				/* @__PURE__ */ jsx(Spotlight, {
					className: "-left-16 -top-32",
					fill: "#10B981"
				}),
				/* @__PURE__ */ jsx(BackgroundBeams, { className: "opacity-50" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 14
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .45,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "flex flex-col justify-center lg:col-span-6",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium tracking-wide text-emerald-400",
									children: "Funngro for Companies · Supervised Youth Talent"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "mt-4 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-slate-50 [text-wrap:balance]",
									children: "Hire skilled teen freelancers for modern digital sprints"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg",
									children: "Partner with screened student developers, designers, testers, and content creators on scoped project briefs—built for startups and marketing teams that value crisp deliverables and digital-native perspective."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#contact-brief",
										className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0",
										children: [/* @__PURE__ */ jsx("span", { children: "Submit a Project Brief" }), /* @__PURE__ */ jsx(ArrowRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ jsx(Link, {
										to: "/teen",
										className: "inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700/90 bg-[#0B1528]/80 px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0",
										children: "Explore Teen Experience"
									})]
								})
							]
						}), /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .55,
								delay: .08,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "lg:col-span-6",
							children: /* @__PURE__ */ jsx(MediaFrame, {
								src: "/src/assets/images/hero_company_workspace_1795535470034.jpg",
								alt: "Startup team and young digital specialists reviewing wireframes and product dashboards together in a modern workspace",
								aspectClassName: "aspect-video lg:aspect-auto lg:min-h-[360px]",
								className: "h-full",
								priority: true,
								caption: "Collaborative project sprints with milestone-based review and structured briefs."
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			"aria-labelledby": "benefits-heading",
			className: "py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "benefits-heading",
						className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
						children: "Why growing businesses build with teen talent"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-slate-300",
						children: "Instead of stretching core teams across repetitive production tasks, companies assign clear, bounded deliverables to eager young specialists."
					})]
				}), /* @__PURE__ */ jsx(BentoGrid, {
					className: "mt-12",
					children: COMPANY_BENEFITS.map((benefit) => /* @__PURE__ */ jsx(BentoGridItem, {
						indexLabel: benefit.number,
						title: benefit.title,
						description: benefit.description,
						className: benefit.span === "wide" ? "md:col-span-2" : "md:col-span-1"
					}, benefit.number))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "capabilities",
			"aria-labelledby": "capabilities-heading",
			className: "border-t border-slate-800/80 bg-[#081122] py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ jsx("h2", {
								id: "capabilities-heading",
								className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
								children: "Available talent and skill categories"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-base leading-relaxed text-slate-300",
								children: "Select a capability track to inspect sample deliverables and the types of company workflows each track supports."
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						role: "tablist",
						"aria-label": "Company talent categories",
						className: "mt-10 flex flex-wrap gap-2 rounded-xl border border-slate-800/90 bg-[#060D1A] p-1.5",
						children: TALENT_CATEGORIES.map((category) => {
							const isSelected = category.id === activeCategory.id;
							return /* @__PURE__ */ jsx("button", {
								role: "tab",
								type: "button",
								"aria-selected": isSelected,
								onClick: () => setActiveCategoryId(category.id),
								className: cn("min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0", isSelected ? "bg-emerald-500 text-slate-950 font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"),
								children: category.label
							}, category.id);
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						role: "tabpanel",
						"aria-label": activeCategory.label,
						className: "mt-8 grid grid-cols-1 items-stretch gap-8 rounded-2xl border border-slate-800/90 bg-[#0B1528] p-6 md:grid-cols-12 md:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col justify-between md:col-span-7",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("p", {
									className: "text-xs font-medium tracking-wide text-emerald-400",
									children: [
										activeCategory.label,
										" · ",
										activeCategory.idealFor
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl [text-wrap:balance]",
									children: activeCategory.headline
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-base leading-relaxed text-slate-300",
									children: activeCategory.summary
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "font-display text-sm font-semibold text-slate-200",
										children: "Typical brief deliverables"
									}), /* @__PURE__ */ jsx("ul", {
										className: "mt-3 space-y-2.5",
										children: activeCategory.deliverables.map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2.5 text-sm text-slate-300",
											children: [/* @__PURE__ */ jsx(Check, {
												className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400",
												"aria-hidden": "true"
											}), /* @__PURE__ */ jsx("span", { children: item })]
										}, item))
									})]
								})
							] }), /* @__PURE__ */ jsx("div", {
								className: "mt-8 pt-4",
								children: /* @__PURE__ */ jsxs("a", {
									href: "#contact-brief",
									onClick: () => handleFieldChange("category", activeCategory.label),
									className: "inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 whitespace-nowrap shrink-0",
									children: [/* @__PURE__ */ jsxs("span", { children: [
										"Request ",
										activeCategory.label,
										" Brief"
									] }), /* @__PURE__ */ jsx(ArrowRight, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})]
								})
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "md:col-span-5",
							children: /* @__PURE__ */ jsx(MediaFrame, {
								src: activeCategory.imageSrc,
								alt: activeCategory.imageAlt,
								aspectClassName: "aspect-[4/3] md:h-full",
								className: "h-full"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "how-it-works",
			"aria-labelledby": "hiring-process-heading",
			className: "border-t border-slate-800/80 py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "hiring-process-heading",
						className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
						children: "Step-by-step hiring process"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-slate-300",
						children: "A predictable four-step workflow keeps expectations aligned from initial brief submission through final deliverable sign-off."
					})]
				}), /* @__PURE__ */ jsx("ol", {
					className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: HIRING_PROCESS.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "rounded-2xl border border-slate-800/90 bg-[#0B1528]/80 p-6",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums",
								children: [item.step, "."]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-display text-lg font-semibold text-slate-50",
								children: item.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2.5 text-sm leading-relaxed text-slate-300",
								children: item.description
							})
						]
					}, item.step))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			"aria-labelledby": "campaigns-heading",
			className: "border-t border-slate-800/80 bg-[#081122] py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "campaigns-heading",
						className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
						children: "Business campaign opportunities"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-slate-300",
						children: "Run focused multi-participant campaigns when your team needs parallel testing, varied creative hooks, or structured student feedback."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2",
					children: CAMPAIGN_OPPORTUNITIES.map((campaign) => /* @__PURE__ */ jsxs(CardSpotlight, { children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-medium text-emerald-400",
							children: campaign.category
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-2.5 font-display text-xl font-semibold text-slate-50",
							children: campaign.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-[15px] leading-relaxed text-slate-300",
							children: campaign.summary
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-4 border-t border-slate-800/80 pt-3.5 text-xs text-slate-400",
							children: ["Expected output: ", /* @__PURE__ */ jsx("span", {
								className: "text-slate-200",
								children: campaign.outcome
							})]
						})
					] }, campaign.id))
				})]
			})
		}),
		/* @__PURE__ */ jsx(FaqAccordion, {
			items: COMPANY_FAQS,
			heading: "Questions from hiring teams",
			subheading: "Practical answers on brief scoping, parental oversight, deliverable quality checks, and multi-creator campaigns."
		}),
		/* @__PURE__ */ jsx("section", {
			id: "contact-brief",
			"aria-labelledby": "contact-heading",
			className: "border-t border-slate-800/80 bg-[#081122] py-20 md:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ jsx("h2", {
								id: "contact-heading",
								className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
								children: "Share your next project brief"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-base leading-relaxed text-slate-300",
								children: "Describe what you need shipped and your target timeline. Use this assessment inquiry form to preview how structured company briefs are validated and prepared."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 space-y-4 border-t border-slate-800/80 pt-6 text-sm text-slate-300",
								children: [/* @__PURE__ */ jsxs("p", { children: [
									"Looking for the student & teen workflow instead?",
									" ",
									/* @__PURE__ */ jsx(Link, {
										to: "/teen",
										className: "font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300",
										children: "Visit the Teen Page (/teen)"
									})
								] }), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-slate-400",
									children: "Note: Submitting this form validates your brief locally as part of this interactive redesign demo without sending external emails."
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7",
						children: submittedBrief ? /* @__PURE__ */ jsx("div", {
							role: "status",
							"aria-live": "polite",
							className: "rounded-2xl border border-emerald-500/40 bg-[#0B1528] p-8",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(CheckCircle2, {
									className: "mt-0.5 h-6 w-6 shrink-0 text-emerald-400",
									"aria-hidden": "true"
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-semibold text-slate-50",
										children: "Project brief validated and ready"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "mt-2 text-sm leading-relaxed text-slate-300",
										children: [
											"Thank you, ",
											/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-white",
												children: submittedBrief.fullName
											}),
											". Your brief for ",
											/* @__PURE__ */ jsx("span", {
												className: "font-semibold text-white",
												children: submittedBrief.companyName
											}),
											" in",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-emerald-300",
												children: submittedBrief.category
											}),
											" has been formatted cleanly."
										]
									}),
									/* @__PURE__ */ jsxs("dl", {
										className: "mt-5 space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-400",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
											className: "inline font-medium text-slate-300",
											children: "Reply email: "
										}), /* @__PURE__ */ jsx("dd", {
											className: "inline",
											children: submittedBrief.workEmail
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
											className: "inline font-medium text-slate-300",
											children: "Scope summary: "
										}), /* @__PURE__ */ jsx("dd", {
											className: "inline",
											children: submittedBrief.projectBrief
										})] })]
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setSubmittedBrief(null),
										className: "mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700 bg-[#060D1A] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white",
										children: "Prepare Another Brief"
									})
								] })]
							})
						}) : /* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							noValidate: true,
							className: "rounded-2xl border border-slate-800/90 bg-[#0B1528] p-6 sm:p-8",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "company-full-name",
												className: "block text-sm font-medium text-slate-200",
												children: "Full name"
											}),
											/* @__PURE__ */ jsx("input", {
												id: "company-full-name",
												name: "fullName",
												type: "text",
												autoComplete: "name",
												value: formState.fullName,
												onChange: (e) => handleFieldChange("fullName", e.target.value),
												"aria-invalid": Boolean(formErrors.fullName),
												"aria-describedby": formErrors.fullName ? "error-fullName" : void 0,
												placeholder: "Priya Nair",
												className: "mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
											}),
											formErrors.fullName && /* @__PURE__ */ jsx("p", {
												id: "error-fullName",
												className: "mt-1.5 text-xs text-rose-400",
												children: formErrors.fullName
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "company-org-name",
												className: "block text-sm font-medium text-slate-200",
												children: "Company or organisation"
											}),
											/* @__PURE__ */ jsx("input", {
												id: "company-org-name",
												name: "companyName",
												type: "text",
												autoComplete: "organization",
												value: formState.companyName,
												onChange: (e) => handleFieldChange("companyName", e.target.value),
												"aria-invalid": Boolean(formErrors.companyName),
												"aria-describedby": formErrors.companyName ? "error-companyName" : void 0,
												placeholder: "Kaveri Labs",
												className: "mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
											}),
											formErrors.companyName && /* @__PURE__ */ jsx("p", {
												id: "error-companyName",
												className: "mt-1.5 text-xs text-rose-400",
												children: formErrors.companyName
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "company-work-email",
												className: "block text-sm font-medium text-slate-200",
												children: "Work email"
											}),
											/* @__PURE__ */ jsx("input", {
												id: "company-work-email",
												name: "workEmail",
												type: "email",
												autoComplete: "email",
												value: formState.workEmail,
												onChange: (e) => handleFieldChange("workEmail", e.target.value),
												"aria-invalid": Boolean(formErrors.workEmail),
												"aria-describedby": formErrors.workEmail ? "error-workEmail" : void 0,
												placeholder: "team@company.com",
												className: "mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
											}),
											formErrors.workEmail && /* @__PURE__ */ jsx("p", {
												id: "error-workEmail",
												className: "mt-1.5 text-xs text-rose-400",
												children: formErrors.workEmail
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "company-category",
												className: "block text-sm font-medium text-slate-200",
												children: "Primary talent category"
											}),
											/* @__PURE__ */ jsx("select", {
												id: "company-category",
												name: "category",
												value: formState.category,
												onChange: (e) => handleFieldChange("category", e.target.value),
												"aria-invalid": Boolean(formErrors.category),
												"aria-describedby": formErrors.category ? "error-category" : void 0,
												className: "mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none",
												children: TALENT_CATEGORIES.map((cat) => /* @__PURE__ */ jsx("option", {
													value: cat.label,
													children: cat.label
												}, cat.id))
											}),
											formErrors.category && /* @__PURE__ */ jsx("p", {
												id: "error-category",
												className: "mt-1.5 text-xs text-rose-400",
												children: formErrors.category
											})
										] })
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5",
									children: [
										/* @__PURE__ */ jsx("label", {
											htmlFor: "company-project-brief",
											className: "block text-sm font-medium text-slate-200",
											children: "Deliverables & timeline summary"
										}),
										/* @__PURE__ */ jsx("textarea", {
											id: "company-project-brief",
											name: "projectBrief",
											rows: 4,
											value: formState.projectBrief,
											onChange: (e) => handleFieldChange("projectBrief", e.target.value),
											"aria-invalid": Boolean(formErrors.projectBrief),
											"aria-describedby": formErrors.projectBrief ? "error-projectBrief" : void 0,
											placeholder: "Describe the deliverables, review criteria, and preferred completion window...",
											className: "mt-1.5 w-full rounded-lg border border-slate-700/90 bg-[#060D1A] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
										}),
										formErrors.projectBrief && /* @__PURE__ */ jsx("p", {
											id: "error-projectBrief",
											className: "mt-1.5 text-xs text-rose-400",
											children: formErrors.projectBrief
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap items-center justify-between gap-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs text-slate-400",
										children: "All fields are validated before submission."
									}), /* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 whitespace-nowrap shrink-0",
										children: [/* @__PURE__ */ jsx(Send, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), /* @__PURE__ */ jsx("span", { children: "Submit Brief Inquiry" })]
									})]
								})
							]
						})
					})]
				})
			})
		})
	] });
}
// src/pages/TeenPage.tsx
function TeenPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const visibleProjects = filterProjectExamples(ILLUSTRATIVE_PROJECTS, selectedCategory);
	const activeCategoryMeta = TEEN_CATEGORIES.find((cat) => cat.id === selectedCategory) ?? TEEN_CATEGORIES[0];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SeoHead, { route: "/teen" }),
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden border-b border-slate-800/80 pb-20 pt-14 md:pb-28 md:pt-20",
			children: [
				/* @__PURE__ */ jsx(Spotlight, {
					className: "-right-16 -top-32",
					fill: "#10B981"
				}),
				/* @__PURE__ */ jsx(BackgroundBeams, { className: "opacity-45" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12",
						children: [/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 14
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .45,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "flex flex-col justify-center lg:col-span-6",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium tracking-wide text-emerald-400",
									children: "Funngro for Teens · Learn, Build & Earn Responsibly"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "mt-4 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-slate-50 [text-wrap:balance]",
									children: "Turn practical digital skills into real-world project experience"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg",
									children: "Explore supervised online freelance projects built for teenagers and students—from website builds and mobile UI screens to video editing, QA testing, and digital marketing—designed to fit around school and college hours."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#app-download",
										className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-emerald-400 whitespace-nowrap shrink-0",
										children: [/* @__PURE__ */ jsx("span", { children: "Download Official App" }), /* @__PURE__ */ jsx(ArrowRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ jsx("a", {
										href: "#categories",
										className: "inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-700/90 bg-[#0B1528]/80 px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0",
										children: "Browse Example Briefs"
									})]
								})
							]
						}), /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .55,
								delay: .08,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "lg:col-span-6",
							children: /* @__PURE__ */ jsx(MediaFrame, {
								src: "/src/assets/images/hero_teen_creator_1795535470988.jpg",
								alt: "Young Indian student creator coding and designing digital interfaces on a laptop at a tidy desk",
								aspectClassName: "aspect-video lg:aspect-auto lg:min-h-[360px]",
								className: "h-full",
								priority: true,
								caption: "Build verifiable portfolio work on remote briefs around your study schedule."
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			id: "how-it-works",
			"aria-labelledby": "teen-how-heading",
			className: "py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "teen-how-heading",
						className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
						children: "How Funngro works for young creators"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-slate-300",
						children: "A clear, guardian-aware pathway from onboarding your first skill track to completing scoped company deliverables."
					})]
				}), /* @__PURE__ */ jsx("ol", {
					className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: TEEN_HOW_IT_WORKS.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "rounded-2xl border border-slate-800/90 bg-[#0B1528]/80 p-6",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums",
								children: [item.step, "."]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-display text-lg font-semibold text-slate-50",
								children: item.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2.5 text-sm leading-relaxed text-slate-300",
								children: item.description
							})
						]
					}, item.step))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			id: "categories",
			"aria-labelledby": "teen-categories-heading",
			className: "border-t border-slate-800/80 bg-[#081122] py-20 md:py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl",
						children: [/* @__PURE__ */ jsx("h2", {
							id: "teen-categories-heading",
							className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
							children: "Skill categories and illustrative project briefs"
						}), /* @__PURE__ */ jsxs("p", {
							className: "mt-3 text-base leading-relaxed text-slate-300",
							children: [
								"Explore the five core project tracks—Website Development, App Development, Content Creation, Software Testing, and Marketing. Each card below is an",
								" ",
								/* @__PURE__ */ jsx("strong", {
									className: "font-semibold text-emerald-300",
									children: "Illustrative Example"
								}),
								" ",
								"showing typical deliverables rather than an active live listing or earnings promise."
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						role: "group",
						"aria-label": "Filter illustrative project examples by skill category",
						className: "mt-8 flex flex-wrap gap-2 rounded-xl border border-slate-800/90 bg-[#060D1A] p-1.5",
						children: TEEN_CATEGORIES.map((category) => {
							const active = category.id === selectedCategory;
							return /* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => setSelectedCategory(category.id),
								className: cn("min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0", active ? "bg-emerald-500 text-slate-950 font-semibold" : "text-slate-300 hover:bg-slate-800/60 hover:text-white"),
								children: category.label
							}, category.id);
						})
					}),
					/* @__PURE__ */ jsxs("p", {
						"aria-live": "polite",
						className: "mt-4 text-sm text-slate-400",
						children: [
							"Showing ",
							/* @__PURE__ */ jsx("span", {
								className: "font-mono text-slate-200 tabular-nums",
								children: visibleProjects.length
							}),
							" ",
							visibleProjects.length === 1 ? "illustrative example" : "illustrative examples",
							" —",
							" ",
							activeCategoryMeta.description
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: visibleProjects.map((project) => /* @__PURE__ */ jsxs(CardSpotlight, {
							className: "flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs("p", {
									className: "text-xs font-medium text-emerald-400",
									children: [
										project.categoryLabel,
										" ",
										/* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											children: "·"
										}),
										" Illustrative Example"
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2.5 font-display text-lg font-semibold leading-snug text-slate-50",
									children: project.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-slate-300",
									children: project.summary
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 border-t border-slate-800/80 pt-4",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "font-display text-xs font-semibold tracking-wide text-slate-200",
										children: "Example deliverables"
									}), /* @__PURE__ */ jsx("ul", {
										className: "mt-2.5 space-y-1.5",
										children: project.deliverables.map((deliv) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-xs text-slate-300",
											children: [/* @__PURE__ */ jsx(Check, {
												className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400",
												"aria-hidden": "true"
											}), /* @__PURE__ */ jsx("span", { children: deliv })]
										}, deliv))
									})]
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-6 border-t border-slate-800/80 pt-3.5 text-xs text-slate-400",
								children: [/* @__PURE__ */ jsxs("p", {
									className: "text-slate-300",
									children: ["Skills practiced: ", project.skillsPracticed.join(" · ")]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 font-mono text-[11px] text-slate-400 tabular-nums",
									children: project.estimatedScope
								})]
							})]
						}, project.id))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			"aria-labelledby": "teen-benefits-heading",
			className: "border-t border-slate-800/80 py-20 md:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 items-start gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ jsx("h2", {
								id: "teen-benefits-heading",
								className: "font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]",
								children: "Why real-world projects matter early"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-base leading-relaxed text-slate-300",
								children: "Shipping work for real reviewers builds habits no textbook simulation teaches—from reading requirements carefully to managing deadlines alongside classes."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8",
								children: /* @__PURE__ */ jsx(MediaFrame, {
									src: "/src/assets/images/capability_web_engineering_1795535471362.jpg",
									alt: "Laptop displaying clean responsive wireframes and frontend code side by side",
									aspectClassName: "aspect-[4/3]"
								})
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7",
						children: TEEN_BENEFITS.map((benefit) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-slate-800/90 bg-[#0B1528]/80 p-6",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "font-mono text-xs font-medium tracking-wider text-emerald-400 tabular-nums",
									children: [benefit.number, "."]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 font-display text-lg font-semibold text-slate-50",
									children: benefit.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2.5 text-sm leading-relaxed text-slate-300",
									children: benefit.description
								})
							]
						}, benefit.number))
					})]
				})
			})
		}),
		/* @__PURE__ */ jsx(FaqAccordion, {
			items: TEEN_FAQS,
			heading: "Questions from teens and parents",
			subheading: "Transparent answers on guardian approval, realistic expectations, illustrative project cards, and official app access."
		}),
		/* @__PURE__ */ jsx("section", {
			id: "app-download",
			"aria-labelledby": "app-download-heading",
			className: "border-t border-slate-800/80 bg-[#081122] py-20 md:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-2xl border border-slate-800 bg-[#0B1528] p-8 md:p-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 items-center gap-8 md:grid-cols-12",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-7",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "inline-flex items-center gap-2 text-xs font-medium text-emerald-400",
									children: [/* @__PURE__ */ jsx(Smartphone, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), /* @__PURE__ */ jsx("span", { children: "Official Mobile Applications" })]
								}),
								/* @__PURE__ */ jsx("h2", {
									id: "app-download-heading",
									className: "mt-3 font-display text-3xl font-bold tracking-tight text-slate-50 [text-wrap:balance]",
									children: "Install the official Funngro app"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-base leading-relaxed text-slate-300",
									children: "Access verified onboarding, guardian-approved profiles, and live project applications exclusively through Funngro's official mobile store listings."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-7 flex flex-wrap gap-3.5",
									children: [/* @__PURE__ */ jsxs("a", {
										href: OFFICIAL_LINKS.googlePlay,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 whitespace-nowrap shrink-0",
										children: [/* @__PURE__ */ jsx("span", { children: "Get it on Google Play" }), /* @__PURE__ */ jsx(ArrowUpRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ jsxs("a", {
										href: OFFICIAL_LINKS.appStore,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#060D1A] px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-500 hover:text-white whitespace-nowrap shrink-0",
										children: [/* @__PURE__ */ jsx("span", { children: "Download on App Store" }), /* @__PURE__ */ jsx(ArrowUpRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "border-t border-slate-800/80 pt-6 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-base font-semibold text-slate-100",
									children: "Hiring teen talent as a company?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-slate-300",
									children: "Explore scoped talent tracks, business campaign options, and brief submission tools on our dedicated Company page."
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/company",
									className: "mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300",
									children: [/* @__PURE__ */ jsx("span", { children: "Go to Company Page (/company)" }), /* @__PURE__ */ jsx(ArrowRight, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})]
								})
							]
						})]
					})
				})
			})
		})
	] });
}
// src/App.tsx
function ScrollToTopAndCanonicalRoute() {
	const { pathname, hash } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === "/") {
			navigate("/company", { replace: true });
			return;
		}
		if (hash) {
			const targetId = hash.slice(1);
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				return;
			}
		}
		window.scrollTo(0, 0);
	}, [
		pathname,
		hash,
		navigate
	]);
	return null;
}
function AppShell() {
	return /* @__PURE__ */ jsx(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col bg-[#060D1A] text-slate-100",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#main-content",
					className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950",
					children: "Skip to main content"
				}),
				/* @__PURE__ */ jsx(Navbar, {}),
				/* @__PURE__ */ jsx(ScrollToTopAndCanonicalRoute, {}),
				/* @__PURE__ */ jsx("main", {
					id: "main-content",
					className: "flex-1",
					children: /* @__PURE__ */ jsxs(Routes, { children: [
						/* @__PURE__ */ jsx(Route, {
							path: "/",
							element: /* @__PURE__ */ jsx(CompanyPage, {})
						}),
						/* @__PURE__ */ jsx(Route, {
							path: "/company",
							element: /* @__PURE__ */ jsx(CompanyPage, {})
						}),
						/* @__PURE__ */ jsx(Route, {
							path: "/teen",
							element: /* @__PURE__ */ jsx(TeenPage, {})
						}),
						/* @__PURE__ */ jsx(Route, {
							path: "*",
							element: /* @__PURE__ */ jsx(Navigate, {
								to: "/company",
								replace: true
							})
						})
					] })
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
// src/entry-server.tsx
function escapeHtmlAttr(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderRoute(route) {
	const html = renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, {
		location: route,
		children: /* @__PURE__ */ jsx(AppShell, {})
	}) }));
	const seo = getPageSeo(route);
	const canonicalUrl = `https://funngro-redesign.vercel.app${seo.canonicalPath}`;
	const jsonLdTags = seo.jsonLd.map((schema) => `<script type="application/ld+json" data-funngro-jsonld="true">${JSON.stringify(schema)}<\/script>`).join("\n    ");
	return {
		html,
		headTags: `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />\n    ${jsonLdTags}`,
		seo
	};
}
export { renderRoute };
