"use client";
import { useState } from "react";
import { Switch } from "@heroui/react";
import { Button } from "@heroui/react";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

export function ShoppingListTodo({ items }: { items: string[] }) {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(
    items.map((item) => ({
      id: crypto.randomUUID(),
      text: item,
      completed: false,
    })),
  );

  const toggleItem = (id: string) => {
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const resetTodo = () => {
    setTodoItems((currentItems) =>
      currentItems.map((item) => ({ ...item, completed: false })),
    );
  };

  // Get completion percentages
  const completedCount = todoItems.filter((item) => item.completed).length;
  const totalCount = todoItems.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="w-full bg-content1 p-6 rounded-xl shadow-md relative">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <svg
            className="h-5 w-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Lista de Compras
        </h3>

        {/* Progress bar */}
        <div className="w-full h-2 bg-default-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1 text-default-500">
          <span>
            {completedCount} de {totalCount} items
          </span>
          <span>{completionPercentage}% completado</span>
        </div>
      </div>

      <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
        {todoItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-3 border border-default-200 dark:border-default-800 rounded-lg transition-all ${
              item.completed
                ? "bg-success-50 dark:bg-success-900/10 border-success-200 dark:border-success-900/30"
                : "hover:bg-default-50 dark:hover:bg-default-800/40"
            }`}
          >
            <span
              className={`transition-all ${item.completed ? "line-through text-default-400" : ""}`}
            >
              {item.text}
            </span>
            <Switch
              aria-label={`Marcar ${item.text} como comprado`}
              color="success"
              isSelected={item.completed}
              size="sm"
              onValueChange={() => toggleItem(item.id)}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          className="w-full flex items-center justify-center gap-2"
          color="primary"
          radius="full"
          variant="flat"
          onClick={resetTodo}
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              fillRule="evenodd"
            />
          </svg>
          Reiniciar Lista
        </Button>
      </div>
    </div>
  );
}
