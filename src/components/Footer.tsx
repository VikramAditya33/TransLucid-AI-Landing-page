export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </nav>
          <div className="text-xs text-black/60 dark:text-white/60">
            Translucid AI © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


