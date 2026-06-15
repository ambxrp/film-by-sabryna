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
    <html lang="en" className="scroll-smooth">
      <body className="bg-filmCream text-filmBlack font-sans antialiased relative min-h-screen overflow-x-hidden">
        
        {/* Abstract Geometric Background Shapes - Fixed Position & GPU Accelerated */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
          <svg className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] text-filmBeige transform-gpu" viewBox="0 0 200 200" fill="currentColor">
            <path d="M45,-62C58.3,-52.4,69.1,-38.7,74.1,-23.1C79.1,-7.5,78.3,10.1,72.4,25.5C66.5,41,55.5,54.3,41.6,63.1C27.7,71.9,10.8,76.2,-4.7,82.6C-20.2,89,-34.3,97.5,-46.8,92.6C-59.3,87.7,-70.2,69.3,-76.8,51.1C-83.3,32.8,-85.4,14.7,-82.7,-2.3C-80,-19.3,-72.5,-35.2,-61.1,-46.1C-49.8,-57,-34.5,-62.9,-19.7,-67.2C-4.9,-71.5,9.4,-74.3,45,-62Z" transform="translate(100 100)" />
          </svg>
          <div className="absolute top-[40%] right-[-5%] w-[35vw] h-[35vw] bg-filmTaupe rounded-full filter blur-[80px] opacity-20 transform-gpu"></div>
          <svg className="absolute bottom-[10%] left-[15%] w-[40vw] h-[40vw] max-w-[500px] text-filmBeige/30 transform-gpu" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="50,15 90,85 10,85" className="rotate-12 transform origin-center" />
          </svg>
        </div>

        {/* Sticky Global Navigation */}
        <header className="sticky top-0 z-50 w-full bg-filmCream/80 backdrop-blur-md border-b border-filmBeige/20 transition-all duration-300">
          <div className="mx-auto max-w-7xl px-6 py-6 flex justify-between items-center">
            <Link href="/" className="text-xl font-tracking-widest font-light lowercase text-filmBlack hover:opacity-70 transition">
              film by sabryna
            </Link>
            <nav className="flex gap-8 text-sm uppercase tracking-widest text-filmTaupe">
              <Link href="/" className="relative group hover:text-filmBlack transition">
                Home
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-filmBlack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              <Link href="/about" className="relative group hover:text-filmBlack transition">
                About
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-filmBlack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              <Link href="/contact" className="relative group hover:text-filmBlack transition">
                Contact
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-filmBlack transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

        <footer className="relative z-10 py-12 text-center text-xs tracking-widest text-filmTaupe">
          <p>&copy; {new Date().getFullYear()} film by sabryna. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}