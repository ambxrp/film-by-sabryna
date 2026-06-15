import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 pb-24 relative z-10">
      <div className="mx-auto max-w-4xl px-6 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-filmTaupe/20 pb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
            Legal // Operations
          </p>
          <h1 className="text-4xl md:text-5xl font-light lowercase text-filmBlack">
            terms & conditions.
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-filmTaupe">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm font-light text-filmBlack/80 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">1. booking & payment</h2>
            <p>
              To secure your session date, a <strong>$25 required deposit</strong> must be paid at the time of booking. The remaining balance for your selected package is due on the day of the shoot. 
            </p>
            <p>
              For your convenience, I accept Cash App, Apple Pay, Venmo, Zelle, and most major credit cards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">2. cancellation & rescheduling</h2>
            <p>
              I understand that life happens! If you need to change your mind, your deposit is fully refundable, provided you give adequate notice. 
            </p>
            <p>
              However, the deposit becomes <strong>non-refundable</strong> if you cancel within 48 hours of your scheduled session or if you do not show up to the shoot. If an emergency arises, please communicate with me as soon as possible so we can work something out together.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">3. travel & location</h2>
            <p>
              Locations within a <strong>30-mile radius of San Antonio, TX</strong> are fully included in the standard package pricing. For locations beyond this radius, a standard mileage fee applies to cover travel time and expenses. I am always excited to travel for a beautiful backdrop, so please mention your dream location in your inquiry!
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">4. delivery & timeline</h2>
            <p>
              Standard photo galleries are delivered within <strong>2 weeks</strong> of your session date. You will receive your high-resolution images via a secure online link. Editing takes time to ensure the aesthetic and quality are perfectly maintained, but I promise the final result is worth the wait.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">5. copyright & usage</h2>
            <p>
              As the creator, Film by Sabryna retains the original copyright to all images. Upon final delivery, clients receive a standard print release, allowing for personal printing, downloading, and sharing on personal social media accounts. Images may not be altered (including the addition of heavy filters) or used for commercial purposes without prior written consent.
            </p>
          </section>

        </div>

        {/* Footer Link */}
        <div className="pt-12 border-t border-filmTaupe/20">
          <Link href="/" className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe hover:text-filmBlack transition-colors">
            &larr; Return Home
          </Link>
        </div>

      </div>
    </div>
  );
}