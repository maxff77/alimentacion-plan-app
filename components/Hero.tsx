"use client";

import React from "react";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20 dark:from-primary-900/40 dark:to-primary-800/40 z-0"></div>
      
      {/* Food pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.07] z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="relative z-10 px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-primary dark:text-primary-400">Plan Alimenticio</span>
          <span className="block mt-2">Personalizado</span>
        </h1>
        
        <p className="text-xl max-w-2xl mx-auto text-default-700 dark:text-default-400 mb-8">
          para Richard (18 años) y su Padre (53 años)
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L12 9.586V5a1 1 0 10-2 0v4.586l-1.293-1.293z" />
              <path d="M2 17a1 1 0 011-1h5a1 1 0 110 2H3a1 1 0 01-1-1zm12-1a1 1 0 01.53.14l3 2a1 1 0 11-1.06 1.72L15 18.14l-1.47 1.72a1 1 0 11-1.06-1.72l3-2A1 1 0 0114 16z" />
            </svg>
            <span>Comidas Saludables</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Horarios Optimizados</span>
          </div>
          
          <div className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Organización Semanal</span>
          </div>
        </div>
      </div>
    </div>
  );
} 