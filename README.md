# Front Show Portfolio

This is a [Next.js](https://nextjs.org/) portfolio project deployed to GitHub Pages.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project is configured to automatically deploy to GitHub Pages when you push to the main branch:

1. Make sure your repository is named `front-show` (or update the `basePath` in `next.config.ts` if it has a different name)
2. Push your changes to the `main` branch
3. GitHub Actions will automatically build and deploy your site
4. Your site will be available at `https://JohniFirst.github.io/front-show`

> **Important**: The `.nojekyll` file is automatically created during the build process to ensure GitHub Pages serves the `_next` directory correctly. When deployed to the `gh-pages` branch, this file tells GitHub not to process the site with Jekyll, allowing files and directories starting with `_` (like `_next`) to be served properly.

### Manual Deployment

If you prefer to deploy manually, you can run:

```bash
npm run deploy
```

This will build your project and push the static files to the `gh-pages` branch.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Chinese user interface
- Blog system with Markdown support
- GSAP-driven smooth animations
- Responsive design
- Static site generation

## Animations

- Typewriter effect for main titles
- Fade-in animations for page elements
- Hover effects for cards
- Floating decorative elements

## Development Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version (including static export)
- `npm run start` - Start the production server
- `npm run lint` - Run code linting

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- GSAP (animation library)
- Markdown parsing

## Directory Structure

- `app/` - Next.js App Router pages
- `content/posts/` - Markdown blog posts
- `components/` - React components
- `public/` - Static assets
