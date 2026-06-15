import Link from "next/link";

export default function Packages() {
  const packages = [
    { 
      title: 'Mini', 
      subtitle: 'The Essentials', 
      price: '$85', 
      description: 'Perfect for quick updates, maternity announcements, or short & sweet couple sessions.',
      features: ['20 minute session', '1 location', '8 edited images', 'online gallery'],
      labCode: '001'
    },
    { 
      title: 'Standard', 
      subtitle: 'The Story', 
      price: '$135', 
      description: 'The sweet spot. Enough time to get comfortable, explore a location, and capture a full narrative.',
      features: ['45 minute session', '1 location', '15 edited images', 'online gallery'],
      popular: true,
      labCode: '002'
    },
    { 
      title: 'Family', 
      subtitle: 'The Keepsake', 
      price: '$185', 
      description: 'Designed for chaos, love, and authentic connection. No rushing, just your family as you are.',
      features: ['Up to 75 minute session', '1-2 locations', 'up to 5 people', '20 edited images', 'online gallery'],
      labCode: '003'
    }
  ];

  const extras = [
    { item: 'Per extra person', price: '+$10', desc: 'each additional person is +$10' },
    // { item: 'Extra edited photo', price: '+$25', desc: '10 physical instant film polaroids handed to you on-site.' },
    { item: 'Rush Development (48 hrs)', price: '+$30', desc: 'Skip the line and get your photos in 2 days.' },
    { item: 'Extra Session Hour', price: '+$40', desc: 'For multiple distant locations or extensive outfit changes.' },
  ];

  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 pb-24 relative z-10">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-20 text-center space-y-6">
        <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
          Investment Guide
        </p>
        <h1 className="text-5xl md:text-7xl font-light lowercase tracking-tight text-filmBlack">
          transparent pricing <br />
          <span className="italic font-serif text-filmTaupe text-4xl md:text-6xl">for timeless memories.</span>
        </h1>
        <p className="text-sm font-light text-filmBlack/80 max-w-xl mx-auto leading-relaxed pt-4">
          Every session is an investment in your personal archive. No hidden fees, no complicated tiers—just honest photography and carefully developed galleries.
        </p>
      </section>

      {/* 2. THE PACKAGES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`relative bg-[#f8f6f0] border rounded-sm p-8 md:p-10 flex flex-col min-h-[500px] transition-transform hover:-translate-y-1 duration-500 ${pkg.popular ? 'border-filmBeige shadow-2xl z-10 lg:-translate-y-8 lg:hover:-translate-y-10' : 'border-filmTaupe/20 shadow-sm mt-0 lg:mt-8'}`}>
              
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-filmBeige text-filmCream text-[9px] font-mono uppercase tracking-widest py-1.5 px-6 rounded-full shadow-md">
                  Most Requested
                </div>
              )}

              {/* Package Header */}
              <div className="space-y-4 relative mb-8">
                <div className="absolute -left-10 top-12 text-[8px] font-mono tracking-widest uppercase text-filmTaupe -rotate-90">35mm</div>
                <div className="pl-6 border-l border-filmTaupe/30">
                  <h2 className="text-2xl font-light tracking-widest">{pkg.title}</h2>
                  <p className="font-serif italic text-sm text-filmTaupe">{pkg.subtitle}</p>
                  <p className="text-4xl font-light mt-6 text-filmBlack">{pkg.price}</p>
                  <Link href={`/contact?session=${encodeURIComponent(pkg.title)}`} className="text-filmTaupe text-[10px] font-mono uppercase tracking-widest hover:text-filmBlack transition">
                    Select Package &rarr;
                  </Link>
                </div>
              </div>

              {/* Description & Features */}
              <div className="flex-1 space-y-6">
                <p className="text-xs font-light text-filmBlack/70 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="w-8 h-[1px] bg-filmTaupe/30"></div>
                <ul className="space-y-3 text-xs font-light text-filmBlack/90">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-filmTaupe font-mono text-[9px] mt-0.5">0{i+1}</span> 
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lab Footer (Barcode & Meta) */}
              <div className="mt-12 pt-6 border-t border-filmTaupe/20 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[8px] font-mono text-filmTaupe uppercase tracking-widest">Lab Order {pkg.labCode}</p>
                  <p className="text-[8px] font-mono text-filmTaupe uppercase tracking-widest">Process: C-41</p>
                </div>
                <div className="flex gap-[2px] h-6 items-end opacity-60">
                  <div className="w-1.5 h-full bg-filmBlack"></div>
                  <div className="w-[1px] h-full bg-filmBlack"></div>
                  <div className="w-2 h-[80%] bg-filmBlack"></div>
                  <div className="w-[2px] h-full bg-filmBlack"></div>
                  <div className="w-1 h-[90%] bg-filmBlack"></div>
                  <div className="w-1.5 h-full bg-filmBlack"></div>
                  <div className="w-[1px] h-[70%] bg-filmBlack"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. A LA CARTE / LAB EXTRAS */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-filmTaupe/20 pb-8">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe mb-2">A La Carte</p>
            <h2 className="text-3xl font-light lowercase">the lab extras.</h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-filmBlack/60 max-w-xs md:text-right">
            Enhance your session with physical goods or extended coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {extras.map((extra, idx) => (
            <div key={idx} className="group flex justify-between items-start gap-4">
              <div className="space-y-1.5">
                <h4 className="text-sm font-mono uppercase tracking-wide text-filmBlack">{extra.item}</h4>
                <p className="text-xs font-light text-filmTaupe">{extra.desc}</p>
              </div>
              <div className="text-sm font-mono text-filmBlack whitespace-nowrap border-b border-filmTaupe/20 group-hover:border-filmBlack transition-colors">
                {extra.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-12">
         <h2 className="text-2xl font-light lowercase mb-12 text-center">frequently asked questions.</h2>
         <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-filmTaupe/20 pt-8">
              <div className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-filmTaupe">Turnaround Time</div>
              <div className="md:col-span-8 text-sm font-light text-filmBlack/80 leading-relaxed">
                Standard photos are delivered within 2 weeks via a secure online link. Editing takes time to ensure quality is maintained, but I promise it&apos;s worth the wait.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-filmTaupe/20 pt-8">
              <div className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-filmTaupe">Travel Fees</div>
              <div className="md:col-span-8 text-sm font-light text-filmBlack/80 leading-relaxed">
                Locations within 30 miles of San Antonio, TX are included. For locations beyond that, a standard mileage fee applies. I am always excited to travel for a beautiful backdrop!
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-filmTaupe/20 pt-8">
              <div className="md:col-span-4 text-xs font-mono uppercase tracking-widest text-filmTaupe">Payment</div>
              <div className="md:col-span-8 text-sm font-light text-filmBlack/80 leading-relaxed">
                I accept Cash App, Apple Pay, Venmo, Zelle, and most major credit cards. There is a required $25 deposit, with the remaining balance due on the day of the shoot. The deposit is refundable if you change your mind, but non-refundable if you cancel within 48 hours of the session or simply don&apos;t show up. I understand that life happens, so just communicate with me and we can work something out!
              </div>
            </div>
         </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="bg-[#111111] text-filmCream p-12 md:p-20 text-center space-y-8 rounded-sm relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-filmTaupe/40 to-transparent"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 border border-filmTaupe/20 rounded-full opacity-20 pointer-events-none"></div>
          
          <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">Ready to book?</p>
          <h2 className="text-4xl md:text-5xl font-light lowercase">let&apos;s secure your date.</h2>
          <p className="text-sm font-light text-filmCream/70 max-w-md mx-auto">
            Fill out the inquiry envelope with your details and vision, and I&apos;ll get back to you within 48 hours to confirm availability.
          </p>
          <div className="pt-4">
            <Link href="/contact" className="inline-block bg-filmCream text-filmBlack px-10 py-4 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-filmTaupe hover:text-filmCream transition-colors duration-300">
              Open Inquiry Form &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}