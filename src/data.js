// ============================================================
// Single source of content for the entire site.
// No copy should be hardcoded in JSX — if it renders, it lives here.
// (public/index.html <head> tags are the one static exception;
//  keep them in sync with `meta` below.)
// ============================================================

import aboutImage from "./images/about.webp";

export const portfolioData = {
  // ---- identity ----
  name: "Farrel Alfarabi Saleh",
  role: "Software Engineer & Market Strategist",
  email: "farrel.abi.saleh@gmail.com",
  location: "Jakarta, Indonesia",
  linkedin: "https://www.linkedin.com/in/farrel-alfarabi-saleh-606722207/",
  github: "https://github.com/FarrelAlfarabi",

  // ---- document meta (mirrored statically in public/index.html) ----
  meta: {
    title: "Farrel Alfarabi Saleh — Software Engineer & Market Strategist",
    description:
      "Software engineer and market strategist in Jakarta. React dashboards for earthquake monitoring, AutoML interfaces for mining operations, and go-to-market strategy for ASEAN brands.",
  },

  // ---- navigation ----
  nav: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#skills" },
    { label: "Case Studies", href: "#projects" },
    { label: "Contact", href: "#contact", cta: true },
  ],

  // ---- hero ----
  hero: {
    eyebrow: "Software Engineer × Market Strategist — Jakarta, ID",
    headline: "I build software, and the business case for it.",
    subline:
      "Computer science graduate and MBA in Marketing, both from Universitas Indonesia. I've shipped an earthquake-monitoring dashboard for BMKG, AutoML interfaces for Freeport Indonesia, and commercial strategy for consumer brands across ASEAN.",
    ctas: [
      { label: "View case studies", href: "#projects", primary: true },
      { label: "Get in touch", href: "#contact" },
    ],
    traceCaption: "fig. 01 — seismic trace / STA-LTA event detection",
  },

  // ---- about ----
  about: {
    label: "About",
    index: "01",
    title: "Engineer's toolkit, strategist's brief",
    paragraphs: [
      "I work in the space between the codebase and the market. On one side: React dashboards that detect earthquakes, machine-learning interfaces for mining operators, and mobile apps built for the courtroom. On the other: nine months running campaign operations for ASEAN consumer brands at YMT ADS, which ended in a promotion to Commercial Strategy Manager.",
      "These days I develop core banking systems and application integrations in Jakarta. I've also taken a modular-housing venture concept to a Top-10 finalist finish at UI Incubate 2024 — market research, business model, and investor pitch included.",
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
  },

  // ---- skills (old shape — replaced in Stage 4) ----
  skillCategories: [
    {
      title: "Product & Project Management",
      skills: [
        "Cross-functional Leadership",
        "Agile & Product Roadmapping",
        "Stakeholder Communication",
        "Operations & Process Improvement",
      ],
    },
    {
      title: "Business Intelligence & Strategy",
      skills: [
        "CRM Data Consolidation",
        "KPI Tracking & Reporting",
        "Commercial Strategy",
        "Market Research & Media Planning",
      ],
    },
    {
      title: "Technical Development",
      skills: [
        "SQL & Data Analytics",
        "Python & Django",
        "React.js & JavaScript",
        "Git Version Control",
      ],
    },
  ],

  // ---- case studies ----
  projectsSection: {
    index: "03",
    label: "Case Studies",
    title: "Selected work, problem to result",
    fieldLabels: { problem: "Problem", built: "Built", result: "Result" },
  },
  projects: [
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
    {
      title: "ASEAN Campaign Operations & CRM Intelligence",
      org: "YMT ADS",
      year: "2025",
      role: "Operations & Marketing Staff → Commercial Strategy Manager",
      problem:
        "A $200K+/month revenue operation across four ASEAN countries ran on fragmented CRM data and siloed reporting — seven concurrent brand campaigns with no unified KPI view.",
      built:
        "Centralized tracking: consolidated regional CRM data and daily utilization reports, established a structured planning cadence, and ran the communication line between technical teams and brand partners including Unilever and Nestlé.",
      result:
        "Leadership got real-time cross-country KPI visibility, enterprise pipeline deals accelerated — and the role grew into Commercial Strategy Manager after nine months.",
      stack: ["CRM", "KPI Dashboards", "Campaign Operations", "Stakeholder Management"],
    },
  ],
};
