"use client"
import React from 'react'
import Link from "next/link";
import { useEffect, useState } from "react";
import { CommandPalette } from './CommandPalette';

const NavWrapper = () => {
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
        <header className="text-gray-600 backdrop-blur-2xl bg-black/80 w-full fixed top-0 left-0 z-20">
            <div className="container mx-auto flex p-4 flex-row justify-between items-center max-md:px-2">
                <Link href="/" className="flex title-font font-medium items-center text-white md:mb-0">
                    <span className="ml-3 text-3xl max-md:text-xl font-bold">Vikhyat.dev</span>
                </Link>
                <button
                    className="bg-[#777777] text-black px-4 py-2 rounded shadow-md z-20 max-md:px-2 max-md:py-1 max-md:text-sm"
                    onClick={() => setShowPalette(true)}
                >
                    cd /menu
                </button>
            </div>
        </header>
        {showPalette && <CommandPalette onClose={() => setShowPalette(false)} />}
        </>
    )
}

export default NavWrapper