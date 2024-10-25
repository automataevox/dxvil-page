import { GoogleAnalytics } from '@next/third-parties/google'
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import { Footer } from "./footer";

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
      <Footer />
    </div>
  );
}
