'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Code, Cpu, Award, BookOpen, Layers, Terminal } from 'lucide-react';

const stats = [
  { label: 'Core Projects', value: '3', icon: Cpu, color: 'from-emerald-500 to-teal-500' },
  { label: 'Milestones Reached', value: '12+', icon: Award, color: 'from-teal-500 to-cyan-500' },
  { label: 'Avg Lighthouse', value: '100%', icon: Code, color: 'from-emerald-400 to-emerald-600' },
];

const skills = [
  {
    category: 'Frontend Core',
    icon: Code,
    items: ['React 19', 'Next.js 16', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    category: 'Styling & Motion',
    icon: Layers,
    items: ['Tailwind CSS v4', 'Framer Motion', 'BEM CSS Architecture', 'Sass / SCSS', 'CSS Modules'],
  },
  {
    category: 'Backend & Database',
    icon: Server,
    items: ['Node.js', 'Firebase Suite', 'Serverless Functions', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Practices',
    icon: Terminal,
    items: ['Git & GitHub', 'Performance Tuning', 'SEO Optimization', 'Web Accessibility (a11y)', 'PWA / Offline Support'],
  },
];

// Inline server icon since Lucide Server can sometimes have import naming quirks
function Server(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500 blur-[130px] rounded-full mix-blend-screen" />
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Me</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            I'm a dedicated software engineer focused on crafting premium digital experiences. I specialize in high-performance frontend architectures, clean code systems, and pixel-perfect design translation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Biography & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 leading-relaxed text-slate-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
              <p>
                My passion for web development began with a focus on building lightning-fast, highly intuitive user interfaces. Over the years, I've developed a rigorous methodology for performance tuning, responsive styling, and semantic SEO.
              </p>
              <p>
                Whether integrating Firebase servers for custom split workout engines like **IronPlan**, or architectural BEM layouts for progressive web apps like **JobTrackr Pro**, I bring clean patterns and structured optimization techniques to every codebase.
              </p>
              <p>
                I thrive in dynamic spaces where engineering meets design excellence. I hold myself to modern accessibility (a11y) standards, maintaining absolute commitment to crisp layouts, fluent motion, and optimized performance.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="relative group bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-center flex flex-col justify-center items-center hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent blur-md opacity-30 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  <stat.icon className="w-6 h-6 text-emerald-400 mb-3" />
                  <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Toolbox Grid */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-2 pl-1"
            >
              My Toolbox
            </motion.h2>

            <div className="space-y-6">
              {skills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="bg-slate-900/30 border border-slate-800/60 rounded-xl p-5 hover:border-emerald-500/20 hover:bg-slate-900/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white text-lg">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/40 border border-slate-800 rounded-md text-slate-300 hover:text-emerald-400 hover:border-emerald-500/20 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
