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

  return (
    <div className="">
      <nav className="max-w-6xl mx-auto px-4 py-6 items-center justify-between w-full ">
        {/* Hamburger button for mobile, positioned left */}
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

        <Link href="/">
          <div className="text-6xl font-bold cursor-pointer mx-auto flex-1 justify-center text-center tracking-widest">
            Celestine Crunch
          </div>
        </Link>

        <div className="md:hidden w-6 h-6"></div>

        {/* Navbar links for larger screens */}
        <div
          className={`md:flex items-center justify-center text-center space-x-4 hidden`}
        >
          {/* <Link href="/recipes">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Recipes
            </div>
          </Link> */}
          <Link href="/about">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              About
            </div>
          </Link>
          <Link href="/order">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Order
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-lg hover:text-green-300 cursor-pointer py-1">
              Contact Us
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

            <Link href="/recipes">
              <div className="text-3xl font-bold hover:text-green-300 cursor-pointer py-2">
                Recipes
              </div>
            </Link>
            <Link href="/about">
              <div className="text-3xl font-bold hover:text-green-300 cursor-pointer py-2">
                About
              </div>
            </Link>
            <Link href="/order">
              <div className="text-3xl font-bold hover:text-green-300 cursor-pointer py-2">
                Order
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-3xl font-bold hover:text-green-300 cursor-pointer py-2">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
