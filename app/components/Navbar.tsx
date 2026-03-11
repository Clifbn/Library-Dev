"use client";

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, User, Search, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Books', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'My Books', href: '#' },
    { name: 'Profile', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">
              ScholarStream
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-800 text-white px-5 py-4 rounded-full text-2xl font-semibold hover:bg-blue-500 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-blue-800 transition-all shadow-md flex justify-center items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
