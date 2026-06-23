/**
 * GOOGLE APPS SCRIPT - CONECTOR DE BASE DE DATOS Y GOOGLE DRIVE PARA EL RECETARIO DE CHOLAOS
 * 
 * 1. Crea un nuevo libro de Google Sheets o abre uno existente.
 * 2. Ve a Extenciones > Apps Script.
 * 3. Borra el código existente y pega este archivo completo.
 * 4. Guarda el proyecto.
 * 5. Haz clic en "Implementar" (Deploy) > "Nueva implementación" (New deployment).
 * 6. Selecciona "Aplicación web" (Web app).
 * 7. Configura:
 *    - Ejecutar como: Tú (tu cuenta de correo).
 *    - Quién tiene acceso: "Cualquiera" (Anyone). -> IMPORTANTE para permitir que el recetario se conecte.
 * 8. Haz clic en Implementar y copia la "URL de la aplicación web".
 * 9. Pega esa URL en el panel de Ajustes de tu recetario para sincronizar todo.
 */

// Función de inicialización para crear y rellenar las hojas de cálculo
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Crear Hoja de Recetas si no existe
  let recetasSheet = ss.getSheetByName("Recetas");
  if (!recetasSheet) {
    recetasSheet = ss.insertSheet("Recetas");
  }
  
  // 2. Crear Hoja de Ingredientes si no existe
  let ingredientesSheet = ss.getSheetByName("Ingredientes");
  if (!ingredientesSheet) {
    ingredientesSheet = ss.insertSheet("Ingredientes");
  }
  
  // Rellenar Recetas si está vacía
  if (recetasSheet.getLastRow() === 0) {
    recetasSheet.appendRow([
      "id", "name", "tagline", "category", "categoryLabel", 
      "bgColor", "themeColor", "emoji", 
      "image_kids", "image_normal", "image_grande", "presentations",
      "vessel", "utensils"
    ]);
    
    const defaultRecipes = [
      ["original", "Cholao Original", "El clásico de clásicos con abundante Milo y fresa", "clasico", "Clásico", "linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)", "#ff4757", "🍓", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["mkr", "Cholao Mkr", "El toque especial de naranja, galleta Tentación y fudge de chocolate", "dulce", "Dulce / Especial", "linear-gradient(135deg, #eccc68 0%, #ff7f50 100%)", "#ff7f50", "🍪", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["tropical", "Cholao Tropical", "Explosión de jarabe de mango con doble jarabe de fresa", "frutal", "Frutal", "linear-gradient(135deg, #ffa502 0%, #ff6348 100%)", "#ffa502", "🥭", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["fit", "Cholao Fit", "El saludable con miel de abejas, yogurt y frutas exóticas", "fit", "Saludable / Fit", "linear-gradient(135deg, #2ed573 0%, #1e90ff 100%)", "#2ed573", "🥝", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["selvatico", "Cholao Selvático", "El sabor del Amazonas con aguaymanto, sandía y miel", "frutal", "Frutal", "linear-gradient(135deg, #ffa502 0%, #2ed573 100%)", "#ffa502", "🌴", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["menta-fresh", "Cholao Menta Fresh", "Súper refrescante con jarabe de menta y doble capa cítrica", "refrescante", "Refrescante", "linear-gradient(135deg, #10ac84 0%, #2ed573 100%)", "#10ac84", "🍃", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""],
      ["citrus", "Cholao Citrus", "El rey de los sabores cítricos con maracuyá, mandarina y kiwi", "citrico", "Cítrico", "linear-gradient(135deg, #ffa502 0%, #ff7f50 100%)", "#ff7f50", "🍊", "", "", "", "Kids (10 oz), Normal (12 oz), Grande (16 oz)", "vaso", ""]
    ];
    
    defaultRecipes.forEach(row => recetasSheet.appendRow(row));
  }

  // Rellenar Ingredientes si está vacía
  if (ingredientesSheet.getLastRow() === 0) {
    ingredientesSheet.appendRow([
      "recipeId", "layer", "name", 
      "amount_kids", "amount_normal", "amount_grande", 
      "instruction"
    ]);
    
    const defaultIngredients = [
      // CHOLAO ORIGINAL
      ["original", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["original", "base", "Jarabe de Fresa", "1 vuelta", "2 vueltas", "3 vueltas", "Bañar el hielo con jarabe de fresa concentrado usando botella con pico."],
      ["original", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido especial de gelatina."],
      
      ["original", "centro", "Maracuyá", "1 cucharada", "1.5 cucharadas", "2 cucharadas", "Agregar al borde del vaso (no en el centro) justo después de la gelatina para que visualmente sea atractivo."],
      ["original", "centro", "Piña picada", "3/4 cucharada + 3/4 jugo", "1 cucharada + 1 jugo", "1.5 cucharadas + 1.5 jugo", "Colocar la piña picada con la cantidad de jugo indicada."],
      ["original", "centro", "Banana picada", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Picar banana en rodajas y llenar el vaso hasta casi el borde (1 dedo antes del tope)."],
      ["original", "centro", "Crema Chantilly", "Capa intermedia", "Capa intermedia", "Capa intermedia", "Hacer una cama o espiral de crema chantilly sobre la banana."],
      
      ["original", "decoracion", "Manzana", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Colocar manzana en rodajas en un lado de la superficie superior."],
      ["original", "decoracion", "Piña", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Colocar rodajas de piña al lado contrario de la manzana."],
      ["original", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Hacer hilos abundantes de leche condensada por encima."],
      ["original", "decoracion", "Milo en polvo", "Espolvoreado suave", "Espolvoreado abundante", "Espolvoreado abundante", "Espolvorear abundantemente con Milo en polvo."],
      ["original", "decoracion", "Fresa en tiras", "2 tiras de fresa", "3 tiras de fresa", "4 tiras de fresa", "Coronar con tiras de fresas frescas (2 para kids, 3 para normal, 4 para grande)."],

      // CHOLAO MKR
      ["mkr", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["mkr", "base", "Jarabe de Naranja", "1 vuelta", "2 vueltas", "3 vueltas", "Bañar el hielo con jarabe de naranja dulce usando botella con pico."],
      ["mkr", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido de gelatina."],
      
      ["mkr", "centro", "Banana picada", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Picar banana en rodajas y llenar el vaso hasta 1 dedo antes del tope."],
      ["mkr", "centro", "Pera picada", "1/2 cucharada", "1 cucharada", "1.5 cucharadas", "Agregar pera picada fina para aportar frescura."],
      ["mkr", "centro", "Crema Chantilly", "Capa intermedia", "Capa intermedia", "Capa intermedia", "Hacer una cama o espiral con la crema chantilly para sostener la decoración."],
      
      ["mkr", "decoracion", "Mango", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Colocar mango picado en rodajas delgadas a un lado de la superficie."],
      ["mkr", "decoracion", "Polvo de Galleta Tentación", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Espolvorear galleta Tentación triturada en polvo al lado opuesto del mango."],
      ["mkr", "decoracion", "Uva verde", "1 unidad", "1 unidad", "1 unidad", "Coronar con una uva verde fresca en el centro."],
      ["mkr", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Bañar la copa con hilos de leche condensada."],
      ["mkr", "decoracion", "Fudge de Chocolate", "En zigzag", "En zigzag", "En zigzag", "Hacer líneas decorativas en zigzag con fudge de chocolate."],

      // CHOLAO TROPICAL
      ["tropical", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["tropical", "base", "Jarabe de Mango", "1 vuelta", "2 vueltas", "3 vueltas", "Bañar el hielo con jarabe de mango concentrado usando botella con pico."],
      ["tropical", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido especial de gelatina."],
      
      ["tropical", "centro", "Papaya", "1 cucharada", "2 cucharadas", "3 cucharadas", "Añadir una capa de papaya madura bien picadita."],
      ["tropical", "centro", "Sandía", "1 cucharada", "2 cucharadas", "3 cucharadas", "Agregar sandía fresca picada para darle hidratación."],
      ["tropical", "centro", "Capa de Hielo adicional", "Capita fina", "Capita fina", "Capita delgada", "Colocar una capa muy delgada de hielo picado encima de las frutas."],
      ["tropical", "centro", "Jarabe de Fresa", "1/2 vuelta", "1 vuelta", "1.5 vueltas", "Bañar la capa intermedia de hielo con jarabe de fresa."],
      
      ["tropical", "decoracion", "Piña", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Colocar piña cubriendo la mitad superior de un lado."],
      ["tropical", "decoracion", "Mango", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Colocar mango en rodajas finas al lado contrario de la piña."],
      ["tropical", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Decorar con hilos abundantes de leche condensada."],
      ["tropical", "decoracion", "Fudge de Chocolate", "En zigzag", "En zigzag", "En zigzag", "Hacer líneas decorativas en zigzag con fudge de chocolate."],

      // CHOLAO FIT
      ["fit", "base", "Hielo picado", "Poco menos de la mitad", "Un poco menos de la mitad", "Un poco menos de la mitad", "Llenar con hielo triturado un poco por debajo de la mitad del vaso."],
      ["fit", "base", "Miel de Abejas", "Directo al hielo", "Directo al hielo", "Directo al hielo", "Verter miel de abejas pura directo sobre el hielo para que se endurezca al enfriarse."],
      ["fit", "base", "Yogurt Líquido de Fresa", "Bañado base", "Bañado base", "Bañado base", "Bañar el hielo con yogurt líquido sabor a fresa."],
      
      ["fit", "centro", "Papaya", "1 cucharada", "2 cucharadas", "3 cucharadas", "Agregar papaya picada."],
      ["fit", "centro", "Sandía", "1 cucharada", "2 cucharadas", "3 cucharadas", "Agregar sandía fresca picada."],
      ["fit", "centro", "Capa de Granola", "Capita fina", "Capa intermedia", "Capa generosa", "Poner granola crujiente para textura intermedia."],
      
      ["fit", "decoracion", "Mango", "Decoración", "Decoración", "Decoración abundante", "Colocar mango picado en la superficie superior."],
      ["fit", "decoracion", "Granola (Decoración)", "Espolvoreada", "Espolvoreada", "Espolvoreada", "Espolvorear granola crujiente sobre las frutas."],
      ["fit", "decoracion", "Tuna Rosada", "1 tira fina", "1 tira fina", "1 tira fina", "Colocar una tira de tuna rosada (fruta de nopal dulce) arriba."],
      ["fit", "decoracion", "Kiwi", "1 tira fina", "1 tira fina", "1 tira fina", "Colocar una tira o rodaja de kiwi verde fresco."],
      ["fit", "decoracion", "Arándano", "1 unidad", "1 unidad", "1 unidad", "Poner un arándano entero como toque decorativo."],
      ["fit", "decoracion", "Uva verde", "1 unidad", "1 unidad", "1 unidad", "Añadir una uva verde entera."],
      ["fit", "decoracion", "Miel de Abejas", "Hilo fino", "Hilo fino", "Hilo de cierre", "Coronar con un hilo fino de miel de abejas sobre toda la copa."],

      // CHOLAO SELVATICO
      ["selvatico", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["selvatico", "base", "Jarabe de Naranja", "1 vuelta", "2 vueltas", "3 vueltas", "Verter jarabe dulce de naranja sobre el hielo usando botella con pico."],
      ["selvatico", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido especial de gelatina."],
      
      ["selvatico", "centro", "Banana", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Hasta 1 dedo antes del tope", "Picar banana en rodajas y llenar el vaso hasta 1 dedo antes del tope."],
      ["selvatico", "centro", "Sandía", "1 cucharada", "2 cucharadas", "3 cucharadas", "Agregar sandía fresca picada para frescura."],
      ["selvatico", "centro", "Aguaymanto", "1 o 2 enteros", "2 o 3 enteros", "3 o 4 enteros", "Colocar aguaymantos enteros en la parte media."],
      
      ["selvatico", "decoracion", "Aguaymanto (Decoración)", "1 entero", "1 entero", "1 entero", "Poner un aguaymanto fresco entero en la parte superior."],
      ["selvatico", "decoracion", "Uva verde", "1 unidad", "1 unidad", "1 unidad", "Añadir una uva verde para complementar el color."],
      ["selvatico", "decoracion", "Banana en tiras largas", "1 tira larga", "2 tiras largas", "3 tiras largas", "Decorar con banana cortada en tiras largas que sobresalgan del vaso."],
      ["selvatico", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Agregar hilos abundantes de leche condensada."],
      ["selvatico", "decoracion", "Miel de Abejas", "Hilo fino", "Hilo fino", "Hilo de cierre", "Terminar con un chorrito fino de miel de abejas por encima."],

      // CHOLAO MENTA FRESH
      ["menta-fresh", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["menta-fresh", "base", "Jarabe de Menta", "1 vuelta", "2 vueltas", "3 vueltas", "Bañar el hielo generosamente con jarabe de menta usando botella con pico."],
      ["menta-fresh", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido de gelatina."],
      
      ["menta-fresh", "centro", "Piña", "1 cucharada", "2 cucharadas", "3 cucharadas", "Añadir piña picada fresca."],
      ["menta-fresh", "centro", "Sandía", "1 cucharada", "2 cucharadas", "3 cucharadas", "Colocar una capa de sandía bien jugosa."],
      ["menta-fresh", "centro", "Capa de Hielo adicional", "Capita fina", "Capita fina", "Capita delgada", "Poner una capa delgada de hielo picado sobre las frutas."],
      ["menta-fresh", "centro", "Jarabe de Naranja", "1/2 vuelta", "1 vuelta", "1.5 vueltas", "Bañar el hielo intermedio con jarabe de naranja."],
      
      ["menta-fresh", "decoracion", "Piña", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Decorar con piña cubriendo un lado de la parte superior."],
      ["menta-fresh", "decoracion", "Mango", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Colocar mango en rodajas finas al lado opuesto."],
      ["menta-fresh", "decoracion", "Fresa fresca", "1 rodaja", "1 rodaja grande", "1 rodaja grande", "Poner fresa en la decoración superior."],
      ["menta-fresh", "decoracion", "Kiwi fresco", "1 rodaja", "1 rodaja grande", "1 rodaja grande", "Agregar una rodaja de kiwi verde."],
      ["menta-fresh", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Finalizar bañando la copa con abundante leche condensada."],

      // CHOLAO CITRUS
      ["citrus", "base", "Hielo picado", "Poco menos de la mitad", "Un poco más de la mitad", "Un poco más de la mitad", "Llenar el vaso con hielo triturado fino según el tamaño."],
      ["citrus", "base", "Jarabe de Maracuyá", "1 vuelta", "2 vueltas", "3 vueltas", "Bañar el hielo con jarabe de maracuyá usando botella con pico."],
      ["citrus", "base", "Jarabe de Gelatina", "2 segundos", "2 a 3 segundos", "3 segundos", "Verter el concentrado líquido de gelatina."],
      
      ["citrus", "centro", "Maracuyá", "1 cucharada", "1.5 cucharadas", "2 cucharadas", "Añadir pulpa fresca de maracuyá al borde del vaso (después de la gelatina)."],
      ["citrus", "centro", "Piña", "1 cucharada", "2 cucharadas", "3 cucharadas", "Agregar piña dulce picadita."],
      ["citrus", "centro", "Manzana verde", "1 cucharada", "2 cucharadas", "3 cucharadas", "Añadir manzana verde bien ácida picada en cubos pequeños."],
      
      ["citrus", "decoracion", "Mandarina", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Mitad arriba (Un lado)", "Colocar gajos de mandarina pelados a un lado de la superficie."],
      ["citrus", "decoracion", "Uva verde", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Mitad arriba (Lado opuesto)", "Colocar uvas verdes frescas al lado opuesto de la mandarina."],
      ["citrus", "decoracion", "Fresa fresca", "1 rodaja", "1 rodaja grande", "1 rodaja grande", "Añadir fresa picada."],
      ["citrus", "decoracion", "Kiwi", "1 rodaja", "1 rodaja grande", "1 rodaja grande", "Agregar una rodaja de kiwi."],
      ["citrus", "decoracion", "Pepitas de Maracuyá", "Esparcidas", "Esparcidas", "Esparcidas", "Esparcir semillas de maracuyá frescas encima de las frutas."],
      ["citrus", "decoracion", "Leche Condensada", "Bañado moderado", "Bañado abundante", "Bañado abundante", "Hacer hilos de leche condensada para equilibrar la acidez."]
    ];
    
    defaultIngredients.forEach(row => ingredientesSheet.appendRow(row));
  }

  // 3. Crear Hoja de Utensilios si no existe
  let utensilsSheet = ss.getSheetByName("Utensilios");
  if (!utensilsSheet) {
    utensilsSheet = ss.insertSheet("Utensilios");
  }
  
  // Rellenar Utensilios si está vacía
  if (utensilsSheet.getLastRow() === 0) {
    utensilsSheet.appendRow(["id", "name", "type"]);
    const defaultUtensils = [
      // Máquinas
      ["u1", "Licuadora", "maquina"],
      ["u2", "Raspadillera", "maquina"],
      ["u3", "Cocina", "maquina"],
      ["u4", "Tostadora", "maquina"],
      ["u5", "Sanduchera", "maquina"],
      // Utensilios
      ["u6", "Espátula de plástico", "utensilio"],
      ["u7", "Cuchara de metal", "utensilio"],
      ["u8", "Tabla de picar", "utensilio"],
      ["u9", "Cuchillo de hielo", "utensilio"],
      ["u10", "Bandeja de hielo", "utensilio"],
      ["u11", "Cuchillo de frutas", "utensilio"],
      ["u12", "Cuchara grande de frutas", "utensilio"],
      ["u13", "Exprimidor de limón", "utensilio"],
      ["u14", "Bowl para mezcla", "utensilio"]
    ];
    defaultUtensils.forEach(row => utensilsSheet.appendRow(row));
  }
}

// Configurar cabeceras de CORS para permitir solicitudes del recetario
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// GET Endpoint
function doGet(e) {
  setupDatabase(); // Asegura que las hojas estén creadas
  
  const action = e.parameter.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (action === "getRecipes") {
    try {
      const recetasSheet = ss.getSheetByName("Recetas");
      const ingredientesSheet = ss.getSheetByName("Ingredientes");
      
      const recetasData = recetasSheet.getDataRange().getValues();
      const ingredientesData = ingredientesSheet.getDataRange().getValues();
      
      // Parsear recetas
      const [recetasHeaders, ...recetasRows] = recetasData;
      const recipes = recetasRows.map(row => {
        const recipe = {};
        recetasHeaders.forEach((header, idx) => {
          recipe[header] = row[idx];
        });
        recipe.layers = { base: [], centro: [], decoracion: [] };
        return recipe;
      });
      
      // Parsear ingredientes y mapear a recetas
      const [ingHeaders, ...ingRows] = ingredientesData;
      ingRows.forEach(row => {
        const recipeId = row[0];
        const layer = row[1];
        const name = row[2];
        const amount_kids = row[3];
        const amount_normal = row[4];
        const amount_grande = row[5];
        const instruction = row[6];
        
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe && recipe.layers[layer]) {
          recipe.layers[layer].push({
            name: name,
            amounts: {
              kids: amount_kids,
              normal: amount_normal,
              grande: amount_grande
            },
            instruction: instruction
          });
        }
      });
      
      // Parsear utensilios
      const utensilsSheet = ss.getSheetByName("Utensilios") || ss.insertSheet("Utensilios");
      const utensilsData = utensilsSheet.getDataRange().getValues();
      let utensils = [];
      if (utensilsData.length > 1) {
        const [utHeaders, ...utRows] = utensilsData;
        utensils = utRows.map(row => ({
          id: row[0],
          name: row[1],
          type: row[2] || "utensilio"
        }));
      }
      
      return createJsonResponse({ status: "success", data: recipes, utensils: utensils });
    } catch (err) {
      return createJsonResponse({ status: "error", message: err.toString() });
    }
  }
  
  return createJsonResponse({ status: "error", message: "Acción no permitida" });
}

// POST Endpoint
function doPost(e) {
  setupDatabase();
  
  let postData;
  try {
    postData = JSON.parse(e.postData.contents);
  } catch (err) {
    return createJsonResponse({ status: "error", message: "Formato JSON inválido" });
  }
  
  const action = postData.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Guardar todas las recetas (reemplazo completo para consistencia)
  if (action === "saveAllRecipes") {
    try {
      const recipes = postData.recipes;
      if (!recipes || !Array.isArray(recipes)) {
        return createJsonResponse({ status: "error", message: "Formato de recetas incorrecto" });
      }
      
      const recetasSheet = ss.getSheetByName("Recetas");
      const ingredientesSheet = ss.getSheetByName("Ingredientes");
      
      // Limpiar y reescribir recetas
      recetasSheet.clear();
      recetasSheet.appendRow([
        "id", "name", "tagline", "category", "categoryLabel", 
        "bgColor", "themeColor", "emoji", 
        "image_kids", "image_normal", "image_grande", "presentations",
        "vessel", "utensils"
      ]);
      
      recipes.forEach(r => {
        recetasSheet.appendRow([
          r.id, r.name, r.tagline, r.category, r.categoryLabel,
          r.bgColor, r.themeColor, r.emoji,
          r.image_kids || "", r.image_normal || "", r.image_grande || "",
          r.presentations || "", r.vessel || "vaso", r.utensils || ""
        ]);
      });
      
      // Limpiar y reescribir ingredientes
      ingredientesSheet.clear();
      ingredientesSheet.appendRow([
        "recipeId", "layer", "name", 
        "amount_kids", "amount_normal", "amount_grande", 
        "instruction"
      ]);
      
      recipes.forEach(r => {
        ["base", "centro", "decoracion"].forEach(layer => {
          if (r.layers && r.layers[layer]) {
            r.layers[layer].forEach(ing => {
              ingredientesSheet.appendRow([
                r.id,
                layer,
                ing.name,
                ing.amounts.kids || "",
                ing.amounts.normal || "",
                ing.amounts.grande || "",
                ing.instruction || ""
              ]);
            });
          }
        });
      });
      
      return createJsonResponse({ status: "success", message: "Recetas guardadas con éxito en Google Sheets" });
    } catch (err) {
      return createJsonResponse({ status: "error", message: err.toString() });
    }
  }

  // Guardar utensilios
  if (action === "saveUtensils") {
    try {
      const utensils = postData.utensils;
      if (!utensils || !Array.isArray(utensils)) {
        return createJsonResponse({ status: "error", message: "Formato de utensilios incorrecto" });
      }
      
      const utensilsSheet = ss.getSheetByName("Utensilios") || ss.insertSheet("Utensilios");
      utensilsSheet.clear();
      utensilsSheet.appendRow(["id", "name", "type"]);
      
      utensils.forEach(u => {
        utensilsSheet.appendRow([u.id, u.name, u.type || "utensilio"]);
      });
      
      return createJsonResponse({ status: "success", message: "Utensilios guardados con éxito en Google Sheets" });
    } catch (err) {
      return createJsonResponse({ status: "error", message: err.toString() });
    }
  }
  
  // Subir imagen a Google Drive y actualizar la receta en Sheets
  if (action === "uploadPhoto") {
    try {
      const base64Data = postData.base64Data;
      const mimeType = postData.mimeType;
      const fileName = postData.fileName;
      const recipeId = postData.recipeId;
      const size = postData.size; // 'kids', 'normal', 'grande'
      
      if (!base64Data || !mimeType || !fileName || !recipeId || !size) {
        return createJsonResponse({ status: "error", message: "Faltan parámetros requeridos para la imagen" });
      }
      
      // Buscar o crear carpeta "Fotos_Recetario_Cholaos"
      const folderName = "Fotos_Recetario_Cholaos";
      let folder;
      const folders = DriveApp.getFoldersByName(folderName);
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }
      
      // Convertir base64 a Blob
      const bytes = Utilities.base64Decode(base64Data);
      const blob = Utilities.newBlob(bytes, mimeType, fileName);
      
      // Crear archivo en Drive
      const file = folder.createFile(blob);
      
      // Hacer público el archivo (solo lectura por enlace)
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      const imageUrl = file.getUrl();
      const downloadUrl = "https://lh3.googleusercontent.com/d/" + file.getId(); // Formato limpio para visualización web directa
      
      // Actualizar la hoja de cálculo
      const recetasSheet = ss.getSheetByName("Recetas");
      const data = recetasSheet.getDataRange().getValues();
      let rowIdx = -1;
      
      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === recipeId) {
          rowIdx = i + 1; // 1-based index, saltando el header
          break;
        }
      }
      
      if (rowIdx !== -1) {
        let colIdx = 9; // Columna 'image_kids' (I)
        if (size === "normal") colIdx = 10; // 'image_normal' (J)
        if (size === "grande") colIdx = 11; // 'image_grande' (K)
        
        recetasSheet.getRange(rowIdx, colIdx).setValue(downloadUrl);
        return createJsonResponse({ status: "success", url: downloadUrl, message: "Imagen subida e integrada exitosamente" });
      } else {
        // Receta nueva no guardada en Sheets aún. Retornamos la URL exitosa para guardarse en la acción saveAllRecipes posterior.
        return createJsonResponse({ status: "success", url: downloadUrl, message: "Imagen subida a Drive. Se guardará en la receta al pulsar Guardar." });
      }
      
    } catch (err) {
      return createJsonResponse({ status: "error", message: err.toString() });
    }
  }
  
  return createJsonResponse({ status: "error", message: "Acción no válida o no especificada en POST" });
}
