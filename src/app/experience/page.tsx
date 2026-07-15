'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, Code, ChevronRight, BookOpen } from 'lucide-react';

const experiences = [
  {
    role: 'Advanced React & Next.js Systems',
    company: 'Project Milestone: JobTrackr Pro',
    period: '2025 - Present',
    iconType: 'code',
    description: 'Designed and engineered a custom progressive web application to master advanced React architectures, modular routing systems, and offline client storage.',
    bullets: [
      'Architected a fully responsive Job Tracker application, gaining deep hands-on expertise with Next.js App Router and strict TypeScript type systems.',
      'Studied and implemented advanced offline cache patterns using service workers and standard web API caching layers to guarantee offline usability.',
      'Developed real-time database state synchronization algorithms and user authentication portals with Firebase Firestore.',
      'Refined component responsiveness and layout architectures to comply with accessibility (a11y) standards and pixel-perfect design grids.'
    ]
  },
  {
    role: 'State Engines & Serverless Operations',
    company: 'Project Milestone: IronPlan',
    period: '2024 - 2025',
    iconType: 'code',
    description: 'Constructed an advanced fitness split generator program to master client-side logical mutations, real-time sync listeners, and asynchronous actions.',
    bullets: [
      'Engineered an interactive split generator split workout calendar, optimizing core JavaScript logic to load custom schedules in less than 200ms.',
      'Gained hands-on experience integrating serverless database collections and real-time state listeners using Firebase Firestore.',
      'Optimized asset loading routines, asset caches, and SEO meta tags, pushing Lighthouse performance scores to a consistent 100%.',
      'Created custom spring-animated sliders, micro-interactions, and modal cards using Framer Motion to elevate layout fluidity.'
    ]
  },
  {
    role: 'Core Development & Web Foundations',
    company: 'Learning Foundations & Open Source Studies',
    period: '2023 - 2024',
    iconType: 'book',
    description: 'Began my self-taught engineering journey by studying responsive CSS layouts, Vanilla JavaScript scripting, and structural web guidelines.',
    bullets: [
      'Mastered layout systems including CSS Grid, Flexbox, and organized component styles using BEM architectural methodologies.',
      'Constructed highly interactive web pages, vector layouts, and responsive elements utilizing Vanilla JavaScript DOM scripting.',
      'Studied accessibility (a11y) specifications to guarantee responsive keyboard navigability and screen-reader friendliness.',
      'Mastered Git version control systems, package management (npm/yarn), and automatic publishing flows using GitHub Actions.'
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-teal-500 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Journey</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            A chronological look at my self-taught coding path, hands-on engineering milestones, and the technical challenges I solved while building my projects.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/80 via-slate-800 to-transparent rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full border-[2px] border-slate-900 bg-slate-800 group-hover:bg-emerald-400 group-hover:border-emerald-500/50 transition-all duration-300 shadow-[0_0_0_4px_rgba(2,44,34,0)] group-hover:shadow-[0_0_0_6px_rgba(16,185,129,0.2)]" />

                {/* Content Card */}
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/20 hover:bg-slate-900/60 transition-all duration-300 shadow-lg">
                  
                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4 pb-4 border-b border-slate-800/60">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-slate-400 font-medium flex items-center gap-1.5 mt-1 text-sm sm:text-base">
                        {exp.iconType === 'code' ? (
                          <Code className="w-4 h-4 text-emerald-500/70" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-emerald-500/70" />
                        )}
                        {exp.company}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/30 text-slate-400 text-xs font-semibold md:text-sm self-start md:self-center">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500/70" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {exp.description}
                  </p>

                  {/* Bullet accomplishments */}
                  <ul className="space-y-3.5 text-slate-400 text-sm sm:text-base">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
