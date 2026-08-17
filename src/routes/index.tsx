import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { chapters, SITE_NAME } from "@/data/story";
import { Opening } from "@/components/story/Opening";
import { HomeFlix } from "@/components/story/HomeFlix";
import { HowItStarted } from "@/components/story/HowItStarted";
import { Unsaid } from "@/components/story/Unsaid";
import { Motion } from "@/components/story/Motion";
import { Photos } from "@/components/story/Photos";
import { Reasons } from "@/components/story/Reasons";
import { Letters } from "@/components/story/Letters";
import { BeforeCredits } from "@/components/story/BeforeCredits";
import { Finale } from "@/components/story/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Chapter of You — Happy Birthday, Seniorrr" },
      {
        name: "description",
        content:
          "A private, cinematic ten-chapter birthday story written for one person: letters, memories, photos and 23 reasons.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "The Chapter of You" },
      {
        property: "og:description",
        content: "A ten-chapter birthday film made for one very special person.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [index, key]);

  const go = (i: number) => setIndex(Math.min(Math.max(i, 0), chapters.length - 1));

  const restart = () => {
    setKey((k) => k + 1);
    setIndex(0);
  };

  const screens = [
    <Opening key="opening" onNext={() => go(1)} />,
    <HomeFlix key="home" onNext={() => go(2)} />,
    <HowItStarted key="start" />,
    <Unsaid key="unsaid" />,
    <Motion key="motion" />,
    <Photos key="photos" />,
    <Reasons key="reasons" />,
    <Letters key="letters" />,
    <BeforeCredits key="credits" />,
    <Finale key="finale" onRestart={restart} />,
  ];

  const label = chapters[index]?.label ?? "";

  return (
    <main className="relative min-h-[100svh] bg-background">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-10">
        <span className="font-display text-lg tracking-[0.28em] text-primary">{SITE_NAME}</span>
        <span className="font-sans text-[11px] tracking-[0.4em] text-muted-foreground uppercase">
          {String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")} ·{" "}
          {label}
        </span>
      </header>

      <div key={`${key}-${index}`} className="animate-soft pt-14">
        {screens[index]}
      </div>

      {index > 0 && index < chapters.length - 1 && (
        <div className="sticky bottom-0 z-40 flex items-center justify-between gap-4 border-t border-border bg-background/85 px-5 py-4 backdrop-blur sm:px-10">
          <button
            onClick={() => go(index - 1)}
            className="font-sans text-[11px] tracking-[0.3em] text-muted-foreground uppercase"
          >
            ← back
          </button>
          <button
            onClick={() => go(index + 1)}
            className="rounded-sm bg-primary px-7 py-3 font-display text-base tracking-[0.25em] text-primary-foreground transition-transform hover:scale-105"
          >
            CONTINUE
          </button>
        </div>
      )}
    </main>
  );
}
