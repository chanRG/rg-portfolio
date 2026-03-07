import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <section>
      <h1
        className="text-6xl font-bold mb-6 tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="text-[var(--accent)]">404</span>
      </h1>
      <p className="text-[var(--text-secondary)] font-mono">
        Page not found. The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </section>
  );
}
