"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <h1
        className="text-4xl font-bold mb-4 text-[var(--text-primary)] tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Something went wrong
      </h1>
      <p className="text-[var(--text-secondary)] font-mono mb-6">
        An unexpected error occurred. Try refreshing the page.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 border border-[var(--accent)] text-[var(--accent)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 cursor-pointer"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Try again
      </button>
    </section>
  );
}
