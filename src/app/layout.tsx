import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rafal Jasinski | Software Engineer",
    template: "%s | Rafal Jasinski"
  },
  description: "Portfolio of Rafal Jasinski, Software Engineer specializing in modern web applications, performance optimization, and premium UI.",
  keywords: ["Software Engineer", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Developer", "Rafal Jasinski", "Portfolio"],
  authors: [{ name: "Rafal Jasinski" }],
  creator: "Rafal Jasinski",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafal-jasinski-wd.github.io",
    title: "Rafal Jasinski | Software Engineer",
    description: "Portfolio of Rafal Jasinski, Software Engineer specializing in modern web applications, performance optimization, and premium UI.",
    siteName: "Rafal Jasinski Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafal Jasinski | Software Engineer",
    description: "Portfolio of Rafal Jasinski, Software Engineer specializing in modern web applications, performance optimization, and premium UI.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
