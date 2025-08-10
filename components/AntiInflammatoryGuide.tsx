"use client";

import React from "react";

type AntiInflammatoryGuideProps = {
  protocols: string[];
};

export function AntiInflammatoryGuide({ protocols }: AntiInflammatoryGuideProps) {
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Protocolo Antiinflamatorio
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800 transition-all hover:shadow-md hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <div className="min-w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200 leading-relaxed">
                    {protocol}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg border border-warning-200 dark:border-warning-800">
          <div className="flex items-start gap-2">
            <svg
              className="h-5 w-5 text-warning mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-warning">Importante:</p>
              <p className="text-sm text-warning-700 dark:text-warning-300">
                Mantener consistencia diaria para mejores resultados. Los efectos
                antiinflamatorios se acumulan con el tiempo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-default-600 dark:text-default-400">
          <p className="italic">
            Rutinas diarias diseñadas para reducir la inflamación sistémica y
            mejorar el bienestar general a través de enfoques naturales y sostenibles.
          </p>
        </div>
      </div>
    </div>
  );
}