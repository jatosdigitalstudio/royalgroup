'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Companies', path: '/#companies' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all md:px-12 duration-300 ${isScrolled ? 'bg-white/55 backdrop-blur-xl' : 'bg-transparent '}`}>
      <div className="lg:container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          {/* <div className="text-2xl font-bold text-blue-900">Sabika Group</div> */}
          <Link href="/">
            <Image src="/images/logo-h-main.png" width={150} height={100} alt='Royal Group' />
          </Link>
          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-black'} font-reguler transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button> */}

          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
            </span>
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
            </span>  
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}