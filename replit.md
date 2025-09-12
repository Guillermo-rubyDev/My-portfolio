# Developer Portfolio Website

## Overview

This is a full-stack developer portfolio website built with React, TypeScript, and Express. The application features a modern, dark-themed design inspired by Brittany Chiang's aesthetic, showcasing a developer's skills, experience, projects, and contact information. The portfolio includes smooth scrolling navigation, responsive design, and interactive components built with shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming, following a dark navy color scheme
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable UI components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Storage**: In-memory storage implementation with interface-based design for easy database migration
- **Development**: Hot module replacement and error overlay for development experience

### Design System
- **Theme**: Dark navy blue theme with signature green accent (#64ffda)
- **Typography**: Inter and SF Mono fonts for clean, professional appearance
- **Layout**: Fixed sidebar navigation on desktop, responsive mobile layout
- **Components**: Portfolio sections including Hero, About, Experience, Projects, and Contact

### Development Tools
- **Path Aliases**: Configured for clean imports (@/ for client src, @shared for shared code)
- **Type Safety**: Strict TypeScript configuration across frontend and backend
- **Code Quality**: Consistent file structure with components, pages, and utilities separation

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Consistent icon library for UI elements
- **Google Fonts**: Inter and SF Mono fonts via CDN

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation and schema definition

### Database (Configured)
- **Drizzle ORM**: Type-safe SQL query builder with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database (connection configured)
- **Database Migrations**: Automated schema management with Drizzle Kit

### Development Environment
- **Replit Integration**: Development banner and cartographer plugin for Replit environment
- **Vite Plugins**: Runtime error overlay and development enhancements
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Build and Deployment
- **ESBuild**: Fast JavaScript bundler for server-side code
- **Express Static**: Serving built React application from Express server
- **Environment Variables**: DATABASE_URL configuration for database connection