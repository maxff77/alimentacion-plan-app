"use client";

import React from "react";

type PrepDay = {
  day: string;
  tasks: string[];
};

type PrepDaysListProps = {
  days: PrepDay[];
};

export function PrepDaysList({ days }: PrepDaysListProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">Días de preparación anticipada</h3>
      <div className="space-y-6">
        {days.map((day, index) => (
          <div
            key={index}
            className="border-b border-divider last:border-0 pb-4 last:pb-0"
          >
            <h4 className="font-semibold text-lg text-primary mb-2">
              {day.day}
            </h4>
            <ul className="space-y-2">
              {day.tasks.map((task, taskIndex) => (
                <li
                  key={taskIndex}
                  className="text-default-600 flex items-start gap-2"
                >
                  <span className="text-primary">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
