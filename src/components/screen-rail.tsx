"use client";

import Image from "next/image";
import { useRef } from "react";

type Shot = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
};

export function ScreenRail({ shots, label }: { shots: readonly Shot[]; label: string }) {
  const rail = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: number) {
    const element = rail.current;
    if (!element) return;
    const card = element.querySelector("article");
    const distance = card ? card.getBoundingClientRect().width + 16 : 280;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * distance, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full bg-white text-brand shadow-sm ring-1 ring-black/5 transition hover:bg-cream"
          aria-label={`Ver ${label} anteriores`}
        >
          <Arrow direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full bg-brand text-white shadow-sm transition hover:bg-brand-deep"
          aria-label={`Ver próximas ${label}`}
        >
          <Arrow direction="right" />
        </button>
      </div>
      <div ref={rail} className="screen-rail -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6">
        {shots.map((shot) => (
          <article key={shot.src} className="w-[78%] max-w-xs shrink-0 snap-start sm:w-72">
            <div className="overflow-hidden rounded-[1.7rem] bg-brand shadow-[0_18px_40px_rgba(12,92,56,0.18)] ring-1 ring-black/5">
              <div className="relative aspect-[9/16]">
                <Image src={shot.src} alt={shot.alt} fill sizes="288px" className="object-cover object-top" />
              </div>
            </div>
            <h3 className="mt-3 font-display text-xl font-extrabold text-ink">{shot.title}</h3>
            {shot.caption ? <p className="mt-1 text-sm font-semibold text-muted">{shot.caption}</p> : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4">
      {direction === "left" ? <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}
