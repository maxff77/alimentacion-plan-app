"use client";

import React, { useState } from "react";

type CookingSession = {
  day: string;
  tasks: string[];
};

type BatchCookingScheduleProps = {
  sessions: CookingSession[];
};

export function BatchCookingSchedule({ sessions }: BatchCookingScheduleProps) {
  const [expandedSessions, setExpandedSessions] = useState<Record<string, boolean>>(
    sessions.reduce((acc, session) => ({
      ...acc,
      [session.day]: true,
    }), {})
  );

  const toggleSession = (day: string) => {
    setExpandedSessions(prev => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Guía de Batch Cooking
        </h3>

        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                aria-expanded={expandedSessions[session.day]}
                className="w-full flex items-center justify-between p-4 bg-primary-50 dark:bg-primary-900/20 hover:brightness-95 transition-all"
                onClick={() => toggleSession(session.day)}
              >
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <span className="text-sm font-semibold text-primary">
                      {session.day}
                    </span>
                  </div>
                  <span className="text-sm text-default-600 dark:text-default-400">
                    {session.tasks.length} tareas programadas
                  </span>
                </div>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    expandedSessions[session.day]
                      ? "transform rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </button>

              {expandedSessions[session.day] && (
                <div className="p-4">
                  <ul className="space-y-3">
                    {session.tasks.map((task, taskIndex) => (
                      <li
                        key={taskIndex}
                        className="flex items-start gap-3 transition-all hover:translate-x-1"
                      >
                        <div className="min-w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-success"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-default-700 dark:text-default-300">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-default-600 dark:text-default-400">
          <p className="italic">
            Preparación eficiente para la semana que te ahorrará tiempo y garantizará
            comidas nutritivas todos los días.
          </p>
        </div>
      </div>
    </div>
  );
}