import "../globals.css";
import "./projects.css";
import Footer from "@/components/footer";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectsLayout({
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
