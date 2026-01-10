"use client";

import React from 'react';

/**
 * Base Component
 * 
 * A single, static geometric cube foundation.
 * Restored to the solid 'Cube Design' before tiering and staircase logic.
 */

interface BaseProps {
  scale?: number;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'purple' | 'orange' | 'slate';
}

const colorThemes = {
  red: { light: 'bg-rose-300', mid: 'bg-rose-400', dark: 'bg-rose-500' },
  green: { light: 'bg-emerald-300', mid: 'bg-emerald-400', dark: 'bg-emerald-500' },
  yellow: { light: 'bg-amber-200', mid: 'bg-amber-300', dark: 'bg-amber-400' },
  blue: { light: 'bg-sky-300', mid: 'bg-sky-400', dark: 'bg-sky-500' },
  purple: { light: 'bg-violet-300', mid: 'bg-violet-400', dark: 'bg-violet-500' },
  orange: { light: 'bg-orange-300', mid: 'bg-orange-400', dark: 'bg-orange-500' },
  slate: { light: 'bg-slate-400', mid: 'bg-slate-500', dark: 'bg-slate-600' }
};

export const Base: React.FC<BaseProps> = ({ scale = 1, color = 'slate' }) => {
  const theme = colorThemes[color] || colorThemes.slate;

  return (
    <div className="p-2" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <div className="flex flex-col relative justify-self-center translate-y-5 z-10">
        {/* Top Tier */}
        <div className="flex translate-y-8 ">
          <div className={`relative h-4 w-7 ${theme.light} -skew-y-20 -translate-y-7 border-l border-t border-white/10`} />
          <div className={`relative h-4 w-7 ${theme.light} skew-y-20 -translate-y-7 border-r border-t border-white/10`} />
        </div>
        <div className="flex">
          <div className={`relative h-4 w-7 ${theme.dark} skew-y-20 border-l border-b border-white/10`} />
          <div className={`relative h-4 w-7 ${theme.mid} -skew-y-20 border-r border-b border-white/10`} />
        </div>
      </div>
      <div className="flex flex-col relative z-5">
        {/* Base Tier */}
        <div className="flex translate-y-8">
          <div className={`relative h-6 w-10 ${theme.light} -skew-y-20 -translate-y-6 border-l border-t border-white/10`} />
          <div className={`relative h-6 w-10 ${theme.light} skew-y-20 -translate-y-6 border-r border-t border-white/10`} />
        </div>
        <div className="flex">
          <div className="relative">
            <div className="relative">
              <div className={`absolute h-6 w-10 ${theme.light} -skew-y-20`} />
              <div className="absolute top-4 h-6 w-10 bg-white skew-y-20" />
              <div className={`relative h-6 w-10 ${theme.dark} skew-y-20 border-l border-b border-white/10`} />
            </div>
          </div>
          <div className="relative">
            <div className={`absolute h-6 w-10 ${theme.light} skew-y-20`} />
            <div className="absolute top-4 h-6 w-10 bg-white -skew-y-20" />
            <div className={`relative h-6 w-10 ${theme.mid} -skew-y-20 border-r border-b border-white/10`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
