import Nav from "@/app/components/navbar";
import PhotoTile from "./components/phototile";
import EditorBox from "./components/editorbox";
import { Sarina } from "next/font/google";
import pfp from "../../public/pfp.jpg";
import heroWave from "../../public/waves_hero.svg";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div
      id="page-header"
      className="bg-[url('../../public/hero_image.jpg')] bg-cover bg-center"
    >
      <Nav />
      <div
        id="hero"
        className="relative pb-[--waves-height] pt-28 lg:pt-32 xlp:pt-48 overflow-hidden"
      >
        <img src={heroWave.src} className="hero-waves" alt="SVG waves separating the hero section from the page content"></img>

        <div
          id="content"
          className="flex flex-col w-screen items-center justify-start"
        >
          <span
            className={`text-6xl lg:text-8xl z-10 hidden xlp:block ${sarina.className}`}
          >
            <h1 className="bg-gradient-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-2xl">
              welcome!
            </h1>
          </span>

          <div className="w-4/5 max-w-3xl xlp:mb-48 relative">
            <div className="xlp:-mt-24 xlp:absolute xlp:-right-60 xlp:top-32 flex justify-center z-20 xlp:z-0">
              <PhotoTile imageSrc={pfp} altText="Photo of Sarah Hägele" />
            </div>
            <span
              className={`text-5xl md:text-6xl xlp:text-8xl lg:mt-48 z-10 xlp:hidden text-center mb-24 ${sarina.className}`}
            >
              <h1 className="bg-gradient-to-r from-red-500 from-20% via-amber-500 via-40% to-orange-500 bg-clip-text text-transparent p-2 drop-shadow-lg">
                welcome!
              </h1>
            </span>
            <div className="mt-4">
              <EditorBox>
                <p>[&#126;]&#36; Allow me to introduce myself.</p>
                <p>
                  My name is Sarah and I am a hobbyist photographer and
                  professional software developer.
                </p>
                <p>
                  Everything on this site was produced with love, sweat, and
                  Club Mate.
                </p>
              </EditorBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
