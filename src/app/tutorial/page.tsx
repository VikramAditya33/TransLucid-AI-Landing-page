import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TutorialPage() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-8 text-center" style={{ fontFamily: 'var(--font-pt-sans-narrow)' }}>
            Tutorial
          </h1>
          <p className="text-center text-black/70 dark:text-white/70 mb-12">
            Watch how Translucid AI works in action. Learn how to use the extension step by step.
          </p>

          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border border-black/10 bg-black shadow-lg">
            <video
              className="h-full w-full object-cover rounded-xl"
              src="/tutorial.mp4"
              controls
              preload="metadata"
              poster="/tutorial-poster.jpg"
            >
              <source src="/tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold mb-3">Step 1: Install the Extension</h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                Download and install Translucid AI from the Chrome Web Store. The extension will appear in your browser toolbar.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold mb-3">Step 2: Select Text</h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                Highlight any text on any website. The extension will automatically detect your selection and show the translate button.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold mb-3">Step 3: Get Translation</h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                Click the translate button to get an instant English translation of your selected text.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold mb-3">Step 4: Ask for Explanations</h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                Use the chat interface to ask follow-up questions and get detailed explanations of the content.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
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
