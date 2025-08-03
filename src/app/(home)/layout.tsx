import type { Metadata, Viewport } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import ScrollWrapper from "@/components/scrollwrapper";
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
      className={`${lexend.className} selection:bg-accent selection:text-amber-950 text-lg scrollbar scroll-smooth`}
    >
      <body className="relative overflow-x-hidden min-h-dvh bg-dark-choco">
        <ScrollWrapper>{children}</ScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
