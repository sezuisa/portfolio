import React from "react";
import footerWave from "../../public/waves_footer.svg";

export default function Footer() {
  return (
    <div className="w-screen bg-extra-dark-choco flex flex-col">
      <img src={footerWave.src} className="footer-waves" alt="SVG waves separating the footer from the page content"></img>

      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly bg-dark-choco text-light-choco *:m-4">
        <p>Portfolio v.0.1.0</p>
        <p>&copy; 2024 Sarah Hägele</p>
        <p>Made with &#9829; with Next.js and TailwindCSS</p>
      </div>
    </div>
  );
}
