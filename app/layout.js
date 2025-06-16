// "use client"
import "./globals.css";
import SmoothFollower from "../components/Cursor";
// import Link from "next/link";
// import NavWrapper from "../components/NavWrapper"
import NavWrapper from "../components/NavWrapper";

export const metadata = {
  title: "Vikhyat.dev",
  description: "Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono selection:bg-fuchsia-600 selection:text-black">
        <SmoothFollower />
        <NavWrapper />
        {children}
      </body>
    </html>
  );
}