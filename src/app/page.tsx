import image from "../../public/test_image_square.jpg";
import { Sarina } from "next/font/google";
import EditorBox from "../components/editorbox";
import ImageGallery from "../components/imagegallery";
import codeWave from "../../public/wave_codesection_1.svg";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

const galleryItems = [
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
  {
    imageSrc: image,
    alt: "blabla",
  },
];

export default function Home() {
  return (
    <main>
      <div className="bg-extra-dark-choco p-4 lg:px-16">
      <div
        className={`text-3xl lg:text-5xl ${sarina.className} w-full flex flex-row items-center`}
      >
        <hr className="grow lg:grow-0 lg:w-8 border-amber-500/20"></hr>
        <h1
          id="anchor_photography"
          className="grow-0 bg-gradient-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 mx-4 drop-shadow-2xl"
        >
          photography
        </h1>
        <hr className="grow border-amber-500/20"></hr>
      </div>
      <div className="w-full py-8 flex flex-row justify-center flex-wrap">
        <ImageGallery images={galleryItems} />
      </div>
      <div
        className={`text-3xl lg:text-5xl ${sarina.className} w-full flex flex-row items-center`}
      >
        <hr className="grow lg:grow-0 lg:w-8 border-amber-500/20"></hr>
        <h1
          id="anchor_code"
          className="grow-0 bg-gradient-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 mx-4 drop-shadow-2xl"
        >
          code
        </h1>
        <hr className="grow border-amber-500/20"></hr>
      </div>
      </div>
      

      <img
          src={codeWave.src}
          className="code-wave"
          alt="SVG waves separating the photography section from the code section"
        ></img>

      <div className="w-full flex flex-row justify-center">
        <EditorBox extraStyles="w-11/12 lg:w-4/5 max-w-7xl">
          <a
            href="https://github.com/sezuisa"
            target="_blank"
            className="text-2xl lg:text-3xl hover:bg-gradient-to-r hover:from-red-500 hover:from-10% hover:via-amber-500 hover:via-30% hover:to-orange-500 hover:bg-clip-text hover:text-transparent"
          >
            github.com/sezuisa
          </a>
          <ul className="list-disc px-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </EditorBox>
      </div>
    </main>
  );
}
