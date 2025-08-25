# Overview

A cybersecurity professional portfolio website built as a full-stack web application. The project features a terminal-themed interface showcasing expertise in penetration testing, vulnerability assessment, and information security. The site includes sections for professional experience, cybersecurity projects, skills, and contact information, all presented with a hacker/cybersecurity aesthetic using monospace fonts and matrix-inspired color schemes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 15 with React 18 and TypeScript for modern full-stack development
- **Routing**: Next.js App Router for file-based routing and server components
- **Styling**: Tailwind CSS with custom cybersecurity-themed color palette (matrix green, cyber blue, electric colors)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack React Query for client state management and data fetching
- **Build Tool**: Next.js built-in bundler for optimized production builds

## Backend Architecture
- **Framework**: Next.js API Routes for serverless backend functionality
- **Language**: TypeScript throughout the stack for consistency and type safety
- **API Pattern**: Next.js API routes with `/api` prefix for backend endpoints
- **Session Management**: Next.js session handling (can be extended with NextAuth.js)
- **Storage Interface**: Can be extended with database connections or external APIs

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Session Storage**: PostgreSQL-backed session store for user authentication state
- **Development Storage**: In-memory storage implementation for local development

## Authentication and Authorization
- **User Model**: Simple username/password schema with unique constraints
- **Session Management**: Server-side sessions stored in PostgreSQL
- **Validation**: Zod schema validation for user input and API requests
- **Security**: Password hashing and secure session handling (implementation pending)

## External Dependencies
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Cloud Platform**: Designed for Replit deployment with specific plugins and configurations
- **Font Services**: Google Fonts for cybersecurity-themed typography (Fira Code, DM Sans, Geist Mono)
- **Development Tools**: Replit-specific plugins for error handling and development experience
- **UI Framework**: Extensive Radix UI ecosystem for accessible component primitives
- **Animation Library**: Embla Carousel for interactive content presentation