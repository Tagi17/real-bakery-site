"use client";

import "../globals.css";

import React, { useEffect, useRef, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/legacy/image";
import Link from "next/link";
import clsx from "clsx";
import logo from "../logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <div className="">
      <nav className="max-w-6xl mx-auto flex px-4 py-6 items-center justify-between">
        <div className="flex items-center w-full relative">
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>

          <div className="flex-1"></div>

          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer text-center tracking-widest custom-padding">
              Celestine Crunch
            </div>
          </Link>

          <div className="flex-1"></div>
        </div>

        {/* <div className="md:hidden w-6 h-6"></div> */}
        <div className="mt-8 md:mt-12"></div>
      </nav>

      {/* Navbar links for larger screens */}
      <div className="max-w-6xl mx-auto px-4 py-2 md:flex items-center justify-center hidden space-x-4">
        <Link href="/about">
          <div className="text-lg hover:text-[#827a7d] cursor-pointer py-1">
            About
          </div>
        </Link>
        <Link href="/order">
          <div className="text-lg hover:text-[#827a7d] cursor-pointer py-1">
            Order
          </div>
        </Link>
        <Link href="/contact">
          <div className="text-lg hover:text-[#827a7d] cursor-pointer py-1">
            Contact 
          </div>
        </Link>
      </div>

      {/* Sidebar menu for mobile */}
      <div
        className={clsx(
          "fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-transform duration-300 ease-in-out z-50 md:hidden",
          isOpen && "translate-x-0"
        )}
      >
        <div className="text-black bg-[#fcf6e8] flex-col absolute left-0 top-0 h-full p-8 gap-8 z-50 w-3/4 flex">
          <button
            onClick={toggleMenu}
            className="text-black text-3xl cursor-pointer self-end"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="w-full max-w-md mx-auto" onClick={closeMenu}>
            <Link href="/about">
              <div className="text-3xl hover:text-[#827a7d] cursor-pointer py-9 border-t" onClick={closeMenu}>
                About
              </div>
            </Link>
            <Link href="/order">
              <div className="text-3xl hover:text-[#827a7d] cursor-pointer py-9 border-t" onClick={closeMenu}>
                Order
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-3xl hover:text-[#827a7d] cursor-pointer py-9 border-t" onClick={closeMenu}>
                Contact Us
              </div>
            </Link>
            <div className="border-t"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
