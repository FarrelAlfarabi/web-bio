import React from "react";
import "../styles/App.css";


// React + JavaScript single-file portfolio site inspired by the screenshot.
// Structure: Hero, Stats, About, Skills, Services, Projects, Testimonials, Blog, Contact, Footer
// Data filled from Farrel Alfarabi Saleh's CV. Replace image paths with your own.

const DATA = {
  name: "Farrel Alfarabi Saleh",
  tagline: "I build & design software",
  email: "farrel.abi.saleh@gmail.com",
  phone: "+62 851-5833-3422",
  location: "Indonesia",
  linkedin: "https://www.linkedin.com/in/farrel-alfarabi-saleh/",
  github: "https://github.com/FarrelAlfarabi",
  about:
    "Dedicated and goal‑oriented Master of Management graduate with a Computer Science foundation. Experience in software development, system programming, and UI/UX design. Passionate about bridging technology and management with a focus on IT and project management.",
  highlights: [
    { label: "Projects", value: 8 },
    { label: "Skills", value: 8 },
    { label: "Leadership", value: 5 },
    { label: "Publications", value: 1 },
  ],
  skills: [
    { name: "JavaScript", level: 92 },
    { name: "HTML", level: 90 },
    { name: "jQuery", level: 68 },
    { name: "Python", level: 82 },
    { name: "ReactJS", level: 88 },
    { name: "Django", level: 75 },
    { name: "SQL", level: 76 },
    { name: "Flutter", level: 72 },
    { name: "Git", level: 86 },
    { name: "SEO", level: 75 },
  ],
  services: [
    { title: "Web Design", desc: "Clean, modern UI with accessibility in mind", icon: "🖌️" },
    { title: "Web Development", desc: "React SPAs, REST/JSON backends", icon: "💻" },
    { title: "Brand Design", desc: "Logos, identity kits, assets", icon: "🏷️" },
    { title: "Mobile Apps", desc: "Flutter + Firebase prototypes", icon: "📱" },
    { title: "IT & Project Mgmt", desc: "Roadmaps, timelines, stakeholder comms", icon: "📈" },
    { title: "Content & Social", desc: "Campaign visuals, copy, scheduling", icon: "📣" },
  ],
  projects: [
    { title: "Real‑Time Earthquake Source Detection", img: "/images/p1.jpg" },
    { title: "Automated Machine Learning Website", img: "/images/p2.jpg" },
    { title: "Pantau PeradilanMu (Android)", img: "/images/p3.jpg" },
    { title: "Gasturah – Bangkit Capstone", img: "/images/p4.jpg" },
    { title: "Research Frontend Prototypes", img: "/images/p5.jpg" },
    { title: "UI/UX Concept Work", img: "/images/p6.jpg" },
    { title: "Marketing Design Samples", img: "/images/p7.jpg" },
    { title: "Data Viz Demos", img: "/images/p8.jpg" },
  ],
  testimonials: [
    {
      quote:
        "Farrel’s clarity, speed, and polish consistently exceeded expectations.",
      name: "Project Sponsor",
      role: "University Initiative",
      avatar: "/images/u1.jpg",
    },
    {
      quote: "Great partner—organized, communicative, and design‑literate.",
      name: "Team Lead",
      role: "Capstone Team",
      avatar: "/images/u2.jpg",
    },
    {
      quote:
        "From zero to working demo under tight timelines—impressive delivery.",
      name: "Faculty Advisor",
      role: "Research",
      avatar: "/images/u3.jpg",
    },
  ],
  blog: [
    {
      date: "Feb 2025",
      title: "AI & eWOM Influence on Fashion Purchases on TikTok",
      desc:
        "Published in Syntax Literate (Sinta 4). Study on how AI & eWOM shape purchase decisions.",
      img: "/images/research.jpg",
      link: "#",
    },
  ],
};

const Stat = ({ value, label }) => (
  <div className="stat">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Skill = ({ name, level }) => (
  <div className="skill">
    <div className="skill-header">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="bar"><span style={{ width: `${level}%` }} /></div>
  </div>
);

export default function Portfolio() {
  const d = DATA;
  return (
    <div className="site">
      {/* Header */}
      <header className="topbar">
        <div className="container row">
          <a href="#hero" className="brand">{d.name.split(" ")[0]}</a>
          <nav className="nav">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Services", "services"],
              ["Projects", "projects"],
              ["Testimonials", "testimonials"],
              ["Blog", "blog"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a className="btn small" href="/cv.pdf" download>Download CV</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="container grid2">
          <div>
            <p className="eyebrow">Hello, {d.tagline.toLowerCase()}</p>
            <h1>Hi, I am <span className="accent">{d.name.split(" ")[0]}</span>. This is my favorite work.</h1>
            <p className="lede">{d.about}</p>
            <div className="row gap">
              <a href="#projects" className="btn">See Projects</a>
              <a href="#contact" className="btn ghost">Contact Me</a>
            </div>
            <div className="row meta">
              <a href={`mailto:${d.email}`}>{d.email}</a>
              <span>•</span>
              <a href={`tel:${d.phone.replace(/\s|-/g, "")}`}>{d.phone}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tilt"/>
            <img src="/images/hero.jpg" alt="Portrait" />
          </div>
        </div>
        <div className="container stats">
          {d.highlights.map((s) => (<Stat key={s.label} {...s} />))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container grid2">
          <img className="card media" src="/images/about.jpg" alt="About" />
          <div>
            <h2>About Me</h2>
            <p>{d.about}</p>
            <dl className="info">
              <div><dt>Name</dt><dd>{d.name}</dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${d.email}`}>{d.email}</a></dd></div>
              <div><dt>Phone</dt><dd><a href={`tel:${d.phone.replace(/\s|-/g, "")}`}>{d.phone}</a></dd></div>
              <div><dt>LinkedIn</dt><dd><a target="_blank" rel="noreferrer" href={d.linkedin}>Profile</a></dd></div>
              <div><dt>GitHub</dt><dd><a target="_blank" rel="noreferrer" href={d.github}>@FarrelAlfarabi</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2>My Skills</h2>
          <div className="grid2">
            <div>{d.skills.slice(0, Math.ceil(d.skills.length / 2)).map((s) => <Skill key={s.name} {...s} />)}</div>
            <div>{d.skills.slice(Math.ceil(d.skills.length / 2)).map((s) => <Skill key={s.name} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section alt">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <h2>We do awesome services for our clients</h2>
          <div className="cards grid3">
            {d.services.map((s) => (
              <div key={s.title} className="card">
                <div className="icon" aria-hidden>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Our Projects</h2>
          <div className="gallery">
            {d.projects.map((p) => (
              <figure className="thumb" key={p.title}>
                <img src={p.img} alt={p.title} />
                <figcaption>{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section olive">
        <div className="container">
          <p className="eyebrow center">Testimonials</p>
          <h2 className="center">What client says about?</h2>
          <div className="cards grid3">
            {d.testimonials.map((t, i) => (
              <div key={i} className="card quote">
                <p>“{t.quote}”</p>
                <div className="person">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <div className="person-name">{t.name}</div>
                    <div className="person-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="section">
        <div className="container">
          <h2>Our Blog</h2>
          <div className="cards grid3">
            {d.blog.map((b) => (
              <a key={b.title} className="card post" href={b.link}>
                <img src={b.img} alt={b.title} />
                <div className="post-body">
                  <div className="post-date">{b.date}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section cta">
        <div className="container grid2">
          <div>
            <h2>Have a Project?</h2>
            <p>I'd love to hear about it. Drop a message and I'll get back to you.</p>
            <ul className="list">
              <li><strong>Email:</strong> <a href={`mailto:${d.email}`}>{d.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${d.phone.replace(/\s|-/g, "")}`}>{d.phone}</a></li>
              <li><strong>LinkedIn:</strong> <a href={d.linkedin} target="_blank" rel="noreferrer">Profile</a></li>
              <li><strong>GitHub:</strong> <a href={d.github} target="_blank" rel="noreferrer">@FarrelAlfarabi</a></li>
            </ul>
          </div>
          <form action={`https://formspree.io/f/${"YOUR_FORM_ID"}`} method="POST" className="card form">
            <div className="row">
              <input name="name" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
            </div>
            <input name="subject" placeholder="Subject" />
            <textarea name="message" rows="5" placeholder="Message" />
            <button className="btn" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container grid4">
          <div>
            <h4>Let's be in touch</h4>
            <p>Open to software roles, product/IT management, and UI/UX work.</p>
            <a className="btn small" href="/cv.pdf" download>Download CV</a>
          </div>
          <div>
            <h5>Links</h5>
            <ul className="list small">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul className="list small">
              {DATA.services.slice(0,4).map((s)=> <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h5>Have a Question?</h5>
            <ul className="list small">
              <li><a href={`mailto:${d.email}`}>{d.email}</a></li>
              <li><a href={`tel:${d.phone.replace(/\s|-/g, "")}`}>{d.phone}</a></li>
              <li><a href={d.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={d.github} target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} {d.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
