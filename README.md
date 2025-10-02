# React TypeScript Boilerplate 🚀

A modern, scalable, and production-ready React TypeScript boilerplate with built-in authentication, state management, and developer tools.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # Icon components
│   ├── layouts/        # Layout components (AuthLayout, RootLayout)
│   ├── shared/         # Shared components across features
│   └── ui/             # Base UI components
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
│   ├── useAuth.ts
│   └── useCopyToClipboard.ts
├── context/            # React Context providers
│   └── AuthContext.tsx
├── providers/          # App providers
│   ├── AppProviders.tsx
│   ├── AppRouterProvider.tsx
│   ├── AuthProvider.tsx
│   └── QueryProvider.tsx
├── routes/             # Routing configuration
│   └── routes.tsx
├── services/           # API services
├── store/              # State management
├── types/              # TypeScript type definitions
│   └── api/            # API-related types
├── utils/              # Utility functions
│   └── debounce.ts
├── lib/                # Third-party library configurations
│   └── query.ts
├── styles/             # Global styles
│   └── fonts.css
└── config/             # App configuration
    └── axios-config.ts
```

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: Redux Toolkit (feature-based slices)
- **API Client**: Axios
- **Data Fetching**: React Query (TanStack Query)
- **Authentication**: Context API + Protected Routes
- **Code Quality**: 
  - ESLint
  - Biome (formatting & linting)
- **Git Hooks**: Husky
- **Package Manager**: Bun
- **Containerization**: Docker & Docker Compose

## ✨ Features

### 🔐 Authentication System
- Protected route implementation
- Access control components
- Auth context provider
- Login/Logout functionality

### 🏗 Project Architecture
- Feature-based folder structure
- Modular and scalable design
- Separation of concerns
- Reusable component library

### 🎨 Developer Experience
- Hot module replacement (HMR)
- TypeScript for type safety
- Pre-commit hooks with Husky
- Consistent code formatting with Biome
- Path aliases configured

### 📦 Production Ready
- Docker containerization
- Environment variables management
- Optimized build output
- SEO-friendly (robots.txt)

## 🚀 Getting Started

### Prerequisites
- Node.js (version specified in .nvmrc)
- Bun package manager
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-ts-boilerplate
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
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
```

## 📜 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Biome
- `bun run type-check` - Run TypeScript compiler

## 🏷 TypeScript

This boilerplate includes full TypeScript support with:
- Strict type checking
- Path aliases configuration
- Environment variables typing
- API response types

## 🎯 Core Concepts

### Feature-Based Architecture
Each feature contains its own:
- Components
- Custom hooks
- API services
- State management (slices)
- Type definitions

### State Management
- Redux Toolkit for global state
- Feature-sliced reducers
- React Query for server state

### Routing
- Protected routes for authenticated users
- Layout-based routing system
- Lazy loading support

## 🔧 Configuration

### Vite
- TypeScript support
- Path aliases
- Environment variables

### Tailwind CSS
- Custom configuration
- Font setup
- Utility-first CSS

### Axios
- Base configuration
- Interceptors setup
- Error handling

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Responsive layout components

## 🤝 Contributing

1. Follow the established project structure
2. Use TypeScript for all new components
3. Follow the existing code style with Biome
4. Add tests for new features
5. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆕 What's Next?

- Add testing setup (Jest + React Testing Library)
- Implement Storybook for component documentation
- Add CI/CD pipeline configuration
- Include PWA capabilities
- Add internationalization (i18n)

---

**Built with ❤️ using modern web technologies**