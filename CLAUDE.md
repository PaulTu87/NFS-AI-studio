# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite HMR)
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a React 19 single-page application built with Vite, styled with Tailwind CSS v4, and routed via React Router DOM.

**Entry flow:** `index.html` → `main.jsx` (BrowserRouter + StrictMode) → `App.jsx` (route config) → `pages/Home.jsx`

**Routing** is defined in `App.jsx`. Add new routes there and create corresponding components under `src/pages/`.

**Styling** uses Tailwind utility classes directly in JSX. Global CSS is in `src/index.css` (Tailwind imports); component-scoped styles in `src/App.css`. The site uses a dark slate/cyan color theme with mobile-first responsive breakpoints (`md:`).

**No test framework** is configured — the project currently has no test setup.
