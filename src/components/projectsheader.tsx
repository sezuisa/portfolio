import { Sarina } from "next/font/google";
import heroWave from "../../public/waves_hero.svg";
import Image from "next/image";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

type ProjectHeaderProps = {
  heading: string;
};

export default function ProjectsHeader({ heading }: ProjectHeaderProps) {
  return (
    <div
      id="page-header"
      className="relative pt-4 lg:pt-8 xl:pt-16 overflow-hidden"
    >
      <div
        id="heading"
        className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 mb-20"
      >
        <h1 className={`text-6xl lg:text-8xl xl:block ${sarina.className}`}>
          <span className="bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-2xl">
            {heading}
          </span>
        </h1>
      </div>
      <Image
        src={heroWave}
        alt="SVG waves separating the hero section from the page content"
        className="hero-waves"
        priority
        fill={false}
      />
    </div>
  );
}
