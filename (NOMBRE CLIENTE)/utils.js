/**
 * Función que se ejecuta al abrir el Sheet
 * Crea el menú personalizado
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🚀 Vanguard')
    .addItem('Opción 1', 'funcion1')
    .addItem('Opción 2', 'funcion2')
    .addToUi();
}

/**
 * Ejemplo de función 1
 */
function funcion1() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getActiveSheet();
  
  // Tu lógica aquí
  hoja.getRange('A1').setValue('¡Hola desde Apps Script! ' + new Date());
  
  SpreadsheetApp.getUi().alert('Operación completada');
}

/**
 * Ejemplo de función 2
 */
function funcion2() {
  Logger.log('Ejecutando función 2...');
  
  // Tu lógica aquí
  const datos = obtenerDatos();
  procesarDatos(datos);
}

/**
 * Ejemplo de función auxiliar
 */
function obtenerDatos() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = ss.getActiveSheet();
  return hoja.getRange('A2:C').getValues();
}

/**
 * Ejemplo de procesamiento
 */
function procesarDatos(datos) {
  datos.forEach((fila, index) => {
    Logger.log(`Fila ${index}: ${fila.join(', ')}`);
  });
}