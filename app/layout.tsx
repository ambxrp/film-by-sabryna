import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "film by sabryna",
  description: "Cinematic photography and visual storytelling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth snap-y snap-mandatory">
      <body className="bg-filmCream text-filmBlack font-sans antialiased relative min-h-screen selection:bg-filmTaupe selection:text-filmCream">
        
        {/* Subtle Film Strip Edges (Not Corny Sprockets, Just Editorial Lines) */}
        <div className="fixed inset-0 pointer-events-none z-50 flex justify-between px-4 md:px-12">
          {/* Left Edge Line & Metadata */}
          <div className="h-full w-[1px] bg-filmTaupe/30 relative flex items-center">
            <span className="absolute -left-3 top-1/4 -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase text-filmTaupe whitespace-nowrap">
              Iso 400 // 35mm Format
            </span>
          </div>

          {/* Right Edge Line & Metadata */}
          <div className="h-full w-[1px] bg-filmTaupe/30 relative flex items-center">
            <span className="absolute -right-3 bottom-1/4 -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase text-filmTaupe whitespace-nowrap">
              Sabryna_Archive_2026
            </span>
          </div>
        </div>

        {/* Minimal Floating Nav */}
        <header className="fixed top-0 z-40 w-full bg-filmCream/90 backdrop-blur-md border-b border-filmTaupe/20">
          <div className="mx-auto max-w-7xl px-8 md:px-16 py-6 flex justify-between items-center">
            {/* Replaced Text with Logo Image */}
            <Link href="/" className="hover:opacity-70 transition block relative h-8 w-40 md:h-10 md:w-48 lg:h-12 lg:w-56">
              {/* Replace 'logo.png' with your actual file name in the public folder */}
              <Image 
                src="/icon.png" 
                alt="film by sabryna logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
              {/* Fallback text just in case the image is missing during development */}
              <span className="sr-only">film by sabryna</span>
            </Link>
            
            <nav className="flex gap-8 text-[11px] font-mono uppercase tracking-widest text-filmTaupe">
              <Link href="/" className="hover:text-filmBlack transition">01. Home</Link>
              <Link href="/packages" className="hover:text-filmBlack transition">02. Packages</Link>
              <Link href="/about" className="hover:text-filmBlack transition">03. About</Link>
              <Link href="/contact" className="hover:text-filmBlack transition">04. Contact</Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

        {/* Footer / Footnote */}
        <footer className="relative z-10 w-full bg-filmCream border-t border-filmTaupe/30 py-12 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left: Copyright & Branding */}
            <div className="text-center md:text-left">
              <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
                &copy; {new Date().getFullYear()} Film by Sabryna. All rights reserved.
              </p>
              <p className="text-[9px] font-mono uppercase tracking-widest text-filmTaupe/70 mt-1">
                San Antonio, TX // Sole Proprietorship
              </p>
            </div>

            {/* Right: Legal Links */}
            <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
              <Link href="/privacy-policy" className="hover:text-filmBlack transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-filmBlack transition-colors">
                Terms & Conditions
              </Link>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}