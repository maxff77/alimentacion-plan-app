"use client";

import React, { useState } from "react";

interface Supplement {
  name: string;
  dosage: string;
  timing: string;
  purpose: string;
}

interface SupplementationCardProps {
  richard: Supplement[];
  pedro: Supplement[];
}

export function SupplementationCard({ richard, pedro }: SupplementationCardProps) {
  const [activeTab, setActiveTab] = useState<"richard" | "pedro">("richard");

  const getPersonColor = (person: "richard" | "pedro") => {
    return person === "richard" 
      ? "from-blue-400 to-blue-600" 
      : "from-emerald-400 to-emerald-600";
  };

  const getBorderColor = (person: "richard" | "pedro") => {
    return person === "richard" 
      ? "border-blue-500" 
      : "border-emerald-500";
  };

  const currentSupplements = activeTab === "richard" ? richard : pedro;
  const budget = activeTab === "richard" ? "$25-35" : "$40-50";

  return (
    <div className="w-full bg-content1 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${getPersonColor(activeTab)} p-4`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl">💊</div>
            <div>
              <h3 className="text-xl font-bold text-white">Plan de Suplementación</h3>
              <p className="text-sm text-white/80">Suplementos esenciales personalizados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-divider">
        <div className="flex">
          <button
            onClick={() => setActiveTab("richard")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "richard"
                ? "text-blue-600 border-b-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "text-default-600 hover:text-blue-600"
            }`}
          >
            Richard
          </button>
          <button
            onClick={() => setActiveTab("pedro")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "pedro"
                ? "text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                : "text-default-600 hover:text-emerald-600"
            }`}
          >
            Pedro
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="space-y-4">
          {currentSupplements.map((supp, index) => (
            <div 
              key={index} 
              className={`border-l-4 ${getBorderColor(activeTab)} pl-4 py-3 bg-default-50 dark:bg-default-800/40 rounded-r-lg`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg text-default-800 dark:text-default-200">
                  {supp.name}
                </h4>
                <div className="text-xs bg-default-200 dark:bg-default-700 px-2 py-1 rounded-full">
                  Suplemento
                </div>
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-default-700 dark:text-default-300 min-w-[60px]">
                    Dosis:
                  </span>
                  <span className="text-default-600 dark:text-default-400">
                    {supp.dosage}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-medium text-default-700 dark:text-default-300 min-w-[60px]">
                    Cuándo:
                  </span>
                  <span className="text-default-600 dark:text-default-400">
                    {supp.timing}
                  </span>
                </div>
                
                <div className="mt-2">
                  <p className="text-default-500 dark:text-default-400 text-xs italic">
                    {supp.purpose}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget info */}
        <div className="mt-6 pt-4 border-t border-divider">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-default-700 dark:text-default-300">
              Presupuesto mensual estimado:
            </span>
            <span className={`text-sm font-bold ${
              activeTab === "richard" ? "text-blue-600" : "text-emerald-600"
            }`}>
              {budget}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}