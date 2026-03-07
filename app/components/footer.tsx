"use client";

import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ComponentType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social link"
      className="inline-flex items-center justify-center text-lg text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors duration-300"
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex shrink-0 gap-2 sm:gap-3.5">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const updateFooterMetrics = () => {
      const el = footerRef.current;
      if (!el) return;
      const styles = window.getComputedStyle(el);
      const marginTop = parseFloat(styles.marginTop) || 0;
      const marginBottom = parseFloat(styles.marginBottom) || 0;
      const height = el.offsetHeight + marginTop + marginBottom;
      root.style.setProperty("--footer-height", `${Math.round(height)}px`);
    };

    updateFooterMetrics();

    const target = footerRef.current;
    const observer = target ? new ResizeObserver(updateFooterMetrics) : null;
    if (observer && target) {
      observer.observe(target);
    }

    window.addEventListener("resize", updateFooterMetrics);

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
      window.removeEventListener("resize", updateFooterMetrics);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="site-footer"
      className="mb-4 mt-16 pt-8 border-t border-[var(--border-subtle)] text-[var(--text-tertiary)] lg:mt-24"
    >
      <small className="flex flex-row items-center justify-between gap-2">
        <span className="whitespace-nowrap text-xs font-mono tracking-wider">
          <time>&copy; {YEAR}</time>{" "}
          <span className="text-[var(--text-secondary)]">{metaData.name}</span>
        </span>
        <SocialLinks />
      </small>
    </footer>
  );
}
