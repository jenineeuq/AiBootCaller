"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export function OpportunitySection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Dynamically import DotLottie to avoid server-side rendering issues
      import("@lottiefiles/dotlottie-web")
        .then(({ DotLottie }) => {
          if (canvasRef.current) {
            new DotLottie({
              autoplay: true,
              loop: true,
              canvas: canvasRef.current,
              src: "/Animation - 1746646298816.json", // Using the local JSON file
            });
          }
        })
        .catch((err) => console.error("Failed to load Lottie animation:", err));
    }
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="st-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto flex justify-center items-center">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <canvas
                  ref={canvasRef}
                  width="300"
                  height="300"
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="st-section-heading">
              Opportunity of Voice AI Technology
            </h2>
            <p className="st-section-description">
              In a world where every interaction counts, voice AI is not just a
              luxury, it's a necessity. AIBotcaller offers you the golden
              opportunity to start using Voice AI in your business, tapping into
              new growth opportunities.
            </p>
            <p className="st-section-description">
              Our cutting edge system with advanced AI is CRM Agnostic with
              automation capabilities that sets you apart in the evolving
              business landscape, solidifying your spot in the marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
