"use client";
import { useEffect, useState, useRef } from "react";
import { CommandPalette } from "../../components/CommandPalette";

import { AnimatePresence, motion } from 'framer-motion';
import { LettersPullUp } from '../../components/TextAnimation'
import Granim from "granim";
import { IoIosArrowForward } from "react-icons/io";

import { FaReact, FaNodeJs, FaPython, FaGithub, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiMongodb, SiPostman, SiExpress } from 'react-icons/si';
import { ImGit } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { TbSql } from "react-icons/tb";


export default function Home() {

    const [activeButton, setActiveButton] = useState("frontend");

    const categorizedSkills = {
        frontend: [
            <FaReact size={40} className="text-[#61DAFB]" />,
            <SiNextdotjs size={40} className="text-white" />,
            <SiTailwindcss size={40} className="text-[#38BDF8]" />,
            <SiJavascript size={40} className="text-[#F7DF1E]" />
        ],
        backend: [
            <FaNodeJs size={40} className="text-[#339933]" />,
            <SiExpress size={40} className="text-white" />,
            <SiMongodb size={40} className="text-[#47A248]" />,
            <TbSql size={40} className="text-[#00758F]" />,
            <FaPython size={40} className="text-[#3776AB]" />
        ],
        tools: [
            <ImGit size={40} className="text-[#F05032]" />,
            <SiPostman size={40} className="text-[#FF6C37]" />,
            <IoLogoVercel size={40} className="text-white" />,
            <FaNpm size={40} className="text-[#CB3837]" />,
            <FaGithub size={40} className="text-white" />
        ]
    }


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

                            <div className="rounded-xl backdrop-blur-md bg-white/5 border border-white/30 shadow-lg flex flex-col p-4 sm:p-6 gap-4 md:gap-6 transition-transform duration-300 w-full max-w-4xl mx-auto items-center">

                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center">$ ls /Skills</h1>

                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                    {["frontend", "backend", "tools"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setActiveButton(type)}
                                            className={`rounded-full transition-all duration-100 shadow-lg bg-black ${activeButton === type
                                                    ? "text-white border-3 border-white"
                                                    : "text-gray-400"
                                                } hover:text-white px-4 py-2 text-sm sm:text-base md:text-[18px] cursor-pointer border-3 border-black`}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                    {categorizedSkills[activeButton].map((icon, index) => (
                                        <div
                                            key={index}
                                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-[1px] bg-gradient-to-tr from-green-400 to-blue-500"
                                        >
                                            <div className="flex items-center justify-center w-full h-full bg-[#0f172a] rounded-full">
                                                {icon}
                                            </div>
                                        </div>
                                    ))}
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