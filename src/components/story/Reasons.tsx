import { useState } from "react";
import { reasons } from "@/data/story";

export function Reasons() {
  const [opened, setOpened] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const allOpen = opened.length === reasons.length;
  const activeReason = active === null ? null : (reasons[active] ?? null);

  const open = (i: number) => {
    const reason = reasons[i];
    if (!reason) return;
    setActive(i);
    setOpened((prev) => (prev.includes(reason.n) ? prev : [...prev, reason.n]));
  };

  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 sm:px-12">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Seven · The Centerpiece
      </p>
      <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">23 Reasons</h2>
      <p className="mt-3 font-serif text-lg italic text-muted-foreground">
        Opened {opened.length} of {reasons.length}
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <button
            key={r.n}
            onClick={() => open(i)}
            className={`min-h-[92px] rounded-sm border p-4 text-left transition-all hover:-translate-y-1 ${
              opened.includes(r.n)
                ? "border-accent/60 bg-secondary"
                : "border-border bg-card"
            }`}
          >
            <span className="font-display text-3xl text-primary">{r.n}</span>
            <p className="mt-1 font-serif text-base leading-tight text-foreground">{r.title}</p>
            {opened.includes(r.n) && (
              <span className="mt-1 block font-sans text-[10px] tracking-[0.3em] text-accent uppercase">
                opened
              </span>
            )}
          </button>
        ))}
      </div>

      {allOpen && (
        <div className="animate-rise mt-14 space-y-3 text-center">
          <p className="font-serif text-2xl italic text-muted-foreground">
            And honestly… I could write 23 more.
          </p>
          <p className="font-serif text-2xl italic text-foreground">
            23 reasons. And somehow, still not enough.
          </p>
          <p className="font-display text-4xl text-primary text-glow sm:text-5xl">
            Happy Birthday, Seniorrr ❤️
          </p>
        </div>
      )}

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 px-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="paper-card torn-edge animate-rise w-full max-w-md -rotate-1 px-8 py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-display text-5xl text-primary">{reasons[active].n}</span>
            <p className="mt-2 font-serif text-3xl">{reasons[active].title}</p>
            <p className="mt-4 font-hand text-2xl leading-snug">{reasons[active].text}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-8 font-sans text-[11px] tracking-[0.35em] uppercase opacity-70"
            >
              close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
