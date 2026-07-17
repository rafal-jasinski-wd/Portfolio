import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Github } from '@/components/icons/Github';
import { Linkedin } from '@/components/icons/Linkedin';
import { FadeIn } from '@/components/FadeIn';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/3 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Title Section */}
        <FadeIn
          direction="up"
          duration={0.6}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Connect</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            Interested in working together, discussing software engineering architectures, or just saying hello? Drop me a message below!
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <FadeIn
                direction="up"
                duration={0.5}
                delay={0.1}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Details
                </h2>
              </FadeIn>

              <div className="space-y-4">
                {[
                  { title: 'Email Me Directly', value: 'rafal.jasinski.wd@gmail.com', icon: Mail, href: 'mailto:rafal.jasinski.wd@gmail.com' },
                  { title: 'Based in', value: 'Dublin, Ireland', icon: MapPin },
                ].map((item, index) => (
                  <FadeIn
                    key={item.title}
                    startX={-20}
                    duration={0.5}
                    delay={index * 0.1 + 0.2}
                    className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.title}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-200 hover:text-emerald-400 transition-colors font-semibold mt-0.5 block text-sm sm:text-base">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-slate-200 font-semibold mt-0.5 text-sm sm:text-base">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Social Connect Card */}
            <FadeIn
              direction="up"
              duration={0.5}
              delay={0.4}
              className="bg-slate-900/20 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <h3 className="text-lg font-bold text-white">Find me on</h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/rafal-jasinski-wd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/20 transition-all duration-300 font-semibold text-sm"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rafal-jasinski-bb22b6120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/20 transition-all duration-300 font-semibold text-sm"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
