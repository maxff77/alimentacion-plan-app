"use client";

import React from "react";

type Step = {
  text: string;
};

type RecipeProps = {
  title: string;
  preparation: string;
  prerequisite?: string;
  steps: Step[];
};

export function RecipeCard({ title, preparation, prerequisite, steps }: RecipeProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md h-full overflow-hidden relative border border-primary-100 dark:border-primary-900">
      {/* Decorative corner */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-10"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"></div>
      
      <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">{title}</h3>
      
      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm bg-primary-50 dark:bg-primary-900/30 p-2 rounded-lg">
          <span className="font-medium text-primary min-w-[100px]">Preparación:</span>
          <span className="text-default-700 dark:text-default-400">{preparation}</span>
        </div>
        
        {prerequisite && (
          <div className="flex items-center gap-2 text-sm bg-warning-50 dark:bg-warning-900/20 p-2 rounded-lg">
            <span className="font-medium text-warning-600 dark:text-warning-400 min-w-[100px]">Prerequisito:</span>
            <span className="text-default-700 dark:text-default-400">{prerequisite}</span>
          </div>
        )}
      </div>
      
      <div>
        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Pasos:
        </h4>
        <ol className="list-decimal list-inside space-y-3 pl-1">
          {steps.map((step, index) => (
            <li key={index} className="text-default-600 pl-2">
              <span className="text-primary-700 dark:text-primary-300 font-medium mr-2">{index + 1}.</span>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
} 