"use client";

import React, { useState } from "react";

// Define the props type for structured reflux tips
type RefluxTipsProps = {
  tips: {
    dietary: string[];
    timing: string[];
    sleeping: string[];
    emergency: string[];
  };
};

// Define type for category information
type CategoryInfo = {
  title: string;
  icon: React.ReactNode;
  color: string;
};

export function RefluxTips({ tips }: RefluxTipsProps) {
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({
    dietary: true,
    timing: true,
    sleeping: true,
    emergency: true,
  });

  // Toggle expansion state for a category
  const toggleCategory = (category: keyof typeof expandedCategories) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Category information with titles and icons
  const categoryInfo: Record<string, CategoryInfo> = {
    dietary: {
      title: "Consejos Alimenticios",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      ),
      color: "bg-blue-50 dark:bg-blue-900/20",
    },
    timing: {
      title: "Horarios y Tiempos",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      ),
      color: "bg-green-50 dark:bg-green-900/20",
    },
    sleeping: {
      title: "Hábitos de Sueño",
      icon: (
        <svg
          className="h-5 w-5"
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
      ),
      color: "bg-purple-50 dark:bg-purple-900/20",
    },
    emergency: {
      title: "Consejos de Emergencia",
      icon: (
        <svg
          className="h-5 w-5"
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
      ),
      color: "bg-red-50 dark:bg-red-900/20",
    },
  };

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
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Consejos para Manejar el Reflujo
        </h3>

        <div className="space-y-4">
          {Object.entries(tips).map(([category, categoryTips]) => (
            <div
              key={category}
              className={`border rounded-lg overflow-hidden ${
                expandedCategories[category as keyof typeof expandedCategories]
                  ? "shadow-sm"
                  : ""
              }`}
            >
              <button
                aria-expanded={
                  expandedCategories[
                    category as keyof typeof expandedCategories
                  ]
                }
                className={`w-full flex items-center justify-between p-3 ${
                  categoryInfo[category]?.color || "bg-gray-50"
                } hover:brightness-95 transition-all`}
                onClick={() =>
                  toggleCategory(category as keyof typeof expandedCategories)
                }
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary">
                    {categoryInfo[category]?.icon}
                  </span>
                  <span className="font-semibold">
                    {categoryInfo[category]?.title}
                  </span>
                </div>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    expandedCategories[
                      category as keyof typeof expandedCategories
                    ]
                      ? "transform rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              {expandedCategories[
                category as keyof typeof expandedCategories
              ] && (
                <div className="p-4">
                  <ul className="space-y-3">
                    {categoryTips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 transition-all hover:translate-x-1"
                      >
                        <div className="min-w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary text-xs">
                          {index + 1}
                        </div>
                        <span className="text-default-700 dark:text-default-300">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-default-600 dark:text-default-400">
          <p className="italic">
            Seguir estos consejos ayudará a controlar los síntomas del reflujo
            ácido, mejorando la comodidad y calidad de vida.
          </p>
        </div>
      </div>
    </div>
  );
}
