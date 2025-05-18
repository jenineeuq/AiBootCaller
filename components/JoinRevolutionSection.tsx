"use client";

import Image from "next/image";
import Link from "next/link";

export function JoinRevolutionSection() {
  return (
    <section className="py-4 md:py-6 bg-primary text-white">
      <div className="st-container text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">
          Join the AIBotcaller Revolution
        </h2>


        <div className="flex flex-wrap justify-center gap-4 border-t border-white/20 pt-3">
            <Link
              href="/privacy-policy"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        <div className="mt-3 text-xs text-white/60">
          &copy; {new Date().getFullYear()} AIBotcaller AI. All rights reserved.
        </div>
      </div>
    </section>
  );
}
