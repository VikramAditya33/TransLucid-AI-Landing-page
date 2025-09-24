"use client";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface HeroProps {
  readonly onCtaHref?: string;
}

const TAGLINES = [
    "Understand Every Word. Anywhere. Instantly.",
    "Translate smarter. Learn faster.",
    "Turn text into clarity on any page.",
    "Highlight. Translate. Done.",
];

export default function Hero({ onCtaHref = "#" }: HeroProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const full = TAGLINES[currentIndex];
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const pauseMs = 1600;

    if (phase === "typing") {
      if (typedText.length < full.length) {
        const t = setTimeout(() => setTypedText(full.slice(0, typedText.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), 100);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), pauseMs);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (typedText.length > 0) {
        const t = setTimeout(() => setTypedText(full.slice(0, typedText.length - 1)), deletingSpeed);
        return () => clearTimeout(t);
      }
      setCurrentIndex((currentIndex + 1) % TAGLINES.length);
      setPhase("typing");
    }
  }, [typedText, phase, currentIndex]);
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="relative mx-auto max-w-7xl h-full px-4 py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className={`${playfair.className} text-4xl font-black tracking-tight sm:text-5xl md:text-6xl`}>
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-[blink_1s_steps(2,start)_infinite] bg-current" aria-hidden />
            </h1>
            <p className="mt-4 max-w-xl text-base text-black/70 dark:text-white/70 sm:text-lg">
              A Chrome Extension that translates text to any language and provides AI-powered explanations for better understanding.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={onCtaHref}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-colors hover:bg-black/80 dark:hover:bg-white/80"
              >
                Install Free on Chrome
              </a>
              <a href="/features" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-sm backdrop-blur hover:bg-white/20">
                See It in Action
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl backdrop-blur-sm ring-1 ring-white/10">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
              <video className="h-full w-full object-cover rounded-xl" src="/tutorial.mp4" autoPlay loop muted playsInline preload="metadata">
                <source src="/tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


