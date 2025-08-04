import "./globals.css";
import SmoothFollower from "../components/Cursor";
import NavWrapper from "../components/NavWrapper";
import GranimWrapper from "../components/GranimWrapper"

export const metadata = {
  title: "Vikhyat Gupta | Developer",
  description: "Explore Vikhyat Gupta's portfolio featuring full-stack web development projects, creative solutions, and technical skills in modern technologies like Next.js and React.",
  keywords: [
    "Vikhyat Gupta",
    "vikhyatz github",
    "Vikhyat portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "GitHub",
    "Developer Portfolio"
  ],
  metadataBase: new URL("https://vikhyatz.github.io"),
  authors: [{ name: "Vikhyat Gupta", url: "https://vikhyatz.github.io" }],
  creator: "Vikhyat Gupta",
  robots: "index, follow",
  openGraph: {
    title: "Vikhyat Gupta | Full Stack Developer",
    description: "Discover innovative web projects and skills by Vikhyat Gupta, built using modern web technologies.",
    url: "https://vikhyatz.github.io",
    siteName: "Vikhyat Gupta Portfolio",
    type: "website",
    locale: "en_IN"
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono selection:bg-fuchsia-600 selection:text-black">
        <SmoothFollower />
        <NavWrapper />
        <GranimWrapper />
        {children}
      </body>
    </html>
  );
}