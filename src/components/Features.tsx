
export interface FeatureItem {
  readonly title: string;
  readonly description: string;
}

export interface FeaturesProps {
  readonly items?: ReadonlyArray<FeatureItem>;
}

const defaultItems: ReadonlyArray<FeatureItem> = [
  {
    title: "Instant Translation into English",
    description:
      "Translate selected text into clear English in a click, anywhere on the web.",
  },
  {
    title: "Clear Explanations & Simplifications",
    description:
      "Get simplified explanations that help you quickly grasp complex ideas.",
  },
  {
    title: "Chat with Paragraphs for Deeper Understanding",
    description:
      "Ask follow-ups and chat with content for context-aware insights.",
  },
  {
    title: "Strict Context-Only Responses",
    description:
      "Responses stay grounded in the selected text—no hallucinations or filler.",
  },
];

export default function Features({ items = defaultItems }: FeaturesProps) {
  return (
    <section id="features" className="relative overflow-hidden border-t border-black/10">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
              className="flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:bg-black/20"
            >
              <div className="h-10 w-10 rounded-md bg-black/5 dark:bg-white/10" />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


