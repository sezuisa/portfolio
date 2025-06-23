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
    <div id="page-header" className="relative overflow-hidden">
      <div
        id="heading"
        className="flex flex-col w-full max-w-7xl mx-auto items-center justify-center px-4 my-15"
      >
        <h1
          className={`text-5xl lg:text-6xl xl:block ${sarina.className} text-center`}
        >
          <span className="bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
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
