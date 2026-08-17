import { creditNotes } from "@/data/story";

export function BeforeCredits() {
  return (
    <section className="film-grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-24 sm:px-12">
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.1_82_/_22%),transparent_70%)]" />
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Nine · Before The Credits
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
        A few quiet wishes, before the lights come up
      </h2>

      <div className="mt-16 max-w-2xl space-y-12">
        {creditNotes.map((note) => (
          <p key={note} className="font-serif text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            {note}
          </p>
        ))}
        <p className="font-hand text-3xl text-accent">and I've missed you, seniorrr. always.</p>
      </div>
    </section>
  );
}
