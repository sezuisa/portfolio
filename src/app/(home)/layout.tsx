import type { Metadata, Viewport } from "next";
import { pageMetadata } from "@/utils/metadata";
import "../globals.css";
import Footer from "@/components/footer";
import ScrollWrapper from "@/components/scrollwrapper";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = pageMetadata({
  title: "Sarah Hägele Portfolio",
  description:
    "UX Designer with a developer's background, turning complex systems into clear interfaces. Case studies in user research, prototyping and design leadership.",
  path: "/",
});

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
