# 🧬 Herbal Omics Lab: The Development Story

This document provides a technical deep-dive into the construction of the Herbal Omics Lab platform. It captures the engineering decisions, the technical hurdles ("The Wall"), and the solutions ("The Fix") that shaped the final product.

---

## 🛠️ The Philosophy: "Flat-File" over "Database"
One of the most significant architectural decisions was to avoid traditional heavy databases (SQL/NoSQL). Instead, we opted for a **JSON-based Flat-File CMS**.

### Why? (Technical Lingo):
- **Portability**: The entire site—data and all—can be moved or backed up as a single folder.
- **Performance**: Reading a local JSON file is significantly faster than a network round-trip to an external database like Supabase or Firebase.
- **Simplicity**: No complex ORMs or Migrations. The data structure is as simple as the objects used in the code.

---

## 🏗️ Step-by-Step Milestones

### 1. Modernizing the Visual Identity
- **The Challenge**: The site needed to look "premium" but remain highly readable for scientific content.
- **The Fix**: We used **CSS Modules** for component-level styling and **Framer Motion** to add professional "staggered" animations. The theme uses **HSL color variables**, allowing for perfect contrast adjustments between light and dark modes.

### 2. Building the PI Admin Dashboard
- **The Challenge**: How to allow a P.I. to edit a dynamic React site without a backend server?
- **The Fix**: We built a custom suite of **Next.js API Routes** in `/src/app/api`.
    - `GET` requests read from `/data/*.json`.
    - `POST` requests use the Node.js `fs` (file system) module to overwrite those JSON files.
    - Result: A fully functional CMS that runs entirely within the Next.js process.

### 3. The "Live Sync" Engine
- **The Challenge**: When the P.I. updates a session or a research goal in the admin panel, the homepage wouldn't update unless the visitor refreshed the page.
- **The Fix**: We engineered a custom React hook called `useLiveData`. This hook implements a **Polling Pattern**.
    - Every 5000ms (5 seconds), the site sends a lightweight fetch request to the API.
    - If the JSON data on the server has changed, the state is updated instantly without a refresh.
    - *Technical Note*: This is "Pseudo-Real-Time"—it mimics WebSockets without the infrastructure overhead.

### 4. Security & Authentication
- **The Challenge**: We found a major vulnerability—the `/admin` route was accessible to anyone who knew the URL.
- **The Fix**:
    - **Session Gate**: We added a `useEffect` to the dashboard that checks `sessionStorage` for an `isAdminAuthenticated` flag.
    - **Redirect Logic**: If the flag is missing, the `useRouter` hook immediately sweeps the user back to the homepage.
    - **Credential Sync**: We moved the login credentials out of the code and into a secure `admin-settings.json` file.

---

## 🧱 The File System: A Logic Breakdown

- `data/`: This is our **Data Layer**. Every section of the site has a corresponding JSON file here. It’s the "Source of Truth."
- `src/app/admin`: The **Admin Layer**. It leverages heavy React state management to provide a "Single Page App" (SPA) feel inside the dashboard.
- `src/app/api`: The **Service Layer**. This is the bridge between the UI and the JSON files. It handles data validation and formatting.
- `src/components`: The **View Layer**. These are the visual building blocks.
- `src/hooks`: The **Logic Layer**. This centralizes complex behaviors like search and live-sync.

---

## 🚀 Successes vs. Failures

- **Success**: The "Live Sync" feels incredibly smooth. You can literally watch the PhD scholar count change on the home page while someone edits it in the admin panel.
- **Failure (Initial)**: We initially tried a more complex Sanity.io setup, but it added too much latency and third-party dependency. Reverting to the local JSON system was a "failure" that led to a much better "success."
- **Failure (Initial)**: The login was originally hardcoded. We fixed this by building a proper Credential Management system in the **Settings** tab.

---

### 🎓 Lessons Learned
Building this site taught us that sometimes the simplest tool (a JSON file) is the most powerful when combined with modern framework features (Next.js App Router). It’s about **Efficiency over Complexity**.
