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
      className="inline-flex items-center justify-center text-lg transition-opacity duration-300 hover:opacity-90"
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
      className="mb-4 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4] lg:mt-24"
    >
      <small className="flex flex-row items-center justify-between gap-2">
        <span className="whitespace-nowrap text-xs sm:text-sm">
          <time>© {YEAR}</time>{" "}
          <span className="no-underline">{metaData.title}</span>
        </span>
        <SocialLinks />
      </small>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </footer>
  );
}
