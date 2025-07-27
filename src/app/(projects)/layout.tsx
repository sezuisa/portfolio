import ContentNav from "@/components/contentnav";
import "../globals.css";
import "./projects.css";
import Footer from "@/components/footer";
import { Lexend } from "next/font/google";
import ContentNavWrapper from "@/components/contentnavwrapper";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "300",
});

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.className} selection:bg-accent selection:text-amber-950 text-lg scrollbar scroll-smooth`}
    >
      <body className="relative overflow-x-hidden min-h-screen bg-dark-choco">
        {/* iOS-compatible fixed background layer */}
        <div
          className="fixed inset-0 -z-10 bg-[url('/background.svg')] bg-cover bg-center h-screen"
          aria-hidden="true"
        />

        <ContentNavWrapper>{children}</ContentNavWrapper>
        <Footer />
      </body>
    </html>
  );
}
