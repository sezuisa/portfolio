"use client";

import { ReactNode, useId, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type StaticBlobProps = {
  src?: string;
  alt?: string;
  blobType?: number;
  fillColor?: string;
  hoverEffect?: boolean;
  className?: string;
  children?: ReactNode; // Allow overlaying content
};

const blobPaths = [
  "M109.215 0.375734C140.806 -2.2677 175.393 8.96731 192.519 36.2912C208.465 61.7312 195.441 93.7118 185.578 122.207C177.56 145.368 164.105 164.759 143.623 177.549C119.569 192.57 92.3822 206.085 65.6032 197.128C34.7872 186.82 6.01997 162.487 0.667856 129.732C-4.47128 98.2809 21.0974 73.1188 41.3888 48.9372C60.3066 26.3928 80.2914 2.79592 109.215 0.375734Z",
  "M98.6335 1.87519C132.45 -1.10581 173.653 -3.82597 193.085 21.3779C212.082 46.0182 186.747 76.8699 178.966 106.072C171.399 134.471 176.118 168.45 149.49 184.989C119.472 203.632 77.5089 204.911 45.7378 188.818C15.6403 173.572 5.07392 140.638 0.817932 109.68C-2.84638 83.0263 5.91836 56.9805 24.7585 36.2164C43.2362 15.8516 69.6404 4.43102 98.6335 1.87519Z",
  "M119.611 2.53871C145.4 5.58345 170.318 15.1943 185.777 36.5973C200.615 57.1418 203.333 84.1815 196.299 108.715C189.785 131.434 170.052 144.311 151.043 157.736C124.692 176.345 99.9597 206.85 68.9951 198.621C34.0772 189.34 9.9539 154.405 2.35492 118.218C-5.1431 82.5107 5.48009 43.6536 31.1384 18.3404C53.8431 -4.05894 88.3238 -1.15513 119.611 2.53871Z",
  "M102.646 5.07456C131.863 0.624508 166.208 -7.45568 186.226 15.5829C206.986 39.4751 200.216 76.7153 192.146 108.078C184.599 137.405 169.046 162.988 144.343 178.348C116.578 195.611 83.2805 207.801 53.8106 194.092C23.3863 179.939 2.17133 146.452 0.091772 111.242C-1.72419 80.4953 23.7713 58.6654 44.5421 37.1627C60.9892 20.1362 79.912 8.53716 102.646 5.07456Z",
  "M99.8404 1.35579C130.772 1.39326 166.493 -6.78688 186.616 18.0501C207.135 43.3755 200.476 81.4774 190.343 113.057C181.59 140.336 160.681 158.549 136.977 172.751C110.265 188.755 80.3286 208.822 52.193 195.827C23.4149 182.535 15.4374 145.642 8.28451 113.311C1.06261 80.6684 -7.92327 43.1984 12.815 17.8395C33.0944 -6.95839 68.8348 1.31822 99.8404 1.35579Z",
  "M113.86 0.0688416C136.847 1.26595 154.041 20.0566 169.108 39.3616C185.317 60.13 202.677 82.7241 199.655 109.995C196.318 140.104 177.201 164.531 153.551 179.736C127.137 196.717 96.2319 206.615 67.5905 194.899C35.5948 181.812 3.96222 154.661 0.264862 117.038C-3.20895 81.6897 28.2178 57.4315 51.7044 33.2474C69.4364 14.9887 89.6989 -1.18945 113.86 0.0688416Z",
];

export default function StaticBlob({
  src,
  alt = "Blob",
  blobType = 0,
  fillColor = "#f87171",
  hoverEffect = false,
  className = "",
  children,
}: StaticBlobProps) {
  const id = useId();
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [hovered, setHovered] = useState(false);
  const currentIndex = useRef(blobType % blobPaths.length);

  if (hoverEffect) {
    const animateToNext = () => {
      const nextIndex = (currentIndex.current + 1) % blobPaths.length;
      controls.start({
        d: blobPaths[nextIndex],
        transition: { duration: 1, ease: "easeInOut" },
      });
      currentIndex.current = nextIndex;
    };

    useEffect(() => {
      if (hovered) {
        animateToNext(); // start immediately
        intervalRef.current = setInterval(() => {
          animateToNext();
        }, 1000); // every transition duration
      } else {
        clearInterval(intervalRef.current!);
        controls.start({
          d: blobPaths[blobType % blobPaths.length],
          transition: { duration: 1, ease: "easeInOut" },
        });
      }

      return () => {
        clearInterval(intervalRef.current!);
      };
    }, [hovered]);
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={id}>
            <motion.path
              animate={controls}
              initial={{ d: blobPaths[blobType % blobPaths.length] }}
            />
          </clipPath>
        </defs>

        <g clipPath={`url(#${id})`}>
          {src ? (
            <image
              href={src}
              x="0"
              y="0"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <rect x="0" y="0" width="200" height="200" fill={fillColor} />
          )}
        </g>
      </svg>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
