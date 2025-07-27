"use client";
import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

type ContentNavProps = {
  navList: { title: string; href: string; hierarchy: number }[];
};

export default function ContentNav({ navList }: ContentNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);
  const navContentRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Measure dynamic nav content width
  useEffect(() => {
    if (navContentRef.current) {
      const width = navContentRef.current.offsetWidth;
      setNavWidth(width);
      setHasMeasured(true);

      const resizeObserver = new ResizeObserver(() => {
        setNavWidth(navContentRef.current?.offsetWidth ?? 0);
      });
      resizeObserver.observe(navContentRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [navList]);

  const handleClick = () => setIsOpen((prev) => !prev);

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollMargin = 100; // adjust to offset fixed headers
      const offsets = navList
        .map(({ href }) => {
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          if (!el) return null;
          return {
            id,
            top: el.getBoundingClientRect().top - scrollMargin,
          };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const visible = offsets
        .filter((section) => section.top <= 0)
        .sort((a, b) => b.top - a.top)[0];

      if (visible?.id && visible.id !== activeId) {
        setActiveId(visible.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navList, activeId]);

  // Outside Click Handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navWrapperRef.current &&
        !navWrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobile Swipe to close
  useEffect(() => {
    if (!isMobile) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) {
        setIsOpen(false); // swipe left
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 z-30 flex h-full items-start"
      initial={{ x: -navWidth, opacity: 0 }}
      animate={{
        x: isOpen ? 0 : -navWidth,
        opacity: hasMeasured ? 1 : 0,
        pointerEvents: hasMeasured ? "auto" : "none",
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 1.5, ease: "easeIn", delay: 0.1 },
      }}
      ref={navWrapperRef}
    >
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="relative top-10 max-h-5/6 overflow-y-auto scrollbar-hidden flex flex-col items-start bg-cappuccino/40 backdrop-blur-xl rounded-br-xl border border-cappuccino/40 shadow-2xl"
        ref={navContentRef}
      >
        <h3 className="font-bold mx-2 my-1">Content</h3>
        {navList.map(({ title, href, hierarchy }, index) => (
          <motion.div key={index} variants={itemVariants}>
            <a
              href={href}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsOpen(false);
                }
              }}
              className="cursor-pointer block w-full"
            >
              <button
                className={`group/button flex items-center text-start mx-2 my-1 bg-transparent ${
                  hierarchy === 0 ? "text-md font-bold" : "text-sm ml-5"
                }`}
              >
                <span
                  className={`group-hover/button:text-amber-500 group-focus/button:text-amber-500 group-active/button:text-amber-500 transition duration-300 ease-in-out
            ${
              activeId === href.replace("#", "")
                ? "text-amber-500"
                : "text-cream"
            }`}
                >
                  {title}
                </span>
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <button
        onClick={handleClick}
        className="relative top-10 w-8 h-12 flex flex-col justify-center items-center bg-cappuccino/40 backdrop-blur-xl rounded-r-xl border border-cappuccino/40 py-2 z-30 shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="back"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowBack className="text-cream w-8 h-8 hover:text-amber-500 transition duration-300 ease-in-out" />
            </motion.div>
          ) : (
            <motion.div
              key="forward"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowForward className="text-cream w-8 h-8 hover:text-amber-500 transition duration-300 ease-in-out" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.nav>
  );
}
