'use client' //* For the useState and useEffect
import { useState, useEffect } from "react";

//* the links live in one list, so the desktop menu and phone menu share them
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Activities', href: '#activities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav(){
  //* Remembers if the user has scrolled down (false = at top)
  const [scrolled, setScrolled] = useState(false)
  //* remembers if the phone menu is open
  const [open, setOpen] = useState(false)
  
  //* Listening for the scrolling 
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50) //* set for 50 px
    };
    onScroll(); //* run once on load
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  //* NEW: the nav is solid white if scrolled OR if the phone menu is open
  const solid = scrolled || open;

  return (
    //* header is now just the outer bar. The padding and layout moved to the div inside it
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-14 py-4">

        {/* logo is white at the top, sky blue after scrolling or when the menu is open */}
        <div className={`text-lg font-bold ${solid ? 'text-sky-500' : 'text-white'}`}> 
          DHS 
        </div>

        {/* Desktop links. hidden on phones, flex from md: (768px) up */}
        <nav className={`hidden md:flex gap-8 ${solid ? 'text-black' : 'text-white'}`}>
          
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-sky-500">{link.label}</a>
          ))}
        </nav>

        <button //* Menu button. Only shows on phones
          onClick={() => setOpen(!open)}
          className={`md:hidden ${solid ? 'text-black' : 'text-white'}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />   //* X when open
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /> //* 3 lines when closed
            )}
          </svg>
        </button>
      </div>

      {open && ( 
        //* Phone menu. Only shows when open, and only on phones
        <nav className="md:hidden flex flex-col px-6 pb-4 text-black">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}  //* closes the menu after you tap a link
              className="py-3 border-t border-gray-100 hover:text-sky-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}