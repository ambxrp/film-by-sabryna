'use client';

import { useActionState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Turnstile } from '@marsidev/react-turnstile';
import { sendInquiry } from '../actions/sendEmail';

// Extract the form into an inner component to handle useSearchParams safely
function ContactFormInner() {
  const [state, formAction, isPending] = useActionState(sendInquiry, null);
  const searchParams = useSearchParams();
  
  // Grab the session from the URL, or default to an empty string
  const prefilledSession = searchParams.get('session') || '';

  if (state?.success) {
    return (
      <div className="py-12 text-center space-y-4">
        <h3 className="text-2xl font-light lowercase">manifest received.</h3>
        <p className="text-sm font-mono text-filmTaupe">I will be in touch shortly. Thank you! <span className="text-lg">&#9825;</span></p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8 max-w-2xl">
      {state?.error && (
        <div className="text-red-800 text-[10px] font-mono uppercase tracking-widest bg-red-100/50 p-4 border border-red-200">
          Error: {state.error}
        </div>
      )}
      <div className="mb-8">
         <p className="font-serif italic text-lg text-filmBlack">
           can&apos;t wait to hear from you! <span className="text-filmTaupe">&hearts;</span>
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input type="text" name="name" required disabled={isPending} placeholder="YOUR NAME *" className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors disabled:opacity-50" />
        <input type="email" name="email" required disabled={isPending} placeholder="EMAIL ADDRESS *" className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors disabled:opacity-50" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pre-fill the default value using the URL parameter */}
        <input type="text" name="phoneNumber" defaultValue={prefilledSession} disabled={isPending} placeholder="PHONE NUMBER *" className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors disabled:opacity-50" />
        <input type="text" name="date" disabled={isPending} placeholder="DATE FOR SESSION (IF YOU HAVE ONE IN MIND)" className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors disabled:opacity-50" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <input type="text" name="sessionType" required disabled={isPending} placeholder="SESSION TYPE (EG. COUPLES, MINI)" className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors disabled:opacity-50" />
      </div>
      
      <textarea 
        name="details" required disabled={isPending} rows={4}
        placeholder="TELL ME MORE ABOUT WHAT YOU'RE LOOKING FOR... *" 
        className="w-full bg-transparent border-b border-filmTaupe pb-2 text-[10px] font-mono tracking-widest focus:outline-none focus:border-filmBlack transition-colors mt-8 resize-none disabled:opacity-50"
      ></textarea>
      
      {/* Cloudflare Turnstile Widget */}
      <div className="pt-4">
        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-filmTaupe/10">
        <span className="text-[9px] font-mono text-filmTaupe uppercase tracking-widest hidden md:inline-block">
          Status: {isPending ? 'Verifying & Transmitting...' : 'Awaiting Input'}
        </span>
        <button 
          type="submit" disabled={isPending}
          className="bg-filmBlack text-filmCream px-10 py-4 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-filmTaupe transition flex items-center gap-4 w-full md:w-auto justify-center disabled:bg-filmTaupe disabled:cursor-not-allowed"
        >
          {isPending ? 'Processing...' : 'Submit Enquiry'} <span>&rarr;</span>
        </button>
      </div>
    </form>
  );
}

// Main Page Component
export default function Contact() {
  return (
    <div className="w-full bg-filmCream min-h-screen pt-32 pb-24 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-40 left-12 text-[10px] font-mono tracking-widest uppercase text-filmTaupe/40 rotate-90 origin-left">
        Process: C-41 Color Negative
      </div>
      
      <div className="w-full max-w-5xl px-6 relative z-10">
        <div className="bg-[#EAE5D9] text-filmBlack rounded-sm flex flex-col md:flex-row relative shadow-2xl">
          <div className="w-full md:w-32 bg-[#D6CEBC] border-b-2 md:border-b-0 md:border-r-2 border-dashed border-filmTaupe/30 flex flex-row md:flex-col items-center justify-center py-6 md:py-8 relative">
              <div className="hidden md:flex w-8 h-8 rounded-full border border-filmTaupe/50 bg-[#EAE5D9] absolute right-[-16px] top-1/2 -translate-y-1/2 items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-filmBlack"></div>
              </div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-filmTaupe md:rotate-180 text-center" style={{ writingMode: 'vertical-rl' }}>
                Film Development Envelope
              </p>
          </div>

          <div className="flex-1 p-8 md:p-16 relative">
              <div className="flex justify-between items-start mb-12 border-b border-filmTaupe/20 pb-8">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-filmTaupe mb-2">Get in Touch</p>
                  <h1 className="text-4xl md:text-5xl font-light lowercase">send to the lab.</h1>
                </div>
              </div>

              {/* Wrap the form in Suspense so Next.js can build it cleanly */}
              <Suspense fallback={<div className="text-[10px] font-mono text-filmTaupe uppercase tracking-widest">Loading Manifest...</div>}>
                <ContactFormInner />
              </Suspense>

          </div>
        </div>
      </div>
    </div>
  );
}