"use client";

import Image from "next/image";

type BroadImageProps = {
  src: string;
  alt?: string;
  maxWidth?: number; // in pixels
};

export default function BroadImage({
  src,
  alt = "Screen-width image",
  maxWidth = 1600,
}: BroadImageProps) {
  const maxWidthClassName = `max-w-[${maxWidth}px]`;

  return (
    <div className="relative w-[100vw] overflow-x-hidden max-w-none">
      {/* Organic Wavy Top */}
      <svg
        viewBox="0 0 1440 60"
        className="absolute top-0 left-0 w-full h-auto z-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 360,0 480,30 C600,60 720,10 840,30 C960,50 1080,20 1200,30 C1320,40 1440,20 1440,20 L1440,0 L0,0 Z"
          fill="#322824"
        />
      </svg>

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={maxWidth}
        height={600}
        priority
        className={`w-full mx-auto relative z-0 ${maxWidthClassName}`}
      />

      {/* Organic Wavy Bottom */}
      <svg
        viewBox="0 0 1440 60"
        className="absolute bottom-0 left-0 w-full h-auto z-10 rotate-180"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 360,0 480,30 C600,60 720,10 840,30 C960,50 1080,20 1200,30 C1320,40 1440,20 1440,20 L1440,0 L0,0 Z"
          fill="#322824"
        />
      </svg>
    </div>
  );
}
