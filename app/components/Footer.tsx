import "../globals.css";

import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f0e8dc] text-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            {/* <h4 className="font-bold text-lg mb-2">Customer Service</h4> */}
            <h4 className="font-bold text-lg mb-2">
              &quot;Dedicated to providing the highest quality desserts&quot;
            </h4>
            <ul className="space-y-1">
              <li>
                <Link href="/refund" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/source" className="hover:underline">
                  Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center w-full mb-4 md:mb-0">
            <Image
              src="/nlogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center text-center md:text-right">
            <h4 className="font-bold text-lg mb-2">Follow Me</h4>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="https://www.instagram.com/losnazia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@losnazia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-300 pt-5">
          <p className="text-sm">© 2024 losnazia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
