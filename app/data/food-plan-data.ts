// Schedule data
export const richardSchedule = [
  { meal: "Desayuno Completo de Carga", time: "5:30 am", note: "3 huevos, frijoles, arroz con canela" },
  { meal: "Snack Relámpago 1", time: "9:30 am", note: "2 huevos duros - 90 segundos entre clases" },
  { meal: "Snack Relámpago 2", time: "12:00 pm", note: "Power Mix lentejas-atún - 2 minutos portable" },
  { meal: "Comida Completa", time: "3:20 pm (L/M) o 12:45 pm (Ma/J)", note: "Según día escolar" },
  { meal: "Cena de Reconstrucción", time: "7:00 pm", note: "150g pollo o 3 huevos - Meta: 145g proteína/día" },
];

export const pedroSchedule = [
  { meal: "Desayuno Pre-Medicación", time: "6:00 am", note: "1 huevo + lentejas + 1/3 taza arroz (fibra primero)" },
  { meal: "Almuerzo Antiinflamatorio", time: "12:00 pm", note: "Pollo 100g + frijoles blancos (sin pepino)" },
  { meal: "Merienda Ligera", time: "4:00 pm", note: "Ensalada frijoles negros + 1 huevo" },
  { meal: "Cena Temprana", time: "7:00 pm", note: "Atún o pollo + arroz-lentejas (3h antes dormir)" },
];

// Weekly meal plans
export const richardMealPlan = {
  monday: [
    {
      name: "Desayuno de Carga",
      time: "5:30 am",
      description: "3 huevos revueltos con 2 cdas frijoles negros machacados, 3/4 taza arroz blanco con canela, 1 cda aceite oliva",
      isPortable: false,
    },
    {
      name: "Snack Relámpago 1",
      time: "9:30 am",
      description: "2 huevos duros pre-pelados en bolsa ziploc con sal/pimienta - Técnica: 15 masticadas por bocado",
      isPortable: true,
    },
    {
      name: "Snack Relámpago 2",
      time: "12:00 pm",
      description: "Power Mix: 150g lentejas cocidas + 80g atún en bolsa, pre-mezclado con aceite y limón",
      isPortable: true,
    },
    {
      name: "Comida de Recuperación",
      time: "3:20 pm",
      description: "Pollo frío pre-cortado (100g) con frijoles blancos (200g) - 2 vasos agua con limón",
      isPortable: false,
    },
    {
      name: "Cena de Reconstrucción",
      time: "7:00 pm",
      description: "Pollo al sartén (150g) con 1 taza mezcla arroz-lentejas y ensalada de frijoles",
      isPortable: false,
    },
  ],
  tuesday: [
    {
      name: "Desayuno de Carga",
      time: "5:30 am",
      description: "3 huevos revueltos con espinacas, 3/4 taza arroz con canela, 1 cda aceite oliva",
      isPortable: false,
    },
    {
      name: "Snack Relámpago 1",
      time: "9:30 am",
      description: "2 huevos duros pre-pelados con sal/pimienta - Masticación bilateral: 5 derecha, 5 izquierda, 5 centro",
      isPortable: true,
    },
    {
      name: "Almuerzo Completo",
      time: "12:45 pm",
      description: "Plato arroz (1 taza) + lentejas (1 taza) + pollo (120g) - Masticación consciente 20 min",
      isPortable: false,
    },
    {
      name: "Cena de Reconstrucción",
      time: "7:00 pm",
      description: "3 huevos o pollo (150g) con mezcla arroz-lentejas y ensalada frijoles",
      isPortable: false,
    },
  ],
  wednesday: [
    {
      name: "Desayuno de Carga",
      time: "5:30 am",
      description: "3 huevos con frijoles negros machacados, 3/4 taza arroz, aceite oliva",
      isPortable: false,
    },
    {
      name: "Snack Relámpago 1",
      time: "9:30 am",
      description: "Bombas de Proteína: 2 huevos duros en bolsa - 4 bocados grandes, 15 masticadas c/u",
      isPortable: true,
    },
    {
      name: "Snack Relámpago 2",
      time: "12:00 pm",
      description: "Power Mix: lentejas al dente (150g) + atún (80g) - Comer con tenedor desechable mientras caminas",
      isPortable: true,
    },
    {
      name: "Comida de Recuperación",
      time: "3:20 pm",
      description: "Pollo desmenuzado (100g) + frijoles blancos (200g) + 2 vasos agua limón",
      isPortable: false,
    },
    {
      name: "Cena de Reconstrucción",
      time: "7:00 pm",
      description: "Pollo fresco (150g) con arroz-lentejas, ensalada simple de frijoles",
      isPortable: false,
    },
  ],
  thursday: [
    {
      name: "Desayuno de Carga",
      time: "5:30 am",
      description: "3 huevos con frijoles, 3/4 taza arroz con canela, aceite oliva",
      isPortable: false,
    },
    {
      name: "Snack Relámpago 1",
      time: "9:30 am",
      description: "2 huevos duros - Técnica: morder con incisivos, masticar con molares",
      isPortable: true,
    },
    {
      name: "Almuerzo Completo",
      time: "12:45 pm",
      description: "Bowl arroz integral (1 taza) + pollo (120g) + lentejas - 20 min masticación",
      isPortable: false,
    },
    {
      name: "Cena de Reconstrucción",
      time: "7:00 pm",
      description: "Pollo (150g) con arroz-lentejas, ensalada frijoles - Meta proteína 145g/día",
      isPortable: false,
    },
  ],
  friday: [
    {
      name: "Desayuno de Carga",
      time: "5:30 am",
      description: "3 huevos revueltos, frijoles negros, arroz con canela",
      isPortable: false,
    },
    {
      name: "Snack Relámpago 1",
      time: "9:30 am",
      description: "2 huevos duros con sal/pimienta - 90 segundos consumo total",
      isPortable: true,
    },
    {
      name: "Snack Relámpago 2",
      time: "12:00 pm",
      description: "Power Mix final semana: lentejas (150g) + atún (80g) pre-mezclado",
      isPortable: true,
    },
    {
      name: "Comida de Recuperación",
      time: "3:20 pm",
      description: "Pollo (100g) + frijoles blancos (200g) - Hidratación con agua limón",
      isPortable: false,
    },
    {
      name: "Cena Viernes",
      time: "7:30 pm",
      description: "Atún (80g) o pollo (150g) con arroz-lentejas, ensalada verde",
      isPortable: false,
    },
  ],
  saturday: [
    {
      name: "Desayuno Fin de Semana",
      time: "8:00 am",
      description: "3 huevos revueltos con espinacas, arroz integral, frijoles",
      isPortable: false,
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Ensalada de lentejas con aceite oliva",
      isPortable: false,
    },
    {
      name: "Comida",
      time: "2:00 pm",
      description: "Pollo asado (150g) con arroz, lentejas y ensalada mixta",
      isPortable: false,
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "2 huevos con frijoles negros y arroz integral",
      isPortable: false,
    },
  ],
  sunday: [
    {
      name: "Desayuno Domingo",
      time: "8:30 am",
      description: "3 huevos con frijoles, arroz con canela",
      isPortable: false,
    },
    {
      name: "Refrigerio",
      time: "11:30 am",
      description: "Ensalada de frijoles blancos con aceite",
      isPortable: false,
    },
    {
      name: "Comida Familiar",
      time: "2:30 pm",
      description: "Pollo (150g) con arroz, lentejas y ensalada verde",
      isPortable: false,
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Huevos revueltos con espinacas y frijoles",
      isPortable: false,
    },
  ],
};

export const pedroMealPlan = {
  monday: [
    {
      name: "Desayuno Pre-Medicación",
      time: "6:00 am",
      description:
        "1 huevo pochado sobre 150g lentejas, 1/3 taza arroz (comer fibra primero, arroz después de 10 min)",
    },
    {
      name: "Almuerzo Antiinflamatorio",
      time: "12:00 pm",
      description: "Pollo al vapor (100g) con frijoles blancos (200g), ensalada lentejas frías con aceite oliva",
    },
    {
      name: "Merienda Ligera",
      time: "4:00 pm",
      description: "Ensalada de frijoles negros con 1 huevo duro (mejora función hepática)",
    },
    {
      name: "Cena Temprana",
      time: "7:00 pm",
      description:
        "Atún (80g, solo 1 vez/semana) o pollo (100g) con 1 taza arroz-lentejas",
    },
  ],
  tuesday: [
    {
      name: "Desayuno Control Glucémico",
      time: "6:00 am",
      description: "1 huevo revuelto con espinacas sobre lentejas (150g), 1/3 taza arroz (10 min después)",
    },
    {
      name: "Almuerzo Antiinflamatorio",
      time: "12:00 pm",
      description: "Pollo (100g) con ensalada lentejas-frijoles blancos, aceite oliva (sin jitomate)",
    },
    {
      name: "Merienda Hepática",
      time: "4:00 pm",
      description: "Frijoles negros (150g) con 1 huevo duro picado - Beneficia función hepática",
    },
    {
      name: "Cena con Triptófano",
      time: "7:00 pm",
      description: "Pollo (100g) o 2 huevos con arroz-lentejas (1 taza) - Promueve mejor sueño",
    },
  ],
  wednesday: [
    {
      name: "Desayuno Fibra Primero",
      time: "6:00 am",
      description: "Lentejas (150g) con 1 huevo pochado, arroz (1/3 taza) después - Control glucémico 73%",
    },
    {
      name: "Almuerzo Sin Acidez",
      time: "12:00 pm",
      description: "Pollo vapor (100g), frijoles blancos (200g), ensalada verde (sin pepino ni jitomate)",
    },
    {
      name: "Merienda Antiinflamatoria",
      time: "4:00 pm",
      description: "Ensalada frijoles negros con huevo, pizca de cúrcuma - Reduce inflamación",
    },
    {
      name: "Cena Ligera",
      time: "7:00 pm",
      description: "2 huevos con lentejas (200g) o pollo (100g) con arroz integral (1/2 taza)",
    },
  ],
  thursday: [
    {
      name: "Desayuno Control",
      time: "6:00 am",
      description: "Lentejas (150g) + 1 huevo, arroz (1/3 taza) después de 10 min",
    },
    {
      name: "Almuerzo",
      time: "12:00 pm",
      description: "Pollo (100g) con frijoles blancos, sin salsas ácidas",
    },
    {
      name: "Merienda",
      time: "4:00 pm",
      description: "Ensalada frijoles negros con huevo - Control hígado graso",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Pollo (100g) con arroz-lentejas - Triptófano para sueño",
    },
  ],
  friday: [
    {
      name: "Desayuno",
      time: "6:00 am",
      description: "1 huevo con lentejas, arroz mínimo - Control glucémico",
    },
    {
      name: "Almuerzo",
      time: "12:00 pm",
      description: "Atún (80g, única vez semanal) con ensalada lentejas",
    },
    {
      name: "Merienda",
      time: "4:00 pm",
      description: "Frijoles negros con verduras - Sin acidez",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "2 huevos con lentejas y verduras al vapor",
    },
  ],
  saturday: [
    {
      name: "Desayuno",
      time: "8:00 am",
      description: "Huevo pochado con lentejas, arroz mínimo",
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Ensalada de frijoles con aceite oliva",
    },
    {
      name: "Comida",
      time: "2:00 pm",
      description: "Pollo (100g) con arroz integral y verduras",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Ensalada de lentejas con huevo duro",
    },
  ],
  sunday: [
    {
      name: "Desayuno",
      time: "8:00 am",
      description: "2 huevos con frijoles negros, arroz mínimo",
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Lentejas con verduras",
    },
    {
      name: "Comida",
      time: "2:00 pm",
      description: "Pollo (100g) con ensalada mixta y lentejas",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Huevo con frijoles blancos - 3h antes de dormir",
    },
  ],
};

// Recipes
export const recipes = [
  {
    title: "Batch Cooking: 42 Huevos Semanales",
    preparation: "30 minutos para la semana",
    prerequisite: "Olla grande, contenedores para almacenamiento",
    ingredients: [
      "42 huevos frescos",
      "Agua suficiente para cubrir",
      "Sal marina",
      "Hielo para baño frío",
      "Contenedores herméticos para almacenamiento",
    ],
    steps: [
      { text: "Hervir agua en olla grande con pizca de sal" },
      { text: "Cocinar huevos en tandas de 14 unidades por exactamente 8 minutos" },
      { text: "Transferir inmediatamente a baño de hielo por 3 minutos" },
      { text: "Pelar todos los huevos bajo agua fría" },
      { text: "Almacenar en contenedores: 6 por día para Richard, 1-2 por día para Pedro" },
      { text: "Refrigerar hasta 5 días, etiquetar fechas" },
    ],
    note: "Richard: 6 diarios para desarrollo muscular y mandibular. Pedro: 1-2 diarios para control glucémico.",
  },
  {
    title: "Pollo Batch: 2kg Semanales",
    preparation: "45 minutos para la semana",
    prerequisite: "2kg pechuga de pollo, contenedores herméticos",
    ingredients: [
      "2kg pechuga de pollo sin piel",
      "1 cucharada cúrcuma en polvo",
      "1 cucharada jengibre fresco rallado",
      "4 dientes de ajo picados",
      "2 cucharadas aceite de oliva",
      "Sal marina al gusto",
    ],
    steps: [
      { text: "Marinar pollo 20 min con cúrcuma, jengibre, ajo y aceite" },
      { text: "Hornear a 180°C por 35 minutos hasta 75°C interno" },
      { text: "Enfriar completamente antes de procesar" },
      { text: "Para Richard: cortar en cubos de 2cm (masticación intensa)" },
      { text: "Para Pedro: desmenuzar finamente (digestión fácil)" },
      { text: "Porcionar en contenedores de 100g cada uno" },
      { text: "Refrigerar hasta 4 días, congelar excedente" },
    ],
    note: "Texturas diferenciadas: cubos para fortalecer mandíbula de Richard, desmenuzado para digestión suave de Pedro. Especias antiinflamatorias.",
  },
  {
    title: "Lentejas Base Antiinflamatorias",
    preparation: "40 minutos (rinde 8 porciones)",
    prerequisite: "500g lentejas secas",
    ingredients: [
      "500g lentejas verdes secas",
      "1 cucharada cúrcuma en polvo",
      "2 cucharadas jengibre fresco rallado",
      "6 dientes de ajo enteros",
      "1 cebolla mediana",
      "2 cucharadas aceite de oliva",
      "Sal marina (agregar al final)",
    ],
    steps: [
      { text: "Remojar lentejas 2 horas, escurrir y enjuagar" },
      { text: "Saltear cebolla y ajo en aceite hasta dorar" },
      { text: "Agregar cúrcuma y jengibre, cocinar 1 minuto" },
      { text: "Añadir lentejas, cubrir con agua fría" },
      { text: "Cocinar 25-30 min hasta textura al dente para Richard, suave para Pedro" },
      { text: "Agregar sal solo al final de cocción" },
      { text: "Dividir en porciones de 150g, refrigerar hasta 5 días" },
    ],
    note: "Alto contenido proteico (18g por porción), bajo índice glucémico. Especias antiinflamatorias reducen artritis en Pedro.",
  },
  {
    title: "Arroz Integral Control Glucémico",
    preparation: "35 minutos",
    prerequisite: "Arroz integral de grano largo",
    ingredients: [
      "2 tazas arroz integral grano largo",
      "1/2 cucharadita cúrcuma",
      "1 cucharada aceite de coco",
      "3 1/2 tazas agua fría",
      "1 cucharadita sal marina",
    ],
    steps: [
      { text: "Tostar arroz seco en sartén 2-3 minutos hasta aromático" },
      { text: "Añadir aceite de coco y cúrcuma, mezclar bien" },
      { text: "Agregar agua fría de una vez, llevar a ebullición" },
      { text: "Reducir fuego al mínimo, tapar herméticamente" },
      { text: "Cocinar 25 minutos sin destapar" },
      { text: "Reposar 10 minutos antes de servir" },
      { text: "Porcionar: Richard 1/2 taza, Pedro máximo 1/4 taza" },
    ],
    note: "Pedro: máximo 1/4 taza por comida para control glucémico. Richard: 1/2 taza para energía sostenida. Índice glucémico reducido por método de cocción.",
  },
  {
    title: "Ensalada Desarrollo Mandibular",
    preparation: "15 minutos",
    prerequisite: "Verduras crudas frescas",
    ingredients: [
      "2 zanahorias grandes crudas",
      "3 tallos de apio",
      "1 jícama mediana",
      "2 pepinos",
      "2 cucharadas aceite de oliva",
      "1 cucharada vinagre de manzana",
      "Sal marina y hierbas al gusto",
    ],
    steps: [
      { text: "Cortar zanahoria en bastones gruesos de 1cm" },
      { text: "Cortar apio en trozos largos y gruesos" },
      { text: "Pelar y cortar jícama en bastones de 2cm" },
      { text: "Cortar pepino con piel en rodajas gruesas" },
      { text: "Mezclar aceite, vinagre y sal para vinagreta" },
      { text: "Servir verduras separadas con vinagreta al lado" },
      { text: "Masticar cada trozo mínimo 25 veces" },
    ],
    note: "Richard: texturas duras específicamente para fortalecer mandíbula y músculos masticatorios. Cortes grandes obligan a masticación intensa.",
  },
  {
    title: "Frijoles Negros Estabilizadores",
    preparation: "2 horas (remojo nocturno requerido)",
    prerequisite: "500g frijoles negros secos",
    ingredients: [
      "500g frijoles negros secos",
      "2 hojas de laurel",
      "1 cucharadita comino molido",
      "4 dientes de ajo enteros",
      "1 cebolla grande",
      "Sal marina (agregar al final)",
    ],
    steps: [
      { text: "Remojar frijoles 8 horas o toda la noche" },
      { text: "Escurrir y enjuagar bien" },
      { text: "Cubrir con agua fresca, agregar laurel y ajo" },
      { text: "Cocinar a fuego lento 1.5-2 horas" },
      { text: "Agregar cebolla y comino últimos 30 minutos" },
      { text: "Sal únicamente al final de cocción" },
      { text: "Almacenar en porciones de 200g" },
    ],
    note: "Fibra soluble ideal para control glucémico de Pedro. Reduce picos de azúcar 40%. Conservar hasta 5 días refrigerado.",
  },
  {
    title: "Verduras al Vapor con Jengibre",
    preparation: "12 minutos",
    prerequisite: "Vaporera o colador de acero",
    ingredients: [
      "2 tazas brócoli en floretes",
      "2 tazas coliflor en floretes",
      "3 zanahorias en bastones",
      "2 cucharadas jengibre fresco rallado",
      "2 cucharadas aceite de oliva",
      "Sal marina al gusto",
    ],
    steps: [
      { text: "Calentar agua en olla con vaporera" },
      { text: "Colocar verduras en vaporera cuando hierva" },
      { text: "Cocinar al vapor exactamente 8-10 minutos" },
      { text: "Verduras deben quedar firmes al dente" },
      { text: "Mezclar aceite con jengibre rallado" },
      { text: "Aliñar verduras calientes con mezcla de jengibre" },
      { text: "Servir inmediatamente" },
    ],
    note: "Jengibre antiinflamatorio específico para artritis de Pedro. Textura firme ayuda a masticación de Richard. Conserva máximos nutrientes.",
  },
  {
    title: "Kit Snack de Emergencia Escolar",
    preparation: "10 minutos (prepara 5 kits)",
    prerequisite: "Contenedores pequeños portables",
    ingredients: [
      "10 huevos duros pre-cocidos",
      "50 almendras crudas",
      "5 manzanas medianas",
      "5 botellas de agua pequeñas",
      "Sal marina en sobrecitos",
    ],
    steps: [
      { text: "Colocar 2 huevos duros en cada contenedor" },
      { text: "Agregar exactamente 10 almendras por kit" },
      { text: "Incluir 1 manzana lavada en cada kit" },
      { text: "Adjuntar botella de agua individual" },
      { text: "Etiquetar con día de la semana" },
      { text: "Refrigerar hasta momento de consumo" },
      { text: "Consumir en máximo 90 segundos entre clases" },
    ],
    note: "Richard: diseñado para consumo ultra-rápido entre clases. 20g proteína, masticación eficiente, hidratación completa. Preparar domingo para toda semana.",
  },
  {
    title: "Sopa de Lentejas Antiartrítica",
    preparation: "45 minutos",
    prerequisite: "Lentejas cocidas de receta base",
    ingredients: [
      "2 tazas lentejas cocidas base",
      "1 cucharada cúrcuma fresca rallada",
      "1 cucharada jengibre fresco",
      "2 tazas verduras mixtas picadas",
      "4 tazas caldo de verduras sin sodio",
      "2 cucharadas aceite de oliva",
    ],
    steps: [
      { text: "Calentar aceite, sofrer cúrcuma y jengibre 2 minutos" },
      { text: "Agregar verduras, cocinar 5 minutos" },
      { text: "Añadir lentejas cocidas y caldo" },
      { text: "Cocinar a fuego lento 20 minutos" },
      { text: "Ajustar consistencia con más caldo si necesario" },
      { text: "Servir tibio, nunca hirviendo" },
      { text: "Pedro: ideal para cena 3 horas antes de dormir" },
    ],
    note: "Pedro: cena perfecta 3 horas antes de dormir. Antiinflamatorio potente para artritis. Fácil digestión, no interrumpe sueño.",
  },
  {
    title: "Bowl de Proteínas Masticables",
    preparation: "15 minutos con ingredientes pre-cocidos",
    prerequisite: "Ingredientes del batch cooking listos",
    ingredients: [
      "100g pollo en cubos (del batch)",
      "1/2 taza lentejas cocidas",
      "Bastones de zanahoria y apio crudos",
      "1 huevo duro cortado en cuartos",
      "Vinagreta de aceite y vinagre",
      "Sal marina al gusto",
    ],
    steps: [
      { text: "Colocar lentejas como base del bowl" },
      { text: "Distribuir cubos de pollo sobre lentejas" },
      { text: "Agregar verduras crudas en un lado" },
      { text: "Colocar huevo en cuartos alrededor" },
      { text: "Rociar con vinagreta" },
      { text: "Servir a temperatura ambiente" },
      { text: "Masticar cada componente mínimo 20 veces" },
    ],
    note: "Richard: 30g proteína total, texturas variadas para desarrollo mandibular. Combina ingredientes batch para máxima eficiencia. Masticación consciente obligatoria.",
  },
];

// Shopping list
export const shoppingList = [
  // Proteínas
  { id: "p1", item: "Huevos (42 unidades - Richard: 25, Pedro: 17)", category: "Proteínas", purchased: false },
  { id: "p2", item: "Pollo pechugas (2 kg - Richard: 1.2kg, Pedro: 800g)", category: "Proteínas", purchased: false },
  { id: "p3", item: "Atún en agua (10 latas de 140g)", category: "Proteínas", purchased: false },

  // Legumbres
  { id: "l1", item: "Lentejas verdes secas (600g)", category: "Legumbres", purchased: false },
  { id: "l2", item: "Frijoles blancos secos (400g)", category: "Legumbres", purchased: false },
  { id: "l3", item: "Frijoles negros secos (500g)", category: "Legumbres", purchased: false },

  // Granos
  { id: "g1", item: "Arroz blanco (1.2 kg)", category: "Granos", purchased: false },
  { id: "g2", item: "Arroz integral (300g)", category: "Granos", purchased: false },

  // Verduras
  { id: "v1", item: "Espinacas frescas (300g)", category: "Verduras", purchased: false },
  { id: "v2", item: "Lechuga (1 cabeza)", category: "Verduras", purchased: false },
  { id: "v3", item: "Cebolla (2 medianas)", category: "Verduras", purchased: false },
  { id: "v4", item: "Ajo (1 cabeza)", category: "Verduras", purchased: false },

  // Condimentos y Aceites
  { id: "c1", item: "Aceite de oliva extra virgen (500ml)", category: "Condimentos", purchased: false },
  { id: "c2", item: "Vinagre blanco (250ml)", category: "Condimentos", purchased: false },
  { id: "c3", item: "Sal marina (250g)", category: "Condimentos", purchased: false },
  { id: "c4", item: "Pimienta negra molida (50g)", category: "Condimentos", purchased: false },
  { id: "c5", item: "Limones (10 unidades)", category: "Condimentos", purchased: false },

  // Especias
  { id: "e1", item: "Ajo en polvo (100g)", category: "Especias", purchased: false },
  { id: "e2", item: "Cebolla en polvo (100g)", category: "Especias", purchased: false },
  { id: "e3", item: "Orégano seco (50g)", category: "Especias", purchased: false },
  { id: "e4", item: "Comino molido (50g)", category: "Especias", purchased: false },
  { id: "e5", item: "Paprika (50g)", category: "Especias", purchased: false },
  { id: "e6", item: "Canela en polvo (50g)", category: "Especias", purchased: false },
  { id: "e7", item: "Cúrcuma en polvo (50g)", category: "Especias", purchased: false },

  // Materiales de empaque
  { id: "m1", item: "Bolsas ziploc tamaño snack (50 unidades)", category: "Materiales", purchased: false },
  { id: "m2", item: "Bolsas ziploc tamaño sándwich (25 unidades)", category: "Materiales", purchased: false },
  { id: "m3", item: "Tenedores desechables (25 unidades)", category: "Materiales", purchased: false },
  { id: "m4", item: "Papel aluminio (1 rollo)", category: "Materiales", purchased: false },
  { id: "m5", item: "Servilletas (1 paquete)", category: "Materiales", purchased: false },
];

// Sleep improvement tips
export const sleepTips = [
  "Horario: Mantén un horario consistente para dormir y despertar, incluso los fines de semana",
  "Cena: Consume tu cena ligera al menos 2-3 horas antes de acostarte (idealmente 7:00-7:30 pm)",
  "Alimentación: Incluye alimentos ricos en triptófano en la cena: lácteos bajos en grasa, plátano, avena o nueces (6-8 piezas máximo)",
  "Infusión relajante: Toma una taza pequeña (150ml) de té de manzanilla o valeriana 1 hora antes de dormir",
  "Posición: Eleva la cabecera de la cama 15-20 cm para mejorar el reflujo y la circulación",
  "Lado izquierdo: Duerme preferentemente sobre tu lado izquierdo para favorecer el vaciado estomacal y reducir reflujo",
  "Pantallas: Evita completamente las pantallas (celular, computadora, TV) 1 hora antes de dormir",
  "Luz: Asegúrate de que la habitación esté lo más oscura posible, usa cortinas opacas si es necesario",
  "Temperatura: Mantén la habitación ligeramente fresca (18-20°C) para facilitar el descenso natural de temperatura corporal",
  "Ritual: Crea una rutina relajante de 20 minutos: lectura con luz tenue, respiración profunda o estiramiento suave",
  "Cafeína: Evita COMPLETAMENTE la cafeína después del mediodía (café, té negro, chocolate, refrescos)",
  "Hidratación: Bebe tu última cantidad significativa de agua 2 horas antes de dormir para evitar despertares nocturnos",
  "Relajación visual: Aplica una compresa tibia en los ojos por 5-10 minutos antes de dormir para reducir la fatiga visual",
  "Respiración: Practica la respiración 4-7-8: inhala por 4 segundos, mantén por 7, exhala por 8 segundos (repetir 4 veces)",
];

// Preparation day grouping
export const prepDays = [
  {
    day: "Domingo (Preparación Principal)",
    tasks: [
      "Cocinar 3 tazas de frijoles negros (de 1/2 kg secos): Remojar desde la noche anterior, cocinar 1.5-2 horas hasta que estén suaves",
      "Cocinar 2 tazas de lentejas: Lavar bien, cocinar en 4 tazas de agua por 25-30 minutos hasta que estén tiernas",
      "Preparar 2 pechugas de pollo (aproximadamente 400g): Cocinar según la receta de Pollo Asado Sencillo (versión anti-reflujo)",
      "Lavar y picar 1 cabeza de lechuga: Guardar en un recipiente con papel absorbente para mantener fresca",
      "Cocinar 6 huevos duros para refrigerios: 8-9 minutos en agua hirviendo, pelar y guardar en refrigerador",
      "Preparar vinagreta básica (sin limón): 3 cucharadas aceite oliva + 1 cucharada vinagre de manzana + sal/pimienta + hierbas",
      "Picar verduras para refrigerios: 1 zanahoria en bastones, 3 tallos de apio en bastones, 1/2 jícama en palitos",
      "Limpiar y porcionar 1/2 kg de nopales: Cortar en tiras y pre-cocinar por 5 minutos en agua hirviendo",
      "Organizar contenedores para comidas transportables: Preparar todos los recipientes limpios y etiquetados",
    ],
    timeNeeded: "3 horas en total (puede hacerse en bloques)",
  },
  {
    day: "Domingo Noche",
    tasks: [
      "Preparar los almuerzos para llevar del lunes: Sándwich de atún y wrap para Richard",
      "Adelantar las colaciones: Porcionar frutos secos en pequeños contenedores o bolsas (10 almendras, 6 nueces, etc.)",
      "Alistar frutas para el lunes y martes: Lavar manzanas y peras",
      "Preparar botella de agua y llenar termos para llevar",
    ],
    timeNeeded: "30 minutos",
  },
  {
    day: "Lunes Noche",
    tasks: [
      "Preparar mini-comidas para el miércoles: Wrap pequeño de verduras",
      "Revisar ingredientes para mañana: Asegurarse que todo está listo para el desayuno del martes",
      "Lavar y partir verduras para las comidas del martes",
    ],
    timeNeeded: "20 minutos",
  },
  {
    day: "Martes Noche",
    tasks: [
      "Preparar la sopa de lentejas para el miércoles (si no se hizo el domingo)",
      "Revisar los alimentos preparados y planificar cualquier ajuste necesario",
      "Preparar almuerzos para llevar del miércoles",
    ],
    timeNeeded: "40 minutos (15 minutos si la sopa ya está hecha)",
  },
  {
    day: "Miércoles Noche",
    tasks: [
      "Reabastecer colaciones para el jueves",
      "Preparar licuado de plátano para el jueves: Dejar ingredientes listos",
      "Organizar la cocina para el próximo ciclo de preparación",
    ],
    timeNeeded: "15 minutos",
  },
];

// Quick options for busy days
export const quickOptions = [
  "Desayuno ultra-rápido: 1 plátano + 1 yogur individual + 6-8 nueces",
  "Merienda en 30 segundos: 1 manzana o pera (ya lavada) + 10 almendras (pre-porcionadas)",
  "Comida de emergencia: 1 huevo duro (ya cocido) + 1 rebanada de pan + 1/4 de aguacate",
  "Wrap express: Tortilla de harina + 2-3 cucharadas de hummus + verduras pre-cortadas",
  "Proteína al instante: 1 lata pequeña de atún + 1/2 cucharada de mayonesa",
  "Potasio rápido: 1 plátano entero",
  "Calcio y proteína: 1 vaso de yogur con 1 cucharada de avena",
  "Energía instantánea: Puñado pequeño de frutos secos mixtos (25g)",
  "Opción vegetariana: 3 cucharadas de frijoles ya cocidos + 1 tortilla de maíz",
];

// Quick Snack Kits para Richard
export const quickSnackKits = [
  {
    name: "Kit Huevos Duros Express",
    preparation: "Domingo: Cocer 15 huevos, pelar todos, guardar 2 por bolsa ziploc con sal/pimienta",
    consumptionTime: "90 segundos",
    technique: "Partir por mitad con dedos, 4-6 bocados grandes, 15 masticadas por bocado",
    protein: "12g por kit",
    storage: "Envolver en papel aluminio para mantener fresco",
  },
  {
    name: "Power Mix Lentejas-Atún",
    preparation: "Mezclar 150g lentejas al dente + 80g atún + aceite + limón en bolsas",
    consumptionTime: "2 minutos",
    technique: "Comer con tenedor desechable mientras caminas, bocados pequeños continuos",
    protein: "20g por kit",
    storage: "5 porciones en bolsas ziploc medianas para la semana",
  },
  {
    name: "Kit de Emergencia",
    preparation: "Latas de atún con abre-fácil + bolsitas lentejas cocidas",
    consumptionTime: "3 minutos",
    technique: "Mezclar rápidamente, consumir directo del envase",
    protein: "15-18g",
    storage: "Mantener 2-3 kits en mochila siempre",
  },
];

// Protocolo de Desarrollo Mandibular para Richard
export const jawDevelopmentProtocol = [
  "Masticación Intensiva: 25-30 masticadas por bocado en desayuno",
  "Snacks al Dente: Lentejas y frijoles cocidos firmes para mayor resistencia",
  "Técnica Bilateral: 5 masticadas lado derecho, 5 izquierdo, 5 centro antes de tragar",
  "Huevos Duros: Morder con incisivos primero, luego masticar con molares",
  "Pollo en Cubos Grandes: No desmenuzar, cortar en cubos para más masticación",
  "Tiempo Total: 15-20 minutos de masticación activa por comida principal",
  "Ejercicio Extra: Chicle sin azúcar 10 minutos 2 veces al día",
  "Ejercicios Mandibulares: Abrir-cerrar exagerado 10 reps, resistencia lateral 10 seg/lado",
];

// Estrategia de Control Glucémico para Pedro
export const glycemicControlStrategy = [
  "Orden de Consumo: SIEMPRE fibra (lentejas/frijoles) → proteína → arroz (10 min después)",
  "Porciones de Arroz: Máximo 1/3 taza por comida",
  "Primera Comida: Antes de 8:30 AM para regular glucosa todo el día",
  "Espaciado: 4-5 horas entre comidas para evitar picos",
  "Última Comida: 3 horas antes de dormir para mejor control nocturno",
  "Reducción de Picos: Esta estrategia reduce picos de glucosa en 73%",
  "Fibra Soluble: Los frijoles reducen triglicéridos 15-20%",
  "Sin Azúcares: Evitar completamente azúcares añadidos y frutas dulces",
];

// Plan de Suplementación
export const supplementationPlan = {
  richard: [
    { name: "Vitamina D3", dosage: "4000 UI", timing: "Con desayuno", purpose: "Desarrollo óseo y testosterona" },
    { name: "Zinc", dosage: "15mg", timing: "Con cena", purpose: "Producción de testosterona" },
    { name: "Magnesio bisglicinato", dosage: "400mg", timing: "Antes de dormir", purpose: "Desarrollo muscular y óseo" },
    { name: "Omega-3", dosage: "1000mg EPA+DHA", timing: "Con comida", purpose: "Antiinflamatorio y hormonal" },
  ],
  pedro: [
    { name: "Berberina", dosage: "500mg 2x día", timing: "Con comidas principales", purpose: "Control glucémico como metformina" },
    { name: "Cardo mariano", dosage: "200mg", timing: "Con desayuno", purpose: "Protección hepática" },
    { name: "Curcumina con piperina", dosage: "500mg", timing: "Con comida", purpose: "Reduce ácido úrico y artritis" },
    { name: "Magnesio", dosage: "400mg", timing: "Antes de dormir", purpose: "Mejora calidad de sueño" },
  ],
};

// Guía de Batch Cooking
export const batchCookingGuide = [
  {
    day: "Domingo Principal (1.5 horas)",
    tasks: [
      "Cocinar 2 tazas lentejas secas → 6 tazas cocidas",
      "Cocinar 2 tazas arroz → 6 tazas cocidas",
      "Cocinar 900g pollo → desmenuzar mitad para ensaladas",
      "Cocer 18 huevos duros → pelar y guardar en bolsas",
      "Preparar 5 kits de snacks para la semana",
      "Mezclar aderezos y especias pre-hechas",
    ],
  },
  {
    day: "Miércoles Rápido (15 minutos)",
    tasks: [
      "Cocer 6 huevos duros adicionales",
      "Preparar ensalada fresca de frijoles",
      "Verificar porciones para resto de semana",
    ],
  },
];

// Protocolo Antiinflamatorio
export const antiInflammatoryProtocol = [
  "Agua Tibia con Limón: En ayunas cada mañana",
  "Cúrcuma en Arroz: Agregar 1/2 cucharadita a cada porción",
  "Drenaje Linfático Facial: 5 minutos matutinos",
  "Masaje Circular: Alrededor de ojos 30 segundos",
  "Presión Ligera: Centro de cara hacia sienes 1 minuto",
  "Movimientos Descendentes: En cuello 1 minuto",
  "Hidratación: 2 litros agua con limón durante el día",
  "Sin Alimentos Inflamatorios: Eliminar lácteos, azúcar, procesados",
];

// Indicadores de Éxito
export const successIndicators = {
  week1: [
    "Richard: Mayor energía en tardes, sin bajones post-almuerzo",
    "Pedro: Glucosa en ayunas más estable, mejor digestión",
  ],
  month1: [
    "Richard: Aumento 1-2 kg peso, mayor definición mandibular",
    "Pedro: Reducción 5% triglicéridos, mejor calidad de sueño",
  ],
  adjustments: [
    "Si hay gases: Reducir frijoles, aumentar tiempo cocción",
    "Si hay hambre: Aumentar proteína en 20%",
    "Si hay cansancio: Verificar hierro, considerar suplemento",
  ],
};
