
export interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

export interface FeaturesProps {
  readonly items?: ReadonlyArray<FeatureItem>;
}

const defaultItems: ReadonlyArray<FeatureItem> = [
  {
    title: "Instant Translation into English",
    description:
      "Select any text on any website and get instant, accurate English translations. No more copy-pasting or switching tabs, just highlight and translate.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Explanations",
    description:
      "Don't just translate, understand. Get clear, simplified explanations that break down complex concepts into easy-to-grasp insights.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Interactive Chat Interface",
    description:
      "Ask follow-up questions, dive deeper into topics, and have meaningful conversations with your content. Get context-aware insights tailored to your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Context-Aware & Reliable",
    description:
      "Every response is grounded in your selected text. No hallucinations, no generic answers, just accurate, context-specific information you can trust.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Features({ items = defaultItems }: FeaturesProps) {
  return (
    <section id="features" className="relative overflow-hidden border-t border-black/10">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
           <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
             Features
           </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Everything you need to translate and truly understand content.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-700 ease-out hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-3 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:border-blue-400/30 dark:hover:shadow-blue-500/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-2 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-700 ease-out">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-700 ease-out group-hover:scale-102">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 leading-relaxed group-hover:text-black/90 dark:group-hover:text-white/90 transition-all duration-700 ease-out">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


