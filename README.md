# Portfolio Site

A 3D interactive portfolio website built with React, Three.js, and Tailwind CSS.

## Tech Stack
- **Framework**: React + Vite + TypeScript
- **3D**: Three.js + React Three Fiber + Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment
This project is configured to deploy to GitHub Pages automatically via GitHub Actions.
On every push to the `main` branch, the site is built and deployed.

The `vite.config.ts` is configured with `base: '/PFLIO/'` to match the repository name.
