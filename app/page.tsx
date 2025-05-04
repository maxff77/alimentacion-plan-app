"use client";

import { Tabs, Tab } from "@heroui/react";

import {
  richardSchedule,
  fatherSchedule,
  richardMealPlan,
  fatherMealPlan,
  recipes,
  shoppingList,
  sleepTips,
  prepDays,
  quickOptions,
} from "./data/food-plan-data";
import { refluxTips } from "./data/reflux-tips";

import { MealSchedule } from "@/components/MealSchedule";
import { MealPlanDay } from "@/components/MealPlanDay";
import { RecipeCard } from "@/components/RecipeCard";
import { ShoppingListTodo } from "@/components/Todo";
import { SleepTips } from "@/components/SleepTips";
import { RefluxTips } from "@/components/RefluxTips";
import { PrepDaysList } from "@/components/PrepDaysList";
import { QuickOptions } from "@/components/QuickOptions";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="py-6">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            title="Horarios para Richard"
          />
          <div className="transform transition-all hover:scale-[1.01]">
            <MealSchedule items={richardSchedule} title="Richard (18 años)" />
          </div>
        </div>
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            title="Horarios para Padre"
          />
          <div className="transform transition-all hover:scale-[1.01]">
            <MealSchedule items={fatherSchedule} title="Padre (53 años)" />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader
          icon={
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          }
          subtitle="Organiza tus comidas para la semana"
          title="Plan de comidas semanal"
        />
        <div className="bg-content1 p-6 rounded-xl shadow-md">
          <Tabs
            fullWidth
            aria-label="Selección de persona"
            className="mb-6"
            color="primary"
            variant="underlined"
          >
            <Tab key="richard" title="Richard (18 años)">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
                <MealPlanDay
                  day="Lunes"
                  meals={richardMealPlan.monday}
                  person="Richard"
                />
                <MealPlanDay
                  day="Martes"
                  meals={richardMealPlan.tuesday}
                  person="Richard"
                />
                <MealPlanDay
                  day="Miércoles"
                  meals={richardMealPlan.wednesday}
                  person="Richard"
                />
                <MealPlanDay
                  day="Jueves"
                  meals={richardMealPlan.thursday}
                  person="Richard"
                />
              </div>
            </Tab>
            <Tab key="father" title="Padre (53 años)">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
                <MealPlanDay
                  day="Lunes"
                  meals={fatherMealPlan.monday}
                  person="Padre"
                />
                <MealPlanDay
                  day="Martes"
                  meals={fatherMealPlan.tuesday}
                  person="Padre"
                />
                <MealPlanDay
                  day="Miércoles"
                  meals={fatherMealPlan.wednesday}
                  person="Padre"
                />
                <MealPlanDay
                  day="Jueves"
                  meals={fatherMealPlan.thursday}
                  person="Padre"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader
          icon={
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          }
          subtitle="Instrucciones paso a paso para preparar tus comidas"
          title="Recetas detalladas"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="transform transition-all hover:scale-[1.02]"
            >
              <RecipeCard
                preparation={recipe.preparation}
                prerequisite={recipe.prerequisite}
                steps={recipe.steps}
                title={recipe.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            subtitle="Marca los productos a medida que los compras"
            title="Lista de compras"
          />
          <ShoppingListTodo items={shoppingList} />
        </div>
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            subtitle="Recomendaciones para mejorar la calidad del sueño"
            title="Consejos para el sueño"
          />
          <SleepTips tips={sleepTips} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            subtitle="Organiza con anticipación para ahorrar tiempo"
            title="Preparación anticipada"
          />
          <PrepDaysList days={prepDays} />
        </div>
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            subtitle="Para los días con poco tiempo"
            title="Opciones rápidas"
          />
          <QuickOptions options={quickOptions} />
        </div>
        <div>
          <SectionHeader
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            subtitle="Manejo del reflujo ácido para tu padre"
            title="Consejos para el reflujo"
          />
          <RefluxTips tips={refluxTips} />
        </div>
      </div>
    </div>
  );
}
