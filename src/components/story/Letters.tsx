import { useState } from "react";
import { media } from "@/data/story";

export function Letters() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openLast, setOpenLast] = useState(false);

  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 sm:px-12">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Eight · The Letters
      </p>
      <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
        Everything I wrote by hand
      </h2>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <LetterCard
          label="My first letter"
          hint="The one I wrote before I knew how to say any of it out loud."
          src={media.letterOne}
          alt="Handwritten first birthday letter to Seniorrr"
          isOpen={openFirst}
          onOpen={() => setOpenFirst(true)}
        />
        <LetterCard
          label="The letter from our last meet"
          hint="Maybe in Another Universe — the most recent one, written the day I saw you last."
          src={media.letterTwo}
          alt="Recent handwritten letter titled Maybe in Another Universe"
          isOpen={openLast}
          onOpen={() => setOpenLast(true)}
        />
      </div>
    </section>
  );
}

function LetterCard({
  label,
  hint,
  src,
  alt,
  isOpen,
  onOpen,
}: {
  label: string;
  hint: string;
  src: string;
  alt: string;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-sans text-[11px] tracking-[0.4em] text-accent uppercase">{label}</p>
      <p className="mt-3 max-w-sm font-serif text-lg italic text-muted-foreground">{hint}</p>

      {isOpen ? (
        <div className="paper-card animate-rise mt-6 w-full max-w-sm rotate-[0.8deg] p-3">
          <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
        </div>
      ) : (
        <button
          onClick={onOpen}
          className="paper-card mt-6 flex h-56 w-full max-w-sm flex-col items-center justify-center gap-4 rounded-sm transition-transform hover:-translate-y-1"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
            ✉
          </span>
          <span className="font-display text-lg tracking-[0.3em] text-ink">OPEN LETTER</span>
        </button>
      )}
    </div>
  );
}
