// Schedule data
export const richardSchedule = [
  { meal: "Desayuno", time: "6:15-6:30 am", note: "antes de salir" },
  { meal: "Refrigerio mañana", time: "9:45-10:00 am", note: "entre clases" },
  {
    meal: "Comida L/M",
    time: "12:45-1:00 pm + 4:00-4:30 pm",
    note: "Snack ligero + comida completa al llegar a casa",
  },
  {
    meal: "Comida Ma/J",
    time: "12:00-12:30 pm",
    note: "",
  },
  { meal: "Cena", time: "7:30-8:00 pm", note: "" },
];

export const fatherSchedule = [
  { meal: "Medicación", time: "al despertar", note: "en ayunas" },
  {
    meal: "Desayuno",
    time: "7:30-8:00 am",
    note: "30 min después de medicación",
  },
  { meal: "Refrigerio mañana", time: "10:30-11:00 am", note: "" },
  { meal: "Comida", time: "1:30-2:00 pm", note: "" },
  { meal: "Refrigerio tarde", time: "4:30-5:00 pm", note: "" },
  {
    meal: "Cena ligera",
    time: "7:00-7:30 pm",
    note: "mínimo 2 horas antes de dormir",
  },
];

// Weekly meal plans
export const richardMealPlan = {
  monday: [
    {
      name: "Desayuno",
      time: "6:15 am",
      description:
        "Licuado de avena (1 taza leche, ½ plátano, 3 cucharadas avena, 1 cucharadita miel)",
    },
    {
      name: "Refrigerio",
      time: "9:45 am",
      description: "1 manzana + 10 almendras",
      isPortable: true,
    },
    {
      name: "Mini-comida escuela",
      time: "12:45 pm",
      description: "Sándwich pequeño de atún preparado en casa",
      isPortable: true,
    },
    {
      name: "Comida completa",
      time: "4:30 pm",
      description: "Burrito de frijoles con queso bajo en grasa y verduras",
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Huevo revuelto con nopales y tortilla de maíz",
    },
  ],
  tuesday: [
    {
      name: "Desayuno",
      time: "6:15 am",
      description: "Tostada de aguacate con huevo cocido",
    },
    {
      name: "Refrigerio",
      time: "9:45 am",
      description: "Yogur natural con fruta picada",
      isPortable: true,
    },
    {
      name: "Comida",
      time: "12:00 pm",
      description: "Wrap de pollo con verduras y aguacate",
      isPortable: false,
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Arroz con verduras y pollo desmenuzado",
    },
  ],
  wednesday: [
    {
      name: "Desayuno",
      time: "6:15 am",
      description: "Quesadilla de huevo con espinacas",
    },
    {
      name: "Refrigerio",
      time: "9:45 am",
      description: "Plátano + puñado de nueces mixtas",
      isPortable: true,
    },
    {
      name: "Mini-comida escuela",
      time: "12:45 pm",
      description: "Wrap pequeño de hummus con verduras",
      isPortable: true,
    },
    {
      name: "Comida completa",
      time: "4:30 pm",
      description: "Sopa de lentejas con verduras",
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Tacos de frijoles con aguacate y salsa casera",
    },
  ],
  thursday: [
    {
      name: "Desayuno",
      time: "6:15 am",
      description: "Licuado de plátano con avena y canela",
    },
    {
      name: "Refrigerio",
      time: "9:45 am",
      description: "Mix de frutos secos (nueces, almendras, arándanos)",
      isPortable: true,
    },
    {
      name: "Comida",
      time: "12:00 pm",
      description: "Bowl de arroz integral con pollo y verduras al vapor",
      isPortable: false,
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Sopa de verduras con pasta integral",
    },
  ],
  friday: [
    {
      name: "Desayuno",
      time: "6:15 am",
      description:
        "Pan tostado con mantequilla de almendras y plátano en rodajas",
    },
    {
      name: "Refrigerio",
      time: "9:45 am",
      description: "Yogurt griego con granola casera",
      isPortable: true,
    },
    {
      name: "Mini-comida escuela",
      time: "12:45 pm",
      description: "Ensalada de quinoa con verduras y pollo",
      isPortable: true,
    },
    {
      name: "Comida completa",
      time: "4:30 pm",
      description: "Pescado a la plancha con verduras asadas",
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Quesadillas de tortilla integral con champiñones y queso",
    },
  ],
  saturday: [
    {
      name: "Desayuno",
      time: "8:00 am",
      description: "Huevos revueltos con espinacas y tostadas integrales",
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Batido de proteínas con frutas",
      isPortable: true,
    },
    {
      name: "Comida",
      time: "2:00 pm",
      description: "Sandwich de pavo con aguacate y verduras",
      isPortable: true,
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description:
        "Pasta integral con salsa de tomate casera y albóndigas de pavo",
    },
  ],
  sunday: [
    {
      name: "Desayuno",
      time: "8:30 am",
      description: "Hotcakes de avena con miel y frutas",
    },
    {
      name: "Refrigerio",
      time: "11:30 am",
      description: "Palitos de zanahoria con hummus",
      isPortable: true,
    },
    {
      name: "Comida",
      time: "2:30 pm",
      description: "Pollo asado con ensalada mixta y arroz integral",
    },
    {
      name: "Cena",
      time: "7:30 pm",
      description: "Sopa de verduras y sandwich pequeño de queso bajo en grasa",
    },
  ],
};

export const fatherMealPlan = {
  monday: [
    {
      name: "Desayuno",
      time: "7:30 am",
      description:
        "Avena con canela, manzana picada y nueces (2/3 taza avena, 1 manzana pequeña, 6 nueces)",
    },
    {
      name: "Refrigerio",
      time: "10:30 am",
      description: "Jícama picada con una pizca de sal (1 taza, en trozos)",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description: "Sopa de verduras + pollo asado con ensalada (sin jitomate)",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "1 pera + 6 nueces",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description:
        "Quesadilla de hongos con queso bajo en grasa (2 tortillas, 1/4 taza hongos, 30g queso)",
    },
  ],
  tuesday: [
    {
      name: "Desayuno",
      time: "7:30 am",
      description:
        "Huevo revuelto con nopales y tortilla integral (2 huevos, 1/2 taza nopales, 1 tortilla)",
    },
    {
      name: "Refrigerio",
      time: "10:30 am",
      description:
        "Pepitas de calabaza con arándanos secos (2 cucharadas de cada uno)",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description:
        "Caldo de pollo con verduras + ensalada de lentejas (sin jitomate)",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description:
        "Zanahoria y apio con hummus (1 zanahoria, 2 tallos de apio, 2 cucharadas hummus)",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Ensalada de atún con verduras verdes (sin jitomate)",
    },
  ],
  wednesday: [
    {
      name: "Desayuno",
      time: "7:30 am",
      description:
        "Licuado suave (espinaca, pera, manzana, avena) (1 taza espinaca, 1/2 pera, 1/2 manzana, 3 cdas avena)",
    },
    {
      name: "Refrigerio",
      time: "10:30 am",
      description: "Huevo duro + bastones de pepino (1 huevo, 1/2 pepino)",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description:
        "Pollo a la plancha con arroz y verduras al vapor (sin salsas ácidas)",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "Manzana con canela (1 manzana pequeña)",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Sopa de verduras con calabacitas (sin jitomate)",
    },
  ],
  thursday: [
    {
      name: "Desayuno",
      time: "7:30 am",
      description:
        "Avena con manzana y canela (2/3 taza avena, 1 manzana pequeña)",
    },
    {
      name: "Refrigerio",
      time: "10:30 am",
      description:
        "Galletas de arroz con queso bajo en grasa (3 galletas, 30g queso)",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description:
        "Pechuga de pollo al horno con pure de papa y verduras (sin salsa)",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "Pera en rodajas con canela (1 pera mediana)",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Tortilla española con espinacas (2 huevos, sin cebolla)",
    },
  ],
  friday: [
    {
      name: "Desayuno",
      time: "7:30 am",
      description: "Panqué de plátano sin gluten casero con té de manzanilla",
    },
    {
      name: "Refrigerio",
      time: "10:30 am",
      description: "Melón picado (1 taza) con semillas de chía (1 cucharadita)",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description:
        "Pescado blanco al vapor con arroz integral y calabacitas (sin limón)",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "Galletas de avena caseras (2) con infusión de jengibre",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Sopa de papa con verduras verdes (sin jitomate)",
    },
  ],
  saturday: [
    {
      name: "Desayuno",
      time: "8:00 am",
      description: "Yogurt natural con avena y plátano (sin frutas ácidas)",
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Bastones de apio con queso cottage bajo en grasa",
    },
    {
      name: "Comida",
      time: "1:30 pm",
      description: "Pollo a las hierbas con arroz blanco y verduras al vapor",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "Compota de manzana casera sin azúcar",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description: "Crema de calabaza (sin cebolla ni ajo)",
    },
  ],
  sunday: [
    {
      name: "Desayuno",
      time: "8:00 am",
      description: "Tostadas de pan integral con aguacate y huevo cocido",
    },
    {
      name: "Refrigerio",
      time: "11:00 am",
      description: "Pera y 7 almendras",
    },
    {
      name: "Comida",
      time: "2:00 pm",
      description: "Pechuga de pavo a la plancha con puré de camote y brócoli",
    },
    {
      name: "Refrigerio",
      time: "4:30 pm",
      description: "Gelatina sin azúcar con frutas no ácidas",
    },
    {
      name: "Cena",
      time: "7:00 pm",
      description:
        "Ensalada de pollo con lechuga, aguacate y pepino (aderezo suave)",
    },
  ],
};

// Recipes
export const recipes = [
  {
    title: "Licuado de Avena",
    preparation: "5 minutos",
    prerequisite: "Tener todos los ingredientes listos",
    ingredients: [
      "1 taza de leche",
      "½ plátano maduro",
      "3 cucharadas de avena",
      "1 cucharadita de miel",
      "Pizca de canela (opcional)",
    ],
    steps: [
      { text: "Corta el ½ plátano en trozos pequeños" },
      {
        text: "Coloca la leche, el plátano, la avena y la miel en la licuadora",
      },
      { text: "Licúa por 1 minuto hasta que esté suave" },
      {
        text: "Sirve inmediatamente en un vaso (rinde 1 porción de aproximadamente 300ml)",
      },
    ],
  },
  {
    title: "Sándwich de Atún",
    preparation: "10 minutos",
    prerequisite: "Tener atún en lata",
    ingredients: [
      "1 lata pequeña de atún en agua (85g), escurrida",
      "1 cucharada de mayonesa light",
      "2 rebanadas de pan integral",
      "1 hoja de lechuga, lavada y seca",
      "2 rodajas de jitomate (omitir para versión anti-reflujo)",
      "Sal y pimienta al gusto",
    ],
    steps: [
      {
        text: "Escurre bien el atún presionando con un tenedor contra el colador",
      },
      {
        text: "En un tazón, mezcla el atún con la mayonesa, una pizca de sal y pimienta",
      },
      { text: "Lava y seca la lechuga, córtala del tamaño del pan" },
      { text: "Unta el atún sobre una rebanada de pan" },
      { text: "Añade la lechuga y el jitomate (si lo usas)" },
      { text: "Cubre con la otra rebanada de pan" },
      {
        text: "Corta el sándwich por la mitad y envuelve en papel o guarda en contenedor",
      },
    ],
  },
  {
    title: "Burrito de Frijoles",
    preparation: "15 minutos",
    prerequisite: "Frijoles cocidos",
    ingredients: [
      "1/2 taza de frijoles negros cocidos, ligeramente machacados",
      "1 tortilla grande de harina",
      "30g de queso bajo en grasa, rallado",
      "1/4 de aguacate, en rebanadas",
      "1/4 taza de lechuga, finamente picada",
      "2 cucharadas de salsa mexicana (omitir para versión anti-reflujo)",
      "1/2 cucharadita de aceite para calentar los frijoles",
    ],
    steps: [
      {
        text: "Calienta los frijoles en un sartén pequeño con 1/2 cucharadita de aceite, a fuego medio por 3-4 minutos",
      },
      {
        text: "Mientras tanto, calienta ligeramente la tortilla en un comal seco, 10 segundos por lado",
      },
      {
        text: "Extiende los frijoles calientes en el centro de la tortilla, dejando 2-3 cm libres en los bordes",
      },
      {
        text: "Agrega el queso rallado sobre los frijoles para que se derrita con el calor",
      },
      {
        text: "Añade las rebanadas de aguacate, la lechuga y la salsa (si la usas)",
      },
      {
        text: "Dobla los extremos hacia el centro y luego enrolla desde un lado para formar el burrito",
      },
      {
        text: "Puedes envolverlo en papel aluminio para mantenerlo cerrado y caliente",
      },
    ],
  },
  {
    title: "Tostada de Aguacate con Huevo",
    preparation: "10 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "1 rebanada de pan integral",
      "1/2 aguacate maduro",
      "1 huevo",
      "Pizca de sal y pimienta",
      "1/4 cucharadita de aceite de oliva (para cocinar el huevo)",
    ],
    steps: [
      {
        text: "Llena una olla pequeña con agua hasta la mitad y ponla a hervir a fuego medio-alto",
      },
      {
        text: "Cuando el agua esté hirviendo, reduce el fuego a medio y con cuidado coloca el huevo con una cuchara",
      },
      {
        text: "Cocina por 6-7 minutos para un huevo de yema semi-líquida (o 8-9 minutos para yema firme)",
      },
      { text: "Mientras tanto, tuesta el pan en un tostador o sartén" },
      {
        text: "Corta el aguacate por la mitad, retira el hueso, y saca la pulpa de la mitad con una cuchara",
      },
      {
        text: "Machaca el aguacate con un tenedor y extiéndelo sobre el pan tostado",
      },
      {
        text: "Retira el huevo del agua con una cuchara, enfríalo brevemente bajo el chorro de agua fría, y pela la cáscara",
      },
      { text: "Corta el huevo en rodajas y colócalas sobre el aguacate" },
      { text: "Añade una pizca de sal y pimienta al gusto" },
    ],
  },
  {
    title: "Wrap de Pollo",
    preparation: "15 minutos",
    prerequisite: "Tener pollo cocido",
    ingredients: [
      "1 tortilla grande de harina",
      "80g de pollo cocido y desmenuzado",
      "1/4 de aguacate en rebanadas",
      "1/4 taza de lechuga picada",
      "1/4 de zanahoria rallada",
      "1 cucharada de yogur natural (como aderezo)",
      "Pizca de sal y hierbas al gusto",
    ],
    steps: [
      {
        text: "Calienta ligeramente la tortilla en un comal o sartén seco, 10 segundos por lado",
      },
      {
        text: "Extiende la cucharada de yogur sobre la tortilla, dejando un borde de 2 cm",
      },
      { text: "Coloca la lechuga picada sobre el yogur" },
      { text: "Agrega el pollo desmenuzado en el centro" },
      { text: "Añade la zanahoria rallada y las rebanadas de aguacate" },
      { text: "Sazona con una pizca de sal y hierbas si lo deseas" },
      { text: "Dobla los extremos hacia adentro y enrolla firmemente" },
      { text: "Envuelve en papel o plástico si lo vas a transportar" },
    ],
  },
  {
    title: "Quesadilla de Huevo con Espinacas",
    preparation: "12 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "2 tortillas de maíz",
      "2 huevos",
      "1/2 taza de espinacas frescas, picadas",
      "30g de queso bajo en grasa, rallado",
      "1/2 cucharadita de aceite",
      "Pizca de sal y pimienta",
    ],
    steps: [
      {
        text: "En un tazón pequeño, bate los huevos con una pizca de sal y pimienta",
      },
      { text: "Lava y pica finamente las espinacas" },
      { text: "Calienta el aceite en un sartén a fuego medio" },
      { text: "Vierte los huevos batidos y cocina por 30 segundos" },
      {
        text: "Añade las espinacas picadas sobre el huevo y cocina por 1 minuto más",
      },
      {
        text: "Cuando el huevo esté casi cuajado pero aún húmedo, coloca una tortilla encima",
      },
      {
        text: "Con ayuda de una espátula, voltea todo para que la tortilla quede abajo",
      },
      { text: "Añade el queso rallado sobre el huevo" },
      { text: "Coloca la segunda tortilla encima" },
      { text: "Cocina 30 segundos más y voltea para dorar el otro lado" },
      { text: "Retira del fuego y corta en triángulos para servir" },
    ],
  },
  {
    title: "Licuado de Plátano con Avena",
    preparation: "5 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "1 plátano maduro",
      "1 taza de leche",
      "3 cucharadas de avena",
      "1/4 cucharadita de canela",
      "1 cucharadita de miel (opcional)",
    ],
    steps: [
      { text: "Pela el plátano y córtalo en trozos" },
      { text: "Coloca todos los ingredientes en la licuadora" },
      { text: "Licúa por 1-2 minutos hasta obtener una consistencia suave" },
      { text: "Si está muy espeso, puedes añadir un poco más de leche" },
      { text: "Sirve inmediatamente (rinde 1 porción grande o 2 pequeñas)" },
    ],
  },
  {
    title: "Sopa de Verduras",
    preparation: "30 minutos (4 porciones)",
    prerequisite: "Tener todas las verduras limpias y picadas",
    ingredients: [
      "1 cucharada de aceite de oliva",
      "1/2 cebolla mediana, picada (aproximadamente 1/2 taza)",
      "1 zanahoria grande, en cubos (aproximadamente 1 taza)",
      "1 papa mediana, en cubos (aproximadamente 1 taza)",
      "2 calabacitas medianas, en cubos (aproximadamente 2 tazas)",
      "1 jitomate mediano, picado (omitir para versión anti-reflujo)",
      "1.5 litros de agua",
      "1 ramita de cilantro fresco, picado",
      "Sal y pimienta al gusto",
    ],
    steps: [
      { text: "En una olla mediana, calienta el aceite a fuego medio" },
      {
        text: "Añade la cebolla picada y sofríe por 2-3 minutos hasta que esté transparente",
      },
      { text: "Agrega la zanahoria en cubos y sofríe 2 minutos más" },
      {
        text: "Si usas jitomate, añádelo ahora y cocina 1 minuto (omitir para versión anti-reflujo)",
      },
      {
        text: "Agrega el agua y las papas, aumenta el fuego para llevar a ebullición",
      },
      {
        text: "Reduce el fuego a medio-bajo, tapa parcialmente y cocina por 10 minutos",
      },
      {
        text: "Cuando las zanahorias y papas estén suaves al pincharlas, añade las calabacitas",
      },
      {
        text: "Cocina 5 minutos más hasta que todas las verduras estén tiernas",
      },
      { text: "Sazona con sal y pimienta al gusto" },
      {
        text: "Sirve caliente con cilantro picado por encima (aproximadamente 1.5 tazas por porción)",
      },
    ],
  },
  {
    title: "Pollo Asado Sencillo",
    preparation: "30 minutos (4 porciones)",
    prerequisite: "Tener pechugas de pollo descongeladas",
    ingredients: [
      "400g de pechuga de pollo (aproximadamente 2 pechugas medianas)",
      "1 cucharada de aceite de oliva",
      "1 diente de ajo, finamente picado",
      "1 cucharadita de orégano seco",
      "Sal y pimienta al gusto",
      "Para la versión original: 1 cucharada de jugo de limón (omitir para versión anti-reflujo)",
    ],
    steps: [
      {
        text: "En un tazón pequeño, mezcla el aceite, el ajo picado, el orégano, sal y pimienta",
      },
      {
        text: "Para la versión original, añade el jugo de limón (omitir para versión anti-reflujo)",
      },
      {
        text: "Coloca las pechugas de pollo en un plato y viértele la mezcla de aceite por ambos lados",
      },
      {
        text: "Deja marinar el pollo por 15 minutos (si tienes prisa, puedes reducir este tiempo)",
      },
      {
        text: "Calienta un sartén a fuego medio-alto hasta que esté bien caliente",
      },
      {
        text: "Coloca las pechugas de pollo en el sartén y cocina por 6-7 minutos del primer lado",
      },
      {
        text: "Voltea las pechugas y cocina por otros 6-7 minutos o hasta que el centro ya no esté rosado",
      },
      {
        text: "Para verificar que esté cocido, corta la parte más gruesa; no debe verse rosado",
      },
      {
        text: "Retira del fuego y deja reposar 5 minutos antes de servir o cortar",
      },
      { text: "Porción recomendada: 100g de pollo cocido por persona" },
    ],
  },
  {
    title: "Avena con Manzana y Canela",
    preparation: "10 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "2/3 taza de avena",
      "1 1/3 tazas de agua (o mitad agua, mitad leche para más cremosidad)",
      "1 manzana pequeña",
      "1/4 cucharadita de canela",
      "6 nueces picadas (opcional)",
      "1 cucharadita de miel (opcional)",
    ],
    steps: [
      { text: "Lava, pela y corta la manzana en cubos pequeños" },
      {
        text: "En una olla pequeña, coloca el agua (o la mezcla de agua y leche) y lleva a ebullición",
      },
      {
        text: "Reduce el fuego a medio-bajo y añade la avena, revolviendo ocasionalmente",
      },
      { text: "Después de 2 minutos, añade la manzana picada y la canela" },
      {
        text: "Cocina por 3-5 minutos más, revolviendo frecuentemente, hasta que la avena esté suave y haya absorbido la mayoría del líquido",
      },
      { text: "Si queda muy espeso, puedes añadir un poco más de agua" },
      { text: "Sirve en un tazón y espolvorea las nueces picadas por encima" },
      {
        text: "Si deseas, añade una cucharadita de miel (rinde 1 porción grande)",
      },
    ],
  },
  {
    title: "Huevo Revuelto con Nopales",
    preparation: "15 minutos",
    prerequisite: "Tener nopales limpios",
    ingredients: [
      "2 huevos",
      "1/2 taza de nopales limpios y picados en tiras",
      "1/4 de cebolla pequeña, picada finamente",
      "1/2 cucharadita de aceite",
      "1 tortilla de maíz",
      "Pizca de sal y pimienta",
    ],
    steps: [
      {
        text: "Si los nopales no están pre-cocidos: en una olla pequeña con agua hirviendo, cocina los nopales por 5 minutos, escurre y enjuaga con agua fría",
      },
      { text: "En un tazón, bate los huevos con una pizca de sal y pimienta" },
      { text: "Calienta el aceite en un sartén a fuego medio" },
      {
        text: "Añade la cebolla picada y sofríe por 2 minutos hasta que esté transparente",
      },
      { text: "Agrega los nopales escurridos y cocina por 2 minutos más" },
      { text: "Vierte los huevos batidos sobre los nopales" },
      {
        text: "Con una espátula, revuelve constantemente hasta que el huevo esté cocido pero aún húmedo (aproximadamente 2 minutos)",
      },
      {
        text: "Mientras tanto, calienta la tortilla en un comal o directamente sobre la llama, volteándola para que no se queme",
      },
      { text: "Sirve el huevo con nopales acompañado de la tortilla caliente" },
    ],
  },
  {
    title: "Ensalada de Atún con Verduras (Versión Anti-Reflujo)",
    preparation: "10 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "1 lata de atún en agua (120g drenado)",
      "1 taza de lechuga romana o verde, lavada y picada",
      "1/2 taza de zanahoria rallada",
      "1/4 taza de pepino en cubitos",
      "1/4 de aguacate en cubitos (opcional)",
      "1 cucharada de aceite de oliva",
      "1 cucharadita de vinagre de manzana (menos ácido que otros vinagres)",
      "Pizca de sal y hierbas al gusto",
    ],
    steps: [
      { text: "Escurre bien el atún y desmenúzalo en un tazón" },
      { text: "Lava y pica la lechuga en trozos pequeños" },
      { text: "Ralla la zanahoria y corta el pepino en cubos pequeños" },
      { text: "Si usas aguacate, córtalo en cubitos pequeños" },
      {
        text: "En un tazón pequeño, mezcla el aceite de oliva con el vinagre de manzana y una pizca de sal para hacer el aderezo",
      },
      {
        text: "En un tazón grande, combina la lechuga, zanahoria, pepino y aguacate (si lo usas)",
      },
      { text: "Añade el atún desmenuzado por encima" },
      { text: "Vierte el aderezo y mezcla suavemente todos los ingredientes" },
      {
        text: "Sirve inmediatamente o refrigera hasta por 2 horas (rinde 1 porción grande)",
      },
    ],
  },
  {
    title: "Sopa de Lentejas con Verduras",
    preparation: "40 minutos",
    prerequisite: "Ninguno (las lentejas no requieren remojo previo)",
    ingredients: [
      "3/4 taza de lentejas, lavadas y revisadas",
      "1/2 cebolla mediana, picada",
      "1 zanahoria mediana, en cubitos",
      "1 tallo de apio, en cubitos",
      "1 papa pequeña, en cubitos",
      "1 diente de ajo, finamente picado",
      "1 cucharada de aceite de oliva",
      "4 tazas de agua o caldo de verduras",
      "1 hoja de laurel (opcional)",
      "1/2 cucharadita de comino molido",
      "Sal y pimienta al gusto",
    ],
    steps: [
      {
        text: "Lava las lentejas bajo agua fría, revisa y retira cualquier piedrita o impureza",
      },
      { text: "En una olla mediana, calienta el aceite a fuego medio" },
      {
        text: "Añade la cebolla picada y sofríe por 3 minutos hasta que esté transparente",
      },
      { text: "Agrega el ajo picado y cocina por 30 segundos más" },
      {
        text: "Añade la zanahoria, apio y papa, y cocina por 3 minutos, revolviendo ocasionalmente",
      },
      {
        text: "Agrega las lentejas lavadas y revuelve para mezclar con las verduras",
      },
      {
        text: "Vierte el agua o caldo, añade la hoja de laurel (si la usas) y el comino",
      },
      {
        text: "Lleva a ebullición, luego reduce el fuego a bajo, tapa parcialmente y cocina por 25-30 minutos o hasta que las lentejas estén tiernas",
      },
      {
        text: "Revisa ocasionalmente y añade un poco más de agua si es necesario",
      },
      { text: "Sazona con sal y pimienta al gusto" },
      {
        text: "Sirve caliente (rinde 4 porciones de aproximadamente 1 taza cada una)",
      },
    ],
  },
  {
    title: "Licuado Suave Anti-Reflujo",
    preparation: "5 minutos",
    prerequisite: "Ninguno",
    ingredients: [
      "1 taza de espinacas frescas",
      "1/2 pera, sin semillas y cortada en trozos",
      "1/2 manzana, sin semillas y cortada en trozos",
      "3 cucharadas de avena",
      "1 taza de agua o leche de almendra",
      "1/2 taza de hielo (opcional, para servir más frío)",
    ],
    steps: [
      { text: "Lava bien las espinacas, la pera y la manzana" },
      { text: "Corta la pera y la manzana en trozos, retirando las semillas" },
      {
        text: "Coloca todos los ingredientes en la licuadora, comenzando con el líquido en el fondo",
      },
      {
        text: "Licúa a velocidad alta por 1-2 minutos hasta obtener una consistencia suave",
      },
      { text: "Si queda muy espeso, añade un poco más de agua o leche" },
      {
        text: "Sirve inmediatamente para aprovechar todos los nutrientes (rinde 1 porción grande)",
      },
    ],
  },
  {
    title: "Tacos de Frijoles con Aguacate",
    preparation: "15 minutos",
    prerequisite: "Tener frijoles cocidos",
    ingredients: [
      "1/2 taza de frijoles negros cocidos",
      "3 tortillas de maíz",
      "1/2 aguacate",
      "1/4 taza de lechuga finamente picada",
      "2 cucharadas de queso bajo en grasa rallado",
      "2 cucharadas de salsa casera (opcional, omitir para versión anti-reflujo)",
      "1/2 cucharadita de aceite",
    ],
    steps: [
      { text: "En un sartén pequeño, calienta el aceite a fuego medio" },
      {
        text: "Añade los frijoles y machácalos ligeramente con un tenedor mientras se calientan",
      },
      { text: "Cocina por 3-4 minutos, revolviendo ocasionalmente" },
      {
        text: "Mientras tanto, calienta las tortillas en un comal o sartén seco, aproximadamente 30 segundos por lado",
      },
      {
        text: "Mantén las tortillas calientes envolviéndolas en un paño limpio",
      },
      {
        text: "Corta el aguacate por la mitad, retira el hueso, y corta la pulpa en rebanadas delgadas",
      },
      {
        text: "Para armar cada taco: extiende aproximadamente 2-3 cucharadas de frijoles sobre cada tortilla",
      },
      {
        text: "Añade la lechuga picada, unas rebanadas de aguacate y espolvorea con queso rallado",
      },
      {
        text: "Si lo deseas y no tienes problemas de reflujo, añade un poco de salsa casera",
      },
      { text: "Sirve inmediatamente (rinde 3 tacos)" },
    ],
  },
];

// Shopping list
export const shoppingList = [
  // Verduras
  {
    id: "v1",
    item: "Lechuga (1/2 cabeza mediana)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v2",
    item: "Espinacas (100g o 1/2 bolsa pequeña)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v3",
    item: "Nopales (250g o 3-4 pencas medianas)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v4",
    item: "Zanahoria (2 piezas medianas)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v5",
    item: "Calabacita (2 piezas medianas)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v6",
    item: "Cebolla (1 pieza mediana)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v7",
    item: "Ajo (1/2 cabeza o 4-5 dientes)",
    category: "Verduras",
    purchased: false,
  },
  { id: "v8", item: "Apio (2 tallos)", category: "Verduras", purchased: false },
  {
    id: "v9",
    item: "Papa (2 piezas medianas)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v10",
    item: "Pepino (1 pieza)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v11",
    item: "Jícama (1/2 pieza mediana)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v12",
    item: "Hongos/champiñones (100g)",
    category: "Verduras",
    purchased: false,
  },
  {
    id: "v13",
    item: "Cilantro (1 manojo pequeño)",
    category: "Verduras",
    purchased: false,
  },

  // Frutas
  {
    id: "f1",
    item: "Plátano (4 piezas)",
    category: "Frutas",
    purchased: false,
  },
  {
    id: "f2",
    item: "Manzana (5 piezas pequeñas)",
    category: "Frutas",
    purchased: false,
  },
  { id: "f3", item: "Pera (2 piezas)", category: "Frutas", purchased: false },
  {
    id: "f4",
    item: "Aguacate (2 piezas)",
    category: "Frutas",
    purchased: false,
  },
  {
    id: "f5",
    item: "Melón (1 pieza pequeña)",
    category: "Frutas",
    purchased: false,
  },

  // Proteínas
  {
    id: "p1",
    item: "Huevo (12 piezas)",
    category: "Proteínas",
    purchased: false,
  },
  {
    id: "p2",
    item: "Pollo pechuga (500g)",
    category: "Proteínas",
    purchased: false,
  },
  {
    id: "p3",
    item: "Atún en agua (3 latas pequeñas)",
    category: "Proteínas",
    purchased: false,
  },
  {
    id: "p4",
    item: "Pescado blanco (300g)",
    category: "Proteínas",
    purchased: false,
  },
  {
    id: "p5",
    item: "Pavo pechuga (250g)",
    category: "Proteínas",
    purchased: false,
  },

  // Legumbres
  {
    id: "l1",
    item: "Frijoles negros (1/4 kg secos)",
    category: "Legumbres",
    purchased: false,
  },
  {
    id: "l2",
    item: "Lentejas (1/4 kg)",
    category: "Legumbres",
    purchased: false,
  },
  {
    id: "l3",
    item: "Hummus (1 paquete pequeño o ingredientes para hacerlo)",
    category: "Legumbres",
    purchased: false,
  },

  // Lácteos
  { id: "d1", item: "Leche (1 litro)", category: "Lácteos", purchased: false },
  {
    id: "d2",
    item: "Yogur natural (250g)",
    category: "Lácteos",
    purchased: false,
  },
  {
    id: "d3",
    item: "Queso bajo en grasa (150g)",
    category: "Lácteos",
    purchased: false,
  },
  {
    id: "d4",
    item: "Queso cottage bajo en grasa (1 paquete pequeño)",
    category: "Lácteos",
    purchased: false,
  },

  // Granos y cereales
  {
    id: "g1",
    item: "Avena (250g)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g2",
    item: "Arroz integral (250g)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g3",
    item: "Arroz blanco (100g)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g4",
    item: "Tortillas de maíz (10 piezas)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g5",
    item: "Tortillas de harina (5 piezas)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g6",
    item: "Pan integral (1/2 paquete o 6 rebanadas)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g7",
    item: "Pasta integral (1/4 paquete)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g8",
    item: "Galletas de arroz (1 paquete pequeño)",
    category: "Granos y Cereales",
    purchased: false,
  },
  {
    id: "g9",
    item: "Quinoa (100g)",
    category: "Granos y Cereales",
    purchased: false,
  },

  // Frutos secos y semillas
  {
    id: "n1",
    item: "Almendras (50g)",
    category: "Frutos Secos",
    purchased: false,
  },
  {
    id: "n2",
    item: "Nueces (50g)",
    category: "Frutos Secos",
    purchased: false,
  },
  {
    id: "n3",
    item: "Pepitas de calabaza (30g)",
    category: "Frutos Secos",
    purchased: false,
  },
  {
    id: "n4",
    item: "Mezcla de frutos secos (30g)",
    category: "Frutos Secos",
    purchased: false,
  },
  {
    id: "n5",
    item: "Arándanos secos (30g)",
    category: "Frutos Secos",
    purchased: false,
  },
  {
    id: "n6",
    item: "Semillas de chía (30g)",
    category: "Frutos Secos",
    purchased: false,
  },

  // Condimentos y aceites
  {
    id: "c1",
    item: "Aceite de oliva (60ml o 4 cucharadas)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c2",
    item: "Vinagre de manzana (30ml o 2 cucharadas)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c3",
    item: "Miel (30g o 2 cucharadas)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c4",
    item: "Canela en polvo (5g o 1 cucharadita)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c5",
    item: "Sal (lo que tengas en casa)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c6",
    item: "Pimienta negra molida (lo que tengas en casa)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c7",
    item: "Comino molido (3g o 1/2 cucharadita)",
    category: "Condimentos",
    purchased: false,
  },
  {
    id: "c8",
    item: "Orégano seco (3g o 1/2 cucharadita)",
    category: "Condimentos",
    purchased: false,
  },

  // Otros
  {
    id: "o1",
    item: "Mayonesa light (30g o 2 cucharadas)",
    category: "Otros",
    purchased: false,
  },
  {
    id: "o2",
    item: "Bicarbonato de sodio (pequeña cantidad)",
    category: "Otros",
    purchased: false,
  },
  {
    id: "o3",
    item: "Té de manzanilla (1 caja pequeña)",
    category: "Otros",
    purchased: false,
  },
  {
    id: "o4",
    item: "Té de jengibre (1 caja pequeña)",
    category: "Otros",
    purchased: false,
  },
  {
    id: "o5",
    item: "Gelatina sin azúcar (1 caja)",
    category: "Otros",
    purchased: false,
  },
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
