# 💻 Rafal Jasinski | Professional Portfolio Website

[![Build Status](https://img.shields.io/github/actions/workflow/status/rafal-jasinski-wd/Portfolio/ci.yml?branch=main&style=flat-square&label=build&color=10b981)](https://github.com/rafal-jasinski-wd/Portfolio/actions)
![Lighthouse Performance](https://img.shields.io/badge/Lighthouse--Performance-100%25-10b981?style=flat-square&logo=lighthouse&logoColor=white)
![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse--Accessibility-100%25-10b981?style=flat-square&logo=lighthouse&logoColor=white)
![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse--Best%20Practices-100%25-10b981?style=flat-square&logo=lighthouse&logoColor=white)
![Lighthouse SEO](https://img.shields.io/badge/Lighthouse--SEO-100%25-10b981?style=flat-square&logo=lighthouse&logoColor=white)
![Security Score](https://img.shields.io/badge/Security-Hardened-10b981?style=flat-square&logo=securityscorecard&logoColor=white)

Welcome! This is the repository for my professional portfolio website, showcasing my skills, experience, and the software engineering principles I apply. Built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, this codebase is highly optimized to achieve near-perfect metrics across all core performance, accessibility, security, and quality audits.

---

## 🔗 Quick Links

*   **🌐 Live Portfolio Website:** [https://rafal-jasinski-wd.github.io](https://rafal-jasinski-wd.github.io)
*   **💼 LinkedIn Profile:** [Rafal Jasinski on LinkedIn](https://www.linkedin.com/in/rafal-jasinski-bb22b6120/)
*   **📧 Email:** [rafal.jasinski.wd@gmail.com](mailto:rafal.jasinski.wd@gmail.com)

---

## 🎯 Target Audits & Standards

This codebase serves as a demonstration of production-grade standards:
*   **Performance:** 100/100 on Google Lighthouse (optimized asset delivery, route segment pre-rendering, minimal hydration weight).
*   **Accessibility (a11y):** Strict conformance with **WCAG AA contrast standards** (> 5:1 ratio) and **WAI-ARIA layout patterns** for screen readers and keyboard navigation.
*   **Security:** Enforced Custom Content Security Policy (CSP), Strict-Transport-Security (HSTS), and clickjacking prevention.
*   **Code Quality:** Strict TypeScript configurations, automated ESLint checks, and a zero-vulnerability dependency tree.

---

## 📁 Featured Projects Showcased

The portfolio website showcases a selection of my key projects, demonstrating full-stack, frontend, and optimization capabilities:

1.  **JobTrackr Pro** — A comprehensive, responsive job tracking application featuring offline capabilities, a custom BEM CSS architecture, and optimistic UI updates.
    *   **Tech Stack:** React, TypeScript, Firebase, BEM CSS, PWA
    *   *Links:* [Live Demo](https://jobtrackerpro26.netlify.app) | [GitHub Repository](https://github.com/rafal-jasinski-wd/job-tracker-pro)

2.  **IronPlan** — An advanced fitness planner that dynamically generates custom workout splits using a serverless backend integration and highly performant UI components.
    *   **Tech Stack:** Vanilla JS, Firebase, Serverless, Vite, Performance Optimization
    *   *Links:* [Live Demo](https://iron-plan-omega.vercel.app) | [GitHub Repository](https://github.com/rafal-jasinski-wd/iron-plan)

3.  **IronPulse** — A premium, lightweight landing page with modern micro-animations, semantic SEO structures, and a 100% Lighthouse audit rating.
    *   **Tech Stack:** HTML5, CSS3, JavaScript, SEO, A11y
    *   *Links:* [Live Demo](https://rafal-jasinski-wd.github.io/iron-pulse) | [GitHub Repository](https://github.com/rafal-jasinski-wd/iron-pulse)

---

## 🌟 Key Technical Features of This Site

*   **⚡ Server-First Architecture:** Core layout routes and key static page sections are built as React Server Components (RSC) to minimize initial client-side hydration cost and speed up FCP/LCP.
*   **🛠️ Interactive Projects Dashboard:** Includes a dynamically filtered project grid utilizing isolated client state controls and smooth transitions powered by Framer Motion.
*   **✉️ Secure Contact Form:** Interactive form integrating the Web3Forms API with robust submission handling, validation feedback, and screen-reader status announcements.
*   **♿ WAI-ARIA Accessibility:** Features accessible mobile navigation toggle states, keyboard-navigable links, and live announcements for dynamic status alerts.
*   **🛡️ Hardened Security System:** Custom security headers generated on every request, backed by HSTS, X-Frame-Options protection, and CSP rules.
*   **🚨 Robust Error Boundaries:** Complete segment error handling with dedicated page boundaries (`error.tsx`), root layout boundaries (`global-error.tsx`), and a custom 404 route (`not-found.tsx`).
*   **🤖 Automated CI Pipeline:** Configured with GitHub Actions to run linters, TypeScript compilations, and validation builds on every push and pull request.

---

## 🛠️ Technology Stack & Tooling

*   **Framework:** Next.js 16.2.6 (App Router)
*   **Runtime:** React 19.2.4
*   **Styling:** Tailwind CSS v4 & tw-animate-css
*   **Animation:** Framer Motion 12.38.0
*   **Icons:** Lucide React
*   **Quality Assurance:** ESLint 9 & TypeScript 5

---

## 📂 Directory Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml            # CI Pipeline (GitHub Actions linting, type-checking, build validation)
├── public/                   # Static assets & compressed illustrations (.webp / .svg)
├── src/
│   ├── app/                  # App Router pages, metadata, sitemaps, & error boundaries
│   │   ├── about/            # About page route segment
│   │   │   └── page.tsx      # About page component
│   │   ├── contact/          # Contact page route segment
│   │   │   └── page.tsx      # Contact page component
│   │   ├── experience/       # Experience page route segment
│   │   │   └── page.tsx      # Experience timeline component
│   │   ├── projects/         # Projects page route segment
│   │   │   └── page.tsx      # Projects dashboard wrapper page
│   │   ├── error.tsx         # Nested route segment error boundary
│   │   ├── favicon.ico       # Website browser icon
│   │   ├── global-error.tsx  # Root layout global error boundary
│   │   ├── globals.css       # Global styles & Tailwind CSS v4 custom directives
│   │   ├── layout.tsx        # HTML document shell wrapper & SEO configuration
│   │   ├── not-found.tsx     # Custom 404 fallback page
│   │   ├── page.tsx          # Homepage layout composition
│   │   ├── robots.ts         # Dynamic search crawler robot guidelines
│   │   └── sitemap.ts        # Dynamic sitemap index generator
│   ├── components/           # UI Components library
│   │   ├── icons/            # Custom styled SVG icons (GitHub, LinkedIn)
│   │   │   ├── Github.tsx
│   │   │   └── Linkedin.tsx
│   │   ├── ui/               # Reusable styled primitive design tokens (shadcn/ui cards, badges, buttons)
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── ContactForm.tsx   # Client-side form validation and submission state handler
│   │   ├── FadeIn.tsx        # Motion layout wrapper (Framer Motion)
│   │   ├── Footer.tsx        # Global page footer component
│   │   ├── Hero.tsx          # Above-the-fold hero landing section
│   │   ├── Navbar.tsx        # Global page header and mobile dropdown component
│   │   ├── Projects.tsx      # Homepage featured projects grid
│   │   └── ProjectsDashboard.tsx # Project explorer and category filtering panel
│   └── lib/                  # Library configurations and helpers
│       ├── projects.ts       # Shared projects data registry (single source of truth)
│       └── utils.ts          # Tailwind CSS classes merger (cn helper)
├── eslint.config.mjs         # ESLint configuration rules
├── next-env.d.ts             # Next.js TypeScript definitions
├── next.config.ts            # Next.js configurations & security headers
├── package.json              # Dependency mappings, scripts, overrides, & metadata
├── postcss.config.mjs        # PostCSS build pipelines
└── tsconfig.json             # Strict TypeScript compiler options
```

---

## 🚀 Getting Started

### 📋 Prerequisites

*   Node.js (v18.x or v20.x recommended)
*   npm (v10.x or higher)

### 💻 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rafal-jasinski-wd/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup local environment variables:**
    Create a `.env.local` file in the root directory and add your Web3Forms API key:
    ```env
    WEB3FORMS_ACCESS_KEY="your-access-key-here"
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Development Validation Commands

Maintain code quality and production standards by running these commands locally:

*   **Linting:** Verify syntax formatting conforms to ESLint rules:
    ```bash
    npm run lint
    ```
*   **Type-checking:** Run strict TypeScript compilation check:
    ```bash
    npx tsc --noEmit
    ```
*   **Dependency Auditing:** Run NPM security vulnerability scans:
    ```bash
    npm audit
    ```
*   **Production Build:** Compile and pre-render routes into static optimized pages:
    ```bash
    npm run build
    ```

---

## 🛡️ Security Headers Configuration

Configured inside `next.config.ts` to enforce strict client-side policies:

```typescript
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self' data:;
  connect-src 'self' https://api.web3forms.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://api.web3forms.com;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
```
*(Also includes HSTS max-age rules, `X-Content-Type-Options: nosniff`, `Referrer-Policy: origin-when-cross-origin`, and `X-Frame-Options: SAMEORIGIN` blockings to counter clickjacking.)*
