# Portfolio - Saravanan Kalimuthu

A modern, single-page React portfolio featuring a Neomorphic Soft UI design system with monochrome aesthetics. Built with React 18, TypeScript, Vite, and HeroUI components.

## 🎨 Design Features

- **Neomorphic Soft UI**: Elegant raised/inset surfaces with gentle shadows and highlights
- **Monochrome Palette**: Professional black/white/grey color scheme
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Bitcount Grid Single Font**: Unique typography (font files required)
- **Smooth Animations**: Subtle, realistic animations with reduced motion support
- **Fully Responsive**: Optimized for all devices (360px to 1440px+)

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: HeroUI Components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sarvarunajvm/port-vue-folio.git
cd port-vue-folio
```

2. Install dependencies:
```bash
npm install
```

3. Add Bitcount Grid Single font files (optional):
   - Place `.woff` and `.woff2` files in `/public/fonts/bitcount/`
   - Falls back to Inter/system fonts if not available

## 🛠️ Available Scripts

```bash
# Development
npm run dev           # Start dev server at http://localhost:5173

# Build & Preview
npm run build         # Build for production
npm run preview       # Preview production build

# Testing
npm test             # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:ui      # Open Vitest UI
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Deployment
npm run deploy       # Build and prepare for deployment
```

## 🎯 Key Features

### Sections
- **Hero**: Dynamic title rotation, social links, smooth scroll CTA
- **Projects**: Open source contributions with hover effects
- **Experience**: Professional timeline with impact metrics
- **Skills**: Categorized technical skills grid
- **About**: Personal info and education background
- **Contact**: Contact form with social links

### Accessibility
- WCAG AA compliant contrast ratios
- Focus ring indicators for keyboard navigation
- Semantic HTML and ARIA labels
- Reduced motion support

### Performance
- Lighthouse scores ≥90 for Performance, Best Practices, SEO, and Accessibility
- Code splitting for optimal bundle sizes
- Lazy loading for improved initial load

## 🌐 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. Push to `master` branch triggers deployment
2. Site available at: https://sarvarunajvm.github.io/port-vue-folio/

### Manual Deployment

For other platforms (Vercel, Netlify):

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 📁 Project Structure

```
port-vue-folio/
├── src/
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   └── __tests__/    # Component tests
│   ├── contexts/         # React contexts (Theme)
│   ├── data/            # TypeScript data files
│   ├── styles/          # Global CSS
│   └── test/            # Test setup
├── public/
│   └── fonts/           # Font files
├── .github/
│   └── workflows/       # CI/CD pipelines
└── dist/               # Production build
```

## 🎨 Theming

The portfolio uses CSS custom properties for theming:

```css
/* Light Theme (default) */
--bg: #f2f3f5;
--surface: #f7f8fa;
--fg: #0a0a0a;
--muted: #6b7280;

/* Dark Theme */
--bg: #0e0f11;
--surface: #121316;
--fg: #f5f5f5;
--muted: #9ca3af;
```

## 📝 License

This project is open source. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Email: sathishdaywalker@outlook.com
- GitHub: [@sarvarunajvm](https://github.com/sarvarunajvm)
- LinkedIn: [Saravanan Kalimuthu](https://www.linkedin.com/in/saravanan-kalimuthu-01a0a9113)

---

Built with React, TypeScript, and HeroUI
