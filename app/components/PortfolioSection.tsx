"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // This effect creates a continuous scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the first set of logos to create a seamless loop
    const content = Array.from(scrollContainer.children);
    content.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Set the animation duration based on the number of logos
    const scrollWidth = scrollContainer.scrollWidth;
    const duration = scrollWidth / 50; // Adjust speed here

    // Apply the animation
    scrollContainer.style.animationDuration = `${duration}s`;
  }, []);

  // Sample company logos (replace with actual client logos)
  const companyLogos = [
    { name: "Company 1", logo: "/placeholder.svg" },
    { name: "Company 2", logo: "/placeholder.svg" },
    { name: "Company 3", logo: "/placeholder.svg" },
    { name: "Company 4", logo: "/placeholder.svg" },
    { name: "Company 5", logo: "/placeholder.svg" },
    { name: "Company 6", logo: "/placeholder.svg" },
    { name: "Company 7", logo: "/placeholder.svg" },
    { name: "Company 8", logo: "/placeholder.svg" },
  ];

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text inline-block mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've had the privilege of working with over 100+ companies
            worldwide, including many brands you already know and trust.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden gradient-bg py-16">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-primary/90 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-accent/90 to-transparent"></div>

        {/* Scrolling logos container */}
        <div
          ref={scrollRef}
          className="flex space-x-16 animate-scroll"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="bg-white/90 rounded-lg p-6 w-40 h-24 flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={100}
                  height={50}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
