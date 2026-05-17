"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. General Fade Up (Individual triggers to avoid getting stuck at opacity 0)
    const fadeElements = document.querySelectorAll("[data-animate='fade-up']");
    fadeElements.forEach((el) => {
      // Prevent double animation if it already ran
      if (el.classList.contains("animated-fade-up")) return;
      
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
          onComplete: () => {
            el.classList.add("animated-fade-up");
          }
        },
      });
    });

    // 2. Animated Counters (About Section)
    const counters = document.querySelectorAll("[data-counter]");
    counters.forEach((counter) => {
      const target = counter.getAttribute("data-counter");
      if (!target) return;
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        snap: { textContent: 1 },
        ease: "power1.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
      });
    });

    // 3. Decorative Line Dividers
    const lines = document.querySelectorAll("[data-animate='line']");
    lines.forEach((line) => {
      gsap.from(line, {
        scaleX: 0,
        duration: 1.2,
        transformOrigin: "left center",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
        },
      });
    });

    // 4. Subtle Parallax for Hero Background
    const heroBg = document.querySelector("#hero-bg-parallax");
    if (heroBg) {
      gsap.to(heroBg, {
        yPercent: -15,
        scrollTrigger: {
          trigger: "#hero-section",
          scrub: 1.5,
          start: "top top",
          end: "bottom top",
        },
      });
    }

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
