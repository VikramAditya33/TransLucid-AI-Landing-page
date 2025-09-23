"use client";

import Link from "next/link";
import { useState } from "react";

export interface NavbarProps {
  readonly brand?: string;
}

export default function Navbar({ brand = "Translucid AI" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {brand}
          </Link>

          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <Link href="/#about" className="hover:opacity-80 transition-opacity">About</Link>
            <Link href="/features" className="hover:opacity-80 transition-opacity">Features</Link>
            <Link href="/pricing" className="hover:opacity-80 transition-opacity">Pricing</Link>
            <Link href="/tutorial" className="hover:opacity-80 transition-opacity">Tutorial</Link>
          </nav>

          <div className="hidden sm:block">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-sm transition-colors hover:bg-black/80 dark:hover:bg-white/80"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 hover:bg-black/5"
          >
            <span className="i-ph:list text-xl" aria-hidden />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-black/10">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="grid gap-3 text-sm">
              <Link href="/#about" className="py-2">About</Link>
              <Link href="/features" className="py-2">Features</Link>
              <Link href="/pricing" className="py-2">Pricing</Link>
              <Link href="/tutorial" className="py-2">Tutorial</Link>
              <Link
                href="/#get-started"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


