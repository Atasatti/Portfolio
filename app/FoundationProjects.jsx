"use client";

import { useRef, useState } from "react";

export default function FoundationProjects({ projects }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function getCards() {
    return Array.from(trackRef.current?.querySelectorAll(".archive-card") ?? []);
  }

  function move(direction) {
    const track = trackRef.current;
    const cards = getCards();
    const card =
      cards[Math.max(0, Math.min(cards.length - 1, activeIndex + direction))];

    if (!track || !card) return;

    const offset =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;

    // A trailing card's start edge can sit past the maximum scroll position, so
    // clamp the target ourselves. Left to the browser, the scroll stops short
    // and syncActiveCard resolves a different card than the one we asked for.
    track.scrollTo({
      left: Math.min(offset, track.scrollWidth - track.clientWidth),
      behavior: "smooth",
    });
  }

  // Scroll position is the single source of truth: move() only scrolls, and this
  // resolves whichever card that scroll actually landed on.
  function syncActiveCard() {
    const track = trackRef.current;
    const cards = getCards();

    if (!track || !cards.length) return;

    // At maximum scroll the trailing cards never reach the left edge, so
    // nearest-edge matching alone could never select the last one.
    if (track.scrollWidth - track.clientWidth - track.scrollLeft <= 1) {
      setActiveIndex(cards.length - 1);
      return;
    }

    const trackLeft = track.getBoundingClientRect().left;
    let nearest = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setActiveIndex(nearest);
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
