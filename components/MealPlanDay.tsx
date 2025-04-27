"use client";

import React from "react";

type Meal = {
  name: string;
  time: string;
  description: string;
  isPortable?: boolean;
};

type MealPlanDayProps = {
  day: string;
  meals: Meal[];
  person: string;
};

export function MealPlanDay({ day, meals, person }: MealPlanDayProps) {
  // Day of week color mapping
  const getDayColor = (day: string) => {
    const colors: Record<string, string> = {
      Lunes: "from-blue-400 to-blue-600",
      Martes: "from-emerald-400 to-emerald-600",
      Miércoles: "from-amber-400 to-amber-600",
      Jueves: "from-rose-400 to-rose-600",
      Viernes: "from-indigo-400 to-indigo-600",
      Sábado: "from-purple-400 to-purple-600",
      Domingo: "from-red-400 to-red-600",
    };

    return colors[day] || "from-primary-400 to-primary-600";
  };

  return (
    <div className="w-full bg-content1 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className={`bg-gradient-to-r ${getDayColor(day)} p-4`}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{day}</h3>
          <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
            {person}
          </span>
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-4">
          {meals.map((meal, index) => (
            <li
              key={index}
              className="border-b border-divider last:border-0 pb-3 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <span className="font-medium">{meal.name}</span>
                <span className="text-sm text-default-500 bg-default-100 dark:bg-default-800/40 px-2 py-1 rounded-full">
                  {meal.time}
                </span>
              </div>
              <p className="text-default-600 mt-1 text-sm">
                {meal.description}
              </p>
              {meal.isPortable && (
                <div className="inline-flex items-center mt-2 gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>Portátil</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
