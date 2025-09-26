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

      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-evenly bg-dark-choco text-light-choco text-center">
        <a
          className="m-4 hover:underline"
          href="https://github.com/sezuisa/portfolio"
          target="_blank"
        >
          <p>Portfolio v.1.0.0 [GitHub]</p>
        </a>
        <a
          className="m-4 hover:underline"
          href="www.linkedin.com/in/sarah-hägele-79237a249"
          target="_blank"
        >
          <p>&copy; 2025 Sarah Hägele [LinkedIn]</p>
        </a>
        <p className="m-4">Made with &#9829; with Next.js and TailwindCSS</p>
      </div>
    </div>
  );
}
