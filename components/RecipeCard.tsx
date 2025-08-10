"use client";

import React from "react";

type Step = {
  text: string;
};

type RecipeProps = {
  title: string;
  preparation: string;
  prerequisite?: string;
  ingredients?: string[];
  steps: Step[];
  note?: string;
};

export function RecipeCard({
  title,
  preparation,
  prerequisite,
  ingredients,
  steps,
  note,
}: RecipeProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md h-full overflow-hidden relative border border-primary-100 dark:border-primary-900">
      {/* Decorative corner */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-10" />
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20" />

      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
        {title}
      </h3>

      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm bg-primary-50 dark:bg-primary-900/30 p-2 rounded-lg">
          <span className="font-medium text-primary min-w-[100px]">
            Preparación:
          </span>
          <span className="text-default-700 dark:text-default-400">
            {preparation}
          </span>
        </div>

        {prerequisite && (
          <div className="flex items-center gap-2 text-sm bg-warning-50 dark:bg-warning-900/20 p-2 rounded-lg">
            <span className="font-medium text-warning-600 dark:text-warning-400 min-w-[100px]">
              Prerequisito:
            </span>
            <span className="text-default-700 dark:text-default-400">
              {prerequisite}
            </span>
          </div>
        )}
      </div>

      {ingredients && ingredients.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-md mb-2 flex items-center gap-2">
            <svg
              className="h-5 w-5 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            Ingredientes:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-default-600 dark:text-default-400 pl-2">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              fillRule="evenodd"
            />
          </svg>
          Pasos:
        </h4>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          {steps.map((step, index) => (
            <li key={index} className="text-default-600 pl-2">
              <span className="text-primary-700 dark:text-primary-300 font-medium mr-2">
                {index + 1}.
              </span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {note && (
        <div className="mt-4 p-3 rounded-lg border-l-4" style={{
          backgroundColor: note.includes('Richard') ? 'rgb(59 130 246 / 0.1)' : 'rgb(34 197 94 / 0.1)',
          borderColor: note.includes('Richard') ? 'rgb(59 130 246)' : 'rgb(34 197 94)'
        }}>
          <div className="flex items-start gap-2">
            <svg
              className="h-5 w-5 mt-0.5"
              style={{ color: note.includes('Richard') ? 'rgb(59 130 246)' : 'rgb(34 197 94)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <p className="text-sm font-medium" style={{ 
              color: note.includes('Richard') ? 'rgb(30 64 175)' : 'rgb(21 128 61)' 
            }}>
              {note}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
