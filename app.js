// Default recipe data matching the Google Sheets structure
const DEFAULT_RECIPES = [
  {
    id: "original",
    name: "Cholao Original",
    tagline: "El clásico de clásicos con abundante Milo y fresa",
    category: "clasico",
    categoryLabel: "Clásico",
    bgColor: "linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)",
    themeColor: "#ff4757",
    emoji: "🍓",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Fresa", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Bañar el hielo con jarabe de fresa concentrado usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido especial de gelatina." }
      ],
      centro: [
        { name: "Maracuyá", amounts: { kids: "1 cucharada", normal: "1.5 cucharadas", grande: "2 cucharadas" }, instruction: "Agregar al borde del vaso (no en el centro) justo después de la gelatina para que visualmente sea atractivo." },
        { name: "Piña picada", amounts: { kids: "3/4 cucharada + 3/4 jugo", normal: "1 cucharada + 1 jugo", grande: "1.5 cucharadas + 1.5 jugo" }, instruction: "Colocar la piña picada con la cantidad de jugo indicada." },
        { name: "Banana picada", amounts: { kids: "Hasta 1 dedo antes del tope", normal: "Hasta 1 dedo antes del tope", grande: "Hasta 1 dedo antes del tope" }, instruction: "Picar banana en rodajas y llenar el vaso hasta casi el borde (1 dedo antes del tope)." },
        { name: "Crema Chantilly", amounts: { kids: "Capa intermedia", normal: "Capa intermedia", grande: "Capa intermedia" }, instruction: "Hacer una cama o espiral de crema chantilly sobre la banana." }
      ],
      decoracion: [
        { name: "Manzana", amounts: { kids: "Mitad arriba (Un lado)", normal: "Mitad arriba (Un lado)", grande: "Mitad arriba (Un lado)" }, instruction: "Colocar manzana en rodajas en un lado de la superficie superior." },
        { name: "Piña", amounts: { kids: "Mitad arriba (Lado opuesto)", normal: "Mitad arriba (Lado opuesto)", grande: "Mitad arriba (Lado opuesto)" }, instruction: "Colocar rodajas de piña al lado contrario de la manzana." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Hacer hilos abundantes de leche condensada por encima." },
        { name: "Milo en polvo", amounts: { kids: "Espolvoreado suave", normal: "Espolvoreado abundante", grande: "Espolvoreado abundante" }, instruction: "Espolvorear abundantemente con Milo en polvo." },
        { name: "Fresa en tiras", amounts: { kids: "2 tiras de fresa", normal: "3 tiras de fresa", grande: "4 tiras de fresa" }, instruction: "Coronar con tiras de fresas frescas (2 para kids, 3 para normal, 4 para grande)." }
      ]
    }
  },
  {
    id: "mkr",
    name: "Cholao Mkr",
    tagline: "El toque especial de naranja, galleta Tentación y fudge de chocolate",
    category: "dulce",
    categoryLabel: "Dulce / Especial",
    bgColor: "linear-gradient(135deg, #eccc68 0%, #ff7f50 100%)",
    themeColor: "#ff7f50",
    emoji: "🍪",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Naranja", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Bañar el hielo con jarabe de naranja dulce usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido de gelatina." }
      ],
      centro: [
        { name: "Banana picada", amounts: { kids: "Hasta 1 dedo antes del tope", normal: "Hasta 1 dedo antes del tope", grande: "Hasta 1 dedo antes del tope" }, instruction: "Picar banana en rodajas y llenar el vaso hasta 1 dedo antes del tope." },
        { name: "Pera picada", amounts: { kids: "1/2 cucharada", normal: "1 cucharada", grande: "1.5 cucharadas" }, instruction: "Agregar pera picada fina para aportar frescura." },
        { name: "Crema Chantilly", amounts: { kids: "Capa intermedia", normal: "Capa intermedia", grande: "Capa intermedia" }, instruction: "Hacer una cama o espiral con la crema chantilly para sostener la decoración." }
      ],
      decoracion: [
        { name: "Mango", amounts: { kids: "Mitad arriba (Un lado)", normal: "Mitad arriba (Un lado)", grande: "Mitad arriba (Un lado)" }, instruction: "Colocar mango picado en rodajas delgadas a un lado de la superficie." },
        { name: "Polvo de Galleta Tentación", amounts: { kids: "Mitad arriba (Lado opuesto)", normal: "Mitad arriba (Lado opuesto)", grande: "Mitad arriba (Lado opuesto)" }, instruction: "Espolvorear galleta Tentación triturada en polvo al lado opuesto del mango." },
        { name: "Uva verde", amounts: { kids: "1 unidad", normal: "1 unidad", grande: "1 unidad" }, instruction: "Coronar con una uva verde fresca en el centro." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Bañar la copa con hilos de leche condensada." },
        { name: "Fudge de Chocolate", amounts: { kids: "En zigzag", normal: "En zigzag", grande: "En zigzag" }, instruction: "Hacer líneas decorativas en zigzag con fudge de chocolate." }
      ]
    }
  },
  {
    id: "tropical",
    name: "Cholao Tropical",
    tagline: "Explosión de jarabe de mango con doble jarabe de fresa",
    category: "frutal",
    categoryLabel: "Frutal",
    bgColor: "linear-gradient(135deg, #ffa502 0%, #ff6348 100%)",
    themeColor: "#ffa502",
    emoji: "🥭",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Mango", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Bañar el hielo con jarabe de mango concentrado usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido especial de gelatina." }
      ],
      centro: [
        { name: "Papaya", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Añadir una capa de papaya madura bien picadita." },
        { name: "Sandía", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Agregar sandía fresca picada para darle hidratación." },
        { name: "Capa de Hielo adicional", amounts: { kids: "Capita fina", normal: "Capita fina", grande: "Capita delgada" }, instruction: "Colocar una capa muy delgada de hielo picado encima de las frutas." },
        { name: "Jarabe de Fresa", amounts: { kids: "1/2 vuelta", normal: "1 vuelta", grande: "1.5 vueltas" }, instruction: "Bañar la capa intermedia de hielo con jarabe de fresa." }
      ],
      decoracion: [
        { name: "Piña", amounts: { kids: "Mitad arriba (Un lado)", normal: "Mitad arriba (Un lado)", grande: "Mitad arriba (Un lado)" }, instruction: "Colocar piña cubriendo la mitad superior de un lado." },
        { name: "Mango", amounts: { kids: "Mitad arriba (Lado opuesto)", normal: "Mitad arriba (Lado opuesto)", grande: "Mitad arriba (Lado opuesto)" }, instruction: "Colocar mango en rodajas finas al lado contrario de la piña." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Decorar con hilos abundantes de leche condensada." },
        { name: "Fudge de Chocolate", amounts: { kids: "En zigzag", normal: "En zigzag", grande: "En zigzag" }, instruction: "Hacer líneas decorativas en zigzag con fudge de chocolate." }
      ]
    }
  },
  {
    id: "fit",
    name: "Cholao Fit",
    tagline: "El saludable con miel de abejas, yogurt y frutas exóticas",
    category: "fit",
    categoryLabel: "Saludable / Fit",
    bgColor: "linear-gradient(135deg, #2ed573 0%, #1e90ff 100%)",
    themeColor: "#2ed573",
    emoji: "🥝",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco menos de la mitad", grande: "Un poco menos de la mitad" }, instruction: "Llenar con hielo triturado un poco por debajo de la mitad del vaso." },
        { name: "Miel de Abejas", amounts: { kids: "Directo al hielo", normal: "Directo al hielo", grande: "Directo al hielo" }, instruction: "Verter miel de abejas pura directo sobre el hielo para que se endurezca al enfriarse." },
        { name: "Yogurt Líquido de Fresa", amounts: { kids: "Bañado base", normal: "Bañado base", grande: "Bañado base" }, instruction: "Bañar el hielo con yogurt líquido sabor a fresa." }
      ],
      centro: [
        { name: "Papaya", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Agregar papaya picada." },
        { name: "Sandía", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Agregar sandía fresca picada." },
        { name: "Capa de Granola", amounts: { kids: "Capita fina", normal: "Capa intermedia", grande: "Capa generosa" }, instruction: "Poner granola crujiente para textura intermedia." }
      ],
      decoracion: [
        { name: "Mango", amounts: { kids: "Decoración", normal: "Decoración", grande: "Decoración abundante" }, instruction: "Colocar mango picado en la superficie superior." },
        { name: "Granola (Decoración)", amounts: { kids: "Espolvoreada", normal: "Espolvoreada", grande: "Espolvoreada" }, instruction: "Espolvorear granola crujiente sobre las frutas." },
        { name: "Tuna Rosada", amounts: { kids: "1 tira fina", normal: "1 tira fina", grande: "1 tira fina" }, instruction: "Colocar una tira de tuna rosada (fruta de nopal dulce) arriba." },
        { name: "Kiwi", amounts: { kids: "1 tira fina", normal: "1 tira fina", grande: "1 tira fina" }, instruction: "Colocar una tira o rodaja de kiwi verde fresco." },
        { name: "Arándano", amounts: { kids: "1 unidad", normal: "1 unidad", grande: "1 unidad" }, instruction: "Poner un arándano entero como toque decorativo." },
        { name: "Uva verde", amounts: { kids: "1 unidad", normal: "1 unidad", grande: "1 unidad" }, instruction: "Añadir una uva verde entera." },
        { name: "Miel de Abejas", amounts: { kids: "Hilo fino", normal: "Hilo fino", grande: "Hilo de cierre" }, instruction: "Coronar con un hilo fino de miel de abejas sobre toda la copa." }
      ]
    }
  },
  {
    id: "selvatico",
    name: "Cholao Selvático",
    tagline: "El sabor del Amazonas con aguaymanto, sandía y miel",
    category: "frutal",
    categoryLabel: "Frutal",
    bgColor: "linear-gradient(135deg, #ffa502 0%, #2ed573 100%)",
    themeColor: "#ffa502",
    emoji: "🌴",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Naranja", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Verter jarabe dulce de naranja sobre el hielo usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido especial de gelatina." }
      ],
      centro: [
        { name: "Banana", amounts: { kids: "Hasta 1 dedo antes del tope", normal: "Hasta 1 dedo antes del tope", grande: "Hasta 1 dedo antes del tope" }, instruction: "Picar banana en rodajas y llenar el vaso hasta 1 dedo antes del tope." },
        { name: "Sandía", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Agregar sandía fresca picada para frescura." },
        { name: "Aguaymanto", amounts: { kids: "1 o 2 enteros", normal: "2 o 3 enteros", grande: "3 o 4 enteros" }, instruction: "Colocar aguaymantos enteros en la parte media." }
      ],
      decoracion: [
        { name: "Aguaymanto (Decoración)", amounts: { kids: "1 entero", normal: "1 entero", grande: "1 entero" }, instruction: "Poner un aguaymanto fresco entero en la parte superior." },
        { name: "Uva verde", amounts: { kids: "1 unidad", normal: "1 unidad", grande: "1 unidad" }, instruction: "Añadir una uva verde para complementar el color." },
        { name: "Banana en tiras largas", amounts: { kids: "1 tira larga", normal: "2 tiras largas", grande: "3 tiras largas" }, instruction: "Decorar con banana cortada en tiras largas que sobresalgan del vaso." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Agregar hilos abundantes de leche condensada." },
        { name: "Miel de Abejas", amounts: { kids: "Hilo fino", normal: "Hilo fino", grande: "Hilo de cierre" }, instruction: "Terminar con un chorrito fino de miel de abejas por encima." }
      ]
    }
  },
  {
    id: "menta-fresh",
    name: "Cholao Menta Fresh",
    tagline: "Súper refrescante con jarabe de menta y doble capa cítrica",
    category: "refrescante",
    categoryLabel: "Refrescante",
    bgColor: "linear-gradient(135deg, #10ac84 0%, #2ed573 100%)",
    themeColor: "#10ac84",
    emoji: "🍃",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Menta", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Bañar el hielo generosamente con jarabe de menta usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido de gelatina." }
      ],
      centro: [
        { name: "Piña", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Añadir piña picada fresca." },
        { name: "Sandía", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Colocar una capa de sandía bien jugosa." },
        { name: "Capa de Hielo adicional", amounts: { kids: "Capita fina", normal: "Capita fina", grande: "Capita delgada" }, instruction: "Poner una capa delgada de hielo picado sobre las frutas." },
        { name: "Jarabe de Naranja", amounts: { kids: "1/2 vuelta", normal: "1 vuelta", grande: "1.5 vueltas" }, instruction: "Bañar el hielo intermedio con jarabe de naranja." }
      ],
      decoracion: [
        { name: "Piña", amounts: { kids: "Mitad arriba (Un lado)", normal: "Mitad arriba (Un lado)", grande: "Mitad arriba (Un lado)" }, instruction: "Decorar con piña cubriendo un lado de la parte superior." },
        { name: "Mango", amounts: { kids: "Mitad arriba (Lado opuesto)", normal: "Mitad arriba (Lado opuesto)", grande: "Mitad arriba (Lado opuesto)" }, instruction: "Colocar mango en rodajas finas al lado opuesto." },
        { name: "Fresa fresca", amounts: { kids: "1 rodaja", normal: "1 rodaja grande", grande: "1 rodaja grande" }, instruction: "Poner fresa en la decoración superior." },
        { name: "Kiwi fresco", amounts: { kids: "1 rodaja", normal: "1 rodaja grande", grande: "1 rodaja grande" }, instruction: "Agregar una rodaja de kiwi verde." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Finalizar bañando la copa con abundante leche condensada." }
      ]
    }
  },
  {
    id: "citrus",
    name: "Cholao Citrus",
    tagline: "El rey de los sabores cítricos con maracuyá, mandarina y kiwi",
    category: "citrico",
    categoryLabel: "Cítrico",
    bgColor: "linear-gradient(135deg, #ffa502 0%, #ff7f50 100%)",
    themeColor: "#ff7f50",
    emoji: "🍊",
    image_kids: "",
    image_normal: "",
    image_grande: "",
    layers: {
      base: [
        { name: "Hielo picado", amounts: { kids: "Poco menos de la mitad", normal: "Un poco más de la mitad", grande: "Un poco más de la mitad" }, instruction: "Llenar el vaso con hielo triturado fino según el tamaño." },
        { name: "Jarabe de Maracuyá", amounts: { kids: "1 vuelta", normal: "2 vueltas", grande: "3 vueltas" }, instruction: "Bañar el hielo con jarabe de maracuyá usando botella con pico." },
        { name: "Jarabe de Gelatina", amounts: { kids: "2 segundos", normal: "2 a 3 segundos", grande: "3 segundos" }, instruction: "Verter el concentrado líquido de gelatina." }
      ],
      centro: [
        { name: "Maracuyá", amounts: { kids: "1 cucharada", normal: "1.5 cucharadas", grande: "2 cucharadas" }, instruction: "Añadir pulpa fresca de maracuyá al borde del vaso (después de la gelatina)." },
        { name: "Piña", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Agregar piña dulce picadita." },
        { name: "Manzana verde", amounts: { kids: "1 cucharada", normal: "2 cucharadas", grande: "3 cucharadas" }, instruction: "Añadir manzana verde bien ácida picada en cubos pequeños." }
      ],
      decoracion: [
        { name: "Mandarina", amounts: { kids: "Mitad arriba (Un lado)", normal: "Mitad arriba (Un lado)", grande: "Mitad arriba (Un lado)" }, instruction: "Colocar gajos de mandarina pelados a un lado de la superficie." },
        { name: "Uva verde", amounts: { kids: "Mitad arriba (Lado opuesto)", normal: "Mitad arriba (Lado opuesto)", grande: "Mitad arriba (Lado opuesto)" }, instruction: "Colocar uvas verdes frescas al lado opuesto de la mandarina." },
        { name: "Fresa fresca", amounts: { kids: "1 rodaja", normal: "1 rodaja grande", grande: "1 rodaja grande" }, instruction: "Añadir fresa picada." },
        { name: "Kiwi", amounts: { kids: "1 rodaja", normal: "1 rodaja grande", grande: "1 rodaja grande" }, instruction: "Agregar una rodaja de kiwi." },
        { name: "Pepitas de Maracuyá", amounts: { kids: "Esparcidas", normal: "Esparcidas", grande: "Esparcidas" }, instruction: "Esparcir semillas de maracuyá frescas encima de las frutas." },
        { name: "Leche Condensada", amounts: { kids: "Bañado moderado", normal: "Bañado abundante", grande: "Bañado abundante" }, instruction: "Hacer hilos de leche condensada para equilibrar la acidez." }
      ]
    }
  }
];

// App State
let RECIPES = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
let activeRecipeId = "original";
let activeSize = "normal"; // 'kids', 'normal', 'grande'
let activeLayerFilter = "all"; // 'all', 'base', 'centro', 'decoracion'
let isKitchenMode = false;
let checkedIngredients = {}; // Maps "recipeId-size-layer-index" to boolean
const apiWebUrl = "https://script.google.com/macros/s/AKfycbzWrnuxbGQ6wGExYGKlTgItv1dqnJs0rowFidayT6WBsdzXMipirWN9cZKiAli5qXXKYA/exec";

// Editor Form State
let editingRecipe = null;
let activeEditorLayer = "base";

// DOM Elements
let recipeListEl, searchInputEl, filterTabsEl, recipeTitleEl, recipeTaglineEl;
let categoryBadgeEl, printBtnEl, printAllBtnEl, kitchenModeToggleEl, recetarioContainerEl, printAreaEl;
let cupLayerDecoracion, cupLayerCentro, cupLayerBase, cupVisualEl, ingredientsContainerEl;
let sizeTabsEl, photoContainerEl, photoSizeBadgeEl;

// Editor Elements
let editRecipeBtnEl, recipeEditorModalEl, closeEditorBtnEl, cancelEditBtnEl, saveRecipeBtnEl;
let editorRecipeNameEl, editTaglineEl, editEmojiEl, editCategoryEl, editorIngredientsListEl, addIngredientRowBtnEl;

// Initialize application
function init() {
  bindDOMElements();
  setupEventListeners();
  
  // Try connecting or fallback to localStorage / defaults
  loadRecipeData();
}

// Bind all DOM Elements
function bindDOMElements() {
  recipeListEl = document.getElementById("recipe-list");
  searchInputEl = document.getElementById("search-input");
  filterTabsEl = document.getElementById("filter-tabs");
  recipeTitleEl = document.getElementById("recipe-title");
  recipeTaglineEl = document.getElementById("recipe-tagline");
  categoryBadgeEl = document.getElementById("category-badge");
  printBtnEl = document.getElementById("print-btn");
  printAllBtnEl = document.getElementById("print-all-btn");
  kitchenModeToggleEl = document.getElementById("kitchen-mode-toggle");
  recetarioContainerEl = document.getElementById("recetario-container");
  printAreaEl = document.getElementById("print-area");
  sizeTabsEl = document.getElementById("size-tabs");
  photoContainerEl = document.getElementById("photo-container");
  photoSizeBadgeEl = document.getElementById("photo-size-badge");

  cupLayerDecoracion = document.getElementById("cup-layer-decoracion");
  cupLayerCentro = document.getElementById("cup-layer-centro");
  cupLayerBase = document.getElementById("cup-layer-base");
  cupVisualEl = document.getElementById("cup-visual");
  ingredientsContainerEl = document.getElementById("ingredients-container");

  // Editor
  editRecipeBtnEl = document.getElementById("edit-recipe-btn");
  recipeEditorModalEl = document.getElementById("recipe-editor-modal");
  closeEditorBtnEl = document.getElementById("close-editor-btn");
  cancelEditBtnEl = document.getElementById("cancel-edit-btn");
  saveRecipeBtnEl = document.getElementById("save-recipe-btn");
  editorRecipeNameEl = document.getElementById("editor-recipe-name");
  editTaglineEl = document.getElementById("edit-tagline");
  editEmojiEl = document.getElementById("edit-emoji");
  editCategoryEl = document.getElementById("edit-category");
  editorIngredientsListEl = document.getElementById("editor-ingredients-list");
  addIngredientRowBtnEl = document.getElementById("add-ingredient-row-btn");
}

// Update connection pill visual state (no-op since database settings are now internal)
function updateConnectionStatus(state, text) {
  console.log(`Conexión Base de Datos: ${text} (${state})`);
}

// Load recipes: from Sheets API, or fallback to localStorage, or fallback to DEFAULT_RECIPES
async function loadRecipeData() {
  if (!apiWebUrl) {
    // Attempt to load from localStorage first
    const localData = localStorage.getItem("el_cholao_recetario_recipes");
    if (localData) {
      try {
        RECIPES = JSON.parse(localData);
        updateConnectionStatus("local", "Modo Local");
      } catch (e) {
        RECIPES = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
        updateConnectionStatus("local", "Modo Local (Por Defecto)");
      }
    } else {
      RECIPES = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
      updateConnectionStatus("local", "Modo Local (Por Defecto)");
    }
    renderSidebar();
    selectRecipe(activeRecipeId);
    return;
  }

  updateConnectionStatus("loading", "Sincronizando con Sheets...");
  
  try {
    const url = `${apiWebUrl}?action=getRecipes&_t=${Date.now()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP error " + response.status);
    
    const result = await response.json();
    if (result.status === "success" && result.data && result.data.length > 0) {
      // Validate structure has 3 sizes
      RECIPES = result.data;
      localStorage.setItem("el_cholao_recetario_recipes", JSON.stringify(RECIPES));
      updateConnectionStatus("connected", "Sheets Sincronizado");
    } else {
      throw new Error(result.message || "Estructura de datos inválida");
    }
  } catch (err) {
    console.error("Sheets sync failed, loading local copies.", err);
    // Load from local storage backup or defaults
    const localData = localStorage.getItem("el_cholao_recetario_recipes");
    if (localData) {
      RECIPES = JSON.parse(localData);
      updateConnectionStatus("disconnected", "Offline (Datos Guardados)");
    } else {
      RECIPES = JSON.parse(JSON.stringify(DEFAULT_RECIPES));
      updateConnectionStatus("disconnected", "Error de Conexión");
    }
  }
  
  renderSidebar();
  selectRecipe(activeRecipeId);
}

// Save recipes to Cloud (Google Sheets) and LocalStorage backup
async function saveRecipeData() {
  // Always save to localStorage backup
  localStorage.setItem("el_cholao_recetario_recipes", JSON.stringify(RECIPES));
  
  if (!apiWebUrl) {
    alert("Receta guardada localmente en tu navegador. Para guardarla en la nube de Google Sheets, configura la URL de la base de datos.");
    return true;
  }
  
  try {
    const response = await fetch(apiWebUrl, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script redirects in some environments
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveAllRecipes",
        recipes: RECIPES
      })
    });
    
    // With no-cors, we can't read the response directly, but we assume success if no error was thrown.
    // To be safer, we can alert the user and trigger a background fetch to verify.
    setTimeout(loadRecipeData, 1500); // Reload data in background to verify
    return true;
  } catch (err) {
    console.error("Failed saving to Google Sheets:", err);
    alert("Error al guardar en Google Sheets. Se guardó copia local en el navegador.");
    return false;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Sidebar Search
  searchInputEl.addEventListener("input", (e) => {
    const activeTab = document.querySelector(".filter-tab.active").dataset.category;
    renderSidebar(e.target.value, activeTab);
  });

  // Category filter tabs
  filterTabsEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-tab")) {
      document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
      e.target.classList.add("active");
      
      const category = e.target.dataset.category;
      renderSidebar(searchInputEl.value, category);
    }
  });

  // Cup Size selector
  sizeTabsEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("size-tab")) {
      document.querySelectorAll(".size-tab").forEach(tab => tab.classList.remove("active"));
      e.target.classList.add("active");
      
      activeSize = e.target.dataset.size;
      renderRecipeContent();
      renderProductPhoto();
    }
  });

  // Interactive Cup Section Clicks
  cupLayerDecoracion.addEventListener("click", () => {
    const nextFilter = activeLayerFilter === "decoracion" ? "all" : "decoracion";
    setLayerFilter(nextFilter);
  });

  cupLayerCentro.addEventListener("click", () => {
    const nextFilter = activeLayerFilter === "centro" ? "all" : "centro";
    setLayerFilter(nextFilter);
  });

  cupLayerBase.addEventListener("click", () => {
    const nextFilter = activeLayerFilter === "base" ? "all" : "base";
    setLayerFilter(nextFilter);
  });



  // Toggle Kitchen Mode
  kitchenModeToggleEl.addEventListener("click", () => {
    isKitchenMode = !isKitchenMode;
    kitchenModeToggleEl.classList.toggle("active", isKitchenMode);
    
    const toggleText = kitchenModeToggleEl.querySelector(".toggle-text");
    if (toggleText) {
      toggleText.innerText = isKitchenMode ? "Modo Lectura" : "Modo Cocina";
    }

    if (isKitchenMode) {
      recetarioContainerEl.classList.add("kitchen-mode");
    } else {
      recetarioContainerEl.classList.remove("kitchen-mode");
    }
    renderRecipeContent();
  });

  // Print buttons
  printBtnEl.addEventListener("click", () => {
    preparePrintSingle(activeRecipeId);
    window.print();
  });

  printAllBtnEl.addEventListener("click", () => {
    preparePrintAll();
    window.print();
  });

  // Recipe Editor Trigger
  editRecipeBtnEl.addEventListener("click", () => {
    openRecipeEditor();
  });

  closeEditorBtnEl.addEventListener("click", closeRecipeEditor);
  cancelEditBtnEl.addEventListener("click", closeRecipeEditor);
  
  // Save edited recipe
  saveRecipeBtnEl.addEventListener("click", saveEditedRecipe);

  // Editor layers tabs
  document.querySelectorAll(".layer-editor-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".layer-editor-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeEditorLayer = tab.dataset.layer;
      renderEditorIngredients();
    });
  });

  // Add row in editor
  addIngredientRowBtnEl.addEventListener("click", () => {
    if (!editingRecipe) return;
    editingRecipe.layers[activeEditorLayer].push({
      name: "",
      amounts: { kids: "", normal: "", grande: "" },
      instruction: ""
    });
    renderEditorIngredients();
  });
}

// Render the sidebar list of recipes
function renderSidebar(searchQuery = "", categoryFilter = "all") {
  recipeListEl.innerHTML = "";
  
  const filtered = RECIPES.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || recipe.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    recipeListEl.innerHTML = `<div class="no-results">No se encontraron cholaos</div>`;
    return;
  }

  filtered.forEach(recipe => {
    const item = document.createElement("div");
    item.className = `recipe-item ${recipe.id === activeRecipeId ? "active" : ""}`;
    item.style.setProperty("--theme-color", recipe.themeColor);
    item.innerHTML = `
      <span class="recipe-item-emoji">${recipe.emoji}</span>
      <div class="recipe-item-info">
        <h4>${recipe.name}</h4>
        <p>${recipe.tagline}</p>
      </div>
    `;
    item.addEventListener("click", () => {
      selectRecipe(recipe.id);
      document.querySelectorAll(".recipe-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
    });
    recipeListEl.appendChild(item);
  });
}

// Select and load a recipe
function selectRecipe(id) {
  activeRecipeId = id;
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;

  // Set visual theme
  document.documentElement.style.setProperty("--active-theme", recipe.bgColor);
  document.documentElement.style.setProperty("--active-theme-color", recipe.themeColor);

  // Update header content
  recipeTitleEl.innerText = recipe.name;
  recipeTaglineEl.innerText = recipe.tagline;
  categoryBadgeEl.innerText = recipe.categoryLabel;
  categoryBadgeEl.className = `badge badge-${recipe.category}`;

  // Reset cup filter
  setLayerFilter("all");

  // Render recipe steps & image
  renderRecipeContent();
  renderProductPhoto();
}

// Set layer filtering (when clicking on visual cup or filter pills)
function setLayerFilter(layer) {
  activeLayerFilter = layer;
  
  // Update UI indicators on the virtual cup
  cupVisualEl.className = `cup-visual active-${layer}`;
  
  document.querySelectorAll(".cup-section").forEach(section => {
    if (layer === "all" || section.dataset.layer === layer) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Update visual buttons or pills
  document.querySelectorAll(".layer-pill").forEach(pill => {
    if (pill.dataset.layer === layer) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  // Re-render contents
  renderRecipeContent();
}

// Render the active recipe's ingredients/steps
function renderRecipeContent() {
  const recipe = RECIPES.find(r => r.id === activeRecipeId);
  if (!recipe) return;

  ingredientsContainerEl.innerHTML = "";

  const renderSection = (layerKey, displayName, emoji, accentClass) => {
    if (activeLayerFilter !== "all" && activeLayerFilter !== layerKey) return;

    const layerItems = recipe.layers[layerKey];
    
    const sectionHtml = document.createElement("div");
    sectionHtml.className = `recipe-section section-${accentClass}`;
    
    let itemsListHtml = "";
    layerItems.forEach((item, index) => {
      const uniqueId = `${recipe.id}-${activeSize}-${layerKey}-${index}`;
      const isChecked = checkedIngredients[uniqueId] ? "checked" : "";
      
      // Determine amount string based on size
      let amount = "";
      if (item.amounts) {
        amount = item.amounts[activeSize] || "";
      }

      if (isKitchenMode) {
        itemsListHtml += `
          <div class="ingredient-card checklist-item ${isChecked ? "completed" : ""}" data-id="${uniqueId}">
            <div class="checkbox-wrapper">
              <input type="checkbox" id="${uniqueId}" ${isChecked} onchange="toggleIngredientCheck('${uniqueId}')">
              <label for="${uniqueId}"></label>
            </div>
            <div class="ingredient-info">
              <div class="ingredient-name">${item.name}</div>
              <div class="ingredient-amount">${amount}</div>
              <div class="ingredient-instruction">${item.instruction}</div>
            </div>
          </div>
        `;
      } else {
        itemsListHtml += `
          <div class="ingredient-card">
            <div class="ingredient-header">
              <span class="ingredient-bullet"></span>
              <span class="ingredient-name">${item.name}</span>
              <span class="ingredient-amount">${amount}</span>
            </div>
            <div class="ingredient-instruction">${item.instruction}</div>
          </div>
        `;
      }
    });

    sectionHtml.innerHTML = `
      <div class="section-title">
        <span class="section-emoji">${emoji}</span>
        <h3>Capa de ${displayName}</h3>
      </div>
      <div class="ingredients-list">
        ${itemsListHtml}
      </div>
    `;
    
    ingredientsContainerEl.appendChild(sectionHtml);
  };

  // Render layers in building order: Base -> Centro -> Decoración
  renderSection("base", "Base (Hielo y Jarabes)", "🧊", "base");
  renderSection("centro", "Centro (Frutas y Relleno)", "🍍", "centro");
  renderSection("decoracion", "Decoración (Toppings y Cierre)", "🍓", "decoracion");
}

// Render active size product photo
function renderProductPhoto() {
  const recipe = RECIPES.find(r => r.id === activeRecipeId);
  if (!recipe) return;

  const sizeLabelMap = { kids: "10 oz", normal: "12 oz", grande: "16 oz" };
  photoSizeBadgeEl.innerText = sizeLabelMap[activeSize];

  // Retrieve correct size photo link
  let photoUrl = "";
  if (activeSize === "kids") photoUrl = recipe.image_kids;
  else if (activeSize === "normal") photoUrl = recipe.image_normal;
  else if (activeSize === "grande") photoUrl = recipe.image_grande;

  if (photoUrl) {
    photoContainerEl.innerHTML = `<img src="${photoUrl}" alt="${recipe.name} ${sizeLabelMap[activeSize]}" class="photo-img">`;
  } else {
    photoContainerEl.innerHTML = `
      <div class="photo-placeholder">
        <span class="photo-placeholder-icon">📸</span>
        <p>No hay foto registrada para el tamaño <strong>${sizeLabelMap[activeSize]}</strong>.</p>
        <button class="btn btn-secondary" style="font-size: 0.68rem; padding: 0.35rem 0.65rem;" onclick="openRecipeEditor()">Subir Foto</button>
      </div>
    `;
  }
}

// Toggle checklist item in Kitchen Mode
window.toggleIngredientCheck = function(id) {
  checkedIngredients[id] = !checkedIngredients[id];
  const card = document.querySelector(`.ingredient-card[data-id="${id}"]`);
  if (card) {
    if (checkedIngredients[id]) {
      card.classList.add("completed");
    } else {
      card.classList.remove("completed");
    }
  }
};

// ==========================================
// RECIPE EDITOR LOGIC (ADMIN PANEL)
// ==========================================

function openRecipeEditor() {
  const recipe = RECIPES.find(r => r.id === activeRecipeId);
  if (!recipe) return;

  // Clone recipe into editor state to avoid editing the live object directly until they press Save
  editingRecipe = JSON.parse(JSON.stringify(recipe));
  
  editorRecipeNameEl.innerText = editingRecipe.name;
  editTaglineEl.value = editingRecipe.tagline;
  editEmojiEl.value = editingRecipe.emoji;
  editCategoryEl.value = editingRecipe.category;
  
  // Set default active editor layer tab
  activeEditorLayer = "base";
  document.querySelectorAll(".layer-editor-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.layer === "base");
  });

  // Render file previews
  renderPhotoUploadPreviews();
  
  // Render ingredient rows
  renderEditorIngredients();

  recipeEditorModalEl.classList.add("open");
}

function closeRecipeEditor() {
  recipeEditorModalEl.classList.remove("open");
  editingRecipe = null;
}

// Render image upload cards inside the modal editor
function renderPhotoUploadPreviews() {
  if (!editingRecipe) return;

  const sizes = ["kids", "normal", "grande"];
  sizes.forEach(size => {
    const previewEl = document.getElementById(`preview-upload-${size}`);
    const key = `image_${size}`;
    const url = editingRecipe[key];

    if (url) {
      previewEl.innerHTML = `<img src="${url}" alt="Preview ${size}">`;
    } else {
      previewEl.innerHTML = `<span>Sin imagen</span>`;
    }
    
    // Reset progress bar
    document.getElementById(`progress-${size}`).style.width = "0%";
    document.getElementById(`progress-${size}`).parentElement.style.display = "none";
  });
}

// Handle Select Image file, encode as base64, post upload to Drive
window.handleImageFileSelect = async function(event, size) {
  if (!editingRecipe) return;
  
  const file = event.target.files[0];
  if (!file) return;

  // Verify connection
  if (!apiWebUrl) {
    alert("¡Atención! Para subir fotos en alta calidad debes tener configurada la URL de la base de datos de Google Sheets (en el panel de base de datos superior).");
    event.target.value = "";
    return;
  }

  // Display progress bar
  const progressBar = document.getElementById(`progress-${size}`);
  progressBar.parentElement.style.display = "block";
  progressBar.style.width = "20%";

  try {
    // 1. Read file as Base64 in JavaScript
    const reader = new FileReader();
    reader.onload = async function() {
      progressBar.style.width = "40%";
      const base64String = reader.result.split(",")[1]; // Extract base64 without prefix data:*/*;base64,
      
      progressBar.style.width = "60%";
      
      // 2. Upload to Google Drive via Apps Script Web App
      const response = await fetch(apiWebUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // To prevent preflight CORS problems on simple POSTs
        body: JSON.stringify({
          action: "uploadPhoto",
          base64Data: base64String,
          mimeType: file.type,
          fileName: `${editingRecipe.id}_${size}_${Date.now()}.${file.name.split(".").pop()}`,
          recipeId: editingRecipe.id,
          size: size
        })
      });

      progressBar.style.width = "80%";
      
      // Since Google Apps Script Web App redirection is sometimes transparent under no-cors,
      // here we are running with CORS handled by the Apps Script headers. Let's process JSON:
      const result = await response.json();
      
      if (result.status === "success" && result.url) {
        progressBar.style.width = "100%";
        
        // Update local editor object
        editingRecipe[`image_${size}`] = result.url;
        
        // Update recipe preview in modal
        renderPhotoUploadPreviews();
        
        // Success feedback
        setTimeout(() => {
          progressBar.parentElement.style.display = "none";
        }, 1000);
      } else {
        throw new Error(result.message || "Failed photo uploading response");
      }
    };
    reader.onerror = () => { throw new Error("File reading failed"); };
    reader.readAsDataURL(file);

  } catch (err) {
    console.error("Photo upload failed:", err);
    progressBar.style.width = "0%";
    progressBar.parentElement.style.display = "none";
    alert("La subida de la imagen falló: " + err.toString() + "\nPor favor, verifica que la URL de tu Google Apps Script esté correctamente desplegada como Web App con acceso a 'Cualquiera'.");
  }
};

// Render ingredient rows inside modal editor form based on selected layer
function renderEditorIngredients() {
  if (!editingRecipe) return;

  editorIngredientsListEl.innerHTML = "";
  const ingredients = editingRecipe.layers[activeEditorLayer] || [];

  if (ingredients.length === 0) {
    editorIngredientsListEl.innerHTML = `<div class="no-results" style="padding:1rem;">No hay ingredientes en esta capa.</div>`;
    return;
  }

  ingredients.forEach((ing, index) => {
    const row = document.createElement("div");
    row.className = "editor-row";
    row.innerHTML = `
      <!-- Left Column: Name & Instruction -->
      <div class="editor-col-left">
        <div class="form-group" style="margin-bottom:0.5rem;">
          <input type="text" class="form-control edit-ing-name" placeholder="Nombre del Ingrediente" value="${ing.name}" required>
        </div>
        <div class="form-group" style="margin-bottom:0;">
          <input type="text" class="form-control edit-ing-instruction" placeholder="Instrucción de Ensamble" value="${ing.instruction || ""}">
        </div>
      </div>
      
      <!-- Right Column: Portions for the 3 cup sizes -->
      <div class="editor-col-right">
        <div class="editor-size-amounts">
          <div class="editor-size-input-group">
            <span>Kids (10oz)</span>
            <input type="text" class="form-control edit-ing-amount-kids" placeholder="Cant." value="${ing.amounts ? (ing.amounts.kids || "") : ""}">
          </div>
          <div class="editor-size-input-group">
            <span>Norm (12oz)</span>
            <input type="text" class="form-control edit-ing-amount-normal" placeholder="Cant." value="${ing.amounts ? (ing.amounts.normal || "") : ""}">
          </div>
          <div class="editor-size-input-group">
            <span>Gran (16oz)</span>
            <input type="text" class="form-control edit-ing-amount-grande" placeholder="Cant." value="${ing.amounts ? (ing.amounts.grande || "") : ""}">
          </div>
        </div>
      </div>
      
      <!-- Action: Delete row -->
      <button type="button" class="btn-delete-row" onclick="deleteEditorIngredientRow(${index})">🗑️</button>
    `;
    editorIngredientsListEl.appendChild(row);
  });
}

// Delete an ingredient row in the editor
window.deleteEditorIngredientRow = function(index) {
  if (!editingRecipe) return;
  editingRecipe.layers[activeEditorLayer].splice(index, 1);
  renderEditorIngredients();
};

// Gather edited form values and save
async function saveEditedRecipe() {
  if (!editingRecipe) return;

  // 1. Gather recipe metadata
  editingRecipe.tagline = editTaglineEl.value.trim();
  editingRecipe.emoji = editEmojiEl.value.trim();
  editingRecipe.category = editCategoryEl.value;
  
  // Category Label
  const categoryLabels = {
    clasico: "Clásico",
    frutal: "Frutal",
    citrico: "Cítrico",
    refrescante: "Refrescante",
    dulce: "Dulce / Especial",
    fit: "Saludable / Fit"
  };
  editingRecipe.categoryLabel = categoryLabels[editingRecipe.category] || "Otros";

  // 2. Gather ingredient row values from active editor layer (other layers are already in editingRecipe state)
  const rows = editorIngredientsListEl.querySelectorAll(".editor-row");
  const updatedIngredients = [];
  
  let hasValidationError = false;

  rows.forEach((row, index) => {
    const name = row.querySelector(".edit-ing-name").value.trim();
    const instruction = row.querySelector(".edit-ing-instruction").value.trim();
    const kidsAmt = row.querySelector(".edit-ing-amount-kids").value.trim();
    const normAmt = row.querySelector(".edit-ing-amount-normal").value.trim();
    const granAmt = row.querySelector(".edit-ing-amount-grande").value.trim();

    if (!name) {
      alert("Por favor escribe el nombre para todos los ingredientes.");
      hasValidationError = true;
      return;
    }

    updatedIngredients.push({
      name: name,
      amounts: {
        kids: kidsAmt,
        normal: normAmt,
        grande: granAmt
      },
      instruction: instruction
    });
  });

  if (hasValidationError) return;

  // Save current active layer rows to the recipe object
  editingRecipe.layers[activeEditorLayer] = updatedIngredients;

  // 3. Find index of recipe in original RECIPES array and replace it
  const idx = RECIPES.findIndex(r => r.id === editingRecipe.id);
  if (idx !== -1) {
    RECIPES[idx] = editingRecipe;
    
    saveRecipeBtnEl.innerText = "Guardando...";
    saveRecipeBtnEl.disabled = true;

    // 4. Save to Cloud / local storage
    const success = await saveRecipeData();

    saveRecipeBtnEl.innerText = "Guardar Receta";
    saveRecipeBtnEl.disabled = false;

    if (success) {
      closeRecipeEditor();
      // Reload lists and updates
      renderSidebar();
      selectRecipe(activeRecipeId);
    }
  }
}


// ==========================================
// PRINTING SYSTEM
// ==========================================

// Prepare print area for just one recipe (with columns for Kids, Normal, Grande side-by-side)
function preparePrintSingle(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  const renderPrintRows = (layerKey) => {
    const items = recipe.layers[layerKey] || [];
    return items.map(item => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td style="text-align:center;">${item.amounts.kids || "-"}</td>
        <td style="text-align:center;">${item.amounts.normal || "-"}</td>
        <td style="text-align:center;">${item.amounts.grande || "-"}</td>
        <td>${item.instruction || ""}</td>
      </tr>
    `).join("");
  };

  const html = `
    <div class="print-page">
      <div class="print-header">
        <h1>FICHA TÉCNICA DE PREPARACIÓN</h1>
        <h2>${recipe.name.toUpperCase()}</h2>
        <p class="print-tagline">"${recipe.tagline}"</p>
      </div>

      <div class="print-recipe-body">
        <h3>1. CAPA BASE</h3>
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 25%">Ingrediente</th>
              <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
              <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
              <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
              <th style="width: 30%">Instrucción de Ensamble</th>
            </tr>
          </thead>
          <tbody>
            ${renderPrintRows("base")}
          </tbody>
        </table>

        <h3>2. CAPA DEL CENTRO</h3>
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 25%">Ingrediente</th>
              <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
              <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
              <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
              <th style="width: 30%">Instrucción de Ensamble</th>
            </tr>
          </thead>
          <tbody>
            ${renderPrintRows("centro")}
          </tbody>
        </table>

        <h3>3. CAPA DE DECORACIÓN (Superficie)</h3>
        <table class="print-table">
          <thead>
            <tr>
              <th style="width: 25%">Ingrediente</th>
              <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
              <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
              <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
              <th style="width: 30%">Instrucción de Ensamble</th>
            </tr>
          </thead>
          <tbody>
            ${renderPrintRows("decoracion")}
          </tbody>
        </table>
      </div>
      
      <div class="print-notes">
        <p><strong>Reglas Especiales de Preparación:</strong></p>
        <ul>
          <li><strong>Jarabes base:</strong> 1 vuelta en Kids, 2 vueltas en Normal, y 3 vueltas en Grande.</li>
          <li><strong>Maracuyá:</strong> Agregar la cucharada al borde del vaso (no al centro) después de la gelatina para lograr un acabado visualmente atractivo.</li>
          <li><strong>Banana (Centro):</strong> Llenar en rodajas hasta casi el borde (1 dedo antes del tope) para sostener firmemente la crema chantilly.</li>
          <li><strong>Decoración "Mitad":</strong> Cuando se indica mitad arriba, colocar un ingrediente a un lado superior y el otro al lado opuesto del vaso.</li>
        </ul>
        <p style="margin-top: 10px; font-size: 7.5pt; color: #666;">Documento interno de uso exclusivo para El Cholao Oficial - Generado el ${new Date().toLocaleDateString()}.</p>
      </div>
    </div>
  `;

  printAreaEl.innerHTML = html;
}

// Prepare print area for all 7 recipes (creates 7 pages for printing a booklet)
function preparePrintAll() {
  let html = `<h1 class="print-booklet-title">RECETARIO COMPLETO DE PREPARACIÓN DE CHOLAOS</h1>`;
  
  RECIPES.forEach((recipe, idx) => {
    const renderPrintRows = (layerKey) => {
      const items = recipe.layers[layerKey] || [];
      return items.map(item => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td style="text-align:center;">${item.amounts.kids || "-"}</td>
          <td style="text-align:center;">${item.amounts.normal || "-"}</td>
          <td style="text-align:center;">${item.amounts.grande || "-"}</td>
          <td>${item.instruction || ""}</td>
        </tr>
      `).join("");
    };

    html += `
      <div class="print-page ${idx > 0 ? "page-break" : ""}">
        <div class="print-header">
          <h1>FICHA TÉCNICA DE PREPARACIÓN</h1>
          <h2>${recipe.name.toUpperCase()}</h2>
          <p class="print-tagline">"${recipe.tagline}"</p>
        </div>

        <div class="print-recipe-body">
          <h3>1. CAPA BASE</h3>
          <table class="print-table">
            <thead>
              <tr>
                <th style="width: 25%">Ingrediente</th>
                <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
                <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
                <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
                <th style="width: 30%">Instrucción de Ensamble</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintRows("base")}
            </tbody>
          </table>

          <h3>2. CAPA DEL CENTRO</h3>
          <table class="print-table">
            <thead>
              <tr>
                <th style="width: 25%">Ingrediente</th>
                <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
                <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
                <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
                <th style="width: 30%">Instrucción de Ensamble</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintRows("centro")}
            </tbody>
          </table>

          <h3>3. CAPA DE DECORACIÓN (Superficie)</h3>
          <table class="print-table">
            <thead>
              <tr>
                <th style="width: 25%">Ingrediente</th>
                <th style="width: 15%; text-align:center;">Kids (10 oz)</th>
                <th style="width: 15%; text-align:center;">Normal (12 oz)</th>
                <th style="width: 15%; text-align:center;">Grande (16 oz)</th>
                <th style="width: 30%">Instrucción de Ensamble</th>
              </tr>
            </thead>
            <tbody>
              ${renderPrintRows("decoracion")}
            </tbody>
          </table>
        </div>
        
        <div class="print-notes">
          <p><strong>Nota:</strong> Respeta las vueltas de jarabe (1 en Kids, 2 en Normal, 3 en Grande) y la colocación de la banana a 1 dedo del tope.</p>
          <p style="margin-top: 10px; font-size: 7.5pt; color: #666;">Página ${idx + 1} de ${RECIPES.length} - El Cholao Oficial.</p>
        </div>
      </div>
    `;
  });

  printAreaEl.innerHTML = html;
}

// Start the app when content loads
document.addEventListener("DOMContentLoaded", init);
