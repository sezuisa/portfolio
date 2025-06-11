import Nav from "@/components/navbar";
import PhotoTile from "../components/phototile";
import EditorBox from "../components/editorbox";
import { Sarina } from "next/font/google";
import pfp from "../../public/pfp.jpg";
import heroWave from "../../public/waves_hero.svg";
import Image from "next/image";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div
      id="page-header"
      className="bg-[url('../../public/hero_image.jpg')] bg-cover bg-center bg-fixed h-screen"
    >
      <Nav />
      <div
        id="hero"
        className="relative pt-28 lg:pt-32 xl:pt-48 overflow-hidden h-screen"
      >

        <Image
          src={heroWave}
          alt="SVG waves separating the hero section from the page content"
          className="hero-waves"
          priority
          fill={false} // if using fixed size; or layout="fill" for full responsiveness
        />


        <div
          id="content"
          className="flex flex-col w-screen items-center justify-start"
        >
          <h1
            className={`text-6xl lg:text-8xl z-10 hidden xl:block ${sarina.className}`}
          >
            <span className="bg-gradient-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-2xl">
              welcome!
            </span>
          </h1>

          <div className="w-4/5 max-w-3xl xl:mb-48 relative">
            <div className="xl:-mt-24 xl:absolute xl:-right-52 xl:top-40 flex justify-center z-20 xl:z-0">
              <PhotoTile imageSrc={pfp} altText="Photo of Sarah Hägele" />
            </div>
            <h1
              className={`text-5xl md:text-6xl xl:text-8xl z-10 xl:hidden text-center ${sarina.className}`}
            >
              <span className="bg-gradient-to-r from-red-500 from-20% via-amber-500 via-40% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-lg">
                welcome!
              </span>
            </h1>
            <div className="mt-4">
              <EditorBox>
                <p>[&#126;]&#36; Allow me to introduce myself.</p>
                <p>
                  My name is Sarah and I am a Hobbyist Photographer, Ex-Software Developer, and UX Designer.
                </p>
                <p>
                  Let this website give you a glimpse into who I am as a person and what I stand for and do as a designer.
                </p>
              </EditorBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
