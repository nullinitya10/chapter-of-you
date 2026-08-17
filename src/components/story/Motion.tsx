import { media } from "@/data/story";

export function Motion() {
  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 sm:px-12">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Five · Memories In Motion
      </p>
      <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">Found Footage</h2>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="relative rounded-sm border-y-8 border-border bg-card p-3 shadow-[var(--shadow-cinema)]">
          <div
            className="pointer-events-none absolute inset-x-0 top-[-8px] h-2 bg-[repeating-linear-gradient(90deg,transparent_0_10px,oklch(0.13_0.012_40)_10px_18px)]"
            aria-hidden
          />
          <video
            src={media.reel}
            controls
            playsInline
            preload="metadata"
            className="h-auto w-full rounded-sm"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-[-8px] h-2 bg-[repeating-linear-gradient(90deg,transparent_0_10px,oklch(0.13_0.012_40)_10px_18px)]"
            aria-hidden
          />
        </div>

        <div className="paper-card torn-edge mt-8 rotate-[0.6deg] px-7 py-8">
          <p className="font-display text-2xl tracking-wide text-primary">Reel 01 — The Hero Shot</p>
          <p className="mt-3 font-hand text-2xl leading-snug sm:text-3xl">
            He was the Spider-Man of my dreams. Swinging through my head rent-free, saving days he
            didn't even know were falling apart. And me? I just wanted to be his MJ.
          </p>
        </div>
      </div>
    </section>
  );
}
