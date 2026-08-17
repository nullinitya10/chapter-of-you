import { photoScenes } from "@/data/story";

export function Photos() {
  return (
    <section className="film-grain min-h-[100svh] px-6 py-20 sm:px-12">
      <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
        Chapter Six · The Few We Kept
      </p>
      <h2 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
        Not many. Just the right ones.
      </h2>

      <div className="mt-14 space-y-24">
        {photoScenes.map((scene, i) => (
          <figure
            key={scene.src}
            className={`mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row ${
              i % 2 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="paper-card w-full max-w-sm rotate-[-1.5deg] p-3 pb-14 shadow-[var(--shadow-paper)]">
              <img
                src={scene.src}
                alt={scene.kicker}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="max-w-md">
              <p className="font-sans text-[11px] tracking-[0.4em] text-accent uppercase">
                {scene.kicker}
              </p>
              <p className="mt-4 font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
                {scene.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
