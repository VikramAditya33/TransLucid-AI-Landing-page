import { Playfair_Display } from "next/font/google";
import Silk from "@/components/Silk";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface HeroProps {
  readonly onCtaHref?: string;
}

export default function Hero({ onCtaHref = "#" }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="relative mx-auto max-w-7xl h-full px-4 py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className={`${playfair.className} text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl`}>
              Translate. Explain. Understand.
            </h1>
            <p className="mt-4 max-w-xl text-base text-black/70 dark:text-white/70 sm:text-lg">
              A Chrome Extension that not only translates any text into English but also explains it for better clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={onCtaHref}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-colors hover:bg-black/80 dark:hover:bg-white/80"
              >
                Add to Chrome
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-black/10 px-6 py-3 text-sm font-medium hover:bg-black/5">
                Explore features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-xl border border-black/10 bg-black/50 backdrop-blur-sm">
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


