import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 md:pt-40 pb-24 relative z-10">
      
      {/* Background Metadata Accent */}
      <div className="absolute top-48 left-8 md:left-12 text-[10px] font-mono tracking-widest uppercase text-filmTaupe/40 rotate-90 origin-left hidden md:block">
        Format: 35mm // Portraiture
      </div>

      {/* 1. BIOGRAPHY SECTION */}
      <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: 7x5 Landscape Image Frame */}
        {/* Added order classes so text is on top for mobile, side-by-side for desktop */}
        <div className="lg:col-span-6 relative order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Updated to aspect-[7/5] for the precise ratio */}
          <div className="w-full aspect-[4/3] bg-filmTaupe/10 border border-filmTaupe/30 p-2 shadow-xl relative">
             <div className="w-full h-full bg-[#111111]/5 flex items-center justify-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
                  <Image
                    src="/sabryna-camera.jpg"
                    alt="Sabryna Portrait"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </span>
             </div>
             
             {/* Frame Metadata */}
             <div className="absolute -bottom-6 left-0 flex justify-between w-full text-[8px] font-mono uppercase tracking-widest text-filmTaupe">
               <span>Film By Sabryna</span>
               <span>Exp. 36</span>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-filmBeige/20 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Right Side: Biography & Text */}
        <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
              The Artist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light lowercase text-filmBlack">
              about sabryna.
            </h1>
          </div>
          
          <div className="space-y-6 text-sm font-light text-filmBlack/80 leading-relaxed max-w-xl">
            <p>
              Hi, I’m Sabryna — the girl behind film by sabryna. My love for photography started when I was young, capturing little moments just because I thought they were beautiful. Over time, that love has grown into something I want to share with others.
            </p>
            <p>
              As a developing photographer, I’m offering reasonable intro pricing while I continue to grow, learn, and build my portfolio. My goal is to create photos that feel natural, warm, and real — the kind of pictures that help you remember a season of life exactly as it felt.
            </p>
            <p>
              Whether it’s portraits, couples, or family photos, I’d love to be there to capture the moments you’ll want to look back on.
            </p>
          </div>

          <div className="pt-8 border-t border-filmTaupe/20">
            <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-filmBlack hover:text-filmTaupe transition-colors group">
              <span className="border-b border-filmBlack group-hover:border-filmTaupe pb-1 transition-colors">
                Let&apos;s Work Together
              </span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE BLACK QUOTE BLOCK */}
      <section className="mx-auto max-w-5xl px-6 py-32">
        <div className="bg-[#111111] text-filmCream p-12 md:p-24 rounded-sm relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
          
          {/* Subtle Lab Details */}
          <div className="absolute top-8 left-8 text-[10px] font-mono uppercase tracking-widest text-filmTaupe/50">
            Process // Develop
          </div>
          <div className="absolute bottom-8 right-8 text-[10px] font-mono uppercase tracking-widest text-filmTaupe/50">
            Frame_00
          </div>
          
          {/* The Quote */}
          <p className="text-2xl md:text-4xl font-light font-serif italic tracking-wide leading-relaxed max-w-3xl text-filmCream/90">
            &ldquo;Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... It remembers little things, long after you have forgotten everything.&rdquo;
          </p>
          
          {/* The Attribution */}
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="w-8 h-[1px] bg-filmTaupe/40"></div>
             <p className="text-xs font-mono uppercase tracking-widest text-filmTaupe">
               — Aaron Siskind
             </p>
          </div>
          
        </div>
      </section>

    </div>
  );
}