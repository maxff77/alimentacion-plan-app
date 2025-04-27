"use client";

import { Tabs, Tab } from "@heroui/react";
import { MealSchedule } from "@/components/MealSchedule";
import { MealPlanDay } from "@/components/MealPlanDay";
import { RecipeCard } from "@/components/RecipeCard";
import { ShoppingListTodo } from "@/components/Todo";
import { SleepTips } from "@/components/SleepTips";
import { PrepDaysList } from "@/components/PrepDaysList";
import { QuickOptions } from "@/components/QuickOptions";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

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

export default function Home() {
  return (
    <div className="py-6">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <SectionHeader 
            title="Horarios para Richard" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <div className="transform transition-all hover:scale-[1.01]">
            <MealSchedule title="Richard (18 años)" items={richardSchedule} />
          </div>
        </div>
        <div>
          <SectionHeader 
            title="Horarios para Padre" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <div className="transform transition-all hover:scale-[1.01]">
            <MealSchedule title="Padre (53 años)" items={fatherSchedule} />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader 
          title="Plan de comidas semanal" 
          subtitle="Organiza tus comidas para la semana"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
        />
        <div className="bg-content1 p-6 rounded-xl shadow-md">
          <Tabs
            color="primary"
            variant="underlined"
            aria-label="Selección de persona"
            className="mb-6"
            fullWidth
          >
            <Tab key="richard" title="Richard (18 años)">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
                <MealPlanDay day="Lunes" meals={richardMealPlan.monday} person="Richard" />
                <MealPlanDay day="Martes" meals={richardMealPlan.tuesday} person="Richard" />
                <MealPlanDay day="Miércoles" meals={richardMealPlan.wednesday} person="Richard" />
                <MealPlanDay day="Jueves" meals={richardMealPlan.thursday} person="Richard" />
              </div>
            </Tab>
            <Tab key="father" title="Padre (53 años)">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
                <MealPlanDay day="Lunes" meals={fatherMealPlan.monday} person="Padre" />
                <MealPlanDay day="Martes" meals={fatherMealPlan.tuesday} person="Padre" />
                <MealPlanDay day="Miércoles" meals={fatherMealPlan.wednesday} person="Padre" />
                <MealPlanDay day="Jueves" meals={fatherMealPlan.thursday} person="Padre" />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="mb-16">
        <SectionHeader 
          title="Recetas detalladas" 
          subtitle="Instrucciones paso a paso para preparar tus comidas"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="transform transition-all hover:scale-[1.02]">
              <RecipeCard 
                title={recipe.title} 
                preparation={recipe.preparation}
                prerequisite={recipe.prerequisite}
                steps={recipe.steps}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <SectionHeader 
            title="Lista de compras" 
            subtitle="Marca los productos a medida que los compras"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <ShoppingListTodo items={shoppingList} />
        </div>
        <div>
          <SectionHeader 
            title="Consejos para el sueño" 
            subtitle="Recomendaciones para mejorar la calidad del sueño"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            }
          />
          <SleepTips tips={sleepTips} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <SectionHeader 
            title="Preparación anticipada" 
            subtitle="Organiza con anticipación para ahorrar tiempo"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <PrepDaysList days={prepDays} />
        </div>
        <div>
          <SectionHeader 
            title="Opciones rápidas" 
            subtitle="Para los días con poco tiempo"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <QuickOptions options={quickOptions} />
        </div>
      </div>
    </div>
  );
}
