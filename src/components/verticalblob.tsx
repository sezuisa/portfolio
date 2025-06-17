import { ReactNode, useId } from "react";

type VerticalBlobProps = {
  src?: string;
  alt?: string;
  blobType?: number;
  fillColor?: string;
  className?: string;
  children?: ReactNode; // Allow overlaying content
};

const blobPaths = [
  "M87.4049 0.512968C51.2137 4.51538 20.342 40.1892 4.3007 84.4797C-8.61507 120.14 11.1829 157.512 16.3743 196.63C22.1826 240.397 10.0465 293.029 35.6504 320.706C65.562 353.04 110.709 359.93 144.125 334.725C176.164 310.558 179.865 254.378 187.987 205.801C196.095 157.308 209.665 105.398 189.387 64.0109C167.578 19.4993 126.612 -3.823 87.4049 0.512968Z",
  "M196.857 191.719C193.025 234.527 178.283 271.869 154.601 299.974C129.541 329.714 97.9036 360.827 66.5803 346.326C36.6636 332.477 33.9858 278.72 21.8115 238.502C10.9736 202.698 -5.03958 169.176 1.53486 131.444C10.3549 80.8259 26.4247 26.2677 61.8705 8.6007C100.939 -10.872 147.904 3.51546 177.54 43.7195C204.777 80.6688 201.542 139.378 196.857 191.719Z",
];

export default function VerticalBlob({
  src,
  alt = "Blob",
  blobType = 0,
  fillColor = "#f87171",
  className = "",
  children,
}: VerticalBlobProps) {
  const id = useId();
  const path = blobPaths[blobType % blobPaths.length];

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 350"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={id}>
            <path d={path} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${id})`}>
          {src ? (
            <image
              href={src}
              x="0"
              y="0"
              width="200"
              height="350"
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <rect x="0" y="0" width="200" height="350" fill={fillColor} />
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
