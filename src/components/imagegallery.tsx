"use client";
import React from "react";
import PhotoTile from "./phototile";
import { StaticImageData } from "next/image";
import useWindowSize from "../utils/windowsize";

type ImageGalleryProps = {
  images: { imageSrc: StaticImageData; alt: string }[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [width, height] = useWindowSize();

  var flipMask: number = 10;
  var flipCalc: number = 10;

  if (width >= 1280) {
    flipMask = 5;
    flipCalc = 10;
  } else if (width >= 640 && width < 768) {
    flipMask = 3;
    flipCalc = 6;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative ${
            (index % 2 === 0) === index % flipCalc < flipMask
              ? "mb-16 xl:mb-20"
              : "mt-16 xl:mt-20"
          }`}
        >
          <PhotoTile imageSrc={image.imageSrc} altText={image.alt} />
        </div>
      ))}
    </div>
  );
};
export default ImageGallery;
