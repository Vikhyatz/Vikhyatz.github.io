"use client";
import { useState } from "react";
import { CommandPalette } from "../../components/CommandPalette";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import { AnimatePresence, motion } from 'framer-motion';

export default function Projects() {

    const certsArr = [
        {
            image: "/cert1.png",
            name: "CS50x: Introduction to Computer Science – HarvardX (edX)"
        },
        {
            image: "/cert3.png",
            name: "CS50P: Introduction to Programming with Python – HarvardX (edX)"
        },
        {
            image: "/cert2.png",
            name: "site-on-sight winners"
        },
        
    ]

    const certsLengthArr = Array.from(Array(certsArr.length).keys())

    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const [showPalette, setShowPalette] = useState(false);

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <main className="h-screen flex items-center justify-center w-full">

                        <div className="z-10 w-full flex justify-center ">

                            <div className="relative w-full max-w-4xl mx-auto mt-10 flex flex-col items-center">
                                <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold flex items-center mb-10">$ ls /Certificates</h1>

                                {/* Slider */}
                                <div ref={sliderRef} className="keen-slider rounded-xl">

                                    {certsArr.map((cert, indx) => (
                                        <div
                                            key={indx}
                                            className="keen-slider__slide flex items-center flex-col justify-center text-white text-center sm:text-lg md:text-xl"
                                        >
                                            <div className="w-11/12 sm:w-4/5 md:w-2/3 backdrop-blur-md bg-white/5 border border-white/30 shadow-lg flex flex-col p-4 sm:p-6 gap-4 md:gap-6 transition-transform duration-300">
                                                <img className="rounded-sm" src={cert.image} alt="" />
                                                <p className="ml-2 sm:ml-4 mt-2 sm:mt-3 ">{cert.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Dots */}
                                <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
                                    {certsLengthArr.map((idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                                            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-white scale-110" : "bg-gray-500"
                                                }`}
                                        ></button>
                                    ))}
                                </div>

                                {/* Arrows */}
                                <div className="w-full flex justify-between mt-4 sm:mt-8">
                                    <button
                                        onClick={() => instanceRef.current?.prev()}
                                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 sm:p-2 hover:bg-white/20 rounded-full backdrop-blur-md text-white"
                                    >
                                        <IoIosArrowBack size={30} className="sm:size-[40px]" />
                                    </button>
                                    <button
                                        onClick={() => instanceRef.current?.next()}
                                        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 sm:p-2 hover:bg-white/20 rounded-full backdrop-blur-md text-white"
                                    >
                                        <IoIosArrowForward size={30} className="sm:size-[40px]" />
                                    </button>
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
