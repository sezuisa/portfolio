import Nav from "@/components/navbar";
import EditorBox from "../../components/editorbox";
import { Sarina } from "next/font/google";
import heroWave from "../../../public/waves_hero.svg";
import Image from "next/image";
import AnimatedBlob from "@/components/animatedblob";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

export default function HomeHero() {
  return (
    <section
      id="page-header"
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      <Nav />
      <div
        id="hero"
        className="grow-1 flex flex-col justify-center overflow-hidden pt-30 lg:pt-40"
      >
        <div
          id="content"
          className="flex flex-col gap-5 lg:gap-0 w-full max-w-7xl mx-auto justify-center items-center px-4"
        >
          <h1
            className={`order-2 lg:order-1 text-4xl md:text-5xl lg:text-6xl z-10 xl:block text-center ${sarina.className} lg:-mb-20 xl:-mb-35`}
          >
            <span className="bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-lg lg:drop-shadow-2xl">
              welcome!
            </span>
          </h1>

          <AnimatedBlob
            src="/pfp_2.jpg"
            alt="Photo of Sarah Hägele"
            className="order-1 lg:order-2 w-48 h-48 xl:w-65 xl:h-65 lg:ml-190 z-0"
          />

          <EditorBox extraStyles="order-3 z-1 lg:-mt-20">
            <div className="max-w-prose space-y-3">
              <p>Allow me to introduce myself.</p>
              <p>
                My name is Sarah and I am a Hobbyist Photographer, Ex-Software
                Developer, and UX Designer.
              </p>
              <p>
                Let this website give you a glimpse into who I am as a person
                and what I stand for and do as a designer.
              </p>
            </div>
          </EditorBox>
        </div>
      </div>
      <Image
        src={heroWave}
        alt="SVG waves separating the hero section from the page content"
        className="hero-waves grow-0"
        priority
        fill={false}
      />
    </section>
  );
}
