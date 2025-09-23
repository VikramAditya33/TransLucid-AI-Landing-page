export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-black/10">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-0 sm:pt-20 sm:pb-0">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing (Coming Soon)
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Pricing will be available soon. Authentication will be required before credits are given.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm dark:bg-black/20"
            >
              <div className="text-sm uppercase tracking-wide text-black/60 dark:text-white/60">
                Plan {i + 1}
              </div>
              <div className="mt-4 text-3xl font-semibold">$—</div>
              <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>Placeholder feature</li>
                <li>Placeholder feature</li>
                <li>Placeholder feature</li>
              </ul>
              <div className="mt-6">
                <button className="inline-flex w-full items-center justify-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5">
                  Coming soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


