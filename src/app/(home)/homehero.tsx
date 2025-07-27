import Nav from "@/components/navbar";
import EditorBox from "../../components/editorbox";
import { Sarina } from "next/font/google";
import heroWave from "../../../public/waves_hero.svg";
import Image from "next/image";
import AnimatedBlob from "@/components/animatedblob";
import StaticBlob from "@/components/staticblob";

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
                My name is Sarah Hägele and I am a Hobbyist Photographer, former
                Full-Stack Software Developer, and UX Designer.
              </p>
              <p>
                I coded this website from scratch with the goal to give you a
                glimpse into who I am as a person and what I stand for and do as
                a designer.
              </p>
            </div>
          </EditorBox>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center mt-20 mb-10 space-y-10">
          <StaticBlob
            blobType={1}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
          >
            <Image
              src="/icons/sql_logo.svg"
              alt="Icon displaying the Oracle SQL language"
              width={90}
              height={90}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={2}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
          >
            <Image
              src="/icons/java_logo.png"
              alt="Icon displaying the Java Logo"
              width={50}
              height={50}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={3}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
          >
            <Image
              src="/icons/python_logo.png"
              alt="Icon displaying the Python Logo"
              width={70}
              height={70}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={4}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
          >
            <Image
              src="/icons/js_ts_logo.png"
              alt="Icon displaying the JavaScript and TypeScript Logo"
              width={70}
              height={70}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={5}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
          >
            <Image
              src="/icons/html_css_logo.png"
              alt="Icon displaying the HTML and CSS Logo"
              width={70}
              height={70}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={2}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mt-10"
          >
            <Image
              src="/icons/figma_logo.png"
              alt="Icon displaying the Figma Logo"
              width={50}
              height={50}
              priority
              className=""
            />
          </StaticBlob>
          <StaticBlob
            blobType={3}
            fillColor="#7b5a4e"
            className="w-15 h-15 md:w-20 md:h-20 md:-mb-10"
          >
            <Image
              src="/icons/ai_ps_logo.png"
              alt="Icon displaying the Adobe Illustrator and Photoshop Logo"
              width={70}
              height={70}
              priority
              className=""
            />
          </StaticBlob>
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
