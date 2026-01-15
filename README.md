# 🛋️ Modern Luxe - Premium Furniture Ecommerce

A modern, elegant ecommerce website built with cutting-edge web technologies. Modern Luxe showcases premium furniture collections with beautiful UI/UX, smooth animations, and a fully responsive design.

**Live Demo:** [https://airshock72.github.io/modern-luxe/](https://airshock72.github.io/modern-luxe/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)

---

## 📖 About

Modern Luxe is a premium furniture ecommerce platform designed to showcase high-end furniture collections. The site features:

- Interactive product showcases
- Smooth scroll animations
- Testimonials and customer ratings
- Newsletter subscription
- Interior design inspiration gallery
- Professional footer with company information
- Fully responsive across all devices

The project is built as a static site using Next.js 16 with TypeScript, deployed on GitHub Pages using gh-pages.

---

## ✨ Features

- **🎨 Modern Design** - Clean, elegant UI with premium look and feel
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Optimized with Next.js 16 and Turbopack
- **🎯 SEO Ready** - Proper metadata and semantic HTML structure
- **🎬 Smooth Animations** - Beautiful transitions and scroll effects
- **📦 Static Export** - Deployable to any static hosting (GitHub Pages, Netlify, Vercel, etc.)
- **🌗 Dark Mode Ready** - Using next-themes for theme support
- **♿ Accessible** - Built with accessibility best practices in mind

---

## 🛠️ Technologies Used

### Core Framework
- **[Next.js 16.1.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Smart Tailwind class merging
- **[tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Heroicons](https://heroicons.com/)** - Premium icon set
- **[Class Variance Authority](https://cva.style/)** - Type-safe component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

### UI Components & Libraries
- **[Headless UI](https://headlessui.com/)** - Unstyled, accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Primitive component library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code quality and linting
- **[SWC](https://swc.rs/)** - Fast JavaScript compiler
- **[PostCSS 4](https://postcss.org/)** - CSS transformation

### Deployment
- **[gh-pages 6.3.0](https://www.npmjs.com/package/gh-pages)** - Deploy to GitHub Pages

---

## 📁 Project Structure

```
modern-luxe/
├── app/
│   ├── components/               # React components
│   │   ├── Banner.tsx
│   │   ├── Collection.tsx
│   │   ├── Footer.tsx
│   │   ├── Growth.tsx
│   │   ├── GrowthDetails.tsx
│   │   ├── Header.tsx
│   │   ├── InteriorDesign.tsx
│   │   ├── InteriorDesignGuide.tsx
│   │   ├── InteriorDesignImages.tsx
│   │   ├── InteriorDesignOffers.tsx
│   │   ├── NewsLetter.tsx
│   │   ├── TestimonialRatings.tsx
│   │   └── Testimonials.tsx
│   ├── fonts/                    # Custom fonts (Geist)
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   └── ui/                       # Reusable UI components
│       ├── badge.tsx
│       ├── button.tsx
│       └── sonner.tsx
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   ├── assets/                   # Images and media
│   ├── logo.png
│   └── favicon.ico
├── .github/
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/airshock72/modern-luxe.git
   cd modern-luxe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 💻 Development

### Available Scripts

#### `npm run dev`
Starts the development server with hot reload at `http://localhost:3000`

#### `npm run build`
Creates an optimized production build. Generates static files in the `out/` folder.

#### `npm start`
Runs the production server (requires `npm run build` first)

#### `npm run lint`
Runs ESLint to check code quality and style issues

---

## 📦 Build

To create a production-ready build:

```bash
npm run build
```

This command:
- Compiles TypeScript
- Optimizes components
- Generates static HTML pages
- Creates optimized CSS and JavaScript bundles
- Outputs everything to the `out/` folder

The build is configured for static export, making it deployable to any static hosting service.

---

## 🌐 Deployment

### Deploy to GitHub Pages

#### Using gh-pages Package (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the project
   - Create a `.nojekyll` file (prevents Jekyll processing)
   - Deploy to the `gh-pages` branch
   - Your site will be live at: `https://YOUR_USERNAME.github.io/modern-luxe/`

3. **Verify GitHub Pages Settings**
   - Go to your repository **Settings** → **Pages**
   - Ensure the source is set to **gh-pages branch**
   - Your site should be accessible within 1-2 minutes

#### Configuration Details

The project is configured for GitHub Pages with:
- **Base path**: `/modern-luxe` (in `next.config.ts`)
- **Output type**: Static export (`output: 'export'`)
- **Image optimization**: Disabled for static hosting
- **Trailing slashes**: Enabled for better routing

### Deploy to Other Platforms

The static files in the `out/` folder can be deployed to:

- **Vercel**: Connect your GitHub repo, it auto-deploys
- **Netlify**: Drag and drop the `out` folder
- **AWS S3 + CloudFront**: Upload `out` folder to S3
- **Any web server**: Copy `out` folder contents to your server

---

## 🔧 Configuration Files

### `next.config.ts`
- Static export configuration
- Base path setup for GitHub Pages
- Image optimization settings
- Production optimizations

### `tailwind.config.ts`
- Tailwind CSS customization
- Color schemes and theming
- Custom utility configurations

### `tsconfig.json`
- TypeScript compiler options
- Path aliases for cleaner imports

### `postcss.config.mjs`
- CSS processing pipeline
- Tailwind CSS integration

---

## 📝 Environment Variables

Currently, no environment variables are required for development. All data is hardcoded and optimized for static generation.

---

## 🐛 Troubleshooting

### 404 Errors on GitHub Pages
- Ensure `.nojekyll` file exists in deployment
- Check that `basePath` in `next.config.ts` matches your repository name
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Images Not Loading
- Verify images are in the `public/` folder
- Check image paths start with `/modern-luxe/` if using `basePath`
- Ensure image optimization is disabled (`unoptimized: true`)

### Development Server Issues
- Delete `node_modules/` and `.next/` folders
- Run `npm install` again
- Restart the development server

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**airshock72** - [GitHub](https://github.com/airshock72)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Share feedback and suggestions

---

## 📧 Support

For questions or support, please open an issue on the [GitHub repository](https://github.com/airshock72/modern-luxe/issues).

---

**Last Updated:** January 15, 2026
