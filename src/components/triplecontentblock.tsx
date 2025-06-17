"use client";

import { motion } from "framer-motion";
import { ReactNode, Children } from "react";

interface TripleContentBlockProps {
  children: ReactNode;
  reverse?: boolean;
}

export default function TripleContentBlock({
  children,
  reverse = false,
}: TripleContentBlockProps) {
  const [left, right, center] = Children.toArray(children);

  return (
    <motion.div
      className={`flex flex-col w-full lg:flex-row ${
        reverse ? "flex-col-reverse" : ""
      } ${reverse ? "lg:flex-row-reverse" : ""} items-center gap-8 my-5`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left slot */}
      <div className="order-1 lg:order-1 w-full lg:w-1/3 flex justify-center">
        {left}
      </div>

      {/* Center slot */}
      <div className="order-2 lg:order-3 w-full lg:w-1/3 flex justify-center">
        {center}
      </div>

      {/* Right slot */}
      <div className="order-3 lg:order-2 w-full lg:w-1/3 flex justify-center">
        {right}
      </div>
    </motion.div>
  );
}
