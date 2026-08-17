import { BIRTH_DATE, finalMessage, media } from "@/data/story";

const montage = [media.angel, media.bike, media.playful, media.moody];

export function Finale({ onRestart }: { onRestart: () => void }) {
  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 text-center sm:px-12">
      <p className="font-serif text-xl italic text-muted-foreground">Not the end of the memories.</p>
      <h2 className="animate-flicker mt-6 font-display text-6xl leading-[0.9] text-primary text-glow sm:text-8xl">
        HAPPY BIRTHDAY,
        <br />
        SENIORRR
      </h2>
      <p className="mt-4 font-sans text-xs tracking-[0.6em] text-accent uppercase">{BIRTH_DATE}</p>

      <div className="mx-auto mt-12 flex max-w-3xl justify-center gap-3 overflow-x-auto pb-3">
        {montage.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="A memory from earlier in the story"
            loading="lazy"
            className={`h-40 w-28 flex-none rounded-sm object-cover opacity-90 ${
              i % 2 ? "rotate-2" : "-rotate-2"
            }`}
          />
        ))}
      </div>

      <div className="paper-card torn-edge mx-auto mt-14 max-w-xl px-8 py-12 text-left">
        {finalMessage.split("\n\n").map((para) => (
          <p key={para} className="mb-5 font-hand text-2xl leading-snug sm:text-3xl">
            {para}
          </p>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="mt-12 rounded-sm border border-primary px-9 py-4 font-display text-base tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        ↻ WATCH AGAIN
      </button>
    </section>
  );
}
