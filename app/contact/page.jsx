"use client";
import { useState, useEffect } from "react";
import { CommandPalette } from "../../components/CommandPalette";
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const contactLines = [
    {
        icon: FaEnvelope,
        cmd: "cat email.txt",
        label: "vikhyatgupta61@gmail.com",
        href: "mailto:vikhyatgupta61@gmail.com",
    },
    {
        icon: FaGithub,
        cmd: "open github",
        label: "github.com/vikhyatz",
        href: "https://github.com/vikhyatz",
    },
    {
        icon: FaLinkedin,
        cmd: "open linkedin",
        label: "linkedin.com/in/vikhyat",
        href: "https://www.linkedin.com/in/vikhyat-gupta-933450246/",
    },
    {
        icon: FaPhoneAlt,
        cmd: "cat phone.txt",
        label: "+91 769-678-5543",
        href: null,
    },
];

export default function Projects() {
    const [showPalette, setShowPalette] = useState(false);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setConnected(true), 900);
        return () => clearTimeout(t);
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

                            {/* Single terminal window wraps everything */}
                            <div className="w-full max-w-2xl mx-auto rounded-lg border border-white/15 bg-[#0d1117]/70 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden font-mono">

                                {/* Title bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    <span className="ml-3 text-xs text-[#666] tracking-wide">
                                        user@vikhyat.dev — contact.sh
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 sm:p-8 flex flex-col gap-6">

                                    {/* Boot / connection block */}
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#e6e6e6] font-bold">
                                            <span className="text-emerald-400/80">$</span> ssh user@vikhyat.dev
                                        </h1>
                                        <p className="text-sm sm:text-base text-[#777777] pl-4">
                                            {connected ? (
                                                <span className="text-emerald-400/80">
                                                    Connection established.
                                                </span>
                                            ) : (
                                                <span>
                                                    Establishing connection<span className="animate-pulse">...</span>
                                                </span>
                                            )}
                                        </p>
                                        {connected && (
                                            <p className="text-sm sm:text-base text-[#777777] pl-4">
                                                Feel free to reach out via email or follow me on my socials.
                                            </p>
                                        )}
                                    </div>

                                    {/* Divider, like output separating sections */}
                                    <div className="h-px w-full bg-white/10" />

                                    {/* Contact lines */}
                                    <div className="flex flex-col gap-4">
                                        {contactLines.map(({ icon: Icon, cmd, label, href }) => {
                                            const Wrapper = href ? "a" : "div";
                                            return (
                                                <Wrapper
                                                    key={cmd}
                                                    {...(href
                                                        ? { href, target: "_blank", rel: "noopener noreferrer" }
                                                        : {})}
                                                    className="group flex flex-col gap-1 text-[#c7c7c7]"
                                                >
                                                    <span className="text-sm text-[#5c6370]">
                                                        <span className="text-emerald-400/70">➜</span> ~ {cmd}
                                                    </span>
                                                    <span className="flex items-center gap-3 pl-4 group-hover:text-white transition-colors duration-300">
                                                        <Icon size={18} className="text-[#888] group-hover:text-emerald-400 transition-colors duration-300" />
                                                        <span className="text-base">{label}</span>
                                                    </span>
                                                </Wrapper>
                                            );
                                        })}

                                        <div className="flex items-center gap-2 text-sm text-[#5c6370] pt-2">
                                            <span className="text-emerald-400/70">➜</span> ~
                                            <span className="inline-block w-2 h-4 bg-[#c7c7c7] animate-blink" />
                                        </div>
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