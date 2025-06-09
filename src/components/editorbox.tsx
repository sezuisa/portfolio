import React, { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
});

type EditorBoxProps = {
  children: ReactNode;
  extraStyles?: string;
};

export const EditorBox = ({ children, extraStyles }: EditorBoxProps) => {
  return (
    <div
      className={`bg-cappuccino/40 backdrop-blur-xl border border-cappuccino/40 rounded-xl flex flex-col justify-start shadow-2xl ${extraStyles || ""}`}
    >
      <div className="flex flex-row justify-start px-4 pt-4">
        <svg
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
          className="m-1"
        >
          <circle r="6" cx="6" cy="6" fill="red" />
        </svg>
        <svg
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
          className="m-1"
        >
          <circle r="6" cx="6" cy="6" fill="yellow" />
        </svg>
        <svg
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
          className="m-1"
        >
          <circle r="6" cx="6" cy="6" fill="green" />
        </svg>
      </div>
      <span className={`p-4 text-light-choco text-lg ${jbMono.className}`}>
        {children}
      </span>
    </div>
  );
};
export default EditorBox;
