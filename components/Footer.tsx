"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 border-t border-primary-200 dark:border-primary-800">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Plan Alimenticio</h3>
            <p className="text-default-600 text-sm mt-1">Salud y bienestar para ti y tu familia</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-default-600">© {new Date().getFullYear()}</span>
            <span className="text-primary font-medium">Plan Alimenticio Personalizado</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 