"use client";

import { motion } from "framer-motion";
import { ReactNode, Children } from "react";

interface ContentBlockProps {
  children: ReactNode;
  reverse?: boolean;
  alignCenter?: boolean;
}

export default function ContentBlock({
  children,
  reverse = false,
  alignCenter = true,
}: ContentBlockProps) {
  const [left, right] = Children.toArray(children);

  return (
    <motion.div
      className={`flex flex-col w-full lg:flex-row ${
        reverse ? "flex-col-reverse" : ""
      } ${reverse ? "lg:flex-row-reverse" : ""} ${
        alignCenter ? "items-center" : "items-start"
      } gap-8 my-5`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left slot */}
      <div className="w-full lg:w-1/2 flex justify-center">{left}</div>

      {/* Right slot */}
      <div className="w-full lg:w-1/2 flex justify-center">{right}</div>
    </motion.div>
  );
}
