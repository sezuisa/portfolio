"use client";

import { motion } from "framer-motion";
import { ReactNode, Children } from "react";

interface ContentBlockProps {
  children: ReactNode;
  reverse?: boolean;
  flipOnMobile?: boolean;
  alignCenter?: boolean;
}

export default function ContentBlock({
  children,
  reverse = false,
  flipOnMobile = false,
  alignCenter = true,
}: ContentBlockProps) {
  const [left, right] = Children.toArray(children);
  const directionLg = reverse ? "lg:flex-row-reverse" : "";
  const directionMobile = reverse !== flipOnMobile ? "flex-col-reverse" : "";

  return (
    <motion.div
      className={`flex flex-col w-full lg:flex-row ${directionMobile} ${directionLg} ${
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
