"use client";

import React from "react";

interface JawDevelopmentGuideProps {
  protocols: string[];
}

export function JawDevelopmentGuide({ protocols }: JawDevelopmentGuideProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md relative overflow-hidden border border-primary-100 dark:border-primary-900">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-100 dark:bg-secondary-900/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          💪 Protocolo de Desarrollo Mandibular
        </h3>
        <p className="text-sm text-default-500 mb-6">Ejercicios y técnicas para Richard</p>

        <div className="space-y-4">
          {protocols.map((protocol, index) => (
            <div key={index} className="flex items-start gap-3 transition-all hover:translate-x-1">
              <div className="min-w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-default-700 dark:text-default-300 flex-1 pt-1">
                {protocol}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
            🎯 Meta diaria:
          </p>
          <p className="text-sm text-default-700 dark:text-default-300">
            15-20 minutos de masticación activa por comida principal
          </p>
        </div>
      </div>
    </div>
  );
}