"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, MouseEvent, useRef, useEffect, CSSProperties } from "react";

// Helper function for glow style calculation
const getGlowStyle = (
  buttonRect: DOMRect | null,
  mousePosition: { x: number | null; y: number | null }
): CSSProperties => {
  if (!buttonRect || mousePosition.x === null || mousePosition.y === null) {
    return { transition: "box-shadow 0.3s ease-out", boxShadow: "none" };
  }

  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const dx = mousePosition.x - buttonCenterX;
  const dy = mousePosition.y - buttonCenterY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const maxDistance = 200; // Max distance in pixels for the glow effect
  const glowColorBase = "25, 118, 210"; // RGB for #1976d2

  if (distance < maxDistance) {
    const intensity = Math.max(0, Math.min(1, 1 - distance / maxDistance));
    const spread = 5 + intensity * 10; // e.g., 5px to 15px
    const blur = 10 + intensity * 15; // e.g., 10px to 25px
    const opacity = intensity * 0.5; // Max opacity 0.5 for the glow

    return {
      boxShadow: `0 0 ${blur}px ${spread}px rgba(${glowColorBase}, ${opacity})`,
      transition: "box-shadow 0.1s ease-out",
      // Ensure the Link (<a> tag) is styled to correctly display the shadow
      display: "inline-block", // Or 'block', depending on layout needs
      borderRadius: "9999px", // Match button's border-radius for a cohesive glow
    };
  }

  return {
    boxShadow: "none",
    transition: "box-shadow 0.3s ease-out",
    display: "inline-block",
    borderRadius: "9999px",
  };
};

export function HeroSection() {
  const learnMoreButtonRef = useRef<HTMLAnchorElement>(null);

  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [learnMoreButtonRect, setLearnMoreButtonRect] =
    useState<DOMRect | null>(null);
  const [backgroundPosition, setBackgroundPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateRects = () => {
      if (learnMoreButtonRef.current) {
        setLearnMoreButtonRect(
          learnMoreButtonRef.current.getBoundingClientRect()
        );
      }
    };

    updateRects(); // Initial calculation
    window.addEventListener("resize", updateRects);
    document.addEventListener("scroll", updateRects, true); // Handles scroll changes

    return () => {
      window.removeEventListener("resize", updateRects);
      document.removeEventListener("scroll", updateRects, true);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: event.clientX, // Viewport-relative mouse coordinates
      y: event.clientY,
    });

    // Calculate parallax effect for background
    // Move background slightly in the opposite direction of mouse movement
    // Divide by large values to make the movement subtle
    const moveX = (event.clientX / 100) * -1; // Negative for opposite direction
    const moveY = (event.clientY / 100) * -1;

    setBackgroundPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: null, y: null }); // Reset glow when mouse leaves section

    // Smoothly reset background position when mouse leaves
    setBackgroundPosition({ x: 0, y: 0 });
  };

  const learnMoreGlowStyle = getGlowStyle(learnMoreButtonRect, mousePosition);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow effect */}
      {mousePosition.x !== null && mousePosition.y !== null && (
        <div
          className="pointer-events-none absolute z-10 opacity-90"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(25,118,210,0.25) 0%, rgba(25,118,210,0.1) 50%, rgba(25,118,210,0) 70%)",
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s ease-out",
            filter: "blur(5px)",
          }}
        />
      )}

      <div className="absolute inset-0 z-0">
        {/* Transparent background with subtle pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d8e0' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
            opacity: 0.3,
            transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      <div className="st-container relative z-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1976d2] mb-6 leading-tight max-w-5xl">
            Get custom made voice AI agents for your business
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-4xl">
            Downsize your staff and increase your reach at the click of a
            button. Make thousands of calls, book more appointments, and never
            miss a lead again with your very own no code 24/7 human AI agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="#your-link-here">
              <Button className="bg-[#1976d2] hover:bg-[#1565c0] text-white rounded-full font-medium px-8 py-8 text-lg shadow-lg">
                Conversational like a person. Capable like an&nbsp;AI
              </Button>
            </Link>
          </div>
          <div className="relative mt-12 w-full max-w-6xl mx-auto rounded-lg">
            <div className="absolute inset-x-0 -top-8 z-10 flex justify-center">
              <Link
                href="#explore-assistants"
                ref={learnMoreButtonRef}
                style={learnMoreGlowStyle} // Apply dynamic glow style
              >
                <Button
                  className="text-[#1976d2] border-[#1976d2] hover:bg-[#1976d2]/5 rounded-full font-medium min-w-36 px-6 py-6"
                  variant="outline"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <video
              className="rounded-lg shadow-2xl w-full h-full object-cover"
              src="/vid-dash.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
