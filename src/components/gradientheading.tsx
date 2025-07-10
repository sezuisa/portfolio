import { Sarina } from "next/font/google";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
});

type GradientHeadingProps = {
  text: string;
  size?: number;
  anchor?: string;
  colourVariant?: string;
  className?: string;
};

const gradientColours: { [key: string]: string[] } = {
  default: [
    "from-red-500 from-10% via-amber-500 via-30% to-orange-500",
    "border-amber-500/20",
  ],
  teal: [
    "from-full-teal from-10% via-light-teal via-30% to-full-red",
    "border-light-teal/20",
  ],
  lilac: [
    "from-full-lilac from-10% via-light-lilac via-30% to-full-orange",
    "border-light-lilac",
  ],
  blue: [
    "from-cent-blue from-10% via-cent-blue-muted via-30% to-cent-red",
    "border-cent-blue-muted",
  ],
};

export default function GradientHeading({
  text,
  size,
  anchor,
  colourVariant,
  className = "",
}: GradientHeadingProps) {
  const anchorValue = anchor || text.replaceAll(" ", "");
  const gradientVariant = gradientColours[colourVariant || "default"][0];
  const borderColourValue = gradientColours[colourVariant || "default"][1];
  return (
    <div
      className={`text-3xl lg:text-4xl ${sarina.className} w-full flex flex-row items-center`}
    >
      <hr className={`grow lg:grow-0 lg:w-8 ${borderColourValue}`}></hr>
      <h1
        id={anchorValue}
        className={`grow-0 bg-linear-to-r ${gradientVariant} bg-clip-text text-transparent p-2 mx-4 drop-shadow-2xl`}
      >
        {text}
      </h1>
      <hr className={`grow ${borderColourValue}`}></hr>
    </div>
  );
}
