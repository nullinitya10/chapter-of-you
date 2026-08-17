import { useState } from "react";
import { timeline } from "@/data/story";

export function HowItStarted() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 sm:px-12">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">Chapter One</p>
      <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">How It Started</h2>
      <p className="mt-3 max-w-lg font-serif text-lg italic text-muted-foreground">
        Tap a scene to open the note taped underneath it.
      </p>

      <div className="mt-12 max-w-2xl border-l border-border pl-6">
        {timeline.map((node, i) => {
          const isOpen = open === i;
          return (
            <div key={node.year} className="relative pb-10">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_oklch(0.52_0.19_22/70%)]" />
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="text-left"
              >
                <span className="font-sans text-[11px] tracking-[0.4em] text-accent uppercase">
                  {node.year}
                </span>
                <p className="font-serif text-2xl text-foreground sm:text-3xl">{node.title}</p>
              </button>
              {isOpen && (
                <div className="paper-card torn-edge animate-rise mt-4 max-w-md -rotate-1 px-6 py-7">
                  <p className="font-hand text-2xl leading-snug">{node.note}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
