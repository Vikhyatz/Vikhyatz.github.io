"use client";
import { useEffect, useRef, useState } from "react";
import { CommandPalette } from "../../components/CommandPalette";

import { AnimatePresence, motion } from 'framer-motion';
import { annotate } from "rough-notation";



export default function Home() {

  const first = useRef()
  const first1 = useRef()
  const second = useRef()
  const third = useRef()

  useEffect(() => {
    const annotation = annotate(first.current, {
      type: "highlight",
      color: "#003153",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation3 = annotate(first1.current, {
      type: "highlight",
      color: "#003153",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation2 = annotate(second.current, {
      type: "highlight",
      color: "#003153",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation4 = annotate(third.current, {
      type: "highlight",
      color: "#003153",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });


    annotation3.show()
    setTimeout(() => {
      annotation.show()
    }, 500);
    setTimeout(() => {
      annotation2.show();
    }, 1500);
    setTimeout(() => {
      annotation4.show();
    }, 2500);
  }, []);


  const [showPalette, setShowPalette] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowPalette(!showPalette);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          <main className="h-screen flex items-center justify-center w-full relative">
            <div
              className="pointer-events-none fixed inset-0 z-[1]"
              style={{
                background:
                  "radial-gradient(55% 60% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div className="z-10 w-full flex justify-center ">
              <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8">
                <img
                  className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-80 lg:h-80 object-cover md:mt-0 mt-30 mb-6 md:mb-0 md:mr-10 ring-2 ring-[#38bdf8]/50 shadow-[0_0_45px_-6px_rgba(56,189,248,0.5),0_0_80px_-20px_rgba(0,49,83,0.9)]"
                  src="/image.png"
                  alt="Profile"
                />
                <div className="text-center md:text-left max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">$ ls /About Me</h1>
                  <p className="text-base sm:text-lg md:text-xl mt-6 text-[#eef6fc]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    I’m a <span ref={first1} className="text-[#bae6fd] font-semibold">third-year college student</span> and <span ref={first} className="text-[#bae6fd] font-semibold">Fullstack developer</span> based in Punjab, India. Currently focusing on building real-world
                    projects and sharpening my skills in <span ref={second} className="text-[#bae6fd] font-semibold">Next.js, React, and backend development</span>.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl mt-4 text-[#eef6fc]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    I am passionate about creating polished web apps, working independently to grow, and <span className="text-[#bae6fd] font-semibold" ref={third}>love building fullstack systems</span> and creative clones.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl mt-6 text-[#eef6fc]/70 font-mono">3rd year BTech - CSE</p>
                  <p className="text-base sm:text-lg md:text-xl mt-2 text-[#eef6fc]/70 font-mono">Email: vikhyatgupta61@gmail.com</p>
                  <p className="text-base sm:text-lg md:text-xl mt-2 text-[#eef6fc]/70 font-mono">Punjab, India - 140603</p>
                </div>
              </div>



              {showPalette && <CommandPalette onClose={() => setShowPalette(false)} />}
            </div>
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}