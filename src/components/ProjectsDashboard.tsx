'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from '@/components/icons/Github';
import { projects } from '@/lib/projects';

const categories = ['All', 'React / Next.js', 'Firebase', 'Performance'];

export function ProjectsDashboard() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => 
        project.category === activeCategory || 
        project.tags.includes(activeCategory)
      );

  return (
    <>
      {/* Filter Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2.5 mb-12 border-b border-slate-900 pb-6"
      >
        {categories.map(category => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isSelected}
              aria-controls="projects-grid"
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-300 ${
                isSelected 
                  ? 'border-emerald-500 text-slate-950 z-10' 
                  : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-emerald-400 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        id="projects-grid"
        role="tabpanel"
        aria-label={`${activeCategory} projects`}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] overflow-hidden">
                {/* Project Image Header */}
                <div className="relative aspect-[1200/570] w-full overflow-hidden border-b border-slate-850 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    width={600}
                    height={285}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div className="flex gap-3.5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" title="GitHub Repository (opens in a new tab)">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub Repository (opens in a new tab)</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200" title="Live Demo (opens in a new tab)">
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Live Demo (opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors duration-200 font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 pt-3.5 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-6 border-t border-slate-900">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-850 hover:bg-slate-800 text-slate-300 border-transparent text-xs font-semibold py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
