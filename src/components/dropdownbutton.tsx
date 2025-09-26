"use client";

import Link from "next/link";
import { useEffect, useRef, useState, ReactNode, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type DropdownOption = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  disabled?: boolean;
};

export type DropdownButtonProps = {
  children: ReactNode;
  options: DropdownOption[];
  closeOnSelect?: boolean;
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  align?: "left" | "right";
  ariaLabel?: string;
};

export default function DropdownButton({
  children,
  options,
  closeOnSelect = true,
  className = "",
  menuClassName = "",
  itemClassName = "",
  align = "left",
  ariaLabel,
}: DropdownButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLButtonElement | null>(null);

  // Framer Motion variants
  const menuVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 420, damping: 30, mass: 0.6 },
    },
    exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.12 } },
  } as const;

  const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 4 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 32, mass: 0.5 },
    },
  } as const;

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent | (KeyboardEventInit & { key: string })) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey as any);
    return () => window.removeEventListener("keydown", onKey as any);
  }, [open]);

  // Focus first item when menu opens
  useEffect(() => {
    if (open && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [open]);

  function onButtonKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    }
  }

  const commonItemClasses =
    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/60 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className={
          "cursor-pointer group/button bg-linear-to-r from-red-400 to-amber-400 px-2 py-1 rounded-full flex items-center transition-transform duration-300 hover:scale-105 hover:drop-shadow-xl"
        }
      >
        <p className="text-dark-choco">{children}</p>
        <svg
          className="ml-2 h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#4e3931"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      <AnimatePresence>
        {/* Menu */}
        {open && (
          <motion.div
            role="menu"
            aria-orientation="vertical"
            className={`
            absolute z-50 mt-2 w-full rounded-xl shadow-lg focus:outline-none
            ${align === "right" ? "right-0" : "left-0"}
            bg-cappuccino text-cream ${menuClassName}
          `}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
          >
            <motion.ul
              className="py-2"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={listVariants}
            >
              {options.map((opt, i) => {
                const content = <p className="truncate">{opt.label}</p>;
                const classes = `${commonItemClasses} ${itemClassName}`;

                const handleActivate = () => {
                  if (opt.onClick) opt.onClick();
                  if (closeOnSelect) setOpen(false);
                };

                const itemProps = {
                  role: "menuitem" as const,
                  className: classes,
                  onClick: handleActivate,
                  ref: i === 0 ? firstItemRef : undefined,
                };

                return (
                  <motion.li key={i} className="px-2" variants={itemVariants}>
                    {opt.href ? (
                      opt.download ? (
                        <a
                          href={opt.href}
                          download
                          onClick={handleActivate}
                          className="block"
                        >
                          <button
                            type="button"
                            {...itemProps}
                            disabled={opt.disabled}
                          >
                            {content}
                          </button>
                        </a>
                      ) : (
                        <Link
                          href={opt.href}
                          onClick={handleActivate}
                          className="block"
                        >
                          <button
                            type="button"
                            {...itemProps}
                            disabled={opt.disabled}
                          >
                            {content}
                          </button>
                        </Link>
                      )
                    ) : (
                      <button
                        type="button"
                        {...itemProps}
                        disabled={opt.disabled}
                      >
                        {content}
                      </button>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
