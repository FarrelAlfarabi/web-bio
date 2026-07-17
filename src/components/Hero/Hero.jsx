import React from "react";
import "./Hero.css";

// Seismogram trace: quiet noise, an event burst, decay back to baseline.
// Starts and ends at y=70 so two copies tile seamlessly for the scroll loop.
const TRACE =
  "M0 70 L12 69 L24 71 L36 68 L48 72 L60 70 L72 67 L84 73 L96 70 " +
  "L108 69 L120 71 L132 70 L144 66 L156 74 L168 70 L180 68 L192 72 " +
  "L204 70 L216 69 L228 71 L240 70 L252 65 L264 75 L276 70 " +
  "L282 52 L288 92 L294 38 L300 104 L306 22 L312 116 L318 30 L324 106 " +
  "L330 42 L336 94 L342 50 L348 88 L354 56 L360 82 L366 60 L372 79 " +
  "L378 63 L384 76 L390 66 L396 73 " +
  "L408 68 L420 72 L432 69 L444 71 L456 70 L468 67 L480 73 L492 70 " +
  "L504 69 L516 71 L528 70 L540 68 L552 72 L564 70 L576 69 L588 71 " +
  "L600 70 L612 67 L624 72 L636 70 L648 69 L660 71 L672 70 L684 68 " +
  "L696 71 L708 69 L720 70";

export default function Hero({ data }) {
  if (!data || !data.hero) return null;
  const { hero } = data;

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-eyebrow mono-label">{hero.eyebrow}</p>
            <h1 className="hero-headline">{hero.headline}</h1>
            <p className="hero-subline">{hero.subline}</p>
            <div className="hero-ctas">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={cta.primary ? "btn" : "btn ghost"}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>

          {hero.portrait && (
            <figure className="hero-portrait">
              <div className="hero-portrait-frame">
                <img
                  src={hero.portrait}
                  srcSet={`${hero.portraitSmall} 480w, ${hero.portrait} 800w`}
                  sizes="(max-width: 899px) 300px, 380px"
                  alt={hero.portraitAlt}
                  width="800"
                  height="1000"
                />
              </div>
              <figcaption className="mono-label hero-portrait-caption">
                {hero.portraitCaption}
              </figcaption>
            </figure>
          )}
        </div>

        {hero.stats && (
          <ul className="hero-stats">
            {hero.stats.map((stat) => (
              <li key={stat.label} className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        <figure className="seismo-figure">
          <svg
            className="seismo"
            viewBox="0 0 720 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <line className="seismo-baseline" x1="0" y1="70" x2="720" y2="70" />
            <g className="seismo-scroll">
              <path className="seismo-trace" d={TRACE} />
              <path
                className="seismo-trace seismo-trace--copy"
                d={TRACE}
                transform="translate(720 0)"
              />
            </g>
          </svg>
          <figcaption className="seismo-caption mono-label">
            {hero.traceCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
