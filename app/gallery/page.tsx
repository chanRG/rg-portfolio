"use client";

import { useEffect, useState, useMemo } from "react";
import DomeGallery from "../components/dome-gallery";
import NoScroll from "./no-scroll";
import photosList from "./photos-list.json";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function GalleryPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Randomize photos on each page load
  const displayPhotos = useMemo(() => shuffleArray(photosList), []);

  // Reduce segments (tiles shown) on mobile for better performance
  const segments = isMobile ? 20 : 35;

  if (!isClient) {
    return (
      <>
        <NoScroll />
        <div
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          style={{
            background: "transparent",
          }}
        >
          <div className="text-gray-400">Loading gallery...</div>
        </div>
      </>
    );
  }

  // Adjust gallery settings for mobile
  const fit = isMobile ? 0.35 : 0.5;
  const minRadius = isMobile ? 400 : 600;
  const viewerPad = isMobile ? "12px" : "20px";

  return (
    <>
      <NoScroll />
      <div
        className="fixed inset-0 flex items-center justify-center overflow-hidden"
        style={{
          touchAction: "none",
          ["--viewer-pad" as any]: viewerPad,
          background: "transparent",
        }}
      >
        <DomeGallery
          images={displayPhotos}
          grayscale={false}
          overlayBlurColor="transparent"
          segments={segments}
          fit={fit}
          minRadius={minRadius}
          padFactor={isMobile ? 0.2 : 0.25}
          imageBorderRadius="0px"
          openedImageBorderRadius="0px"
        />
      </div>
    </>
  );
}


