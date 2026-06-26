'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock the background scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: '01. Home' },
    { href: '/packages', label: '02. Packages' },
    { href: '/promo', label: '03. Promos' },
    { href: '/about', label: '04. About' },
    { href: '/contact', label: '05. Contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full flex flex-col transition-colors duration-300 ${isOpen ? 'bg-filmCream' : 'bg-filmCream/90 backdrop-blur-md'} border-b ${isOpen ? 'border-transparent' : 'border-filmTaupe/20'}`}>
      
      {/* 1. Global Promo Banner (Text enlarged to text-xs) */}
      <div className="w-full bg-filmTaupe text-filmCream py-3 px-6 flex justify-center items-center relative z-50">
        <p className="text-xs font-mono uppercase tracking-widest text-center flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span>Now Booking: Summer Moments</span>
          <Link href="/promo" onClick={() => setIsOpen(false)} className="border-b border-filmCream/50 hover:border-filmCream hover:text-filmBlack transition-colors pb-0.5">
            View Details &rarr;
          </Link>
        </p>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-16 py-6 flex justify-between items-center relative z-50">
        
        {/* Responsive Logo Container */}
        <Link href="/" className="hover:opacity-70 transition block relative h-8 w-40 md:h-10 md:w-48 lg:h-12 lg:w-56" onClick={() => setIsOpen(false)}>
          <Image 
            src="/icon.png" 
            alt="film by sabryna logo" 
            fill 
            className="object-contain object-left" 
            priority
          />
          <span className="sr-only">film by sabryna</span>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest text-filmTaupe">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-filmBlack transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[10px] font-mono uppercase tracking-widest text-filmBlack focus:outline-none"
        >
          {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-filmCream z-40 flex flex-col overflow-y-auto transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Adjusted padding to pt-40 to account for the new banner height */}
        <div className="flex flex-col items-center justify-start pt-40 pb-12 min-h-full">
          <nav className="flex flex-col gap-8 text-center w-full px-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={toggleMenu} 
                className="text-4xl font-light lowercase text-filmBlack hover:text-filmTaupe transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-16 text-[10px] font-mono uppercase tracking-widest text-filmTaupe/60 text-center">
            Process: C-41 Color Negative
          </div>
        </div>
      </div>
    </header>
  );
}