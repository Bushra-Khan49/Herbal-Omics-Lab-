# 🧬 Herbal Omics Lab

A modern, high-performance web platform for the **Herbal Omics Laboratory**, featuring a custom-built JSON-backed CMS, real-time data synchronization, and a secure PI Admin Dashboard.

![Herbal Omics Preview](file:///Users/bushrakhan/Desktop/Herbal%20Omics%20Lab/public/hero-crystal.png)

## 🚀 Key Features

- **Custom JSON CMS**: No external database dependency (Supabase/Firebase). Data is managed via persistent flat-file JSON storage in the `/data` directory.
- **Real-time Live Sync**: Uses a custom `useLiveData` React hook with client-side polling to ensure the public site reflects admin changes in near real-time.
- **PI Admin Dashboard**: A comprehensive suite for managing Research Areas, Lab Sessions, Team Members (PhD Scholars/Interns), and P.I. Profile.
- **Secure Authentication**: Protected routes using `sessionStorage` gates and persistent credential management.
- **High-Contrast Dark Mode**: A premium, laboratory-inspired UI built with Framer Motion for smooth micro-animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Logic**: [React 19](https://react.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Modules
- **Development Tooling**: [Turbopack](https://nextjs.org/docs/architecture/turbopack)

## 📁 Project Structure & File System

The project follows a clean, modular architecture:

```text
├── data/               # Persistent JSON storage (The "Database")
├── src/
│   ├── app/            # Next.js App Router (Pages & API Routes)
│   │   ├── admin/      # Secure Admin Dashboard logic
│   │   ├── api/        # RESTful endpoints for CRUD operations
│   │   └── layout.tsx  # Root layout with theme provision
│   ├── components/     # Atomic React components (UI & Sectional)
│   ├── hooks/          # Custom hooks (e.g., useLiveData for polling)
│   └── lib/            # Utility functions and shared logic
├── public/             # Static assets (images, icons, uploads)
└── DEVELOPMENT_STORY.md # Detailed history of the build process
```

## 🚥 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Access Admin Panel**:
   Click the **Lock Icon** in the navigation bar and use the credentials documented in `DEVELOPMENT_STORY.md`.

## 📖 Learn More
For a deep dive into the challenges faced, technical decisions made, and how we solved complex sync issues, check out the [Development Story](./DEVELOPMENT_STORY.md).
