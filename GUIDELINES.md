# 📜 Herbal Omics Lab: Project Guidelines

This document provides the definitive standards for code, architecture, and design for the Herbal Omics Lab project.

---

## 🏗️ 1. Architectural Principles

### "Flat-File" Data Management
- All laboratory data is stored in the **`/data`** directory as JSON.
- **Why?** Zero infrastructure cost, high speed, and complete local portability.
- **Rule**: Never add a traditional SQL database to this project unless the data exceeds 10,000+ entries.

### React Component Modularity
- Components should be **functional** and **atomic**.
- Sectional blocks (Hero, Team, Facilities) must live in `src/components`.
- UI primitives (Buttons, Modals) must live in `src/components/ui`.

---

## 🎨 2. Design & UX Standards

### High-Contrast "Scientific" Aesthetic
- Use the **HSL color scale** for all theme variables.
- Maintain a strictly readable contrast ratio, especially in "Dark Mode."
- **Glassmorphism**: Use subtle backdrop-blur and border-opacity for secondary cards.

### Micro-Animations
- Every section entrance must be staggered using **Framer Motion**.
- Hover states should feel "alive" but not distracting.

---

## 💻 3. Coding Conventions

- **Next.js 16 App Router**: Always use the App Router (`src/app`) for new pages and API routes.
- **CSS Modules**: Use `*.module.css` to prevent global style leakage.
- **TypeScript**: Prefer strong typing for all data objects (see `src/data/mockData.ts` for examples).

---

## 🔄 4. The Live-Sync Engine
- Any public-facing data component must use the **`useLiveData`** hook.
- This ensures the PI's changes in the Admin Dashboard are reflected on the home page within 5 seconds without a refresh.

---

## 🤝 5. Collaboration & Maintenance
- **Maintainers**: Bushra Khan & Antigravity.
- All major updates must be documented in **`docs/BUILD_HISTORY.md`**.
- New features should follow the pattern: **Data File -> API Handler -> Admin UI -> Public UI**.
