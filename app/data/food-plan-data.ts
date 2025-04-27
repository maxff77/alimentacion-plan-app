// Schedule data
export const richardSchedule = [
  { meal: "Desayuno", time: "7:00 am", note: "" },
  { meal: "Media mañana", time: "10:00 am", note: "portátil para la escuela" },
  { meal: "Almuerzo", time: "12:00 pm/1:00 pm", note: "Lun/Mié: 12:00 pm (portátil), Mar: 1:00 pm (en casa)" },
  { meal: "Merienda", time: "4:00 pm", note: "" },
  { meal: "Cena", time: "7:00 pm", note: "" },
];

export const fatherSchedule = [
  { meal: "Desayuno", time: "7:00 am", note: "" },
  { meal: "Media mañana", time: "10:00 am", note: "" },
  { meal: "Almuerzo", time: "1:00 pm", note: "" },
  { meal: "Merienda", time: "4:00 pm", note: "" },
  { meal: "Cena", time: "7:00 pm", note: "" },
  { meal: "Refrigerio nocturno", time: "9:00 pm", note: "para mejorar el sueño" },
];

// Weekly meal plans
export const richardMealPlan = {
  monday: [
    { name: "Desayuno", time: "7:00 am", description: "Avena con plátano y semillas de chía" },
    { name: "Media mañana", time: "10:00 am", description: "Yogur natural con granola", isPortable: true },
    { name: "Almuerzo", time: "12:00 pm", description: "Sándwich de pollo con pan integral, lechuga y tomate", isPortable: true },
    { name: "Merienda", time: "4:00 pm", description: "Batido de espinacas y plátano" },
    { name: "Cena", time: "7:00 pm", description: "Tacos de pollo con tortillas de maíz, repollo y salsa de yogur" },
  ],
  tuesday: [
    { name: "Desayuno", time: "7:00 am", description: "Huevos revueltos con espinacas y tomate" },
    { name: "Media mañana", time: "10:00 am", description: "Manzana con almendras", isPortable: true },
    { name: "Almuerzo", time: "1:00 pm", description: "Ensalada de frijoles con maíz, tomate, cebolla y cilantro" },
    { name: "Merienda", time: "4:00 pm", description: "Yogur natural con fresas" },
    { name: "Cena", time: "7:00 pm", description: "Pollo con limón, quinoa y ensalada de espinacas" },
  ],
  wednesday: [
    { name: "Desayuno", time: "7:00 am", description: "Avena con manzana y canela" },
    { name: "Media mañana", time: "10:00 am", description: "Yogur natural con granola", isPortable: true },
    { name: "Almuerzo", time: "12:00 pm", description: "Wrap de pollo con lechuga, tomate y aguacate", isPortable: true },
    { name: "Merienda", time: "4:00 pm", description: "Batido de espinacas y plátano" },
    { name: "Cena", time: "7:00 pm", description: "Pescado al vapor con arroz integral y brócoli" },
  ],
  thursday: [
    { name: "Desayuno", time: "7:00 am", description: "Huevos revueltos con espinacas y tomate" },
  ],
};

export const fatherMealPlan = {
  monday: [
    { name: "Desayuno", time: "7:00 am", description: "Avena con manzana y almendras" },
    { name: "Media mañana", time: "10:00 am", description: "Pera con almendras" },
    { name: "Almuerzo", time: "1:00 pm", description: "Sopa de lentejas con vegetales" },
    { name: "Merienda", time: "4:00 pm", description: "Yogur natural con fresas" },
    { name: "Cena", time: "7:00 pm", description: "Pollo con limón, quinoa y ensalada de espinacas" },
    { name: "Refrigerio nocturno", time: "9:00 pm", description: "Leche tibia con canela" },
  ],
  tuesday: [
    { name: "Desayuno", time: "7:00 am", description: "Huevos revueltos con espinacas y tomate" },
    { name: "Media mañana", time: "10:00 am", description: "Manzana con almendras" },
    { name: "Almuerzo", time: "1:00 pm", description: "Ensalada de frijoles con maíz, tomate, cebolla y cilantro" },
    { name: "Merienda", time: "4:00 pm", description: "Yogur natural con fresas" },
    { name: "Cena", time: "7:00 pm", description: "Pescado al vapor con arroz integral y brócoli" },
    { name: "Refrigerio nocturno", time: "9:00 pm", description: "Té de manzanilla" },
  ],
  wednesday: [
    { name: "Desayuno", time: "7:00 am", description: "Avena con plátano y semillas de chía" },
    { name: "Media mañana", time: "10:00 am", description: "Pera con almendras" },
    { name: "Almuerzo", time: "1:00 pm", description: "Sopa de vegetales con pollo" },
    { name: "Merienda", time: "4:00 pm", description: "Yogur natural con granola" },
    { name: "Cena", time: "7:00 pm", description: "Tacos de pollo con tortillas de maíz, repollo y salsa de yogur" },
    { name: "Refrigerio nocturno", time: "9:00 pm", description: "Leche tibia con canela" },
  ],
  thursday: [
    { name: "Desayuno", time: "7:00 am", description: "Huevos revueltos con espinacas y tomate" },
  ],
};

// Recipes
export const recipes = [
  {
    title: "Avena con frutas y semillas",
    preparation: "Domingo, 6:30 pm (para toda la semana)",
    prerequisite: "Tener una olla y agua disponible",
    steps: [
      { text: "Hierve 4 tazas de agua en una olla." },
      { text: "Agrega 2 tazas de avena, cocina a fuego bajo 5 minutos, revolviendo." },
      { text: "Guarda en un recipiente. Cada mañana, calienta ½ taza por persona en una olla (2 minutos)." },
      { text: "Richard: ½ plátano en rodajas y 1 cucharada de semillas de chía." },
      { text: "Padre: ½ manzana picada y 5 almendras." },
    ],
  },
  {
    title: "Sándwich de pollo",
    preparation: "Domingo, 7:00 pm (para lunes)",
    prerequisite: "Pollo hervido y desmenuzado listo",
    steps: [
      { text: "Hierve 2 pechugas de pollo (20 minutos), desmenúzalas." },
      { text: "Tuesta ligeramente 2 rebanadas de pan integral en una sartén (1 minuto por lado)." },
      { text: "Unta un poco de mayonesa light (opcional), agrega pollo, lechuga y tomate." },
      { text: "Envuelve en aluminio para llevar." },
    ],
  },
  {
    title: "Wrap de pollo",
    preparation: "Martes, 7:00 pm (para miércoles)",
    prerequisite: "Pollo desmenuzado listo",
    steps: [
      { text: "Usa una tortilla de maíz grande." },
      { text: "Rellena con pollo desmenuzado, lechuga, tomate y aguacate." },
      { text: "Envuelve y corta por la mitad para el miércoles." },
    ],
  },
  {
    title: "Sopa de lentejas con vegetales",
    preparation: "Domingo, 7:30 pm (para lunes y miércoles)",
    prerequisite: "Lentejas remojadas por 30 minutos",
    steps: [
      { text: "Remoja 1 taza de lentejas (30 minutos)." },
      { text: "Pica 1 cebolla, 2 zanahorias y 2 tallos de apio." },
      { text: "Saltea la cebolla en una olla con aceite (3 minutos)." },
      { text: "Agrega zanahorias y apio (5 minutos)." },
      { text: "Añade lentejas escurridas, 4 tazas de agua y sal. Cocina 30-40 minutos." },
    ],
  },
  {
    title: "Batido de espinacas y plátano",
    preparation: "Lunes y miércoles, 3:45 pm",
    prerequisite: "Tener una licuadora",
    steps: [
      { text: "Licúa 1 taza de agua, 1 puñado de espinacas, 1 plátano y 1 cucharada de miel (30 segundos)." },
    ],
  },
  {
    title: "Tacos de pollo",
    preparation: "Lunes y miércoles, 6:30 pm",
    prerequisite: "Pollo desmenuzado del domingo",
    steps: [
      { text: "Calienta 3 tortillas de maíz por persona en una sartén (30 segundos por lado)." },
      { text: "Rellena con pollo desmenuzado, repollo picado y yogur natural con limón." },
    ],
  },
  {
    title: "Ensalada de frijoles",
    preparation: "Domingo, 8:00 pm (para martes)",
    prerequisite: "Frijoles cocidos listos",
    steps: [
      { text: "Cocina 1 taza de frijoles secos (hasta que estén tiernos)." },
      { text: "Mezcla con ½ taza de maíz, 1 tomate picado, ¼ de cebolla picada y cilantro." },
      { text: "Adereza con limón y sal. Guarda para el martes." },
    ],
  },
  {
    title: "Pollo con limón y quinoa",
    preparation: "Martes, 6:30 pm",
    prerequisite: "Tener una olla",
    steps: [
      { text: "Hierve 1 pechuga de pollo (20 minutos), córtala en trozos." },
      { text: "Hierve 1 taza de quinoa en 2 tazas de agua (15 minutos)." },
      { text: "Mezcla el pollo con jugo de limón y sirve sobre la quinoa con espinacas aderezadas." },
    ],
  },
  {
    title: "Pescado al vapor con arroz y brócoli",
    preparation: "Miércoles, 6:30 pm",
    prerequisite: "Tener una vaporera o sustituto (olla con colador)",
    steps: [
      { text: "Coloca filetes de pescado en una vaporera con sal y limón (10-15 minutos)." },
      { text: "Hierve 1 taza de arroz integral (30 minutos)." },
      { text: "Cuece brócoli al vapor (10 minutos)." },
    ],
  },
];

// Shopping list
export const shoppingList = [
  "Avena: 1 kg",
  "Plátanos: 6",
  "Manzanas: 4",
  "Peras: 4",
  "Fresas: 250 g",
  "Espinacas: 500 g",
  "Tomates: 10",
  "Lechuga: 1 cabeza",
  "Cebollas: 5",
  "Zanahorias: 10",
  "Apio: 1 manojo",
  "Brócoli: 1 cabeza",
  "Aguacates: 4",
  "Limones: 6",
  "Pollo: 1.5 kg",
  "Pescado: 500 g",
  "Huevos: 12",
  "Yogur natural: 1 L",
  "Granola: 500 g",
  "Almendras: 200 g",
  "Semillas de chía: 100 g",
  "Miel: 200 g",
  "Pan integral: 1 paquete (10 rebanadas)",
  "Tortillas de maíz: 20",
  "Frijoles secos: 500 g",
  "Lentejas: 500 g",
  "Arroz integral: 1 kg",
  "Quinoa: 500 g",
  "Leche: 1 L",
  "Canela: 1 frasco",
  "Té de manzanilla: 1 caja",
  "Aceite de oliva: 250 ml",
  "Sal y pimienta: al gusto",
];

// Quick options for busy days
export const quickOptions = [
  "Sándwich de pollo",
  "Wrap de pollo",
  "Ensalada de frijoles",
];

// Sleep improvement tips
export const sleepTips = [
  "Evita café o té después de las 3:00 pm.",
  "Acuéstate a la misma hora cada noche (ej. 10:00 pm).",
  "Lee o escucha música suave antes de dormir (evita pantallas).",
  "Usa cortinas oscuras en la habitación.",
  "Prueba un baño tibio antes de acostarte.",
  "Bebe leche tibia con canela o té de manzanilla a las 9:00 pm.",
];

// Preparation day grouping
export const prepDays = [
  {
    day: "Domingo",
    tasks: [
      "6:30 pm: Cocina avena para la semana.",
      "7:00 pm: Hierve y desmenuza pollo para sándwiches, wraps y sopas.",
      "7:30 pm: Remoja y cocina frijoles y lentejas.",
      "8:00 pm: Prepara ensalada de frijoles para el martes.",
    ],
  },
  {
    day: "Lunes",
    tasks: [
      "7:00 pm: Prepara sopa de lentejas para lunes y miércoles (padre).",
    ],
  },
  {
    day: "Martes",
    tasks: [
      "7:00 pm: Prepara sopa de vegetales para el miércoles (padre).",
    ],
  },
]; 