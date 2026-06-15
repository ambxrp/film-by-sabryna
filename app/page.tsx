import Link from "next/link";

// Helper to generate film sprockets
  const Sprockets = () => (
    <div className="flex justify-between w-full px-2 overflow-hidden gap-3 opacity-60">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="w-4 h-5 bg-filmCream rounded-[2px] flex-shrink-0"></div>
      ))}
    </div>
  );

export default function Home() {
  

  return (
    <div className="w-full bg-filmCream pb-12 pt-24">

      {/* Promotional Announcement Banner */}
      <div className="w-full bg-filmTaupe text-filmCream py-3 px-6 flex justify-center items-center relative z-50">
        <p className="text-[10px] font-mono uppercase tracking-widest text-center flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span>Now Booking: Summer Moments</span>
          <Link href="/promo" className="border-b border-filmCream/50 hover:border-filmCream hover:text-filmBlack transition-colors pb-0.5">
            View Details &rarr;
          </Link>
        </p>
      </div>
      
      {/* 1. HERO SECTION (Untouched - Visual Anchor) */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative">
          <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[10px] font-mono tracking-widest uppercase text-filmTaupe rotate-180" style={{ writingMode: 'vertical-rl' }}>
            <span>Iso 400</span>
            <span className="mb-24">35mm</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-filmBlack leading-[1.1]">
            summer portraits, <br />
            couples <span className="text-filmBeige italic font-serif text-6xl md:text-8xl">&amp;</span> family <br />
            photography
          </h1>
          
          <div className="space-y-4">
            <div className="w-12 h-[1px] bg-filmBlack"></div>
            <p className="text-xs font-mono uppercase tracking-widest text-filmBlack">
              Timeless images. Real moments. <br /> Filmed with heart.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3]">
          <div className="w-full h-full bg-filmTaupe/30 border border-filmBlack/10 relative overflow-hidden" 
               style={{ borderRadius: '6rem 6rem 0 0' }}>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono uppercase text-filmTaupe">
              [ Hero Image Placeholder ]
            </div>
          </div>
          <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-filmBeige mix-blend-multiply"></div>
        </div>
      </section>

      {/* 2. FILM STRIP PORTFOLIO */}
      <section className="w-full bg-[#0a0a0a] text-filmCream py-4 flex flex-col gap-4 relative overflow-hidden border-y-[6px] border-filmBlack">
        <div className="flex justify-between px-6 text-[9px] font-mono tracking-widest uppercase text-filmTaupe mb-2">
          <span>Film By Sabryna</span>
          <span>35mm</span>
          <span>Iso 400</span>
        </div>
        <Sprockets />

        <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          {['Singles', 'Couples', 'Families'].map((category, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-full aspect-video bg-filmCream/10 rounded-sm flex items-center justify-center border border-white/5">
                <span className="text-xs font-mono uppercase text-filmTaupe">[ {category} Image ]</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase px-2">
                <span>{category}</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        <Sprockets />
        <div className="flex justify-around px-6 text-[9px] font-mono text-filmBeige mt-2">
          <span>11A &#9654;</span>
          <span>12</span>
          <span>13</span>
        </div>
      </section>

      {/* 3. PACKAGES TEASER SECTION (Simplified) */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">Session Packages</p>
          <h2 className="text-4xl md:text-5xl font-light lowercase">choose your <br /> session</h2>
          <div className="w-8 h-[1px] bg-filmBlack"></div>
          <p className="text-xs font-mono tracking-widest uppercase py-4">Tailored experiences for every milestone.</p>
          <Link href="/packages" className="inline-block border-b border-filmBlack pb-1 text-xs font-mono text-filmBlack uppercase tracking-widest hover:text-filmTaupe hover:border-filmTaupe transition">
            View Investment Guide &rarr;
          </Link>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Mini', subtitle: 'The Essentials', price: 'Starting at $85' },
            { title: 'Standard', subtitle: 'The Story', price: 'Starting at $135', popular: true },
            { title: 'Family', subtitle: 'The Keepsake', price: 'Starting at $185' }
          ].map((pkg, idx) => (
            <div key={idx} className={`relative bg-[#f8f6f0] border rounded-lg p-6 flex flex-col justify-between h-[250px] shadow-sm ${pkg.popular ? 'border-filmBeige shadow-xl transform md:-translate-y-4' : 'border-filmTaupe/20'}`}>
              
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-filmBeige text-white text-[9px] font-mono uppercase tracking-widest py-1 px-4 rounded-full">Most Popular</div>
              )}

              <div className="space-y-4 relative mt-4">
                <div className="pl-4 border-l border-filmTaupe/20">
                  <h3 className="text-xl font-light tracking-widest">{pkg.title}</h3>
                  <p className="font-serif italic text-sm text-filmTaupe">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="border-t border-filmTaupe/20 pt-4 flex justify-between items-center">
                 <p className="text-sm font-light text-filmBlack/80">{pkg.price}</p>
                 <Link href="/packages" className="text-filmTaupe text-[10px] font-mono uppercase tracking-widest">Details &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT TEASER & CTA */}
      <section className="bg-[#111111] text-filmCream rounded-tr-[100px] mt-12 py-32 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center space-y-8 z-10 relative">
           <div className="w-32 h-32 rounded-full bg-filmTaupe/20 flex items-center justify-center border border-filmTaupe/40 mb-4">
              <span className="text-[10px] font-mono uppercase text-filmTaupe text-center">Sabryna<br/>Portrait</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-light lowercase">your story, unfiltered.</h2>
           <p className="font-light text-sm text-filmCream/80 max-w-lg leading-relaxed">
              I find beauty in the little in-between moments and believe your story deserves to be remembered just as it is.
           </p>
           <div className="flex gap-8 pt-8">
             <Link href="/about" className="text-[10px] font-mono tracking-widest uppercase border-b border-filmTaupe pb-1 hover:text-filmCream transition">
                Meet Sabryna
             </Link>
             <Link href="/contact" className="text-[10px] font-mono tracking-widest uppercase border-b border-filmBeige pb-1 hover:text-filmCream transition text-filmBeige">
                Send to the Lab &rarr;
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}