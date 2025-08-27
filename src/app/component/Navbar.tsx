'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Menu, X } from 'lucide-react';
import Image from "next/image";
import Icon from "../../../public/assets/navbar/navbuttonicon.svg";
interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Work', href: '/work' },
    { label: 'Why us', href: '/why-us' },
    { label: 'Process', href: '/process' },
    { label: 'FAQ', href: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
     <nav 
  className={`fixed top-0 left-0 right-0 z-50 pt-2 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/10 backdrop-blur-md border-b border-white/10' // semi-transparent when scrolled
      : 'bg-transparent'
  }`}
>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]"
            >
              ShivAi
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2" />
                </Link>
              ))}
            </div>

 <Link
  href="/brief"
  className={`hidden md:flex items-center justify-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 font-sora`}
>
  {/* Gradient Text */}
  <span className="text-[18px] font-semibold tracking-[-0.36px] bg-gradient-to-r from-white to-[#01ACFF] bg-clip-text text-transparent">
    Tell us your idea
  </span>

  {/* White Circle with Icon */}
  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
    <Image src={Icon} alt="icon" width={16} height={16} />
  </div>
</Link>


            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium rounded-md transition-colors duration-300 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/brief"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:from-blue-500 hover:to-blue-400 w-fit"
              >
                Tell us your brief
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;