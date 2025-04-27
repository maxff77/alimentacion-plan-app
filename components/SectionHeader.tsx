"use client";

import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-start mb-6">
      <div className="flex items-center gap-2 mb-1">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="text-2xl font-bold relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></span>
        </h2>
      </div>
      {subtitle && <p className="text-default-600 mt-2">{subtitle}</p>}
    </div>
  );
} 