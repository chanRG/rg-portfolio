"use client";

import Balancer from "react-wrap-balancer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

export function BlogCaption({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="blog-caption"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      <div className="blog-caption-bar" aria-hidden />
      <span className="font-mono text-xs tracking-wide text-[var(--text-secondary)] leading-relaxed">
        <Balancer>
          <span className="[&>a]:post-link">{children}</span>
        </Balancer>
      </span>
    </motion.div>
  );
}
