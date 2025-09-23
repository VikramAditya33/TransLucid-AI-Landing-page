
export interface TutorialProps {
  readonly videoSrc?: string;
  readonly posterSrc?: string;
}

export default function Tutorial({ videoSrc = "/tutorial.mp4", posterSrc }: TutorialProps) {
  return (
    <section id="tutorial" className="relative overflow-hidden border-t border-black/10">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tutorial
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Watch how Translucid AI works in action.
          </p>
        </div>

        <div className="mt-10">
          <div className="mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl border border-black/10 bg-black">
            <video
              className="h-full w-full object-cover rounded-xl"
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}


