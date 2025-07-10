"use client";

import Image from "next/image";
import EditorBox from "./editorbox";
import StaticBlob from "./staticblob";

type SingleScreenDisplayProps = {
  image: string;
  alt: string;
  backgroundColour?: string;
  blobClassName?: string;
  captionClassName?: string;
  variant?: "right" | "left";
  editorBoxClassName?: string;
  imageClassName?: string;
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
  children,
}: SingleScreenDisplayProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center max-w-full group">
      <StaticBlob fillColor={backgroundColour} className={`${blobClassName}`}>
        <Image
          src={image}
          alt={alt}
          width={225}
          height={400}
          priority
          className={`z-10 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-xl ${imageClassName}`}
        />
      </StaticBlob>
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
