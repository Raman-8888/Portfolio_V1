"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[5px] md:px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/raman-logo.png"
            alt="Logo"
            width={45}
            height={45}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300 whitespace-nowrap">Raman Negi</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link: any) => (
              <a
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-purple-500 transition"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }: any) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-purple-500 transition-colors" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 relative">
            <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-1 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl p-8 border-b border-[#2A0E61] flex flex-col items-center text-gray-300 md:hidden z-40"
          >
            {/* Links */}
            <div className="flex flex-col items-center gap-10 w-full mt-4">
              {NAV_LINKS.map((link: any, i: number) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.title}
                  href={link.link}
                  className="text-2xl font-medium cursor-pointer hover:text-purple-500 transition text-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 mt-12 w-full pt-8 border-t border-white/10">
              {SOCIALS.map(({ link, name, icon: Icon }: any, i: number) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  key={name}
                >
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-8 w-8 text-white hover:text-purple-500 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};