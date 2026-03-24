# 🧬 Herbal Omics Lab

A modern, high-performance web platform for the **Herbal Omics Laboratory**, featuring a custom-built JSON-backed CMS, real-time data synchronization, and a secure PI Admin Dashboard.

![Herbal Omics Preview](file:///Users/bushrakhan/Desktop/Herbal%20Omics%20Lab/public/hero-crystal.png)

## 👤 Maintainers
- **Bushra Khan** (Project Lead & Researcher)
- **Antigravity** (AI Technical Collaborator)

## 🚀 Key Features

- **Custom JSON CMS**: No external database dependency. Data is managed via persistent flat-file JSON storage in the `/data` directory.
- **Real-time Live Sync**: Uses a custom `useLiveData` React hook with client-side polling to ensure the public site reflects admin changes in near real-time.
- **PI Admin Dashboard**: A comprehensive suite for managing Research Areas, Lab Sessions, Team Members, and P.I. Profile.
- **Secure Authentication**: Protected routes using `sessionStorage` gates.

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Logic**: React 19
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Tailwind CSS & Vanilla CSS Modules

## 📁 Project Structure & File System
The project follows a clean, modular architecture. For a deep dive into the file system logic, see **[docs/STRUCTURE.md](./docs/ARCHITECTURE.md)**.

## 🚥 Getting Started
1. **Install Dependencies**: `npm install`
2. **Run Development Server**: `npm run dev`
3. **Access Admin Panel**: Click the **Lock Icon** in the navigation bar.

## 📜 Repository Standards
- **[LICENSE](./LICENSE)**: MIT License
- **[CONTRIBUTING.md](./CONTRIBUTING.md)**: How to help improve the project.
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**: Our behavioral standards.
- **[SECURITY.md](./SECURITY.md)**: How to report vulnerabilities.

## 📖 Learn More
For a deep dive into the build journey, check out the **[BUILD_HISTORY.md](./docs/BUILD_HISTORY.md)**.
