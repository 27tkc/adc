"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className=" max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-amber-300">
          My App
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4 flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link href="/doctors" className="text-gray-700 hover:text-gray-900">
            Doctors
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
