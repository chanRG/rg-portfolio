"use client";

import { useEffect } from "react";

export default function NoScroll() {
  useEffect(() => {
    document.body.classList.add("dg-scroll-lock", "gallery-route");
    return () => {
      document.body.classList.remove("dg-scroll-lock", "gallery-route");
    };
  }, []);
  return null;
}


