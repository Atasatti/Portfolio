"use client";

import { useRef, useState } from "react";

export default function FoundationProjects({ projects }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function getStep() {
    const track = trackRef.current;
    const card = track?.querySelector(".archive-card");

    if (!track || !card) return 0;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function move(direction) {
    const track = trackRef.current;
    const nextIndex = Math.max(
      0,
      Math.min(projects.length - 1, activeIndex + direction),
    );

    if (!track) return;

    track.scrollTo({
      left: nextIndex * getStep(),
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  }

  function syncActiveCard() {
    const track = trackRef.current;
    const step = getStep();

    if (!track || !step) return;
    setActiveIndex(
      Math.max(0, Math.min(projects.length - 1, Math.round(track.scrollLeft / step))),
    );
  }

  return (
    <div className="foundation-carousel">
      <div className="foundation-carousel-controls">
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
        <div>
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous foundation project"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next foundation project"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="archive-grid"
        ref={trackRef}
        onScroll={syncActiveCard}
      >
        {projects.map((project) => (
          <article className="archive-card" key={project.name}>
            <div className="archive-image">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="900"
                height="620"
                loading="lazy"
              />
              <span>{project.number}</span>
            </div>
            <p className="project-label">{project.label}</p>
            <h4>{project.name}</h4>
            <p className="archive-description">{project.description}</p>
            <p className="project-stack">{project.stack}</p>
            <a
              className="text-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View project <span aria-hidden="true" className="arrow" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
