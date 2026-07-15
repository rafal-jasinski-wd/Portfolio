'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Github } from '@/components/icons/Github';
import { Linkedin } from '@/components/icons/Linkedin';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.");
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 6000);
      return;
    }

    try {
      const logoUrl = typeof window !== 'undefined' ? `${window.location.origin}/creatorLogo.png` : '';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'Rafal Jasinski Portfolio',
          subject: `Portfolio Inquiry: ${formData.subject} (from ${formData.name})`,
          replyto: formData.email,
          logo: logoUrl,
          'Sender Name': formData.name,
          'Sender Email': formData.email,
          'Inquiry Subject': formData.subject,
          'Message Details': formData.message,
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Submission error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/3 w-[800px] h-[400px] opacity-10 pointer-events-none">
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
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Connect</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
            Interested in working together, discussing software engineering architectures, or just saying hello? Drop me a message below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Contact Details
              </motion.h2>

              <div className="space-y-4">
                {[
                  { title: 'Email Me Directly', value: 'rafal.jasinski.wd@gmail.com', icon: Mail, href: 'mailto:rafal.jasinski.wd@gmail.com' },
                  { title: 'Based in', value: 'Dublin, Ireland', icon: MapPin },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Connect Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-400 pl-0.5">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-11 px-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-400 pl-0.5">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-11 px-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-400 pl-0.5">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full h-11 px-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-400 pl-0.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, ideas or inquiries here..."
                    className="w-full p-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-lg text-center"
                  >
                    Thank you! Your message was sent successfully. I will get back to you shortly.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium rounded-lg text-center"
                  >
                    Oops! Something went wrong. Please check your network or verify your API Access Key.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
