# 🚀 Boilerplate Google Apps Script - Vanguard

Template base para proyectos de Google Sheets con Apps Script y Clasp.

## 📦 Requisitos previos (solo 1 vez en tu máquina)

Antes de usar este boilerplate, asegúrate de tener:

```bash
# 1. Instalar Clasp globalmente
npm install -g @google/clasp

# 2. Autenticarte con tu cuenta de Google
clasp login
```

> ⚠️ **Importante**: `clasp login` solo se hace **1 vez por máquina**. Abre el navegador para que autorices con tu cuenta de Google.

---

## 🏗️ Crear un nuevo proyecto desde este boilerplate

### 1. Obtener el boilerplate (solo 1 vez)

Si eres colaborador del repo:

```powershell
# Clonar el boilerplate desde GitHub (1 vez)
cd D:\Projects\vanguard
git clone https://github.com/vanguard/boilerplate-google-sheet.git
```

### 2. Copiar el boilerplate para un proyecto nuevo

**NUNCA trabajes directamente en `boilerplate-google-sheet/`** — es solo un template.

```powershell
# Estando en D:\Projects\vanguard\

# Copiar el boilerplate (crea una carpeta nueva)
Copy-Item -Recurse boilerplate-google-sheet cliente-voltec

# Entrar al proyecto nuevo
cd cliente-voltec
```

### 3. Instalar dependencias

```bash
npm install
```

Esto instala `@types/google-apps-script` para tener autocomplete en VSCode.

### 4. Crear el proyecto de Google Apps Script

```bash
clasp create --type sheets --title "Nombre del Cliente"
```

Esto:
- ✅ Crea un Google Sheet nuevo en tu Drive
- ✅ Crea el proyecto de Apps Script vinculado
- ✅ Genera el archivo `.clasp.json` con el `scriptId`

### 5. Inicializar git para el proyecto del cliente

**Importante:** Cada proyecto de cliente es un repositorio SEPARADO.

```powershell
# Inicializar git nuevo (desvinculado del boilerplate)
git init
git add .
git commit -m "init: proyecto cliente Voltec"

# Crear repo en GitHub: https://github.com/vanguard/cliente-voltec
# Luego conectar:
git remote add origin https://github.com/vanguard/cliente-voltec.git
git push -u origin main
```

### 6. Escribir código y subirlo

```bash
# Editas tus archivos .js, luego:
npm run push

# O con watch mode (sube automáticamente al guardar):
npm run watch
```

---

## 🔧 Scripts disponibles

```bash
npm run push      # Sube el código a Google Apps Script
npm run pull      # Descarga cambios del editor web
npm run open      # Abre el proyecto en el navegador
npm run logs      # Muestra los logs de ejecución
npm run watch     # Modo watch: sube automáticamente al guardar
npm run deploy    # Push + Deploy de una versión
```

---

## 📁 Estructura del proyecto

```
cliente-nuevo/
├── .clasp.json           ← Generado por clasp create (contiene scriptId)
├── appsscript.json       ← Configuración del proyecto
├── package.json          ← Dependencias y scripts
├── .gitignore           ← Ignora node_modules
├── codigo.js            ← Tu código principal (puedes renombrar)
├── Config.js            ← (opcional) Configuración
├── API.js               ← (opcional) Integraciones
└── Utils.js             ← (opcional) Funciones auxiliares
```

---

## 🔐 Variables sensibles (API keys, tokens)

**NUNCA** pongas API keys directamente en el código. Usa `PropertiesService`:

```javascript
// En tu código:
function getApiKey() {
  const props = PropertiesService.getScriptProperties();
  return props.getProperty('API_KEY');
}

// Para configurarlas (1 vez):
// 1. clasp open
// 2. En el editor web: Configuración del proyecto → Propiedades del script
// 3. Agregar: API_KEY = tu-key-secreta
```

---

## 🤝 Trabajo en equipo

### Compartir proyecto existente con otro dev:

1. **Tú compartes el repo:**
   ```bash
   git init
   git add .clasp.json appsscript.json *.js package.json .gitignore
   git commit -m "init: proyecto cliente nuevo"
   git remote add origin <url-del-repo>
   git push
   ```

2. **Otro dev lo clona:**
   ```bash
   git clone <url-del-repo>
   cd cliente-nuevo/
   npm install
   
   # Ya puede trabajar (el .clasp.json apunta al mismo proyecto)
   npm run push
   ```

3. **Darle permisos al Sheet:**
   - Compartir el Google Sheet con su email
   - Ya puede editar y pushear código

---

## ⚠️ Troubleshooting

### "User has not enabled the Apps Script API"
```bash
# Habilitar la API en: https://script.google.com/home/usersettings
```

### "No .clasp.json found"
```bash
# Debes hacer clasp create primero
clasp create --type sheets --title "Nombre del Proyecto"
```

### "Project file (.clasp.json) already exists"
```bash
# Ya existe un proyecto. Si quieres crear otro, hazlo en otra carpeta
```
