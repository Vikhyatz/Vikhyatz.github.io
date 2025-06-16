"use client";
import { useEffect, useState, useRef } from "react";
import { CommandPalette } from "../components/CommandPalette";

import { AnimatePresence, motion } from 'framer-motion';
import { LettersPullUp } from '../components/TextAnimation'
import Granim from "granim";

// rough notation
import { annotate } from "rough-notation";



export default function Home() {

  const ref = useRef(null)
  const ref2 = useRef(null)

  // rough notation configuration
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: "highlight",
        color: "black",
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
        color: "black",
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

  // granim configurations
  useEffect(() => {
    new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ['#0f2027', '#203a43'],
            ['#141e30', '#243b55'],
            ['#232526', '#414345'],
            ['#000000', '#434343'],
          ]
        }
      }
    });

  }, [])


  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={typeof window !== 'undefined' ? window.location.pathname : 'server'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <main className="min-h-screen flex items-center justify-center text-center relative">

            {/* granim canvas */}
            <canvas className="w-full h-full fixed inset-0 z-0" id="granim-canvas"></canvas>

            {/* hero content */}
            <div className="z-10 w-full flex flex-col items-center justify-center px-4 pt-32 max-md:pt-28">
              <LettersPullUp text="Vikhyat gupta" />
              <div className="text-xl text-[#777777] md:w-2xl w-full max-w-lg drop-shadow-sm max-md:text-base mt-10">
                <div ref={ref} className="text-center text-wrap">
                  a developer who loves crafting sleek,
                </div>
                <div ref={ref2} className="text-center text-wrap">
                  functional web experiences.
                </div>
                <span className="block">Explore my work, skills, and passion for building things that just feel right.</span>
              </div>
              <p className="text-xl text-[#777777] drop-shadow-sm max-md:text-base mt-10">
                Press <span className="font-mono">⌘K</span> / <span className="font-mono">Ctrl+K</span> to begin
              </p>
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}