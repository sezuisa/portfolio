import React from "react";
import footerWave from "../../public/waves_footer.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      <Image
        src={footerWave}
        alt="SVG waves separating the footer from the page content"
        className="footer-waves"
        priority
        fill={false}
      />

      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly bg-dark-choco text-light-choco text-center">
        <a
          className="m-4 hover:underline"
          href="https://github.com/sezuisa/portfolio"
          target="_blank"
        >
          Portfolio v.0.1.0 [GitHub]
        </a>
        <p className="m-4">&copy; 2025 Sarah Hägele</p>
        <p className="m-4">Made with &#9829; with Next.js and TailwindCSS</p>
      </div>
    </div>
  );
}
