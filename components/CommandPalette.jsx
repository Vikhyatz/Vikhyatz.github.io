"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FiDownload, FiFolder, FiUser } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const COMMANDS = [
  { label: "Open Home", icon: <FaHome />, path: '/' },
  { label: "Open About", icon: <FiUser />, path: '/about' },
  { label: "View Projects", icon: <FiFolder />, path: '/projects' },
  { label: "View Skills", icon: <IoMdSettings />, path: '/skills' },
  { label: "View Certifications", icon: <FaScroll />, path: '/certifications' },
  { label: "Contact Me", icon: <FaPhoneAlt />, path: '/contact' },
];

export function CommandPalette({ onClose }) {
  const Router = useRouter()
  
  useEffect(() => {
    Router.prefetch("/projects")
  }, [])
  

  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(input.toLowerCase())
  );


  // use effect to handle the keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        const cmd = filtered[selectedIndex];
        onClose();
        Router.push(`${cmd.path}`)
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered, selectedIndex]);

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center "
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white/10 backdrop-blur-md text-white rounded-xl w-[90%] max-w-md shadow-xl border border-[#38bdf8]/30"
      >
        <div className="flex items-center gap-2 p-4 border-b border-[#38bdf8]/20">
          <span className="text-[#bae6fd] font-mono">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
            placeholder="Jump to sections..."
            // autoFocus="true"
          />
        </div>
        <ul className="max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((cmd, i) => (
              <Link
                href={cmd.path}
                key={i}
                className={`flex justify-between items-center px-4 py-2 cursor-pointer transition-colors ${selectedIndex === i ? "bg-[#38bdf8]/20 text-[#bae6fd]" : "hover:bg-white/5"}`}
                onClick={() => {
                  onClose();
                }}
              >
                <div className="flex items-center gap-3">
                  <span className={selectedIndex === i ? "text-[#bae6fd]" : "text-[#38bdf8]/70"}>{cmd.icon}</span>
                  <span>{cmd.label}</span>
                </div>
              </Link>
                ))
                ) : (
                <li className="px-4 py-2 text-gray-500">No commands found.</li>
          )}

              </ul>
      </motion.div>
    </div>
  );
}