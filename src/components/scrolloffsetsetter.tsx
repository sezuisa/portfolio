"use client";

import { useEffect } from "react";

export default function ScrollOffsetSetter() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.2; // adjust intensity
      document.documentElement.style.setProperty(
        "--scroll-offset",
        `${offset}px`,
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
