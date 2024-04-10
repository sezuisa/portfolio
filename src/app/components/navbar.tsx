"use client";
import React, { useState } from "react";
import { AiOutlineCamera, AiOutlineCode, AiOutlineHome } from "react-icons/ai";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navList = [
    {
      icon: (
        <AiOutlineHome className="text-2xl fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
      ),
      title: "home",
    },
    {
      icon: (
        <AiOutlineCamera className="text-2xl fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
      ),
      title: "photography",
    },
    {
      icon: (
        <AiOutlineCode className="text-2xl fill-light-choco group-hover/button:fill-extra-dark-choco group-focus/button:fill-extra-dark-choco" />
      ),
      title: "code",
    },
  ];

  return (
    <nav className="flex flex-col w-full items-center justify-between fixed z-30">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center bg-cappuccino/40 backdrop-blur-xl rounded-xl border border-cappuccino/40 p-4 mt-10 z-30 shadow-2xl lg:hidden"
      >
        <span
          className={`bg-light-choco block transition-all duration-300 ease-out 
                      h-1 w-6 rounded-sm ${
                        isOpen
                          ? "rotate-45 translate-y-1.5"
                          : "-translate-y-0.5"
                      }`}
        ></span>
        <span
          className={`bg-light-choco block transition-all duration-300 ease-out 
                      h-1 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
        ></span>
        <span
          className={`bg-light-choco block transition-all duration-300 ease-out 
                      h-1 w-6 rounded-sm ${
                        isOpen
                          ? "-rotate-45 -translate-y-1.5"
                          : "translate-y-0.5"
                      }`}
        ></span>
      </button>

      {isOpen && (
        <div className="z-20 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-extra-dark-choco/60 backdrop-blur-xl"
            tabIndex={0}
          ></div>
        </div>
      )}

      {isOpen && (
        <div className="z-30 flex flex-col items-center justify-between">
          {navList.map(({ icon, title }, index) => {
            return (
              <button
                key={index}
                className="group/button flex items-center p-3 m-3 font-medium mr-2 text-center bg-transparent rounded-xl hover:bg-gradient-to-r hover:from-red-400 hover:to-amber-400 focus:bg-gradient-to-r focus:from-red-500 focus:to-amber-500"
              >
                <span className="mr-2">{icon}</span>
                <span className="text-light-choco group-focus/button:text-extra-dark-choco">
                  {title}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div className="hidden lg:flex flex-row justify-around items-center w-3/12 bg-cappuccino/40 backdrop-blur-xl border border-cappuccino/40 rounded-xl mt-10 shadow-2xl">
        {navList.map(({ icon, title }, index) => {
          return (
            <button
              key={index}
              className="group/button bg-transparent m-1 rounded-3xl w-3/12 flex flex-col items-center hover:bg-gradient-to-r hover:from-red-400 hover:to-amber-400 active:bg-gradient-to-r active:from-red-500 active:to-amber-500"
            >
              <span className="mt-1">{icon}</span>
              <span className="text-light-choco group-hover/button:text-extra-dark-choco">
                {title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
