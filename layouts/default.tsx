import { FaSpotify } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

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
      <Head />
      <div className="noise w-screen h-screen absolute opacity-20 grayscale" />
      {/* <Navbar /> */}
      <main className="mix-blend-screen">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 absolute bottom-0 gap-3">
        <Link href="https://open.spotify.com/artist/1Ngynwc6bFIKGzRcOrBAnx">
          <FaSpotify size={20} />
        </Link>
        <Link href="https://twitch.tv/dxvilmusic">
          <FaTwitch size={20} />
        </Link>
        <Link href="https:/youtube.com/@dxvilmusic">
          <FaYoutube size={20} />
        </Link>
        <Link href="https://instagram.com/dxvilmusic">
          <FaInstagram size={20} />
        </Link>
        <Link href="https://music.apple.com/us/artist/dxvil/1581545014">
          <SiApplemusic size={20} />
        </Link>
      </footer>
    </div>
  );
}
