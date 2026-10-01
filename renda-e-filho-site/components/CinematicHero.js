"use client";

import { useEffect, useRef, useState } from "react";

const PHOTO_HERO =
  "https://lh3.googleusercontent.com/d/1upgNJcI6XXd1oE1SyPSYkfcNyGs6qFAB=w1920";

const LINE1 = ["Uma", "família,"];
const LINE2 = ["quatro", "ofícios."];

export default function CinematicHero() {
  const [revealed, setRevealed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        if (!imgRef.current) return;
        const offset = Math.min(window.scrollY * 0.35, 160);
        imgRef.current.style.transform = `translateY(${offset}px) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[560px] flex items-end overflow-hidden">
      <img
        ref={imgRef}
        src={PHOTO_HERO}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c10] via-[#0d0c10]/55 to-[#0d0c10]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c10]/40 via-transparent to-transparent" />

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div
          className="flex items-center gap-3 mb-6"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#c2410c]" />
          <p className="text-sm text-[#d9c9a8]">Uma câmera, em 1986.</p>
        </div>

        <h1
          className="font-serif text-[#efe7d7] text-5xl md:text-7xl lg:text-8xl mb-8"
          style={{ lineHeight: 1.02, letterSpacing: "-0.02em" }}
        >
          <span className="block overflow-hidden">
            {LINE1.map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.28em]"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0%)" : "translateY(100%)",
                  transition:
                    "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                  transitionDelay: `${0.1 + i * 0.08}s`,
                }}
              >
                {word}
              </span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {LINE2.map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.28em]"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0%)" : "translateY(100%)",
                  transition:
                    "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                  transitionDelay: `${0.26 + i * 0.08}s`,
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="max-w-md text-[#e4dcc8]"
          style={{
            lineHeight: 1.7,
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.55s",
          }}
        >
          José e Sandra começaram fotografando casamentos com o equipamento
          que tinham em casa. Marcelo cresceu nesse universo e se juntou
          naturalmente ao trabalho. Quatro décadas depois, essa mesma base
          virou quatro negócios com identidade própria.
        </p>
      </div>

      <div
        className="absolute bottom-6 right-6 md:right-10 text-[#d9c9a8]/70 text-xs tracking-widest font-mono hidden sm:block"
        style={{
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease-out",
          transitionDelay: "1s",
        }}
      >
        ROLE PARA CONHECER
      </div>
    </section>
  );
}
