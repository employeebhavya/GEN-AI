"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Consider header scrolled after hero section (roughly 500px)
      setIsScrolled(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 py-2 w-full h-[64px] flex items-center transition-all duration-300 ${
        isScrolled ? "text-gray-800" : "text-white"
      }`}
    >
      {/* Dynamic Background with glassmorphism */}
      <div
        className={`absolute inset-0 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 border-b border-gray-200/50 shadow-lg"
            : "border-b border-white/10"
        }`}
        style={
          !isScrolled
            ? {
                background:
                  "linear-gradient(166.77deg, rgba(20, 69, 163, 0.1) 31.42%, rgba(133, 14, 128, 0.15) 99.23%, rgba(9, 41, 100, 0.1) 106.33%)",
              }
            : {}
        }
      ></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-16 w-full lg:w-auto">
            <Link href="/">
              <Image
                className={`w-[200px] h-auto object-cover transition-all duration-300 ${
                  isScrolled
                    ? "brightness-0 saturate-100 contrast-200"
                    : "brightness-100"
                }`}
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <Navigation isScrolled={isScrolled} />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <Link
              href={"/contact-us"}
              className={`px-4 py-1.5 rounded-sm cursor-pointer text-base hover:scale-105 transition duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-black"
              }`}
              style={
                !isScrolled
                  ? {
                      background:
                        "linear-gradient(250.3deg, #FEE6FF 36.49%, #DBF1FF 88.46%)",
                    }
                  : {}
              }
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
