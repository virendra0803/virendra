# Overview

A cybersecurity professional portfolio website built as a full-stack web application. The project features a terminal-themed interface showcasing expertise in penetration testing, vulnerability assessment, and information security. The site includes sections for professional experience, cybersecurity projects, skills, and contact information, all presented with a hacker/cybersecurity aesthetic using monospace fonts and matrix-inspired color schemes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom cybersecurity-themed color palette (matrix green, cyber blue, electric colors)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **API Pattern**: RESTful architecture with `/api` prefix for all backend routes
- **Session Management**: PostgreSQL session store with connect-pg-simple for user sessions
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

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