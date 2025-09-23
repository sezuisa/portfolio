"use client";

import Image from "next/image";
import EditorBox from "./editorbox";
import ImageViewer from "./imageviewer";
import ImageCarousel from "./imagecarousel";

type SingleScreenDisplayProps = {
  image: string | string[];
  alt: string;
  backgroundColour?: string;
  blobClassName?: string;
  captionClassName?: string;
  variant?: "right" | "left";
  editorBoxClassName?: string;
  imageClassName?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SingleScreenDisplay({
  image,
  alt,
  backgroundColour,
  blobClassName = "",
  captionClassName = "",
  variant = "right",
  editorBoxClassName = "",
  imageClassName = "",
  className = "",
  children,
}: SingleScreenDisplayProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-center items-center max-w-full group ${className}`}
    >
      <ImageViewer fillColor={backgroundColour} className={`${blobClassName}`}>
        {typeof image === "string" ? (
          <Image
            src={image}
            alt={alt}
            width={225}
            height={400}
            priority
            className={`z-10 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-xl ${imageClassName}`}
          />
        ) : (
          <ImageCarousel
            images={image}
            width={225}
            height={400}
            className={`z-10 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-xl ${imageClassName}`}
          />
        )}
      </ImageViewer>
      <EditorBox
        extraStyles={`max-w-80 -mt-5 lg:mt-0 pt-5 lg:pt-0 ${
          variant === "right" ? "lg:-ml-34 lg:pl-17" : "lg:-ml-125 lg:pr-15"
        } ${captionClassName} ${editorBoxClassName}`}
      >
        {children}
      </EditorBox>
    </div>
  );
}
