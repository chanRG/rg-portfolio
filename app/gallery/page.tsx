"use client";

import { useEffect, useState } from "react";
import DomeGallery from "../components/dome-gallery";
import NoScroll from "./no-scroll";
import photosList from "./photos-list.json";

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

  // Show all photos on both mobile and desktop
  const displayPhotos = photosList;

  // Reduce segments (tiles shown) on mobile for better performance
  const segments = isMobile ? 20 : 35;

  if (!isClient) {
    return (
      <>
        <NoScroll />
        <div
          className="gallery-container relative -mx-6 flex items-center justify-center overflow-hidden sm:-mx-4 md:mx-0"
          style={{
            height: "calc(100vh - var(--nav-height, 80px) - var(--footer-height, 100px) - 64px)",
            minHeight: "400px",
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
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
  const verticalBuffer = isMobile ? 64 : 64;

  return (
    <>
      <NoScroll />
      <div
        className="gallery-container relative -mx-6 flex items-center justify-center overflow-hidden sm:-mx-4 md:mx-0"
        style={{
          height: `calc(100vh - var(--nav-height, 80px) - var(--footer-height, 100px) - ${verticalBuffer}px)`,
          minHeight: isMobile ? "400px" : "500px",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          overflow: "hidden",
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
        />
      </div>
    </>
  );
}


