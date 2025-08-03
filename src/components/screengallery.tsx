"use client";

import { useEffect, useState } from "react";
import EditorBox from "./editorbox";
import ImageViewer from "./imageviewer";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type GalleryItem = {
  image: string;
  alt: string;
  text: string;
};

type ScreenGalleryProps = {
  galleryName: string; // e.g. "lausha-gallery"
  backgroundColour?: string;
  buttonColour?: string;
  blobClassName?: string;
  captionClassName?: string;
};

export default function ScreenGallery({
  galleryName,
  backgroundColour,
  buttonColour,
  blobClassName,
  captionClassName,
}: ScreenGalleryProps) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonColourClass = "bg-" + buttonColour;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`/data/${galleryName}.json`);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to load gallery JSON:", err);
      }
    };

    fetchGallery();
  }, [galleryName]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (items.length === 0) return null;

  const { image, alt, text } = items[currentIndex];

  return (
    <div className={`flex flex-col items-center`}>
      <ImageViewer
        fillColor={backgroundColour}
        disableExpand={true}
        className={`mt-15 ${blobClassName}`}
      >
        <div className="flex flex-nowrap justify-center items-center gap-5">
          <button
            onClick={handlePrevious}
            className={`group/button cursor-pointer w-10 h-10 rounded-full p-2 text-center ${buttonColourClass}`}
          >
            <IoIosArrowBack className="text-2xl fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
          </button>
          <Image
            src={image}
            alt={alt}
            width={225}
            height={400}
            priority
            className={`z-1`}
          />
          <button
            onClick={handleNext}
            className={`group/button cursor-pointer w-10 h-10 rounded-full p-2 text-center ${buttonColourClass}`}
          >
            <IoIosArrowForward className="text-2xl fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
          </button>
        </div>
      </ImageViewer>
      <EditorBox extraStyles={`w-full mt-5 pt-5 ${captionClassName}`}>
        <p>{text}</p>
      </EditorBox>
    </div>
  );
}
