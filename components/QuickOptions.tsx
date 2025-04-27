"use client";

import React from "react";

type QuickOptionsProps = {
  options: string[];
};

export function QuickOptions({ options }: QuickOptionsProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">Opciones para días apretados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-primary/10 text-primary p-4 rounded-lg flex items-center justify-center text-center font-medium"
          >
            {option}
          </div>
        ))}
      </div>
      <p className="text-sm text-default-500 mt-4">
        Estas opciones son ideales para los días lunes y miércoles cuando Richard tiene poco tiempo.
      </p>
    </div>
  );
} 