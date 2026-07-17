import React from 'react';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full animate-pulse">
            <Compass className="w-12 h-12" />
          </div>
          <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-teal-600 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            The page you are looking for doesn&apos;t exist, was removed, or has been moved to another URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors duration-200 px-6"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <Link
            href="/projects"
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-850 bg-slate-900/30 hover:bg-slate-800 text-white font-semibold text-sm transition-colors duration-200 px-6"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
