"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationWrapperProps = {
  children: ReactNode;
};

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Content */}
      {children}
    </motion.div>
  );
}
