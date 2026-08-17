import { useState } from "react";
import { unsaidNotes } from "@/data/story";

export function Unsaid() {
  const [index, setIndex] = useState(0);
  const last = index >= unsaidNotes.length - 1;

  return (
    <section className="film-grain flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Two · Things I Never Said
      </p>
      <p
        key={index}
        className="animate-soft mt-10 max-w-2xl font-serif text-2xl leading-relaxed text-foreground sm:text-4xl"
      >
        {unsaidNotes[index]}
      </p>
      <div className="mt-12 flex items-center gap-3">
        {unsaidNotes.map((_, i) => (
          <span
            key={i}
            className={`h-[3px] w-8 transition-colors ${i <= index ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>
      <button
        onClick={() => setIndex((i) => Math.min(i + 1, unsaidNotes.length - 1))}
        disabled={last}
        className="mt-10 rounded-sm border border-accent/50 px-8 py-3 font-display text-base tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-40"
      >
        {last ? "THAT'S ALL OF IT" : "NEXT"}
      </button>
    </section>
  );
}
