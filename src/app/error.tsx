'use client';

import { useEffect } from 'react';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-rose-500 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full">
            <AlertCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Something went wrong
          </h1>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            An unexpected error occurred during rendering. We apologize for the inconvenience.
          </p>
          {error.digest && (
            <code className="text-xs font-mono px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-500">
              Error Digest: {error.digest}
            </code>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-rose-500 hover:bg-rose-400 text-slate-950 font-semibold text-sm transition-colors duration-200 px-6 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-850 bg-slate-900/30 hover:bg-slate-800 text-white font-semibold text-sm transition-colors duration-200 px-6"
          >
            <Home className="w-4 h-4 text-emerald-400" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
