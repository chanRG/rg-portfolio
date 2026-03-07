"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ─── Context ─── */

interface ImageEntry {
  src: string;
  alt: string;
}

interface BlogImageContextType {
  images: ImageEntry[];
  registerImage: (img: ImageEntry) => number;
  openLightbox: (index: number, rect: DOMRect) => void;
  lightboxState: {
    isOpen: boolean;
    index: number;
    sourceRect: DOMRect | null;
  };
  closeLightbox: () => void;
}

const BlogImageContext = createContext<BlogImageContextType>({
  images: [],
  registerImage: () => 0,
  openLightbox: () => {},
  lightboxState: { isOpen: false, index: 0, sourceRect: null },
  closeLightbox: () => {},
});

export function useBlogImages() {
  return useContext(BlogImageContext);
}

export function BlogImageProvider({ children }: { children: React.ReactNode }) {
  const imagesRef = useRef<ImageEntry[]>([]);
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    index: number;
    sourceRect: DOMRect | null;
  }>({ isOpen: false, index: 0, sourceRect: null });

  const registerImage = useCallback((img: ImageEntry) => {
    // Deduplicate by src
    const existing = imagesRef.current.findIndex((i) => i.src === img.src);
    if (existing !== -1) return existing;
    const index = imagesRef.current.length;
    imagesRef.current = [...imagesRef.current, img];
    setImages([...imagesRef.current]);
    return index;
  }, []);

  const openLightbox = useCallback((index: number, rect: DOMRect) => {
    setLightboxState({ isOpen: true, index, sourceRect: rect });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <BlogImageContext.Provider
      value={{ images, registerImage, openLightbox, lightboxState, closeLightbox }}
    >
      {children}
    </BlogImageContext.Provider>
  );
}

/* ─── BlogImage Component ─── */

interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export function BlogImage({ src, alt, width, height, priority }: BlogImageProps) {
  const { images, registerImage, openLightbox } = useBlogImages();
  const containerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number>(-1);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);

  // Register on mount
  useEffect(() => {
    indexRef.current = registerImage({ src, alt });
  }, [src, alt, registerImage]);

  const totalImages = images.length;
  const displayIndex = indexRef.current >= 0 ? indexRef.current + 1 : 1;

  // Detect actual orientation on image load
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const realRatio = img.naturalWidth / img.naturalHeight;
    setIsLandscape(realRatio >= 1.2);
  };

  const isFullBleed = isLandscape === true;

  const handleClick = () => {
    if (imgRef.current && indexRef.current >= 0) {
      const rect = imgRef.current.getBoundingClientRect();
      openLightbox(indexRef.current, rect);
    }
  };

  return (
    <motion.figure
      ref={containerRef}
      data-blog-image
      className={`relative my-10 ${isFullBleed ? "blog-image-full-bleed" : ""}`}
      initial={{ opacity: 0, y: 40, filter: "grayscale(1)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "grayscale(0)" }
          : { opacity: 0, y: 40, filter: "grayscale(1)" }
      }
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={imgRef}
        className="blog-image-frame relative cursor-zoom-in group overflow-hidden"
        onClick={handleClick}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
          unoptimized
          priority={priority}
          onLoad={handleImageLoad}
          className={isFullBleed
            ? "block w-full h-auto"
            : "block max-w-full max-h-[75vh] w-auto h-auto mx-auto"
          }
        />

        {/* Image counter badge */}
        <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-[var(--text-tertiary)] bg-[var(--bg-primary)]/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          {String(displayIndex).padStart(2, "0")} / {String(totalImages || displayIndex).padStart(2, "0")}
        </div>
      </div>
    </motion.figure>
  );
}
