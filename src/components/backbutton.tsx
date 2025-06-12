import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

type BackButtonProps = {
  text: string;
  href?: string;
  className?: string;
};

export default function BackButton({ text, href, className }: BackButtonProps) {
  return (
    <Link href={href || "/"}>
      <button className="group/button bg-transparent mx-3 m-1 p-1 rounded-full flex flex-col items-center hover:bg-linear-to-r hover:from-red-400 hover:to-amber-400 active:bg-linear-to-r active:from-red-500 active:to-amber-500 focus:bg-linear-to-r focus:from-red-500 focus:to-amber-500">
        <div className="flex flex-row items-center">
          <IoMdArrowRoundBack className="mr-2 text-2xl lg:text-lg fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
          <p className="text-light-choco group-hover/button:text-extra-dark-choco group-focus/button:text-extra-dark-choco text-base">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
}
