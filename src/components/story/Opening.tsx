import { useEffect, useState } from "react";
import { BIRTH_DATE, SITE_NAME } from "@/data/story";

export function Opening({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [900, 2200, 3600, 5000].map((ms, i) =>
      setTimeout(() => setStep(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="film-grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.3_0.06_35_/_45%),transparent_65%)]" />
      {step >= 1 && (
        <p className="animate-soft font-sans text-xs tracking-[0.6em] text-accent uppercase">
          {BIRTH_DATE}
        </p>
      )}
      {step >= 2 && (
        <h1 className="animate-rise mt-6 font-display text-6xl leading-[0.9] text-primary text-glow sm:text-8xl md:text-9xl">
          {SITE_NAME}
        </h1>
      )}
      {step >= 3 && (
        <p className="animate-soft mt-8 max-w-md font-serif text-xl italic text-muted-foreground sm:text-2xl">
          A very special story deserves more than a birthday wish.
        </p>
      )}
      {step >= 4 && (
        <button
          onClick={onNext}
          className="animate-rise mt-12 rounded-sm bg-primary px-9 py-4 font-display text-lg tracking-[0.25em] text-primary-foreground shadow-[var(--shadow-cinema)] transition-transform hover:scale-105"
        >
          ▶ START THE STORY
        </button>
      )}
      {step < 4 && (
        <button
          onClick={() => setStep(4)}
          className="absolute bottom-8 font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase"
        >
          skip
        </button>
      )}
    </section>
  );
}
