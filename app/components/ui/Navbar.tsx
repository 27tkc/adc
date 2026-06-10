"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 z-50 w-[80%]  rounded-4xl shadow-md backdrop-blur-MD left-1/12">
      <div className="mx-auto px-3 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-black"
        >
          <Image
            src="/logo.png"
            alt="ADC Logo"
            width={30}
            height={30}
            className="inline-block  ml-2"
          />
          <p className="text-lg font-extralight text-black font-sans ">
            AMIT DENTAL CLINIC
          </p>
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4 flex gap-6 font-sans text-sm">
          <Link
            href="/"
            className="text-gray-900 hover:text-blue-200 tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-900 hover:text-blue-200 tracking-wide"
          >
            Services
          </Link>
          <Link
            href="/doctors"
            className="text-gray-900 hover:text-blue-200 tracking-wide"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 hover:text-blue-200 tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
