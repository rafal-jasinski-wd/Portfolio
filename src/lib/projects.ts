export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'JobTrackr Pro',
    description: 'A comprehensive, responsive job tracking application built with React and TypeScript. Features offline support, BEM CSS architecture, and optimistic UI updates for a seamless user experience.',
    tags: ['React', 'TypeScript', 'Firebase', 'BEM CSS', 'PWA'],
    github: 'https://github.com/rafal-jasinski-wd/job-tracker-pro',
    demo: 'https://jobtrackerpro26.netlify.app',
    image: '/jobTrackerPro.webp',
    category: 'React / Next.js',
    featured: true,
  },
  {
    title: 'IronPlan',
    description: 'An advanced fitness application that generates tailored workout splits. Includes serverless database integration, state syncing, Vite tooling, and a highly interactive DOM split-generator interface.',
    tags: ['Vanilla JS', 'Firebase', 'Serverless', 'Vite', 'Performance'],
    github: 'https://github.com/rafal-jasinski-wd/iron-plan',
    demo: 'https://iron-plan-omega.vercel.app',
    image: '/ironPlan.webp',
    category: 'Firebase',
    featured: true,
  },
  {
    title: 'IronPulse',
    description: 'A high-performance landing page designed with modern micro-animations, semantic SEO, and strict web accessibility (WCAG 2.1) standards. Achieves pristine 100% Lighthouse performance ratings.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'A11y'],
    github: 'https://github.com/rafal-jasinski-wd/iron-pulse',
    demo: 'https://rafal-jasinski-wd.github.io/iron-pulse',
    image: '/ironPulse.webp',
    category: 'Performance',
    featured: false,
  },
];
