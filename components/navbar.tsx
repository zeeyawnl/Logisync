"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-transparent shadow-sm h-20">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center pl-28 ">
        <Image
          src="/logisync.png"
          alt="LogiSync"
          width={140}
          height={140}
          
        />
        
      </Link>

      {/* Right: Navigation Buttons */}
      <div className="flex items-center gap-8 pr-20">
        <Link
          href="/sign-in"
          className="text-gray-700 hover:text-blue-600 font-medium transition-duration-600 tracking-wide"
        >
          Sign In
        </Link>

        <Link
          href="/about"
          className="text-gray-700 hover:text-blue-600 font-medium transition tracking-wide"
        >
          About
        </Link>

        <a
          href="https://github.com/zeeyawnl/Logisync"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600  transition-600 text-shadow-2sm"
        >
          GitHub Repo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
