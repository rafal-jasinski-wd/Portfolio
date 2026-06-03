import Image from 'next/image';
import { Mail } from 'lucide-react';
import { Github } from './icons/Github';
import { Linkedin } from './icons/Linkedin';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/creator-logo1.svg"
              alt="Rafal Jasinski Logo"
              width={150}
              height={50}
              className="h-9 w-auto object-contain opacity-80"
            />
            <p className="text-slate-400 text-sm text-center md:text-left">
              Building premium digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/rafal-jasinski-wd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Rafal Jasinski. All rights reserved.</p>
          <p>
            Designed & Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
