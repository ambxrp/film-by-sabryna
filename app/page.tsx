import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 space-y-32">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
        <div className="lg:col-span-5 space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-filmBlack leading-tight">
            capturing stories <br />
            <span className="italic font-serif text-filmTaupe">through a timeless</span> lens.
          </h1>
          <p className="text-filmTaupe font-light max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="pt-4">
            
            {/* New Interactive Overlay Button */}
            <Link href="/contact" className="relative overflow-hidden group inline-block bg-filmBlack px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-lg transition-shadow hover:shadow-xl">
              <span className="relative z-10 text-filmCream group-hover:text-filmBlack transition-colors duration-500 ease-in-out">
                Book a Session
              </span>
              <div className="absolute inset-0 bg-filmBeige transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </Link>

          </div>
        </div>
        
        {/* Main Hero Visual - Organic Rounded Layout */}
        <div className="lg:col-span-7 relative flex justify-center">
          <div className="w-full max-w-lg aspect-[4/5] bg-filmTaupe/20 rounded-[3rem] overflow-hidden transform rotate-2 shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center text-filmTaupe font-mono text-sm tracking-widest uppercase">
              [ Placeholder: Hero Work Showcase ]
            </div>
          </div>
          {/* Decorative Accent Circle behind */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-filmBeige rounded-full -z-10 opacity-60 filter blur-sm"></div>
        </div>
      </section>

      {/* Featured Curated Work Grid */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h2 className="text-3xl font-light tracking-wide lowercase">selected frames_</h2>
          <span className="text-xs uppercase tracking-widest text-filmTaupe">portfolio &bull; 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1: Pill Shape */}
          <div className="space-y-4">
            <div className="w-full aspect-[3/4] bg-filmBlack/5 rounded-[4rem] overflow-hidden flex items-center justify-center border border-filmBeige/40 text-filmTaupe text-xs tracking-widest uppercase">
              [ Placement Frame 01 ]
            </div>
            <p className="text-xs font-medium tracking-wider lowercase px-4">01. editorial / concept</p>
          </div>

          {/* Item 2: Asymmetric Corner Shape */}
          <div className="space-y-4 md:translate-y-12">
            <div className="w-full aspect-[3/4] bg-filmBlack/5 rounded-t-[8rem] rounded-b-[2rem] overflow-hidden flex items-center justify-center border border-filmBeige/40 text-filmTaupe text-xs tracking-widest uppercase">
              [ Placement Frame 02 ]
            </div>
            <p className="text-xs font-medium tracking-wider lowercase px-4">02. cinematic landscape</p>
          </div>

          {/* Item 3: Soft Trapezoid Profile */}
          <div className="space-y-4">
            <div className="w-full aspect-[3/4] bg-filmBlack/5 rounded-tr-[6rem] rounded-bl-[6rem] rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden flex items-center justify-center border border-filmBeige/40 text-filmTaupe text-xs tracking-widest uppercase">
              [ Placement Frame 03 ]
            </div>
            <p className="text-xs font-medium tracking-wider lowercase px-4">03. intimate portraits</p>
          </div>
        </div>
      </section>

    </div>
  );
}