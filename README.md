# React Boilerplate 🚀

![poster](./public/poster.png)

A modern, scalable, and production-ready React boilerplate with built-in authentication, state management, and developer tools.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # Icon components
│   ├── layouts/        # Layout components (AuthLayout, RootLayout)
│   ├── shared/         # Shared components across features
│   └── ui/             # Base UI components (Button, Input, Modal, etc.)
├── features/           # Feature-based modules
│   ├── auth/           # Authentication feature
│   │   ├── components/ # Auth-specific components
│   │   ├── hooks/      # Auth custom hooks
│   │   ├── services/   # Auth API services
│   │   ├── slices/     # Auth state slices
│   │   └── types/      # Auth type definitions
│   ├── home/           # Home feature module
│   └── products/       # Products feature module
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   └── ProductListPage.tsx
├── hooks/              # Global custom hooks
├── context/            # React Context providers
├── providers/          # App providers (AppProviders, QueryProvider, etc.)
├── routes/             # Routing configuration
├── services/           # API services
├── store/              # Redux store configuration
├── types/              # Global TypeScript type definitions
├── utils/              # Utility functions
├── lib/                # Third-party library configurations
├── styles/             # Global styles and themes
├── config/             # App configuration files
├── mocks/              # Mock data and API handlers
└── assets/             # Static assets (images, fonts, etc.)
```

## 🛠 Tech Stack

### Core Technologies

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS 4
- **Routing**: React Router
- **Package Manager**: Bun

### State Management & Data Fetching

- **Client State**: Redux Toolkit (feature-based slices)
- **Server State**: React Query (TanStack Query)
- **Context API**: For auth and theme management

### Development & Quality

- **Language**: TypeScript (strict mode)
- **Linting**: ESLint + Biome (formatting & linting)
- **Git Hooks**: Husky + lint-staged
- **Mocking**: MSW (Mock Service Worker)

### Deployment & Containerization

- **Containerization**: Docker & Docker Compose
- **Environment Management**: Dotenv

## ✨ Features

### 🔐 Authentication System

- JWT-based authentication
- Protected routes with `ProtectedRoute` component
- Role-based access control with `AccessControl`
- Auth context with `useAuth` hook
- Automatic token refresh
- Login/Logout functionality

### 🏗 Project Architecture

- Feature-based folder structure
- Modular and scalable design
- Separation of concerns
- Reusable component library
- Custom hooks for business logic

### 🎨 Developer Experience

- Hot module replacement (HMR) with Vite
- TypeScript for type safety
- Path aliases configured
- Pre-commit hooks with Husky
- Consistent code formatting with Biome
- Mock API with MSW

### 📦 Production Ready

- Docker containerization
- Environment variables management
- Optimized build output
- SEO-friendly (robots.txt)
- Asset optimization

### 🔧 Development Tools

- Biome for blazing-fast formatting and linting
- SWC for fast compilation
- Bun for fast package management
- TypeScript strict configuration
- Pre-configured path aliases

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (version specified in .nvmrc)
- Bun package manager
- Docker (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mohsen104/boilerplate-react
   cd react-ts-boilerplate
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   bun run dev
   ```

### Docker Development

```bash
# Start with Docker Compose
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f
```

## 📜 Available Scripts

- `bun run dev` - Start development server with HMR
- `bun run preview` - Preview production build locally
- `bun run build` - Build for production (includes TypeScript compilation)
- `bun run lint` - Run Biome linting and auto-fix issues
- `bun run format` - Format code with Biome
- `bun run check` - Comprehensive Biome check (lint + format)
- `bun run msw:init` - Initialize MSW service worker

## 🏷 TypeScript Configuration

- Strict type checking enabled
- Path aliases for clean imports
- Environment variables typing
- API response types with generics
- Custom hooks with proper return types

## 🎯 Core Concepts

### Feature-Based Architecture

Each feature is self-contained with:

- Components (UI components)
- Hooks (custom React hooks)
- Services (API calls and business logic)
- Slices (Redux state management)
- Types (TypeScript definitions)

### Routing & Navigation

- Protected routes with authentication
- Layout-based routing system
- Lazy loading with React.Suspense
- Route-based code splitting

## 🔧 Configuration Details

### Vite Configuration

- TypeScript support with SWC
- Path aliases mapping
- Environment variables exposure
- Asset optimization

## 🤝 Contributing Guidelines

1. Follow the feature-based architecture
2. Use TypeScript for all new code
3. Follow Biome formatting rules
4. Write meaningful commit messages
5. Add proper TypeScript types
6. Update documentation when needed
7. Use meaningful component and file names

---

**Built with ❤️ using modern web technologies**
