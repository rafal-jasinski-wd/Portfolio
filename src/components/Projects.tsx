import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Github } from './icons/Github';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FadeIn } from './FadeIn';
import { projects } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn 
          direction="up"
          duration={0.5}
          whileInView
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            A selection of my recent work focusing on frontend architecture, performance optimization, and user experience.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              direction="up"
              duration={0.5}
              delay={index * 0.1}
              whileInView
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
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub Repository (opens in a new tab)">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub Repository (opens in a new tab)</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Live Demo (opens in a new tab)">
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Live Demo (opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 pt-3 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-300 border-transparent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn 
          direction="up"
          duration={0.5}
          delay={0.3}
          whileInView
          className="mt-16 text-center"
        >
          <Link 
            href="/projects" 
            className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:border-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 gap-2"
          >
            View Full Projects Dashboard
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </FadeIn>
        
      </div>
    </section>
  );
}
