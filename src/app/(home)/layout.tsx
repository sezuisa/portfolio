import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import HomeHero from "./homehero";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sarah Hägele Portfolio",
  description:
    "Portfolio showing the work done by Sarah Hägele as a UX Designer.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-[url('../../public/hero_image.png')] bg-cover bg-center bg-fixed selection:bg-accent selection:text-amber-950 text-lg ${lexend.className}`}
    >
      <body>
        <HomeHero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
