'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  whileInView?: boolean;
  viewportMargin?: string;
  startX?: number;
  startY?: number;
}

export function FadeIn({
  children,
  direction = 'none',
  delay = 0,
  duration = 0.5,
  scale = 1,
  className = '',
  whileInView = false,
  viewportMargin = '-100px',
  startX,
  startY,
}: FadeInProps) {
  const getOffset = () => {
    if (startX !== undefined || startY !== undefined) {
      return { x: startX ?? 0, y: startY ?? 0 };
    }
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: 20 };
      case 'right': return { x: -20 };
      default: return {};
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
      scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut' as const,
      },
    },
  };

  if (whileInView) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: viewportMargin }}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
