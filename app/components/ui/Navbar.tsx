"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-8 z-50 w-[80%]  rounded-4xl shadow-md backdrop-blur-md left-1/12 overflow-hidden">
      <div className="mx-auto px-3 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-white"
        >
          <Image
            src="/logo.png"
            alt="ADC Logo"
            width={32}
            height={32}
            className="inline-block  ml-2"
          />
          <p className="text-xl font-extralight text-white font-sans tracking-wide">
            ADC
          </p>
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4 flex gap-6 font-sans text-sm">
          <Link
            href="#hero"
            className="text-white hover:text-blue-200 tracking-wide"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-blue-200 tracking-wide"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-blue-200 tracking-wide"
          >
            About us
          </Link>
          <Link
            href="#footer"
            className="text-white hover:text-blue-200 tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
