"use client";

import { useRef, useState } from "react";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { PharmacyProjectCard } from "./PharmacyProjectCard";

export function SelectedWorkCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const slideCount = 2;
  const showSlide = (index: number) => setActiveSlide((index + slideCount) % slideCount);

  return (
    <div className="selected-work-carousel" aria-roledescription="carousel" aria-label="Selected projects">
      <div
        className="selected-work-viewport"
        onPointerDown={(event) => { pointerStart.current = event.clientX; }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 55) showSlide(activeSlide + (distance < 0 ? 1 : -1));
          pointerStart.current = null;
        }}
      >
        <div className="selected-work-track" style={{ transform: `translateX(-${activeSlide * 50}%)` }}>
          <div className="selected-work-slide" aria-hidden={activeSlide !== 0}><FeaturedProjectCard /></div>
          <div className="selected-work-slide" aria-hidden={activeSlide !== 1}><PharmacyProjectCard /></div>
        </div>
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots" aria-label="Choose project">
          {[0, 1].map((index) => (
            <button key={index} className={activeSlide === index ? "is-active" : ""} onClick={() => showSlide(index)} aria-label={`Show project ${index + 1}`} aria-current={activeSlide === index ? "true" : undefined} />
          ))}
        </div>
        <div className="carousel-arrows">
          <button onClick={() => showSlide(activeSlide - 1)} aria-label="Previous project">←</button>
          <span><strong>0{activeSlide + 1}</strong> / 0{slideCount}</span>
          <button onClick={() => showSlide(activeSlide + 1)} aria-label="Next project">→</button>
        </div>
      </div>
    </div>
  );
}
