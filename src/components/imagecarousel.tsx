"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  interval?: number;
  width: number; // in pixels for Next.js Image optimization
  height: number; // in pixels for aspect ratio
  className?: string;
};

export default function ImageCarousel({
  images,
  interval = 3000, // default 3 seconds
  width = 200,
  height = 400,
  className = "",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Carousel Image ${i + 1}`}
          width={width}
          height={height}
          className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
