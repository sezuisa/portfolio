import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  colourVariant?: string;
  className?: string;
  children?: ReactNode;
};

const gradientColours: { [key: string]: string } = {
  default:
    "hover:bg-linear-to-r hover:from-red-400 hover:to-amber-400 active:bg-linear-to-r active:from-red-500 active:to-amber-500 focus:bg-linear-to-r focus:from-red-500 focus:to-amber-500",
  teal: "hover:bg-linear-to-r hover:from-mid-teal hover:via-light-teal hover:to-light-red active:bg-linear-to-r active:from-full-teal active:via-light-teal active:to-full-red focus:bg-linear-to-r focus:from-full-teal focus:via-light-teal focus:to-full-red",
};

const backgroundColours: { [key: string]: string } = {
  default: "bg-cappuccino",
  teal: "bg-linear-to-r from-full-teal via-light-teal to-full-red",
};

const textColours: { [key: string]: string[] } = {
  default: [
    "text-light-choco/50",
    "group-hover/button:text-extra-dark-choco group-focus/button:text-extra-dark-choco",
  ],
  teal: [
    "text-extra-dark-choco",
    "group-hover/button:text-extra-dark-choco/70 group-focus/button:text-extra-dark-choco/70",
  ],
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
        className={`group/button ${backgroundVariant} px-2 py-1 rounded-full flex flex-col items-center ${gradientVariant} ${className}`}
      >
        <div className="flex flex-row items-center">
          <p className={`${normalTextColour} ${hoverTextColour}`}>{children}</p>
        </div>
      </button>
    </Link>
  );
}
