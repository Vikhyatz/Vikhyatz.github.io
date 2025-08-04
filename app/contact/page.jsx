"use client";
import { useState } from "react";
import { CommandPalette } from "../../components/CommandPalette";
import { AnimatePresence, motion } from 'framer-motion';

import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";


export default function Projects() {

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
                                <h1 className="text-2xl sm:text-2xl md:text-4xl text-[#c7c7c7] font-bold flex items-center mb-2">$ ssh user@vikhyat.dev</h1>
                                <p className="text-xl text-[#777777] drop-shadow-sm max-md:text-center">
                                    Estabilish Connection...
                                </p>
                                <p className="text-xl text-[#777777] drop-shadow-sm text-center max-md:text-center mt-8 p-4">
                                    Feel free to reach out to me via email or follow me on my social media accounts.
                                </p>

                                <div className="backdrop-blur-md bg-white/5 border border-white/30 shadow-lg flex flex-col p-6 py-10 gap-6 w-full max-w-2xl mx-auto items-center rounded-xl mt-8 transition-transform duration-300">
                                    <a href="mailto:vikhyat@example.com" className="flex items-center gap-4 text-[#c7c7c7] hover:text-white transition duration-300">
                                        <FaEnvelope size={30} className="text-[#c7c7c7]" />
                                        <span className="text-lg">vikhyatgupta61@gmail.com</span>
                                    </a>

                                    <a href="https://github.com/vikhyatz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#c7c7c7] hover:text-white transition duration-300">
                                        <FaGithub size={30} className="text-[#c7c7c7]" />
                                        <span className="text-lg">github.com/vikhyatz</span>
                                    </a>

                                    <a href="https://www.linkedin.com/in/vikhyat-gupta-933450246/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#c7c7c7] hover:text-white transition duration-300">
                                        <FaLinkedin size={30} className="text-[#c7c7c7]" />
                                        <span className="text-lg">linkedin.com/in/vikhyat</span>
                                    </a>

                                    <p className="flex items-center gap-4 text-[#c7c7c7] hover:text-white transition duration-300">
                                        <FaPhoneAlt size={30} className="text-[#c7c7c7]" />
                                        <span className="text-lg">+91 769-678-5543</span>
                                    </p>
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
