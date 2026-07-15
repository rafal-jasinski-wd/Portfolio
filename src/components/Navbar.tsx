'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/creatorLogo.svg"
            alt="Rafal Jasinski Logo"
            width={150}
            height={50}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/rafal-jasinski-wd"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 shadow transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
          >
            Let's Talk
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-emerald-500/10 text-emerald-400 pl-4 border-l-2 border-emerald-500' 
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-slate-905/40 flex flex-col gap-3 px-3">
                <Link
                  href="https://github.com/rafal-jasinski-wd"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center h-10 w-full rounded-lg border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center h-10 w-full rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
