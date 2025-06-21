import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import HomeHero from "./homehero";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
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
      className={`bg-[url('../../public/background.svg')] bg-cover bg-center bg-fixed selection:bg-accent selection:text-amber-950 text-lg ${lexend.className} scrollbar`}
    >
      <body>
        <HomeHero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
