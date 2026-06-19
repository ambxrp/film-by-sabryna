import Link from "next/link";

export default function Promo() {
  const promoPackages = [
    {
      title: "mini session",
      price: "$65",
      features: ["20 minutes", "1 location", "6–8 edited photos", "Online gallery included"],
      labCode: "SM-01",
      linkStr: "SummerPromo-Mini"
    },
    {
      title: "standard session",
      price: "$115",
      features: ["40–45 minutes", "1 location", "12–15 edited photos", "Online gallery included"],
      popular: true,
      labCode: "SM-02",
      linkStr: "SummerPromo-Standard"
    },
    {
      title: "family session",
      price: "$150",
      features: ["45–60 minutes", "Up to 5 people", "18–20 edited photos", "Online gallery included"],
      labCode: "SM-03",
      linkStr: "SummerPromo-Family"
    }
  ];

  const addOns = [
    { item: "Extra Person", price: "+$10" },
    { item: "Extra Edited Photo", price: "+$5" },
    { item: "Rush Delivery", price: "+$20" }
  ];

  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 pb-24 relative z-10">
      
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-12 text-center space-y-8 border-b border-filmTaupe/20 pb-16">
        <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe">
          Seasonal Offering
        </p>
        <h1 className="text-5xl md:text-7xl font-light lowercase tracking-tight text-filmBlack">
          summer moments <br />
          <span className="italic font-serif text-filmTaupe text-4xl md:text-6xl">promo.</span>
        </h1>
        
        <div className="text-sm font-light text-filmBlack/80 max-w-2xl mx-auto leading-relaxed space-y-4 pt-4">
          <p>
            Summer is full of moments worth holding onto — soft sunsets, family memories, sweet couple photos, birthday shoots, best friend sessions, and everything in between.
          </p>
          <p>
            As a developing photographer, I’m offering reasonable intro pricing while I continue growing behind the lens. Whether you’re celebrating something special or just want a few photos to remember this season, I’d love to capture it for you.
          </p>
          <p className="font-serif italic text-filmTaupe pt-4">
            To keep things simple, I’ve put together a few session options below so you can choose the experience that best fits what you’re looking for.
          </p>
        </div>
      </section>

      {/* 2. THE PACKAGES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {promoPackages.map((pkg, idx) => (
            <div key={idx} className={`relative bg-[#f8f6f0] border rounded-sm p-8 flex flex-col justify-between min-h-[420px] transition-transform hover:-translate-y-1 duration-500 ${pkg.popular ? 'border-filmBeige shadow-2xl z-10 lg:-translate-y-4 lg:hover:-translate-y-6' : 'border-filmTaupe/20 shadow-sm mt-0 lg:mt-4'}`}>
              
              <div className="space-y-4 relative mb-8">
                <div className="absolute -left-10 top-8 text-[8px] font-mono tracking-widest uppercase text-filmTaupe -rotate-90">35mm</div>
                <div className="pl-6 border-l border-filmTaupe/30">
                  <h2 className="text-2xl font-light tracking-widest lowercase">{pkg.title}</h2>
                  <p className="text-4xl font-light mt-4 text-filmBlack">{pkg.price}</p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <ul className="space-y-3 text-xs font-light text-filmBlack/90">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-filmTaupe font-mono text-[9px] mt-0.5">0{i+1}</span> 
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-filmTaupe/20 mt-8 flex flex-col gap-6">
                <Link href={`/contact?session=${pkg.linkStr}`} className="bg-filmBlack text-filmCream px-6 py-3 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-filmTaupe transition flex items-center justify-between group">
                  Select Package <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                
                <div className="flex justify-between items-end">
                  <p className="text-[8px] font-mono text-filmTaupe uppercase tracking-widest">Lab Order {pkg.labCode}</p>
                  <div className="flex gap-[2px] h-4 items-end opacity-60">
                    <div className="w-1 h-full bg-filmBlack"></div>
                    <div className="w-[1px] h-full bg-filmBlack"></div>
                    <div className="w-2 h-[80%] bg-filmBlack"></div>
                    <div className="w-[2px] h-full bg-filmBlack"></div>
                    <div className="w-1 h-[90%] bg-filmBlack"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ADD-ONS & DEPOSIT RULES */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-[#111111] text-filmCream p-8 md:p-12 rounded-sm relative overflow-hidden flex flex-col md:flex-row gap-12 justify-between items-center shadow-xl">
          
          <div className="space-y-4 md:w-1/2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">The Fine Print</p>
            <h3 className="text-2xl font-light lowercase">booking details.</h3>
            <p className="text-sm font-light text-filmCream/80 leading-relaxed border-l border-filmTaupe/30 pl-4 py-2">
              A <strong>$25 deposit</strong> is required to secure your date and officially book your session.
            </p>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe mb-4 border-b border-filmTaupe/20 pb-2">Promo Add-ons</h4>
            {addOns.map((extra, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm font-light">
                <span className="lowercase text-filmCream/90">{extra.item}</span>
                <span className="font-mono text-filmBeige">{extra.price}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}