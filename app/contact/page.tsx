export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-light lowercase">let&apos;s collaborate_</h1>
        <p className="text-filmTaupe font-light text-sm max-w-md">
          Have a vision, project, or creative prompt in mind? Drop a message below to coordinate availability.
        </p>
      </div>

      {/* Form Workspace - Purely layout styled without submission states */}
      <form className="space-y-8 bg-filmCream/60 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-filmBeige/30 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-filmTaupe" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-transparent border-b border-filmBeige py-2 focus:outline-none focus:border-filmBlack transition text-sm font-light" 
              placeholder="Your full name"
              disabled
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-filmTaupe" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-transparent border-b border-filmBeige py-2 focus:outline-none focus:border-filmBlack transition text-sm font-light" 
              placeholder="hello@example.com"
              disabled
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-widest text-filmTaupe" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows={5} 
            className="w-full bg-transparent border-b border-filmBeige py-2 focus:outline-none focus:border-filmBlack transition text-sm font-light resize-none" 
            placeholder="Tell me about your concept..."
            disabled
          ></textarea>
        </div>

        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <button 
            type="button" 
            className="bg-filmTaupe/40 text-filmCream px-8 py-4 rounded-full text-xs uppercase tracking-widest cursor-not-allowed"
            disabled
          >
            Form Integration Pending
          </button>
          <span className="text-[11px] font-mono text-filmTaupe italic">
            [ Backend Setup Instruction: Replace inputs &apos;disabled&apos; status once connected to an API handler ]
          </span>
        </div>
      </form>
    </div>
  );
}