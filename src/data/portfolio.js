// Import any assets if you have them in your template. 
// Adjust the paths if your images are named differently.
import heroImage from '../images/hero.jpg';
import aboutImage from '../images/about.png';

export const portfolioData = {
  // 1. BASIC INFORMATION
  name: "Farrel Alfarabi Saleh",
  role: "Strategic Technical Leader & Product Manager",
  email: "farrel.abi.saleh@gmail.com",
  phone: "+62 851-5833-3422",
  location: "Jakarta, Indonesia",
  linkedin: "https://www.linkedin.com/in/farrel-alfarabi-saleh-606722207/",
  github: "https://github.com/FarrelAlfarabi",
  
  // 2. ASSETS
  heroImage: heroImage,
  aboutImage: aboutImage,

  // NAVIGATION
  nav: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#skills" },
    { label: "Case Studies", href: "#projects" },
    { label: "Contact", href: "#contact", cta: true },
  ],

  // 3. HERO SECTION (Value Proposition)
  tagline: "Bridging Data Insights and Technical Execution",
  heroDescription: "I transform complex data and operational bottlenecks into scalable digital solutions. With an MBA in Marketing and a CS background, I specialize in Product Management, Business Intelligence, and cross-functional leadership to drive measurable ROI.",

  // 4. ABOUT SECTION
  about: "I am a hybrid technology professional combining a Computer Science foundation with an MBA in Marketing from Universitas Indonesia. Most recently, I managed regional operations at YMT ADS, overseeing a $200K+/month revenue environment across ASEAN markets. I specialize in aligning stakeholder vision with technical roadmaps—consolidating CRM data for actionable BI insights, leading cross-functional teams, and building data-driven products that hit business KPIs.",

  // 5. SKILLS MATRIX (Replaces old percentage bars)
  skillCategories: [
    {
      title: "Product & Project Management",
      skills: [
        "Cross-functional Leadership", 
        "Agile & Product Roadmapping", 
        "Stakeholder Communication", 
        "Operations & Process Improvement"
      ]
    },
    {
      title: "Business Intelligence & Strategy",
      skills: [
        "CRM Data Consolidation", 
        "KPI Tracking & Reporting", 
        "Commercial Strategy", 
        "Market Research & Media Planning"
      ]
    },
    {
      title: "Technical Development",
      skills: [
        "SQL & Data Analytics", 
        "Python & Django", 
        "React.js & JavaScript", 
        "Git Version Control"
      ]
    }
  ],

  // 6. CASE STUDIES (STAR Methodology - Replaces generic project lists)
  projects: [
    {
      title: "ASEAN Regional Operations & CRM Intelligence",
      company: "YMT ADS",
      situation: "The business managed a highly complex $200K+/month revenue environment across 4 ASEAN countries, resulting in fragmented data and siloed reporting.",
      task: "Establish a structured planning process to improve KPI visibility and stakeholder alignment for 7 concurrent, high-stakes brand campaigns.",
      action: "Consolidated regional CRM data and daily utilization reports into centralized tracking systems. Facilitated communication between technical teams and major brand partners (Unilever, Nestlé).",
      result: "Improved cross-country KPI tracking, provided leadership with real-time operational visibility, and successfully accelerated pipeline deals for enterprise clients.",
      tags: ["CRM", "Data Consolidation", "Operations", "Stakeholder Management"],
      link: "#" // Optional: Add a link to a detailed PDF or live dashboard if applicable
    },
    {
      title: "AutoML Proof-of-Concept for Mining Operations",
      company: "PT Freeport",
      situation: "Stakeholders required a way to bridge advanced data science models with day-to-day mining operations without overwhelming end-users with technical complexity.",
      task: "Architect a front-end interface that translates complex automated machine learning (AutoML) outputs into actionable business intelligence.",
      action: "Leveraged React.js to build a scalable, intuitive frontend Proof-of-Concept, integrating directly with backend data models.",
      result: "Delivered a robust platform that successfully proved the business value of adopting AutoML for operational data analysis, enabling data-driven decision-making.",
      tags: ["React.js", "AutoML", "Business Intelligence", "Frontend Architecture"],
      link: "#"
    },
    {
      title: "Commercial Product Strategy - SPACE",
      company: "UI Incubate 2024",
      situation: "Required a commercially viable product concept for a highly competitive university incubator program.",
      task: "Develop a sustainable modular housing concept from scratch, proving both technical feasibility and market demand.",
      action: "Led comprehensive market research, developed the core business model, and crafted investor-facing pitches to align product development with commercial viability.",
      result: "Achieved a Top 10 Finalist position out of a broad pool of entries, validating the product's market-fit and the effectiveness of the commercial strategy.",
      tags: ["Product Strategy", "Market Research", "Business Modeling"],
      link: "#"
    }
  ]
};