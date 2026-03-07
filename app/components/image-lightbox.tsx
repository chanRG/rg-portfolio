"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import { useBlogImages } from "./blog-image";

const EASE = [0.32, 0.72, 0, 1] as const;

export function ImageLightbox() {
  const { images, lightboxState, closeLightbox } = useBlogImages();
  const { isOpen, index, sourceRect } = lightboxState;
  const [currentIndex, setCurrentIndex] = useState(index);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync currentIndex when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(index);
      document.body.classList.add("blog-lightbox-lock");
    } else {
      document.body.classList.remove("blog-lightbox-lock");
    }
    return () => {
      document.body.classList.remove("blog-lightbox-lock");
    };
  }, [isOpen, index]);

  const currentImage = images[currentIndex];
  const total = images.length;

  const goTo = useCallback(
    (newIndex: number) => {
      if (newIndex >= 0 && newIndex < total) {
        setCurrentIndex(newIndex);
      }
    },
    [total]
  );

  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeLightbox, goPrev, goNext]);

  // Swipe gesture
  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], direction: [dx], velocity: [vx], cancel }) => {
        if (Math.abs(mx) > 80 || vx > 0.5) {
          if (dx > 0 && currentIndex > 0) {
            goPrev();
            cancel();
          } else if (dx < 0 && currentIndex < total - 1) {
            goNext();
            cancel();
          }
        }
      },
    },
    {
      drag: {
        axis: "x",
        filterTaps: true,
        threshold: 10,
      },
    }
  );

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen) return;
    const toPreload = [currentIndex - 1, currentIndex + 1].filter(
      (i) => i >= 0 && i < total
    );
    toPreload.forEach((i) => {
      const img = new window.Image();
      img.src = images[i].src;
    });
  }, [isOpen, currentIndex, total, images]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998]" ref={containerRef}>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={closeLightbox}
          />

          {/* Content layer */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-[9999]"
            {...bind()}
            style={{ touchAction: "pan-y" }}
          >
            {/* Nav arrows */}
            {currentIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 font-mono text-xl text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors duration-200 p-4 z-10"
                aria-label="Previous image"
              >
                ←
              </button>
            )}
            {currentIndex < total - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 font-mono text-xl text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors duration-200 p-4 z-10"
                aria-label="Next image"
              >
                →
              </button>
            )}

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 font-mono text-sm text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors duration-200 p-2 z-10 tracking-widest"
              aria-label="Close lightbox"
            >
              ESC
            </button>

            {/* Image */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="relative max-w-[90vw] max-h-[80vh] md:max-h-[85vh]"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={1600}
                  height={1200}
                  quality={100}
                  unoptimized
                  priority
                  className="max-w-[90vw] max-h-[80vh] md:max-h-[85vh] w-auto h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption + Counter */}
            <motion.div
              className="mt-6 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            >
              {/* Accent line */}
              <div className="w-16 h-[1px] bg-[var(--accent)] opacity-50" />

              {/* Alt text as caption */}
              {currentImage.alt && (
                <p className="font-mono text-xs text-[var(--text-secondary)] tracking-wide text-center max-w-lg px-6">
                  {currentImage.alt}
                </p>
              )}

              {/* Counter */}
              <p className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-[0.3em] uppercase">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
