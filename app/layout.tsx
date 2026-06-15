import type { Metadata } from "next";
import Link from "next/link";
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
            <Link href="/" className="text-lg font-tracking-widest font-light lowercase text-filmBlack hover:text-filmTaupe transition">
              film by sabryna
            </Link>
            
            <nav className="flex gap-8 text-[11px] font-mono uppercase tracking-widest text-filmTaupe">
              <Link href="/" className="hover:text-filmBlack transition">01. Home</Link>
              <Link href="/about" className="hover:text-filmBlack transition">02. About</Link>
              <Link href="/contact" className="hover:text-filmBlack transition">03. Contact</Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

      </body>
    </html>
  );
}