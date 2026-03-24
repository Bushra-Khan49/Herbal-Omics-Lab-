# 🧬 Herbal Omics Lab: Development History

This document records the step-by-step evolution of the Herbal Omics Lab website, from initial design concepts to a fully functional CMS-driven platform.

---

## 🏛️ Phase 1: Foundation & UI Modernization
**Objective**: Transition from a basic layout to a premium, high-contrast "Dark Mode" aesthetic suitable for a modern research laboratory.

### Core Implementation:
- **Design System**: Established a CSS variable-based system for consistent theme switching (Glassmorphism & HSL palettes).
- **Navigation**: Built a responsive navigation bar with a theme toggle (Sun/Moon).
- **Hero & Home Section**: Implemented a "Science-First" landing page with modern typography and research area cards.

---

## 🏗️ Phase 2: Admin Dashboard & CMS (v1)
**Objective**: Build a private management area for the Principal Investigator (PI) to control laboratory data without touching code.

### Core Implementation:
- **Admin Layout**: Created a robust dashboard with a multi-tab sidebar (Overview, Sessions, Team, PI, Research).
- **Real-time API**: Engineered a Next.js API route (`/api/admin-data`) that reads/writes directly to local JSON files for persistent data storage.
- **Dynamic Content**:
    - **Team Management**: Support for proportional scaling for PhD scholars.
    - **PI Profile**: Dynamic bibliography with scrollable publication links.
    - **Sessions**: A week-by-week meeting scheduler with status tracking.

---

## 🛠️ Phase 3: Live Sync & Dashboard Polish
**Objective**: Ensure that administrative changes are reflected immediately on the public-facing site.

### Core Implementation:
- **Live Sync Engine**: Integrated polling logic on the homepage to synchronize laboratory data every 5 seconds without manual refreshes.
- **UI Logic**: Refactored static components into dynamic Client Components to support real-time hydration.

---

## 🛡️ Phase 4: Security & Authentication Hardening
**Objective**: Secure the Admin Dashboard and implement a robust credential management system.

### Core Implementation:
- **Authentication Bypass Fix**: Protected the `/admin` route with a `sessionStorage` gate, preventing unauthorized URL-direct access.
- **Login System**: Deployed a `LoginModal` with secure credential verification against a hidden `admin-settings.json`.
- **Dynamic Credentials**: Empowered the PI to change the login ID and password through a new **Settings** tab.

---

## 🔑 Authentication Details
- **Current Access**: Credentials are now stored in `data/admin-settings.json`.
- **Primary ID**: `abinaya222@gmail.com`
- **Password**: `herbalomicspanel`

---

### Project Maintainers
- **PI**: Dr. Abinaya Manivannan
- **AI Collaborator**: Antigravity (Google DeepMind)
