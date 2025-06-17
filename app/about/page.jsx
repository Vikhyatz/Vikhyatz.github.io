"use client";
import { useEffect, useState, useRef } from "react";
import { CommandPalette } from "../../components/CommandPalette";

import { AnimatePresence, motion } from 'framer-motion';
import { LettersPullUp } from '../../components/TextAnimation'
import Granim from "granim";
import { annotate } from "rough-notation";
import { IoIosArrowForward } from "react-icons/io";



export default function Home() {

  const first = useRef()
  const first1 = useRef()
  const second = useRef()
  const third = useRef()

  useEffect(() => {
    const annotation = annotate(first.current, {
      type: "highlight",
      color: "#ff69b480",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation3 = annotate(first1.current, {
      type: "highlight",
      color: "#ff69b480",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation2 = annotate(second.current, {
      type: "highlight",
      color: "#ff69b480",
      animationDuration: 1000,
      iterations: 1,
      padding: 2,
      multiline: true
    });

    const annotation4 = annotate(third.current, {
      type: "highlight",
      color: "#ff69b480",
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



  useEffect(() => {
    new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ['#0f2027', '#203a43'],       // Deep teal to charcoal
            ['#141e30', '#243b55'],       // Navy to steel blue
            ['#232526', '#414345'],       // Gunmetal to dark gray
            ['#000000', '#434343'],       // Pure black to soft black
          ]
        }
      }
    });

  }, [])

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
          key={typeof window !== 'undefined' ? window.location.pathname : 'server'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <main className="h-screen flex items-center justify-center w-full">
            <canvas className="w-full h-screen absolute z-0 " id="granim-canvas"></canvas>
            <div className="z-10 w-full flex justify-center ">
              <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8">
                <img
                  className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-80 lg:h-80 object-cover mb-6 md:mb-0 md:mr-10"
                  src="/image.png"
                  alt="Profile"
                />
                <div className="text-center md:text-left max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">$ ls /About Me</h1>
                  <p className="text-base sm:text-lg md:text-xl mt-6">
                    I’m a <span ref={first1}>first-year college student</span> and <span ref={first}>Fullstack developer</span> based in Punjab, India. Currently focusing on building real-world
                    projects and sharpening my skills in <span ref={second}>Next.js, React, and backend development</span>.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl mt-4">
                    I am passionate about creating polished web apps, working independently to grow, and <span ref={third}>love building fullstack systems</span> and creative clones.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl mt-6">1st year BTech - CSE</p>
                  <p className="text-base sm:text-lg md:text-xl mt-2">Email: vikhyatgupta61@gmail.com</p>
                  <p className="text-base sm:text-lg md:text-xl mt-2">Punjab, India - 140603</p>
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