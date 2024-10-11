import { FaSpotify } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <GoogleAnalytics gaId="G-0ZZ1FFKEJQ" />
      <Head />
      <div className="noise w-screen h-screen absolute opacity-20 grayscale" />
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 absolute bottom-0 gap-3">
        
      </footer>
    </div>
  );
}
