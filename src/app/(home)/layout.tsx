import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#4e3931",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.className} selection:bg-accent selection:text-amber-950 text-lg scrollbar`}
    >
      <body className="relative overflow-x-hidden min-h-screen bg-dark-choco">
        {/* Background image layer */}
        <div
          className="fixed inset-0 -z-10 bg-[url('/background.svg')] bg-cover bg-center h-screen"
          aria-hidden="true"
        />

        <HomeHero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
