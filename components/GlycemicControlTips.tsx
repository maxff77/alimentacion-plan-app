"use client";

import React from "react";

type GlycemicControlTipsProps = {
  strategies: string[];
};

export function GlycemicControlTips({ strategies }: GlycemicControlTipsProps) {
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Estrategia de Control Glucémico
        </h3>

        <div className="space-y-4">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg border-l-4 border-secondary transition-all hover:translate-x-1"
            >
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center text-secondary">
                  {index + 1}
                </div>
                <p className="text-default-700 dark:text-default-300">{strategy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-success-50 dark:bg-success-900/20 rounded-lg border border-success-200 dark:border-success-800">
          <div className="flex items-start gap-2">
            <svg
              className="h-5 w-5 text-success mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-success">Resultado esperado:</p>
              <p className="text-sm text-success-700 dark:text-success-300">
                Reducción de picos de glucosa en 73% y mejor estabilidad metabólica
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-default-600 dark:text-default-400">
          <p className="italic">
            Plan especial diseñado para Pedro, adaptado a sus necesidades específicas
            y estilo de vida para optimizar el control glucémico.
          </p>
        </div>
      </div>
    </div>
  );
}