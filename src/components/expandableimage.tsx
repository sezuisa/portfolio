// ExpandableImage.tsx
"use client";

import { ReactNode, useEffect, useState, isValidElement } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type ExpandableImageProps = {
  children: ReactNode;
  src?: string;
  alt?: string;
  caption?: string;
  disableExpand?: boolean;
  className?: string;
};

export default function ExpandableImage({
  children,
  src = "",
  alt = "Expanded image",
  caption = "",
  disableExpand = false,
  className = "",
}: ExpandableImageProps) {
  const [expanded, setExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  let imageSrc = src;
  let imageAlt = alt;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!src && isValidElement(children)) {
    const props = (children as any).props || {};
    imageSrc = props.src;
    imageAlt = props.alt || alt;
  }

  useEffect(() => {
    if (!isMounted || !expanded) return;
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
    (window as any).lenis?.stop?.();

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
      (window as any).lenis?.start?.();
    };
  }, [expanded, isMounted]);

  return (
    <>
      <div
        className={`relative inline-block cursor-pointer group ${className}`}
        onClick={() => {
          if (!disableExpand && imageSrc) {
            setExpanded(true);
          }
        }}
      >
        {children}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center">
            <div className="z-10 max-w-3xl bg-extra-dark-choco/70 backdrop-blur-md text-cream text-xs text-center p-1 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
              {caption}
            </div>
          </div>
        )}
      </div>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="expandable-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-extra-dark-choco/60 backdrop-blur-md p-4"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex flex-col items-center max-w-4xl w-full bg-transparent p-4 text-center"
                >
                  <div className="relative">
                    <button
                      onClick={() => setExpanded(false)}
                      className="mb-5 lg:mb-0 lg:absolute lg:top-0 lg:-right-10 bg-cappuccino text-cream rounded-full p-1 drop-shadow-lg hover:bg-accent transition"
                    >
                      <IoClose />
                    </button>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={0}
                      height={0}
                      className="max-h-[80vh] w-auto object-contain drop-shadow-lg rounded-xl"
                    />
                  </div>
                  {caption && <p className="mt-4 text-cream">{caption}</p>}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
