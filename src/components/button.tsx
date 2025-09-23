import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  colourVariant?: string;
  className?: string;
  children?: ReactNode;
};

const gradientColours: { [key: string]: string } = {
  default: "",
  teal: "hover:bg-linear-to-r hover:from-mid-teal hover:via-light-teal hover:to-light-red active:bg-linear-to-r active:from-full-teal active:via-light-teal active:to-full-red focus:bg-linear-to-r focus:from-full-teal focus:via-light-teal focus:to-full-red",
  lilac: "",
  blue: "",
  purple: "",
};

const backgroundColours: { [key: string]: string } = {
  default: "bg-linear-to-r from-red-400 to-amber-400",
  teal: "bg-linear-to-r from-full-teal via-light-teal to-full-red",
  lilac: "",
  blue: "bg-linear-to-r from-cent-blue via cent-blue-muted to-cent-red",
  green: "bg-linear-to-r from-pine via-mint to-smarti-orange",
  purple:
    "bg-linear-to-r from-purple-sunset via-purple-sunrise to-orange-sunset",
};

const textColours: { [key: string]: string[] } = {
  default: ["text-dark-choco", ""],
  teal: [
    "text-extra-dark-choco",
    "group-hover/button:text-extra-dark-choco/70 group-focus/button:text-extra-dark-choco/70",
  ],
  lilac: ["", ""],
  blue: ["text-cream", ""],
  green: ["text-extra-dark-choco", "group-hover/button:text-extra-dark-choco"],
  purple: ["text-cream", ""],
};

export default function Button({
  href,
  colourVariant = "default",
  children,
  className,
}: ButtonProps) {
  const gradientVariant = gradientColours[colourVariant || "default"];
  const backgroundVariant = backgroundColours[colourVariant];
  const normalTextColour = textColours[colourVariant][0];
  const hoverTextColour = textColours[colourVariant][1];
  return (
    <Link href={href || "/"} target="_blank">
      <button
        className={`cursor-pointer group/button ${backgroundVariant} px-2 py-1 rounded-full flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-xl ${gradientVariant} ${className}`}
      >
        <div className="flex flex-row items-center">
          <p className={`${normalTextColour} ${hoverTextColour}`}>{children}</p>
        </div>
      </button>
    </Link>
  );
}
