"use client";

import React from "react";

type ScheduleItem = {
  meal: string;
  time: string;
  note?: string;
};

type ScheduleProps = {
  title: string;
  items: ScheduleItem[];
};

export function MealSchedule({ title, items }: ScheduleProps) {
  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-2 border-b border-divider"
          >
            <div className="font-medium">{item.meal}</div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">{item.time}</span>
              {item.note && (
                <span className="text-xs text-default-500 bg-default-100 px-2 py-1 rounded-full">
                  {item.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
