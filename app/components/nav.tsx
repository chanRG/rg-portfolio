"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";
import { PillNav, type PillNavItem } from "@/components/PillNav";

const navItems: PillNavItem[] = [
  { href: "/", label: "About me" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeHref = useMemo(() => {
    if (!pathname) return undefined;
    const matched = navItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );
    return matched?.href ?? pathname;
  }, [pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-white/95 dark:bg-neutral-950/90 border-b border-neutral-200/60 dark:border-neutral-800/70 backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={{ transition: isScrolled ? "none" : "all 0.3s ease" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-center">
          <PillNav
            logo="/logo.png"
            logoAlt={metaData.title}
            logoHref="/"
            items={navItems}
            activeHref={activeHref}
            className="w-full md:w-auto"
            baseColor="var(--pill-base)"
            pillColor="var(--pill-fill)"
            hoveredPillTextColor="var(--pill-hover-text)"
            pillTextColor="var(--pill-text)"
          />
          <div className="md:hidden flex justify-end">
            <ThemeSwitch />
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-[60]">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}