import Image from "next/image";
import { Sarina } from "next/font/google";
import heroImage from "../../public/hero_image.jpg";
import squareImage from "../../public/test_image_square.jpg";
import PhotoTile from "./components/phototile";

export default function Home() {
  return (
    <main className="selection:bg-amber-600 selection:text-amber-950 bg-extra-dark-choco">
      <div className="h-96 w-screen"></div>
      <div className="h-96 w-screen"></div>
      <div className="h-96 w-screen"></div>
    </main>
  );
}
