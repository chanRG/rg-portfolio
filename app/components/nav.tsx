"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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

  const activeHref = useMemo(() => {
    if (!pathname) return undefined;
    const matched = navItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );
    return matched?.href ?? pathname;
  }, [pathname]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      style={{ transition: "all 0.3s ease" }}
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
        </div>
      </div>
    </motion.nav>
  );
}