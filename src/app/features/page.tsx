import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    id: 1,
    title: "Instant Translation in 50+ Languages",
    description: "Select any text on any website and get instant, accurate translations in 50+ languages. No more copy-pasting or switching tabs, just highlight and translate.",
    videoSrc: "/feature_1.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "AI-Powered Explanations",
    description: "Don't just translate, understand. Get clear, simplified explanations that break down complex concepts into easy-to-grasp insights.",
    videoSrc: "/feature_2.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Interactive Chat Interface",
    description: "Ask follow-up questions, dive deeper into topics, and have meaningful conversations with your content. Get context-aware insights tailored to your needs.",
    videoSrc: "/feature_3.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Context-Aware & Reliable",
    description: "Every response is grounded in your selected text. No hallucinations, no generic answers, just accurate, context-specific information you can trust.",
    videoSrc: "/feature_4.mp4",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-8" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
            Features
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70">
            Everything you need to translate and truly understand content. See each feature in action with detailed demonstrations.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{feature.title}</h2>
                </div>
                <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Video Side */}
              <div className="flex-1">
                <div className="aspect-video overflow-hidden rounded-xl border border-black/10 bg-black shadow-lg">
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
            <a
              href="/#get-started"
              className="inline-flex items-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-colors hover:bg-black/80 dark:hover:bg-white/80"
            >
              Get Started with Translucid AI
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
