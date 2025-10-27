---
description: Repository Information Overview
alwaysApply: true
---

# Azhizen Media Aesthete Information

## Summary
A premium photography and media services website built with modern web technologies. The project showcases Azhizen's services including photography, videography, graphic design, and digital marketing. The website features a responsive design with animated elements and a portfolio section.

## Structure
- **src/**: Main source code directory containing React components, pages, and utilities
  - **components/**: UI components including sections for the landing page
  - **pages/**: Page components for routing (Index, NotFound, Portfolio)
  - **hooks/**: Custom React hooks
  - **lib/**: Utility functions and shared code
  - **assets/**: Static assets including videos
- **public/**: Static files served directly
- **dist/**: Production build output

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.5.3
**Build System**: Vite 5.4.19
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 18.3.1
- React Router 6.30.1
- Tailwind CSS 3.4.11
- shadcn/ui (via Radix UI components)
- Framer Motion 12.23.19
- TanStack Query 5.56.2
- Lucide React 0.462.0

**Development Dependencies**:
- TypeScript 5.5.3
- ESLint 9.9.0
- Vite 5.4.19
- SWC (via @vitejs/plugin-react-swc)
- Lovable Tagger 1.1.7

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Main Files & Resources
**Entry Point**: src/main.tsx
**App Configuration**: src/App.tsx
**Routing**: React Router with routes defined in App.tsx
**Styling**: Tailwind CSS with custom configuration in tailwind.config.ts
**Component Structure**:
- HeroSection, AboutSection, ServicesSection, etc. for landing page
- AnimatedElement for animations
- UI components from shadcn/ui

## Project Configuration
**Vite Config**: Server port 8080, SWC for React, path aliases
**TypeScript Config**: Path aliases, relaxed type checking
**Tailwind Config**: Custom theme with Azhizen brand colors, animations
**Component Library**: shadcn/ui with Radix UI primitives