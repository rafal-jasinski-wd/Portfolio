import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Github } from './icons/Github';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <FadeIn
              direction="up"
              duration={0.5}
              delay={0.1}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </FadeIn>
            
            <FadeIn
              direction="up"
              duration={0.5}
              delay={0.2}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">digital</span> <br />
                experiences.
              </h1>
            </FadeIn>
            
            <FadeIn
              direction="up"
              duration={0.5}
              delay={0.3}
              className="mb-8 max-w-lg"
            >
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
                Hi, I&apos;m Rafal Jasinski. A frontend engineer specializing in React, Next.js, and crafting high-performance, accessible web applications with pixel-perfect precision.
              </p>
            </FadeIn>
            
            <FadeIn 
              direction="up"
              duration={0.5}
              delay={0.4}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="#projects" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-8 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/rafal-jasinski-wd" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/50 px-8 text-sm font-medium text-white transition-colors hover:bg-slate-800 hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </FadeIn>
          </div>

          <FadeIn 
            scale={0.9}
            duration={0.7}
            delay={0.3}
            className="relative mx-auto lg:mr-auto lg:ml-0 w-full max-w-xl lg:max-w-[115%] lg:-ml-12 xl:-ml-20"
          >
            <Image 
              src="/webDeveloper.svg" 
              alt="Web Developer" 
              width={600} 
              height={600} 
              className="w-full h-auto object-contain drop-shadow-2xl" 
              priority 
            />
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
}
