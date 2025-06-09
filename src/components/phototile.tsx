import React from "react";
import Image, { StaticImageData } from "next/image";

type PhotoTileProps = {
  imageSrc: StaticImageData;
  altText?: string;
};

export const PhotoTile = ({ imageSrc, altText }: PhotoTileProps) => {
  return (
    <div className="diamond lg:diamond-md xl:diamond-lg shadow-2xl border-orange-300 border">
      <div className="tile-container lg:tile-container-md xl:tile-container-lg">
        <Image src={imageSrc} alt={altText || ""} placeholder="blur" />
      </div>
    </div>
  );
};
export default PhotoTile;
