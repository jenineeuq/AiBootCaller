"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/70 backdrop-blur-[2px]"
      }`}
    >
      <div className="st-container flex h-20 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="flex items-center transition-all duration-200 rounded-lg hover:bg-white hover:shadow-sm p-1"
          >
            <Image
              src="/logo-blue-nobox.png"
              alt="AIBotcaller Logo"
              width={180}
              height={45}
              className="h-11 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-primary font-medium hover:text-primary/90 transition-colors px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-700 font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            >
              Features
            </Link>
            <Link
              href="#explore-assistants"
              className="text-gray-700 font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            >
              Use Cases
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 font-medium hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="block md:hidden rounded-lg p-2 hover:bg-white hover:shadow-sm transition-all duration-200"
            title="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
