import React from "react";
import "../styles/App.css";

const DATA = {
  name: "Farrel Alfarabi Saleh",
  tagline: "I focus on management & marketing",
  email: "farrel.abi.saleh@gmail.com",
  phone: "+62 851-5833-3422",
  location: "Indonesia",
  linkedin: "https://www.linkedin.com/in/farrel-alfarabi-saleh/",
  github: "https://github.com/FarrelAlfarabi",
  about:
    "Dedicated and goal-oriented Master of Management graduate with strong skills in marketing, project management, and business strategy. Experienced in coordinating teams, managing campaigns, and bridging technology with management to deliver impactful results.",
  highlights: [
    { label: "Projects", value: 8 },
    { label: "Skills", value: 12 },
    { label: "Leadership", value: 5 },
    { label: "Publications", value: 1 },
  ],
  skills: [
    { name: "Marketing Strategy", level: 92 },
    { name: "Project Management", level: 90 },
    { name: "Business Analysis", level: 88 },
    { name: "Content Marketing", level: 82 },
    { name: "Digital Campaigns", level: 86 },
    { name: "Market Research", level: 84 },
    { name: "Branding", level: 80 },
    { name: "Communication", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "ReactJS", level: 78 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 72 },
  ],
  services: [
    { title: "Marketing Campaigns", desc: "Design and execution of integrated campaigns across channels", icon: "📣" },
    { title: "Market Research", desc: "Consumer insights, surveys, and data analysis to guide decisions", icon: "📊" },
    { title: "Project Management", desc: "Timeline planning, stakeholder coordination, and reporting", icon: "📈" },
    { title: "Brand Strategy", desc: "Positioning, messaging, and identity development", icon: "🏷️" },
    { title: "Digital Marketing", desc: "SEO, SEM, and social media management", icon: "💻" },
    { title: "Content Creation", desc: "Copywriting, social visuals, and campaign assets", icon: "✍️" },
  ],
  projects: [
    { title: "Marketing Campaign – University Event", img: "/images/p1.jpg" },
    { title: "Market Research Project – Consumer Trends", img: "/images/p2.jpg" },
    { title: "Brand Identity for Student Committee", img: "/images/p3.jpg" },
    { title: "Digital Campaign for Law Faculty App", img: "/images/p4.jpg" },
    { title: "Bangkit Capstone – Gasturah", img: "/images/p5.jpg" },
    { title: "Content Design for MMUI Committee", img: "/images/p6.jpg" },
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
      <header className="topbar">
        <div className="container row">
          <a href="#hero" className="brand">{d.name.split(" ")[0]}</a>
          <nav className="nav">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Services", "services"],
              ["Projects", "projects"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a className="btn small" href="/cv.pdf" download>Download CV</a>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container grid2">
          <div>
            <p className="eyebrow">Hello, I focus on management and marketing</p>
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

      <section id="skills" className="section">
        <div className="container">
          <h2>My Skills</h2>
          <div className="grid2">
            <div>{d.skills.slice(0, Math.ceil(d.skills.length / 2)).map((s) => <Skill key={s.name} {...s} />)}</div>
            <div>{d.skills.slice(Math.ceil(d.skills.length / 2)).map((s) => <Skill key={s.name} {...s} />)}</div>
          </div>
        </div>
      </section>

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

      <footer className="footer">
        <div className="container grid4">
          <div>
            <h4>Let's be in touch</h4>
            <p>Open to roles in management, marketing, and project coordination.</p>
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