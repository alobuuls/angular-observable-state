# 🚀 Angular Observable State

Aplicación desarrollada en **Angular 12** que demuestra cómo compartir estado entre componentes utilizando `BehaviorSubject` y RxJS.

El proyecto permite emitir, leer y actualizar información entre páginas mediante un servicio centralizado.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- 📦 **Node.js:** `v14.x` o `v16.x` *(preferiblemente v14.21.3)*
- 📦 **npm:** `v6+`
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verificar versiones instaladas

Ejecuta:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-observable-state
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Luego abre:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

El proyecto utiliza un servicio global para compartir información entre páginas.

### 📦 StateService

Gestiona el estado usando:

- `BehaviorSubject`
- `asObservable()`
- `next()`

---

## 📄 Páginas del proyecto

### 📌 Page 1 — Emisor

Permite enviar información al estado global.

### 📌 Page 2 — Lector

Escucha cambios del estado y renderiza información.

### 📌 Page 3 — Emisor + Lector

Lee y modifica el estado compartido.

---

## ⚙️ Funcionalidades principales

- 🔄 Estado compartido entre componentes
- 📡 Comunicación usando BehaviorSubject
- 🧠 Patrón simple de state management
- 📦 Actualización reactiva de datos
- 🌐 Angular Forms (`ngModel`)

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 12
- ⚡ TypeScript
- 🔄 RxJS
- 🌐 Angular Forms

---

## 📁 Estructura del proyecto

```bash
src/app/
├── pages/
│   ├── page-1/
│   ├── page-2/
│   └── page-3/
├── services/
│   └── state.service.ts
├── app.routes.ts
├── app.module.ts
```

---

## 🔥 Buenas prácticas implementadas

- Separación de lógica mediante servicios
- Estado reactivo con RxJS
- Comunicación desacoplada entre componentes
- Arquitectura simple escalable

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte de un portafolio personal.
