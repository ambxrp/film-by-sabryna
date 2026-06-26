import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // Increased pt-24 to pt-32 to account for the taller fixed header
    <div className="w-full bg-filmCream pb-12 pt-32">
      
      {/* 1. HERO SECTION (Centered & Editorial) */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8 relative">
        <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest uppercase text-filmTaupe mb-4">
          <span>Iso 400</span>
          <span className="w-12 h-[1px] bg-filmTaupe/40"></span>
          <span>35mm</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-filmBlack leading-[1.1]">
          summer portraits, <br />
          couples <span className="text-filmBeige italic font-serif text-6xl md:text-8xl">&amp;</span> family <br />
          photography
        </h1>
        
        <div className="space-y-6 flex flex-col items-center pt-8">
          <div className="w-12 h-[1px] bg-filmBlack"></div>
          <p className="text-xs font-mono uppercase tracking-widest text-filmBlack">
            Timeless images. Real moments. <br /> Filmed with heart.
          </p>
        </div>
      </section>

      {/* 2. PACKAGES TEASER SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center border-t border-filmTaupe/20">
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
                 <Link href="/packages" className="text-filmTaupe text-[10px] font-mono uppercase tracking-widest hover:text-filmBlack transition-colors">Details &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT TEASER & CTA */}
      <section className="bg-[#111111] text-filmCream rounded-tr-[100px] mt-12 py-32 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center space-y-8 z-10 relative">
            
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-filmTaupe/20 border border-filmTaupe/40 mb-4">
              <Image
               src="/sabryna_headshot.jpg"
               alt="Sabryna Portrait"
               fill
               sizes="128px"
               quality={100}
               unoptimized
               priority
               className="object-cover object-[45%_center]"
              />
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