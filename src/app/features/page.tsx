import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    id: 1,
    title: "Instant Translation in 50+ Languages",
    description: "Highlight. Translate. Done. Get accurate translations in 50+ languages without copy-pasting or switching tabs.",
    videoSrc: "/feature_1.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Beyond Translation. Real Understanding.",
    description: "AI explains the meaning, context, and nuance — so you don’t just read words, you get the message.",
    videoSrc: "/feature_2.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ask. Clarify. Go Deeper.",
    description: "Ask follow‑ups and steer the conversation. The chat keeps your selection as context, so every answer moves you forward.",
    videoSrc: "/feature_3.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Grounded in Your Context. Trustworthy by Design.",
    description: "Every response stays anchored to your selection — no fluff, no hallucinations. Precise, source‑aware answers you can trust.",
    videoSrc: "/feature_4.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const metadata = {
  title: "Features | TransLucid AI",
  description:
    "Translate smarter and understand faster. See TransLucid AI’s 50+ languages, context-aware AI explanations, chat and reliability.",
};

export default function FeaturesPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Translate better. Understand faster.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            See each capability in action. Built for clarity, speed, and real comprehension.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-300">
                    {feature.icon}
                  </div>
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">{feature.title}</h2>
                </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="flex-1">
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl transition hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30">
                  <video
                    className="h-full w-full object-cover"
                    src={feature.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={feature.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm dark:bg-black/20">
            <h3 className="text-xl font-semibold mb-4">Ready to Experience These Features?</h3>
            <p className="text-black/70 dark:text-white/70 mb-6">
              Install Translucid AI and start translating and understanding content like never before.
            </p>
            <Link
              href="/#get-started"
              className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-colors hover:bg-black/80 dark:hover:bg-white/80"
            >
              Get Started with Translucid AI
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
