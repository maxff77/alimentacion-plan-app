"use client";

import React from "react";

interface SnackKit {
  name: string;
  preparation: string;
  consumptionTime: string;
  technique: string;
  protein: string;
  storage: string;
}

interface QuickSnackKitsProps {
  kits: SnackKit[];
}

export function QuickSnackKits({ kits }: QuickSnackKitsProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md relative overflow-hidden border border-primary-100 dark:border-primary-900">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-success-100 dark:bg-success-900/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1L5 6l4 5"
            />
          </svg>
          🎒 Kits de Snacks Relámpago
        </h3>
        <p className="text-sm text-default-500 mb-6">Snacks portables para entre clases</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit, index) => (
            <div 
              key={index} 
              className="border border-default-200 dark:border-default-700 bg-default-50 dark:bg-default-900/20 p-4 rounded-lg shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <h4 className="font-bold text-sm mb-3 text-primary-600 dark:text-primary-400">
                {kit.name}
              </h4>
              
              <div className="space-y-2 mb-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300">
                    ⏱️ {kit.consumptionTime}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300">
                    🥚 {kit.protein}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-default-600 dark:text-default-400">
                <div>
                  <span className="font-semibold text-primary">Prep:</span>{" "}
                  <span>{kit.preparation}</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Técnica:</span>{" "}
                  <span>{kit.technique}</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Almacenamiento:</span>{" "}
                  <span>{kit.storage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}