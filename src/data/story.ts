import moodyPhoto from "@/assets/hero.jpg.asset.json";
import angelPhoto from "@/assets/Snapchat-1890181356_jpg.jpg.asset.json";
import playfulPhoto from "@/assets/Snapchat-1302491271_jpg.jpg.asset.json";
import bikePhoto from "@/assets/bike.jpg.asset.json";
import letterOne from "@/assets/letter1.jpg.asset.json";
import letterTwo from "@/assets/letter-universe.jpg.asset.json";
import reelVideo from "@/assets/reel.mp4.asset.json";

export const media = {
  moody: moodyPhoto.url,
  angel: angelPhoto.url,
  playful: playfulPhoto.url,
  bike: bikePhoto.url,
  letterOne: letterOne.url,
  letterTwo: letterTwo.url,
  reel: reelVideo.url,
};

export const SITE_NAME = "THE CHAPTER OF YOU";
export const BIRTH_DATE = "September 14";

export const chapters = [
  { id: "opening", label: "Opening" },
  { id: "home", label: "The Chapter of You" },
  { id: "start", label: "How It Started" },
  { id: "unsaid", label: "Things I Never Said" },
  { id: "motion", label: "Memories In Motion" },
  { id: "photos", label: "The Few We Kept" },
  { id: "reasons", label: "23 Reasons" },
  { id: "letters", label: "The Letters" },
  { id: "credits", label: "Before The Credits" },
  { id: "finale", label: "The Finale" },
];

export const timeline = [
  {
    year: "Scene 01",
    title: "The day you became 'Seniorrr'",
    note: "One ordinary day, one ordinary hello — and somehow you became the person my day started looking for.",
  },
  {
    year: "Scene 02",
    title: "The first real conversation",
    note: "It wasn't planned, it wasn't special on paper. But I still remember how easy it felt to talk to you.",
  },
  {
    year: "Scene 03",
    title: "The dance floor",
    note: "Then I watched you dance. You didn't just move — you owned the whole room. I don't think anyone else was on that floor for me after that.",
  },
  {
    year: "Scene 04",
    title: "The small everyday things",
    note: "A message. A laugh. A 'seniorrr'. Tiny things that never felt tiny to me.",
  },
  {
    year: "Scene 05",
    title: "The distance",
    note: "And then days became weeks. I kept the memories running on loop, like a film I never wanted to end.",
  },
];

export const unsaidNotes = [
  "I've missed you. More than I ever let you see.",
  "Some days I open our chat just to read the old messages again.",
  "I'm sorry for every mistake I made. For being childish, for overdoing it, for the moments I made harder than they had to be.",
  "If I hurt you even a little, I carry that. Please forgive me for all of it.",
  "I never wanted anything from you except the chance to admire you from wherever I was standing.",
  "And even after everything — I'm still glad it was you.",
];

export const traits = [
  { title: "The Dancer", copy: "The way you dance is unfair. You make the whole floor look like it was built for you." },
  { title: "The Smile", copy: "Your smile does more work than you'll ever know." },
  { title: "The Calm", copy: "Somehow you make chaotic days feel survivable." },
  { title: "The Gentle One", copy: "Kind in the quiet, unnoticed ways." },
];

export const reasons: { n: string; title: string; text: string }[] = [
  { n: "01", title: "Your Smile", text: "Because somehow your smile can make an ordinary moment feel better." },
  { n: "02", title: "The Way You Care", text: "You care about people in ways you don't always realize." },
  { n: "03", title: "Your Personality", text: "There is something about you that is completely and uniquely you." },
  { n: "04", title: "The Way You Listen", text: "Sometimes being heard is all someone needs, and you know how to do that." },
  { n: "05", title: "Your Kindness", text: "The little things you do say more about you than you probably know." },
  { n: "06", title: "Our Random Conversations", text: "Some of the most memorable moments were never planned." },
  { n: "07", title: "Your Sense of Humor", text: "Because somehow even the most random conversations become funny with you." },
  { n: "08", title: "Your Patience", text: "You've handled my chaos more times than you probably should have." },
  { n: "09", title: "Your Presence", text: "Sometimes just having you around makes a day better." },
  { n: "10", title: "The Little Things", text: "It's always the tiny things that somehow stay in my memory." },
  { n: "11", title: "Your Advice", text: "Even when I don't say it, some of your words stay with me." },
  { n: "12", title: "The Memories", text: "There are moments with you that I know I'll remember for a long time." },
  { n: "13", title: "Your Laugh", text: "It's one of those things that's impossible not to notice." },
  { n: "14", title: "The Comfort", text: "Talking to you can make things feel a little easier." },
  { n: "15", title: "Your Randomness", text: "Because life would definitely be less interesting without it." },
  { n: "16", title: "The Way You Make People Feel", text: "You have a way of making people feel noticed and appreciated." },
  { n: "17", title: "The Laughs We Share", text: "Some memories are permanently attached to laughter." },
  { n: "18", title: "Your Friendship", text: "I'm genuinely grateful that I got to know you." },
  { n: "19", title: "The Small Memories", text: "Sometimes one tiny moment can become someone's favorite memory." },
  { n: "20", title: "The Person You Are Becoming", text: "Watching you grow and move forward is something worth being proud of." },
  { n: "21", title: "The Impact You Don't Notice", text: "You may not realize it, but you've made a difference in my life." },
  { n: "22", title: "Because You're Special To Me", text: "There are some people who simply become important without even trying." },
  { n: "23", title: "Simply Because You're You", text: "After all these reasons, I still don't think I could properly explain it. You're just you — and somehow, that's more than enough." },
];

export const photoScenes = [
  {
    src: media.angel,
    kicker: "My favourite shirt on you",
    caption:
      "This one. This outfit. You look like a mini angel of life in it — and that smile of yours means more than I can put into words.",
  },
  {
    src: media.bike,
    kicker: "Effortless",
    caption:
      "Some people try to look this good. You just show up, and the frame does the rest.",
  },
  {
    src: media.playful,
    kicker: "The silly side",
    caption:
      "Proof that the person everyone admires is also the person who can be the most adorably ridiculous.",
  },
];

export const creditNotes = [
  "I hope you dance a lot this year — the world is better when you do.",
  "I hope someone loves you the way you deserve, loudly and gently at once.",
  "I hope you never lose that smile, not even on the heavy days.",
  "And I hope, somewhere in your good days, a small part of you remembers me.",
];

export const finalMessage = `Happy Birthday, Seniorrr! ❤️

I hope this year brings you happiness, success, peace, and so many beautiful moments.

Thank you for being someone I could admire, look up to, laugh with, and make memories with.

I may not have hundreds of photos or a thousand memories to put here, but every little moment I do have is special to me.

I hope you always keep that smile, keep being the person you are, and keep chasing everything you dream about.

You deserve a beautiful year ahead.

Happy Birthday once again, Seniorrr. ❤️

— With lots of love and wishes`;
