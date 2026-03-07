"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const activeHref = useMemo(() => {
    if (!pathname) return undefined;
    const matched = navItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );
    return matched?.href ?? pathname;
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const updateNavMetrics = () => {
      const el = navRef.current;
      if (!el) return;
      const styles = window.getComputedStyle(el);
      const marginTop = parseFloat(styles.marginTop) || 0;
      const marginBottom = parseFloat(styles.marginBottom) || 0;
      const height = el.offsetHeight + marginTop + marginBottom;
      root.style.setProperty("--nav-height", `${Math.round(height)}px`);
    };

    updateNavMetrics();

    const target = navRef.current;
    const observer = target ? new ResizeObserver(updateNavMetrics) : null;
    if (observer && target) {
      observer.observe(target);
    }

    window.addEventListener("resize", updateNavMetrics);

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
      window.removeEventListener("resize", updateNavMetrics);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-subtle)]"
      id="site-navbar"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-4">
        <div className="flex items-center justify-center gap-8 py-4">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer pb-1 ${
                  isActive
                    ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b-2 border-transparent"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
