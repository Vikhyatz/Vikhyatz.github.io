"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { LettersPullUp } from '../components/TextAnimation'


// rough notation
import { annotate } from "rough-notation";
import { useEffect, useRef } from 'react';

export default function Home() {

  const ref = useRef(null)
  const ref2 = useRef(null)


  // rough notation configuration
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: "highlight",
        color: "#003153",
        animationDuration: 1000,
        iterations: 1,
        padding: 2,
        roughness: 8,
        multiline: true
      });

      annotation.show();
    }
  }, []);

  useEffect(() => {
    if (ref2.current) {
      const annotation = annotate(ref2.current, {
        type: "highlight",
        color: "#003153",
        animationDuration: 1000,
        iterations: 1,
        padding: 2,
        roughness: 8,

      });

      setTimeout(() => {
        annotation.show();
      }, 1000);

    }
  }, []);


  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <main className="min-h-screen flex items-center justify-center text-center relative">
            <div
              className="pointer-events-none fixed inset-0 z-[1]"
              style={{
                background:
                  "radial-gradient(60% 45% at 50% 42%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* hero content */}
            <div className="z-10 w-full flex flex-col items-center justify-center px-4 pt-32 max-md:pt-28">
              <LettersPullUp text="Vikhyat gupta" />
              <div className="text-xl text-[#eef6fc]/90 md:w-2xl w-full max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] max-md:text-base mt-10">
                <div ref={ref} className="text-center text-wrap">
                  a developer who loves crafting sleek,
                </div>
                <div ref={ref2} className="text-center text-wrap">
                  functional web experiences.
                </div>
                <span className="block text-[#eef6fc]/70">Explore my work, skills, and passion for building things that just feel right.</span>
              </div>
              <p className="text-xl text-[#eef6fc]/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] max-md:text-base mt-10">
                Press{" "}
                <span className="font-mono px-1.5 py-0.5 rounded bg-[#38bdf8]/15 text-[#bae6fd] border border-[#38bdf8]/30">
                  ⌘K
                </span>{" "}
                /{" "}
                <span className="font-mono px-1.5 py-0.5 rounded bg-[#38bdf8]/15 text-[#bae6fd] border border-[#38bdf8]/30">
                  Ctrl+K
                </span>{" "}
                to begin
              </p>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}