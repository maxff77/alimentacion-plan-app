"use client";

import React from "react";

type SleepTipsProps = {
  tips: string[];
};

export function SleepTips({ tips }: SleepTipsProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Recomendaciones para mejorar el sueño
        </h3>

        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="flex items-start gap-3 transition-all hover:translate-x-1"
            >
              <div className="min-w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary">
                {index + 1}
              </div>
              <span className="text-default-700 dark:text-default-300">
                {tip}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-default-600 dark:text-default-400">
          <p className="italic">
            Estas recomendaciones ayudarán a mejorar la calidad del sueño para
            tu padre, lo que contribuirá a su bienestar general.
          </p>
        </div>
      </div>
    </div>
  );
}
