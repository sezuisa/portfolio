import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

type BackButtonProps = {
  text: string;
  href?: string;
  forward?: boolean;
  className?: string;
};

export default function BackButton({
  text,
  href,
  forward = false,
  className,
}: BackButtonProps) {
  return (
    <Link href={href || "/"}>
      <button className="cursor-pointer group/button bg-transparent mx-3 m-1 p-1 rounded-full flex flex-col items-center border-2 border-light-choco/80 hover:border-dark-choco hover:bg-linear-to-r hover:from-red-400 hover:to-amber-400 active:bg-linear-to-r active:from-red-500 active:to-amber-500 focus:bg-linear-to-r focus:from-red-500 focus:to-amber-500 transition duration-300 ease-in-out">
        <div className="flex flex-row items-center">
          {forward ? (
            <IoMdArrowRoundForward className="mr-2 text-2xl lg:text-lg fill-light-choco/80 group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
          ) : (
            <IoMdArrowRoundBack className="mr-2 text-2xl lg:text-lg fill-light-choco/80 group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
          )}

          <p className="text-light-choco/80 group-hover/button:text-extra-dark-choco group-focus/button:text-extra-dark-choco text-base">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
}
