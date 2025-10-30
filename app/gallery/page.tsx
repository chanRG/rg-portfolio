"use client";

import { Metadata } from "next";
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
      <main className="mx-auto max-w-6xl px-0 sm:px-0 py-0 sm:py-0">
        <div 
          className="w-screen max-w-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] -mt-32 -mb-0 flex items-center justify-center"
          style={{ height: "100vh", background: "transparent" }}
        >
          <div className="text-gray-400">Loading gallery...</div>
        </div>
      </main>
    );
  }

  // Adjust gallery settings for mobile
  const galleryHeight = isMobile ? "100vh" : "100vh";
  const fit = isMobile ? 0.35 : 0.5; // Smaller fit on mobile to make dome smaller
  const minRadius = isMobile ? 400 : 600; // Smaller minimum radius on mobile

  return (
    <main className="mx-auto max-w-6xl px-0 sm:px-0 py-0 sm:py-0" style={{ touchAction: isMobile ? "none" : "auto" }}>
      <NoScroll />
      <div
        className="gallery-page w-screen max-w-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] -mt-32 -mb-0"
        style={{ 
          height: galleryHeight, 
          overflow: "hidden",
          touchAction: "none",
          ["--viewer-pad" as any]: "16px", 
          background: "transparent" 
        }}
      >
        <DomeGallery 
          images={displayPhotos} 
          grayscale={false} 
          overlayBlurColor="transparent"
          segments={segments}
          fit={fit}
          minRadius={minRadius}
        />
      </div>
    </main>
  );
}


