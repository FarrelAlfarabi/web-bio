// ============================================================
// Single source of content for the entire site.
// No copy should be hardcoded in JSX — if it renders, it lives here.
// (public/index.html <head> tags are the one static exception;
//  keep them in sync with `meta` below.)
// ============================================================

import aboutImage from "./images/about.webp";
import aboutImageSmall from "./images/about-680.webp";

export const portfolioData = {
  // ---- identity ----
  name: "Farrel Alfarabi Saleh",
  role: "Marketing Strategy × Business Intelligence",
  email: "farrel.abi.saleh@gmail.com",
  location: "Jakarta, Indonesia",
  linkedin: "https://www.linkedin.com/in/farrel-alfarabi-saleh-606722207/",
  github: "https://github.com/FarrelAlfarabi",

  // ---- document meta (mirrored statically in public/index.html) ----
  meta: {
    title: "Farrel Alfarabi Saleh — Marketing Strategy & Business Intelligence",
    description:
      "Marketing strategist and business-intelligence analyst in Jakarta, with an engineer's toolkit. Ran $200K+/month campaign operations across four ASEAN markets for brands like Unilever and Nestlé — and builds his own dashboards.",
  },

  // ---- ui chrome ----
  ui: {
    skipLink: "Skip to content",
    menuOpen: "Menu",
    menuClose: "Close",
  },

  // ---- navigation ----
  nav: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#skills" },
    { label: "Experience", href: "#projects" },
    { label: "Contact", href: "#contact", cta: true },
  ],

  // ---- hero ----
  hero: {
    eyebrow: "Marketing Strategy × Business Intelligence — Jakarta, ID",
    headline: "Data in. Strategy out. I build the tools in between.",
    subline:
      "Most recently at YMT ADS: campaign operations and CRM intelligence for a $200K+/month portfolio across four ASEAN markets, with brand partners including Unilever and Nestlé — promoted to Commercial Strategy Manager within the year. MBA in Marketing + BSc in Computer Science, Universitas Indonesia.",
    ctas: [
      { label: "View experience", href: "#projects", primary: true },
      { label: "Get in touch", href: "#contact" },
    ],
    stats: [
      { value: "$200K+", label: "monthly revenue ops managed" },
      { value: "4", label: "ASEAN markets" },
      { value: "7", label: "concurrent brand campaigns" },
      { value: "9 mo", label: "staff → strategy manager" },
    ],
    traceCaption: "fig. 01 — finding the signal in the noise",
  },

  // ---- about ----
  about: {
    label: "About",
    index: "01",
    title: "Strategist's brief, engineer's toolkit",
    paragraphs: [
      "I'm a marketing strategist and business-intelligence operator with an unusual edge: I write production code. At YMT ADS I ran campaign operations for consumer brands across four ASEAN markets — consolidating fragmented CRM data into KPI reporting leadership actually used, and coordinating seven concurrent campaigns with partners like Unilever and Nestlé. Nine months in, that work earned a promotion to Commercial Strategy Manager.",
      "The engineering background is what makes the analytics real. When a campaign needs a tracker, a pipeline, or a dashboard, I build it — the same skills that shipped an earthquake-detection dashboard and an AutoML interface for Freeport Indonesia. MBA in Marketing and BSc in Computer Science, both from Universitas Indonesia; Top-10 finalist at UI Incubate 2024 with a venture concept I took from market research to investor pitch.",
    ],
    imageAlt:
      "Farrel Alfarabi Saleh at his desk, holding a tablet with wireframes, code editor on the monitor behind him",
    timelineLabel: "Record",
    timeline: [
      {
        period: "2026—",
        org: "KB Bank Syariah, Jakarta",
        role: "Core Banking Development & IT Application Integration",
      },
      {
        period: "2025",
        org: "YMT ADS",
        role: "Operations & Marketing Staff → Commercial Strategy Manager",
      },
      {
        period: "2023",
        org: "PT Freeport Indonesia · UI Faculty of Law",
        role: "Frontend Developer (freelance)",
      },
    ],
    educationLabel: "Education",
    education: [
      { school: "Universitas Indonesia", degree: "MBA, Marketing" },
      { school: "Universitas Indonesia", degree: "BSc, Computer Science" },
    ],
    image: aboutImage,
    imageSmall: aboutImageSmall,
  },

  // ---- capabilities ----
  skillsSection: {
    index: "02",
    label: "Capabilities",
    title: "What I work with",
  },
  skillCategories: [
    {
      title: "Business Intelligence & Analytics",
      skills: [
        "KPI dashboards & performance reporting",
        "Campaign analytics",
        "CRM data consolidation",
        "Regression analysis & statistical testing",
        "Data cleaning & preparation",
        "Advanced Excel / Google Sheets",
      ],
    },
    {
      title: "Marketing & Strategy",
      skills: [
        "Commercial strategy",
        "Market research & media planning",
        "Brand partner management",
        "Cross-functional coordination",
        "Stakeholder communication",
      ],
    },
    {
      title: "Digital & Engineering",
      skills: [
        "SQL",
        "React.js & JavaScript",
        "Python & Django",
        "REST API integration",
        "Flutter & Firebase",
      ],
    },
  ],

  // ---- contact ----
  contactSection: {
    index: "04",
    label: "Contact",
    title: "Open to the right problem",
    body: "Business intelligence, marketing strategy, or a digital role in between — if it needs someone who can read the data and build the tooling, I want to hear about it. Email is fastest.",
    links: [
      { label: "Email me", href: "mailto:farrel.abi.saleh@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-alfarabi-saleh-606722207/", external: true },
      { label: "GitHub", href: "https://github.com/FarrelAlfarabi", external: true },
    ],
  },

  // ---- case studies ----
  projectsSection: {
    index: "03",
    label: "Experience",
    title: "Recent work, problem to result",
    fieldLabels: { problem: "Problem", built: "Built", result: "Result" },
  },
  projects: [
    {
      title: "ASEAN Campaign Operations & CRM Intelligence",
      org: "YMT ADS",
      year: "2025",
      role: "Operations & Marketing Staff → Commercial Strategy Manager",
      problem:
        "A $200K+/month revenue operation across four ASEAN countries ran on fragmented CRM data and siloed reporting — seven concurrent brand campaigns with no unified KPI view.",
      built:
        "Centralized tracking: consolidated regional CRM data and daily utilization reports into KPI dashboards, established a structured planning cadence, and ran the communication line between technical teams and brand partners including Unilever and Nestlé.",
      result:
        "Leadership got real-time cross-country KPI visibility, enterprise pipeline deals accelerated — and the role grew into Commercial Strategy Manager after nine months.",
      stack: ["CRM", "KPI Dashboards", "Campaign Operations", "Stakeholder Management"],
    },
    {
      title: "AutoML Frontend for Mining Operations",
      org: "PT Freeport Indonesia",
      year: "2023",
      role: "Frontend Developer (freelance)",
      problem:
        "Freeport's AutoML outputs lived with the data science team — mining-operations stakeholders had no way to read model results without wading through technical tooling.",
      built:
        "A React proof-of-concept frontend that translates AutoML model outputs into plain operational views, integrated directly with the backend model APIs.",
      result:
        "The PoC made the business case: it demonstrated that AutoML results could inform day-to-day operational decisions, supporting adoption of the platform.",
      stack: ["React.js", "REST APIs", "AutoML", "BI visualization"],
    },
    {
      title: "Earthquake Monitoring Dashboard",
      org: "BMKG",
      year: "—",
      role: null,
      problem:
        "Analysts monitoring seismic activity work against continuous waveform streams — scanning them by eye is slow, and weak events are easy to miss.",
      built:
        "A React dashboard that visualizes incoming seismic traces and runs STA/LTA (short-term / long-term average) detection to flag candidate events automatically, so analysts review triggered signals instead of raw streams.",
      result:
        "Automated first-pass event detection for the monitoring workflow — flagged events surface with their trace context, ready for analyst confirmation.",
      stack: ["React", "JavaScript", "STA/LTA detection", "Time-series visualization"],
    },
    {
      title: "Court Proceedings Monitoring App",
      org: "Universitas Indonesia — Faculty of Law",
      year: "2023",
      role: "Frontend Developer (freelance)",
      problem:
        "Tracking court proceedings meant manual, scattered record-keeping — no shared, up-to-date view of case activity.",
      built:
        "A cross-platform Flutter app backed by Firebase (authentication + Firestore) for logging and monitoring court proceedings from the field.",
      result:
        "A working mobile monitoring tool that replaced scattered manual notes with a synchronized, queryable record.",
      stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    },
  ],
};
