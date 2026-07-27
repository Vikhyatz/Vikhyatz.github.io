"use client";
import { useEffect, useState } from "react";
import { CommandPalette } from "../../components/CommandPalette";
import { AnimatePresence, motion } from 'framer-motion';

import { FaReact, FaNodeJs, FaPython, FaGithub, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiMongodb, SiPostman, SiExpress } from 'react-icons/si';
import { ImGit } from "react-icons/im";
import { IoLogoVercel } from "react-icons/io5";
import { TbSql } from "react-icons/tb";

export default function Home() {
    const [activeButton, setActiveButton] = useState("frontend");

    const categorizedSkills = {
        frontend: [
            { icon: <FaReact size={32} className="text-[#61DAFB]" />, name: "react" },
            { icon: <SiNextdotjs size={32} className="text-white" />, name: "next.js" },
            { icon: <SiTailwindcss size={32} className="text-[#38BDF8]" />, name: "tailwind" },
            { icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, name: "javascript" },
        ],
        backend: [
            { icon: <FaNodeJs size={32} className="text-[#339933]" />, name: "node.js" },
            { icon: <SiExpress size={32} className="text-white" />, name: "express" },
            { icon: <SiMongodb size={32} className="text-[#47A248]" />, name: "mongodb" },
            { icon: <TbSql size={32} className="text-[#00758F]" />, name: "sql" },
            { icon: <FaPython size={32} className="text-[#3776AB]" />, name: "python" },
        ],
        tools: [
            { icon: <ImGit size={32} className="text-[#F05032]" />, name: "git" },
            { icon: <SiPostman size={32} className="text-[#FF6C37]" />, name: "postman" },
            { icon: <IoLogoVercel size={32} className="text-white" />, name: "vercel" },
            { icon: <FaNpm size={32} className="text-[#CB3837]" />, name: "npm" },
            { icon: <FaGithub size={32} className="text-white" />, name: "github" },
        ]
    };

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
                    <main className="h-screen flex items-center justify-center w-full px-4 mt-10">
                        <div className="z-10 w-full flex justify-center">

                            {/* Terminal window */}
                            <div className="w-full max-w-2xl mx-auto rounded-lg border border-white/15 bg-[#0d1117]/70 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden font-mono">

                                {/* Title bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    <span className="ml-3 text-xs text-[#666] tracking-wide">
                                        user@vikhyat.dev — skills.sh
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 sm:p-8 flex flex-col gap-6">

                                    <h1 className="text-xl sm:text-2xl md:text-3xl text-[#e6e6e6] font-bold">
                                        <span className="text-emerald-400/80">$</span> ls /Skills
                                    </h1>

                                    {/* Tabs styled like directory flags */}
                                    <div className="flex flex-wrap gap-2 pl-4">
                                        {["frontend", "backend", "tools"].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setActiveButton(type)}
                                                className={`px-4 py-1.5 text-sm rounded border transition-all duration-150 cursor-pointer ${
                                                    activeButton === type
                                                        ? "border-emerald-400/60 text-emerald-400 bg-emerald-400/5"
                                                        : "border-white/10 text-[#666] hover:text-[#c7c7c7] hover:border-white/20"
                                                }`}
                                            >
                                                --{type}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="h-px w-full bg-white/10" />

                                    {/* Output line */}
                                    <div className="flex flex-col gap-1 pl-4">
                                        <span className="text-sm text-[#5c6370]">
                                            <span className="text-emerald-400/70">➜</span> ~ ls -la ./{activeButton}
                                        </span>
                                    </div>

                                    {/* Skills grid, styled as file listing tiles */}
                                    <div className="flex flex-wrap gap-4 pl-4">
                                        {categorizedSkills[activeButton].map(({ icon, name }) => (
                                            <div
                                                key={name}
                                                className="group flex flex-col items-center gap-2 w-20 sm:w-24"
                                            >
                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-emerald-400/50 group-hover:bg-emerald-400/5 transition-all duration-200">
                                                    {icon}
                                                </div>
                                                <span className="text-xs text-[#666] group-hover:text-emerald-400/80 transition-colors duration-200 truncate w-full text-center">
                                                    {name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-[#5c6370] pt-2">
                                        <span className="text-emerald-400/70">➜</span> ~
                                        <span className="inline-block w-2 h-4 bg-[#c7c7c7] animate-blink" />
                                    </div>
                                </div>
                            </div>

                            {showPalette && <CommandPalette onClose={() => setShowPalette(false)} />}
                        </div>
                    </main>
                </motion.div>
            </AnimatePresence>

            <style jsx global>{`
                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-start infinite;
                }
            `}</style>
        </>
    );
}