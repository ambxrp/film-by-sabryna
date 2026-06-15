export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-24">
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Portrait Placeholder */}
        <div className="relative aspect-square max-w-sm mx-auto bg-filmBeige/40 rounded-full flex items-center justify-center text-filmTaupe text-xs tracking-widest uppercase shadow-xl p-8">
          <div className="absolute inset-4 rounded-full border border-dashed border-filmTaupe/40"></div>
          [ Sabryna Profile Image ]
        </div>

        {/* Narrative */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-filmTaupe block">The Artist Behind the Glass</span>
          <h2 className="text-4xl font-light lowercase">about sabryna</h2>
          <p className="text-filmBlack/80 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-filmBlack/80 font-light leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </section>

      {/* Philosophy Block using Custom Abstract Geometric Shape */}
      <section className="bg-filmBlack text-filmCream p-12 md:p-20 rounded-[3rem] transform -rotate-1 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-filmTaupe/20 rounded-bl-full pointer-events-none"></div>
        <div className="max-w-2xl space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-filmBeige">Philosophy</h3>
          <p className="text-2xl md:text-3xl font-light font-serif italic tracking-wide leading-relaxed">
            &quot;Grain over perfection. Moments over poses. Capturing the real, unfiltered cadence of memory.&quot;
          </p>
        </div>
      </section>

    </div>
  );
}