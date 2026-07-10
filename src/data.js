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

  // ---- projects (old shape — replaced in Stage 3) ----
  projects: [
    {
      title: "ASEAN Regional Operations & CRM Intelligence",
      company: "YMT ADS",
      situation:
        "The business managed a highly complex $200K+/month revenue environment across 4 ASEAN countries, resulting in fragmented data and siloed reporting.",
      task: "Establish a structured planning process to improve KPI visibility and stakeholder alignment for 7 concurrent, high-stakes brand campaigns.",
      action:
        "Consolidated regional CRM data and daily utilization reports into centralized tracking systems. Facilitated communication between technical teams and major brand partners (Unilever, Nestlé).",
      result:
        "Improved cross-country KPI tracking, provided leadership with real-time operational visibility, and successfully accelerated pipeline deals for enterprise clients.",
      tags: ["CRM", "Data Consolidation", "Operations", "Stakeholder Management"],
      link: "#",
    },
    {
      title: "AutoML Proof-of-Concept for Mining Operations",
      company: "PT Freeport",
      situation:
        "Stakeholders required a way to bridge advanced data science models with day-to-day mining operations without overwhelming end-users with technical complexity.",
      task: "Architect a front-end interface that translates complex automated machine learning (AutoML) outputs into actionable business intelligence.",
      action:
        "Leveraged React.js to build a scalable, intuitive frontend Proof-of-Concept, integrating directly with backend data models.",
      result:
        "Delivered a robust platform that successfully proved the business value of adopting AutoML for operational data analysis, enabling data-driven decision-making.",
      tags: ["React.js", "AutoML", "Business Intelligence", "Frontend Architecture"],
      link: "#",
    },
    {
      title: "Commercial Product Strategy - SPACE",
      company: "UI Incubate 2024",
      situation:
        "Required a commercially viable product concept for a highly competitive university incubator program.",
      task: "Develop a sustainable modular housing concept from scratch, proving both technical feasibility and market demand.",
      action:
        "Led comprehensive market research, developed the core business model, and crafted investor-facing pitches to align product development with commercial viability.",
      result:
        "Achieved a Top 10 Finalist position out of a broad pool of entries, validating the product's market-fit and the effectiveness of the commercial strategy.",
      tags: ["Product Strategy", "Market Research", "Business Modeling"],
      link: "#",
    },
  ],
};
