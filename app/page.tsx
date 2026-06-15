import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* Frame 01: Hero Scene */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center px-8 md:px-24 pt-20 relative">
        <div className="max-w-4xl space-y-8 z-10">
          <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
            [ Frame 01 : Prologue ]
          </p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter lowercase leading-[0.9]">
            the quiet <br />
            <span className="italic font-serif text-filmTaupe ml-12">moments.</span>
          </h1>
          <div className="flex gap-6 items-center pt-8">
            <Link href="/contact" className="text-xs uppercase font-mono tracking-widest border-b border-filmBlack pb-1 hover:text-filmTaupe hover:border-filmTaupe transition">
              Commission a Session &rarr;
            </Link>
          </div>
        </div>

        {/* Cinematic Widescreen Image Placeholder */}
        <div className="absolute bottom-12 right-8 md:right-24 w-2/3 md:w-1/2 aspect-video bg-filmBlack/5 flex items-center justify-center border border-filmTaupe/20">
           <span className="text-xs font-mono tracking-widest text-filmTaupe uppercase">[ Widescreen Hero Image ]</span>
        </div>
      </section>

      {/* Frame 02: Portfolio Focus */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-center px-8 md:px-24 pt-20 relative bg-filmBlack text-filmCream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-[70vh] items-center">
          
          {/* Image Container */}
          <div className="w-full h-full bg-filmCream/5 flex items-center justify-center border border-filmTaupe/30">
            <span className="text-xs font-mono tracking-widest text-filmTaupe uppercase">[ Portrait Frame ]</span>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
              [ Frame 02 : Focus ]
            </p>
            <h2 className="text-4xl font-light lowercase">honest light.</h2>
            <p className="text-sm font-light text-filmBeige max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

        </div>
      </section>

      {/* Frame 03: Final Strip & Footer */}
      <section className="h-screen w-full snap-start snap-always flex flex-col justify-between px-8 md:px-24 pt-32 pb-12 relative">
        <div className="flex flex-col items-center text-center space-y-6 m-auto">
          <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
            [ Frame 03 : Epilogue ]
          </p>
          <h2 className="text-5xl md:text-7xl font-light lowercase tracking-tighter">
            let&apos;s create.
          </h2>
          <Link href="/contact" className="inline-block px-12 py-4 bg-filmBlack text-filmCream text-xs font-mono uppercase tracking-widest hover:bg-filmTaupe transition">
            Open Inquiry Form
          </Link>
        </div>

        <footer className="w-full flex justify-between items-end border-t border-filmTaupe/30 pt-6">
          <span className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
            Developed by Amber // {new Date().getFullYear()}
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
            End of Reel.
          </span>
        </footer>
      </section>

    </div>
  );
}