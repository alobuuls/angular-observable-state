<h1 align="center">🔄 Angular Observable State</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-12-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Architecture-State%20Management-blue" alt="State Management" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-observable-state" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-observable-state/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-observable-state?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-observable-state/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-observable-state" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🔄 Angular Observable State](#-angular-observable-state)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-observable-state/

---

## 📖 Description

> [!NOTE]
> Angular 12 application that demonstrates state management using RxJS and BehaviorSubject to share information between components and pages.

The project showcases reactive programming concepts, centralized state management, component communication, and Angular architecture best practices through a simple but scalable implementation.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

* 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
* 📦 **npm:** `v6+`
* 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-observable-state.git

cd angular-observable-state
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a simple state management architecture based on RxJS observables and a centralized service.

### 📦 State Service

Responsible for:

* Global state management
* BehaviorSubject implementation
* State updates
* Observable subscriptions
* Component communication

### 📦 Page 1

Responsible for:

* State emission
* User input handling
* Updating shared data

### 📦 Page 2

Responsible for:

* State subscription
* Reactive data display
* Observable consumption

### 📦 Page 3

Responsible for:

* Reading shared state
* Updating shared state
* Bidirectional communication

### 📦 Main Module

Responsible for:

* Application bootstrap
* Route configuration
* Dependency injection

---

## ✨ Features

* 🔄 Shared state between pages
* 📡 Communication with BehaviorSubject
* ⚡ Reactive programming with RxJS
* 🎯 Observable subscriptions
* 📦 Centralized state management
* 🧩 Decoupled component communication
* 🌐 Angular Forms with ngModel
* 🚀 Real-time data updates
* 🧠 Simple state management pattern
* 🎯 Strong typing with TypeScript

---

## 🛠 Technologies Used

| Technology      | Purpose              |
| --------------- | -------------------- |
| Angular 12      | Framework            |
| TypeScript      | Application Logic    |
| RxJS            | Reactive Programming |
| BehaviorSubject | State Management     |
| Angular Forms   | Form Handling        |
| Angular Router  | Navigation           |
| HTML5           | Structure            |
| CSS3            | Styling              |

---

## 📁 Project Structure

```text
angular-observable-state/

├── src/
│
├── app/
│   │
│   ├── pages/
│   │   ├── page-1/
│   │   ├── page-2/
│   │   └── page-3/
│   │
│   ├── services/
│   │   └── state.service.ts
│   │
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app.routes.ts
│
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Centralized state management
* Reactive programming with RxJS
* Separation of concerns
* Observable pattern implementation
* Service-based architecture
* Decoupled component communication
* Strong typing with TypeScript
* Dependency injection
* Scalable state management structure
* Angular modular organization

---

## 🎯 Project Goal

Practice and strengthen Angular state management concepts through the implementation of a reactive application:

* RxJS Fundamentals
* BehaviorSubject
* Observable Pattern
* Shared State Management
* Component Communication
* Angular Services
* Dependency Injection
* Reactive Programming
* TypeScript
* Front-End Architecture

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
