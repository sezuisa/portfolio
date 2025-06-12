import image from "../../public/test_image_square.jpg";
import { Sarina } from "next/font/google";
import EditorBox from "../../components/editorbox";
import StaticBlob from "@/components/staticblob";
import codeWave from "../../../public/wave_codesection_1.svg";
import Image from "next/image";
import Link from "next/link";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <div className="bg-extra-dark-choco p-4 lg:px-16">
        <div
          className={`text-3xl lg:text-5xl ${sarina.className} w-full flex flex-row items-center`}
        >
          <hr className="grow lg:grow-0 lg:w-8 border-amber-500/20"></hr>
          <h1
            id="anchor_projects"
            className="grow-0 bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 mx-4 drop-shadow-2xl"
          >
            projects
          </h1>
          <hr className="grow border-amber-500/20"></hr>
        </div>
        <div className="w-full py-8 flex flex-row justify-center flex-wrap">
          <Link href="/lausha">
            <StaticBlob
              blobType={0}
              className="w-70 h-70 lg:w-120 lg:h-120 xl:w-130 xl:h-130"
            />
          </Link>
          <Link href="/smarti">
            <StaticBlob
              blobType={1}
              className="w-70 h-70 lg:w-120 lg:h-120 xl:w-130 xl:h-130"
            />
          </Link>
          <Link href="/carers">
            <StaticBlob
              blobType={2}
              className="w-70 h-70 lg:w-120 lg:h-120 xl:w-130 xl:h-130"
            />
          </Link>
          <Link href="/expenses">
            <StaticBlob
              blobType={3}
              className="w-70 h-70 lg:w-120 lg:h-120 xl:w-130 xl:h-130"
            />
          </Link>
        </div>
        <div
          className={`text-3xl lg:text-5xl ${sarina.className} w-full flex flex-row items-center`}
        >
          <hr className="grow lg:grow-0 lg:w-8 border-amber-500/20"></hr>
          <h1
            id="anchor_aboutme"
            className="grow-0 bg-linear-to-r from-red-500 from-10% via-amber-500 via-30% to-orange-500 bg-clip-text text-transparent p-2 mx-4 drop-shadow-2xl"
          >
            about me
          </h1>
          <hr className="grow border-amber-500/20"></hr>
        </div>
      </div>

      <div className="w-full h-[122px] overflow-hidden">
        <Image
          src={codeWave}
          alt="SVG waves separating the hero section from the page content"
          className="code-wave"
          priority
          fill={false}
        />
      </div>

      <div className="w-full flex flex-row justify-center">
        <EditorBox extraStyles="w-11/12 lg:w-4/5 max-w-7xl">
          <p>My journey into UX Design was one full of curves, hills, and hurdles. However, there was always this drive deep within me that kept me going:</p>
          <p className="mt-3">How can I create something that is meaningful to others?</p>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id metus diam. Duis ullamcorper pulvinar neque id gravida. Sed vitae facilisis ligula. Vestibulum molestie justo velit, vitae auctor magna convallis egestas. Phasellus commodo in nisl a viverra. Pellentesque sit amet nisi non massa accumsan condimentum. Aenean sit amet risus nulla. Fusce sapien nisi, mollis sed semper at, rutrum ut magna. Maecenas hendrerit urna vel libero iaculis, in elementum arcu tempor. Vivamus dui sapien, pretium quis blandit non, maximus nec risus. Aliquam convallis ligula at nisi convallis, at dignissim nunc tempus. Quisque faucibus eget purus eget dignissim.</p>
          <p className="mt-3">Curabitur dignissim et sapien eget laoreet. Nullam hendrerit varius pretium. Integer fringilla purus bibendum, sollicitudin justo tempor, gravida leo. Sed eleifend diam neque, ac ornare lorem finibus eu. Pellentesque eu vestibulum odio. Vivamus accumsan nec ante et molestie. Vivamus dignissim condimentum lacus, a aliquam dui semper vel.</p>
          <p className="mt-3">Maecenas eget magna sit amet orci ultrices finibus et a neque. Nulla suscipit imperdiet arcu. Nam ornare tellus ac risus sollicitudin pulvinar. Duis elit metus, viverra eget suscipit nec, hendrerit vehicula risus. Nullam luctus tellus purus, eu facilisis quam scelerisque sed. Etiam placerat massa quis viverra hendrerit. Curabitur sed nunc ac dolor placerat euismod.</p>
        </EditorBox>
      </div>
    </main>
  );
}
