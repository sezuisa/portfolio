import React from "react";
import footerWave from "../../public/waves_footer.svg";

export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      <img
        src={footerWave.src}
        className="footer-waves"
        alt="SVG waves separating the footer from the page content"
      ></img>

      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly bg-dark-choco text-light-choco text-center">
        <p className="m-4">Portfolio v.0.1.0</p>
        <p className="m-4">&copy; 2024 Sarah Hägele</p>
        <p className="m-4">Made with &#9829; with Next.js and TailwindCSS</p>
      </div>
    </div>
  );
}
