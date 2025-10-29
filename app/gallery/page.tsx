import { Metadata } from "next";
import DomeGallery from "../components/dome-gallery";
import NoScroll from "./no-scroll";
import photosList from "./photos-list.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A 3D dome-style photo gallery.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-0 sm:px-0 py-0 sm:py-0">
      <NoScroll />
      <div
        className="gallery-page w-screen max-w-none relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] -mt-32 -mb-0"
        style={{ height: "100vh", ["--viewer-pad" as any]: "16px", background: "transparent" }}
      >
        <DomeGallery images={photosList} grayscale={false} overlayBlurColor="transparent" />
      </div>
    </main>
  );
}


