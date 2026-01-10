"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

/**
 * BaseFocusLight
 * 
 * Only controls scale and color.
 */

interface BaseFocusLightProps {
  scale?: number;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'purple' | 'orange' | 'slate';
}

const themeMap = {
  red: { 
    upper: 'from-rose-400/40',
    base: 'from-rose-500/60',
    light: 'bg-rose-400', 
    shadow: 'shadow-rose-400/50' 
  },
  green: { 
    upper: 'from-emerald-400/40',
    base: 'from-emerald-500/60',
    light: 'bg-emerald-400', 
    shadow: 'shadow-emerald-400/50' 
  },
  yellow: { 
    upper: 'from-amber-300/40',
    base: 'from-amber-400/60',
    light: 'bg-amber-300', 
    shadow: 'shadow-amber-300/50' 
  },
  blue: { 
    upper: 'from-sky-400/40',
    base: 'from-sky-500/60',
    light: 'bg-sky-400', 
    shadow: 'shadow-sky-400/50' 
  },
  purple: { 
    upper: 'from-violet-400/40',
    base: 'from-violet-500/60',
    light: 'bg-violet-400', 
    shadow: 'shadow-violet-400/50' 
  },
  orange: { 
    upper: 'from-orange-400/40',
    base: 'from-orange-500/60',
    light: 'bg-orange-400', 
    shadow: 'shadow-orange-400/50' 
  },
  slate: { 
    upper: 'from-slate-400/40',
    base: 'from-slate-500/60',
    light: 'bg-slate-400', 
    shadow: 'shadow-slate-400/50' 
  }
};

const SingleTileStack: React.FC<{ delay: number; opacity: number; levitate?: boolean; theme: typeof themeMap['green'] }> = ({ delay, opacity, levitate = true, theme }) => {
  const pulse: Variants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      className="flex flex-col"
      style={{ opacity }}
      animate={levitate ? { y: [0, -6, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="flex translate-y-6">
        <motion.div variants={pulse} animate="animate" className={`relative h-12 w-10 bg-linear-to-t ${theme.upper} to-transparent -skew-y-20 translate-y-2 overflow-hidden`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${theme.light} shadow-[0_-1px_4px_var(--tw-shadow-color)] ${theme.shadow} z-10`} />
        </motion.div>
        <motion.div variants={pulse} animate="animate" className={`relative h-12 w-10 bg-linear-to-t ${theme.upper} to-transparent skew-y-20 translate-y-2 overflow-hidden`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${theme.light} shadow-[0_-1px_4px_var(--tw-shadow-color)] ${theme.shadow} z-10`} />
        </motion.div>
      </div>

      <div className="flex">
        <motion.div variants={pulse} animate="animate" className={`relative h-12 w-10 bg-linear-to-t ${theme.base} to-transparent skew-y-20 overflow-hidden`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${theme.light} shadow-[0_-1px_6px_var(--tw-shadow-color)] ${theme.shadow} z-10`} />
        </motion.div>
        <motion.div variants={pulse} animate="animate" className={`relative h-12 w-10 bg-linear-to-t ${theme.base} to-transparent -skew-y-20 overflow-hidden`}>
          <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${theme.light} shadow-[0_-1px_6px_var(--tw-shadow-color)] ${theme.shadow} z-10`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const BaseFocusLight: React.FC<BaseFocusLightProps> = ({ 
  scale = 1, 
  color = "green" 
}) => {
  const theme = themeMap[color] || themeMap.green;

  return (
    <div 
      className="p-2 flex flex-col items-center"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      <div className="flex flex-col -space-y-20 items-center">
        <SingleTileStack delay={0.5} opacity={0.1} theme={theme} />
        <SingleTileStack delay={0} opacity={0.5} theme={theme} />
        <SingleTileStack delay={0.5} opacity={0.7} theme={theme} />
        <SingleTileStack delay={1} opacity={1} levitate={false} theme={theme} />
      </div>
    </div>
  );
};

export default BaseFocusLight;
