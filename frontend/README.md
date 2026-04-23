# HomeTruth AI - Frontend

A modern and responsive frontend application built with React and Vite, featuring smooth animations and a component-based architecture.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19.2.0 | UI Framework |
| Vite 7.2.4 | Build Tool |
| Framer Motion 12.0.0 | Animation Library |
| ESLint 9.39.1 | Code Quality |

## Project Structure

```
frontend/
├── src/
│   ├── assets/         # Static assets (images, icons, fonts)
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Page layout components
│   ├── pages/        # Page-level components
│   ├── services/     # API and external services
│   ├── store/       # State management
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Root component
│   ├── App.css      # Global styles
│   ├── index.css    # Base styles
│   └── main.jsx     # Application entry point
├── public/           # Public static files
├── index.html       # HTML template
└── package.json    # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run code quality checks
npm run lint
```

## Figma Design Reference

The complete UI/UX design is available on Figma. All team members should reference this design during development to maintain consistency.

**Figma Link:** `[INSERT_FIGMA_LINK_HERE]`

### Design Guidelines

- All components should match the colors, typography, and spacing defined in the Figma file
- Responsive breakpoints follow the design specifications
- Icons and images should be used as provided in the design assets

## Usage

### Creating a New Component

1. Create a new file in `src/components/`
2. Follow the existing component patterns
3. Export the component as a named export
4. Import and use in your pages

### Adding a New Page

1. Create a new file in `src/pages/`
2. Add routing in App.jsx
3. Link from navigation

### Running Development Server

The development server runs with hot module replacement. Access the app at `http://localhost:5173` after running `npm run dev`.

## Contribution Guidelines

1. **Branch Management**
   - Create a new branch for each feature or bug fix
   - Use descriptive branch names: `feature/component-name` or `fix/issue-description`

2. **Code Standards**
   - Follow the existing code style and patterns
   - Run `npm run lint` before committing
   - Ensure no linting errors

3. **Commit Messages**
   - Use clear and descriptive commit messages
   - Format: `type: description` (e.g., `feat: add login form component`)

4. **Pull Requests**
   - Keep PRs focused and reasonably sized
   - Include a clear description of changes
   - Reference any related issues

5. **Testing**
   - Test your changes locally before submitting
   - Ensure the development server runs without errors

## Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run code quality checks |

## License

This project is for academic/professional use. All rights reserved.

---

For questions or issues, please contact the project maintainer.