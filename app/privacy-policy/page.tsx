import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 pb-24 relative z-10">
      <div className="mx-auto max-w-4xl px-6 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-filmTaupe/20 pb-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe">
            Legal // Data
          </p>
          <h1 className="text-4xl md:text-5xl font-light lowercase text-filmBlack">
            privacy policy.
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-filmTaupe">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm font-light text-filmBlack/80 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">1. information we collect</h2>
            <p>
              Film by Sabryna operates as a sole proprietorship. When you use our contact form to inquire about a photography session, we collect basic personal information necessary to fulfill your request. This includes your name, email address, phone number requested session dates, and any specific details you choose to share regarding your vision for the shoot.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">2. how we use your information</h2>
            <p>
              The information you provide is used strictly for operational purposes: to respond to your inquiries, schedule your sessions, send invoices, and deliver your final digital galleries. We do not use your information for unsolicited marketing, nor do we sell, rent, or trade your personal data to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">3. security & anti-spam</h2>
            <p>
              To protect our website and contact forms from automated spam and abuse, we utilize Cloudflare Turnstile. Turnstile acts as an essential security measure to verify that form submissions are made by real humans. It does not utilize tracking cookies, nor does it track your behavior across other websites. 
            </p>
            <p>
              We also utilize Resend to securely route your contact form submissions to our email inbox.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">4. third-party platforms</h2>
            <p>
              While we protect the data collected on this website, your final image galleries may be hosted and delivered via secure third-party platforms (such as an online gallery delivery service). Any payments processed via Cash App, Apple Pay, Venmo, Zelle, or credit card networks are subject to the privacy policies and security standards of those respective platforms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-light lowercase text-filmBlack">5. contact us</h2>
            <p>
              If you have any questions regarding how your data is handled, please feel free to reach out directly through our standard contact form or via email.
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