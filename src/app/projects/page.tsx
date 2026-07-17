import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn';
import { ProjectsDashboard } from '@/components/ProjectsDashboard';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/3 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Title Section */}
        <FadeIn
          direction="up"
          duration={0.6}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Projects</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            Explore a curated index of recent applications, featuring robust frontend architectures, responsive design systems, and advanced performance architectures.
          </p>
        </FadeIn>

        <ProjectsDashboard />

      </main>

      <Footer />
    </div>
  );
}
