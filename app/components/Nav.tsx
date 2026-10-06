'use client' //* For the useState and useEffect
import { useState, useEffect } from "react";

export default function Nav(){
  //* Remembers if the user has scrolled down (false = at top)
  const [scrolled, setScrolled] = useState(false)
  
  //* Listing for the scrolling 
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50) //* set for 50 px
    };
    onScroll(); //* run once on load
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
   return (
    //* added fixed top-0 left-0 w-full z-50 transition-all duration-300
    //* background is now see-through at the top, white with a shadow after scrolling
    <header
      className={`fixed top-0 left-0 w-full z-50 grid grid-cols-2 items-center px-14 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* logo is white at the top, sky blue after scrolling */}
      <div className={`col-start-1 text-lg font-bold ${scrolled ? 'text-sky-500' : 'text-white'}`}>
        DHS
      </div>
      
      {/* links are white at the top, dark after scrolling */}
      <nav className={`col-start-2 flex justify-end gap-8 ${scrolled ? 'text-black' : 'text-white'}`}>
        <a href="#home" className="hover:text-sky-500">Home</a>
        <a href="#services" className="hover:text-sky-500">Services</a>
        <a href="#activities" className="hover:text-sky-500">Activities</a>
        <a href="#about" className="hover:text-sky-500">About</a>
        {/* <a href="#hours" className="hover:text-sky-500">Hours</a> */}
        <a href="#contact" className="hover:text-sky-500">Contact</a>
      </nav>
    </header>
  );
}