"use client";
import { useState } from "react";
import { CommandPalette } from "../../components/CommandPalette";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { IoIosArrowForward, IoIosWarning } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa"
import { LuCodeXml } from "react-icons/lu";
import { PiBirdLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { TbMathSymbols } from "react-icons/tb";
import { TbBackground } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";



import { AnimatePresence, motion } from 'framer-motion';
import { Tag } from "../../components/Tag"
import Link from "next/link";


export default function Projects() {

    const ProjectsArr = [
        {
            projectIcon: <MdRateReview className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/ReviewSync",
            projectType: "Major Project",
            title: "Review Sync",
            description: "ReviewSync is a code review platform designed to streamline and manage code review processes efficiently. It features a client-server architecture for seamless collaboration. made using Next js",
            tags: ["next.js", "monaco-editor", "mongodb", "socket.io"]
        },
        {
            projectIcon: <FaDiscord className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/discord-next",
            openLink: "https://discord-next-seven.vercel.app/",
            projectType: "Major Project",
            title: "Discord Clone",
            warning: "Sockets might not work as expected on Vercel, since it uses a serverless deployment model.",
            description: "A clone of the popular messaging and interacting application discord, with authentication, server and channel creation, settings and more, made using Next js",
            tags: ["next.js", "react", "mongodb", "socket.io"]
        },
        {
            projectIcon: <LuCodeXml className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/lab-code-sharing",
            openLink: "https://lab-code-sharing.vercel.app/",
            projectType: "Major Project",
            title: "Code Sharing",
            description: "A collaborative platform where students can save and share their code with classmates. If someone doesn’t understand a piece of code, they can get help from AI to explain it — all built with Next.js.",
            tags: ["next.js", "react", "mongodb",]
        },
        {
            projectIcon: <PiBirdLight className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/clickey-bird",
            projectType: "real-time gaming",
            title: "Clickey Bird",
            description: "Clickey Bird is a Flappy Bird–inspired multiplayer game built with Node.js. Two players compete to see who can click the most in 30 seconds — the one with the highest count wins!",
            tags: ["node", "express", "socket.io", "ejs"]
        },
        {
            projectIcon: <FaWhatsapp className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/whatsapp-clone",
            projectType: "Minor Project",
            title: "Whatsapp Clone",
            description: "A WhatsApp clone built using EJS, MongoDB, Node.js, and Express — featuring real-time messaging, user authentication, and chat storage.",
            tags: ["node", "express", "socket.io", "ejs", "authentication"]
        },
        {
            projectIcon: <FaMusic className="text-3xl sm:text-4xl md:text-[40px] ml-2 sm:ml-4" />,
            githubLink: "https://github.com/Vikhyatz/youtube-player",
            projectType: "Minor Project",
            title: "Youtube Player",
            description: "A backend music player built with Node.js and Express that uses the YouTube API to stream any YouTube video as an MP3 — ad-free.",
            tags: ["node", "express"]
        },
        {
            projectIcon: <FaGamepad className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            projectType: "Minor Project",
            title: "Maze Game",
            description: "A browser-based Maze Game built with HTML, CSS, and JavaScript, featuring a character inspired by Among Us.",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            projectIcon: <TbMathSymbols className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            projectType: "Beginner",
            title: "Determinant Calc",
            description: "A Determinant Calculator built with HTML, CSS, and JavaScript that computes the determinant of square matrices.",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            projectIcon: <TbLockPassword className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            projectType: "Beginner",
            title: "Password Gen",
            description: "A Password Generator built with HTML, CSS, and JavaScript that creates secure, random passwords based on Google's recommended password standards.",
            tags: ["HTML", "CSS", "JS"]
        },
        {
            projectIcon: <TbBackground className="text-3xl sm:text-4xl md:text-[45px] ml-2 sm:ml-4" />,
            projectType: "Beginner",
            title: "Background Gen",
            description: "A web tool built with HTML, CSS, and JavaScript that generates random backgrounds — or lets you check custom RGB values",
            tags: ["HTML", "CSS", "JS"]
        },

    ];
    const projectsLengthArr = Array.from(Array(ProjectsArr.length).keys())

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
                    <main className="min-h-screen flex items-center justify-center w-full px-3 sm:px-0 pt-24 pb-10 sm:pt-16">

                        <div className="z-10 w-full flex justify-center">

                            <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center mb-4 sm:mb-6">$ ls /Projects</h1>

                                {/* Slider */}
                                <div ref={sliderRef} className="keen-slider rounded-xl">
                                    {ProjectsArr.map((project, idx) => (
                                        <div
                                            key={idx}
                                            className="keen-slider__slide flex items-center flex-col justify-center text-white text-base sm:text-lg md:text-xl"
                                        >
                                            <div className="w-full sm:w-4/5 md:w-2/3 backdrop-blur-2xl bg-white/5 border border-white/30 shadow-lg flex flex-col p-4 sm:p-6 gap-3 sm:gap-4 md:gap-6 transition-transform duration-300 rounded">

                                                {/* Top Row: Icon and Links */}
                                                <div className="flex justify-between w-full items-center">
                                                    {project.projectIcon}
                                                    <div className="flex gap-3 sm:gap-5 mr-2 sm:mr-8">
                                                        {project.openLink && <Link href={project.openLink}><FiExternalLink className="text-xl sm:text-3xl md:text-4xl" /></Link>}
                                                        {project.githubLink && <Link href={project.githubLink}><LuGithub className="text-xl sm:text-3xl md:text-4xl" /></Link>}
                                                    </div>
                                                </div>

                                                {/* Project Type Tag */}
                                                <span className="rounded-full w-fit transition-all duration-100 bg-[#111D2E] text-[#4493f8] hover:bg-[#1F6FEB] hover:text-white px-2.5 py-1 text-xs sm:text-base md:text-[18px] ml-2 sm:ml-4 mt-3 sm:mt-6">
                                                    {project.projectType}
                                                </span>

                                                {/* Heading */}
                                                <h1 className="text-xl sm:text-3xl md:text-4xl ml-2 sm:ml-4">{project.title}</h1>

                                                {/* Description */}
                                                <p className="ml-2 sm:ml-4 mt-1 sm:mt-3 w-full sm:w-4/5 text-sm sm:text-lg md:text-xl leading-relaxed">
                                                    {project.description}
                                                </p>

                                                {/* Warning */}
                                                {project.warning && (
                                                    <div className="mt-2 sm:mt-5 rounded-xl border border-red-500/20 bg-[#13090a] px-3 py-2.5 sm:px-4 sm:py-3 font-mono">
                                                        <div className="flex items-center gap-2">
                                                            <IoIosWarning className="text-red-400 text-base sm:text-lg shrink-0" />
                                                            <span className="text-red-300 text-xs sm:text-base">
                                                                Warning
                                                            </span>
                                                        </div>
                                                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-300 leading-5 sm:leading-6">
                                                            {project.warning}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Tags */}
                                                <div className="ml-2 sm:ml-4 flex gap-1.5 sm:gap-2 my-3 sm:my-10 flex-wrap w-full sm:w-4/5">
                                                    {project.tags.map((tag, indx) => (
                                                        <Tag name={tag} key={indx} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Dots */}
                                <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
                                    {projectsLengthArr.map((idx) => (
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
                                        className="absolute top-1/2 -left-1 sm:left-0 transform -translate-y-1/2 p-1 sm:p-2 hover:bg-white/20 rounded-full backdrop-blur-md text-white"
                                        aria-label="Previous project"
                                    >
                                        <IoIosArrowBack className="text-2xl sm:text-4xl" />
                                    </button>
                                    <button
                                        onClick={() => instanceRef.current?.next()}
                                        className="absolute top-1/2 -right-1 sm:right-0 transform -translate-y-1/2 p-1 sm:p-2 hover:bg-white/20 rounded-full backdrop-blur-md text-white"
                                        aria-label="Next project"
                                    >
                                        <IoIosArrowForward className="text-2xl sm:text-4xl" />
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