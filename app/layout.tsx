import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation"; // Import the new component
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
        
        {/* Subtle Film Strip Edges */}
        <div className="fixed inset-0 pointer-events-none z-30 flex justify-between px-4 md:px-12">
          <div className="h-full w-[1px] bg-filmTaupe/30 relative flex items-center">
            <span className="absolute -left-3 top-1/4 -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase text-filmTaupe whitespace-nowrap">
              Iso 400 // 35mm Format
            </span>
          </div>
          <div className="h-full w-[1px] bg-filmTaupe/30 relative flex items-center">
            <span className="absolute -right-3 bottom-1/4 -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase text-filmTaupe whitespace-nowrap">
              Sabryna_Archive_2026
            </span>
          </div>
        </div>

        {/* Drop in the new Client-Side Navigation */}
        <Navigation />

        <main className="relative z-10">{children}</main>

        {/* Editorial Footer */}
        <footer className="relative z-10 w-full bg-filmCream border-t border-filmTaupe/30 py-12 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
                &copy; {new Date().getFullYear()} Film by Sabryna. All rights reserved.
              </p>
              <p className="text-[9px] font-mono uppercase tracking-widest text-filmTaupe/70 mt-1">
                San Antonio, TX // Sole Proprietorship
              </p>
            </div>
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