import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!data) return null;

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="brand draw-link" onClick={close}>
          {data.name}
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Main"
        >
          {data.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={item.cta ? "nav-link nav-cta" : "nav-link draw-link"}
              onClick={close}
            >
              <span className="nav-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
