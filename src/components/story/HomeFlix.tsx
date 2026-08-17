import { media, traits, SITE_NAME } from "@/data/story";

const rows = [
  {
    title: "Continue Watching for Seniorrr",
    items: [
      { title: "How It Started", meta: "S1:E1 · 4m" },
      { title: "Things I Never Said", meta: "S1:E2 · 3m" },
      { title: "Memories In Motion", meta: "S1:E3 · 2m" },
      { title: "23 Reasons", meta: "S1:E4 · 6m" },
    ],
  },
];

export function HomeFlix({ onNext }: { onNext: () => void }) {
  return (
    <section className="film-grain min-h-[100svh] pb-24">
      <div className="relative h-[72svh] min-h-[420px] w-full overflow-hidden">
        <img
          src={media.moody}
          alt="Seniorrr standing under a street lamp at dusk"
          className="h-full w-full object-cover object-top"
        />
        <div className="cinema-fade absolute inset-0" />
        <div className="absolute bottom-8 left-0 w-full px-6 sm:px-12">
          <p className="font-sans text-[11px] tracking-[0.5em] text-accent uppercase">
            A private documentary · one viewer only
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.92] text-foreground sm:text-7xl">
            {SITE_NAME}
          </h2>
          <p className="mt-4 max-w-xl font-serif text-lg text-muted-foreground">
            Ten chapters. A handful of photos. One person who made all of them worth keeping.
          </p>
          <button
            onClick={onNext}
            className="mt-6 rounded-sm bg-primary px-7 py-3 font-display text-base tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
          >
            ▶ PLAY
          </button>
        </div>
      </div>

      {rows.map((row) => (
        <div key={row.title} className="mt-10 px-6 sm:px-12">
          <h3 className="font-display text-2xl tracking-wide text-foreground">{row.title}</h3>
          <div className="mt-4 flex snap-x gap-4 overflow-x-auto pb-4">
            {row.items.map((item, i) => (
              <div
                key={item.title}
                className="min-w-[220px] snap-start rounded-sm border border-border bg-card p-5 transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-4xl text-primary">{`0${i + 1}`}</span>
                <p className="mt-2 font-serif text-xl text-foreground">{item.title}</p>
                <p className="mt-1 font-sans text-xs tracking-widest text-muted-foreground uppercase">
                  {item.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-6 px-6 sm:px-12">
        <h3 className="font-display text-2xl tracking-wide text-foreground">Because You Are…</h3>
        <div className="mt-4 flex snap-x gap-4 overflow-x-auto pb-4">
          {traits.map((t) => (
            <div
              key={t.title}
              className="min-w-[240px] snap-start rounded-sm border border-accent/30 bg-[image:var(--gradient-ember)]/10 p-5"
            >
              <p className="font-display text-2xl tracking-wide text-accent">{t.title}</p>
              <p className="mt-2 font-serif text-lg leading-snug text-foreground/85">{t.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
