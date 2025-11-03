# Vijay Arvind – Playable Portfolio

Drive a voxel rover across a warm, low-poly island to explore Vijay Arvind Ramamoorthy’s experience, projects, awards, education, and contact info. The site is built with Vite, React, TypeScript, react-three-fiber, Tailwind CSS, Zustand, and Framer Motion. A fully accessible list view is available at `/accessible`, and the 3D experience includes keyboard, mouse, and mobile joystick controls.

## Features

- **Immersive world:** Low-poly island with floating code cards, signpost hotspots, mini-map, and bloom effects (with a Reduce FX toggle).
- **Responsive controls:** WASD/arrow + mouse orbit on desktop, virtual joystick + interact button on mobile.
- **Interactive hotspots:** Walk or drive into 3D signposts to open rich modals backed by shared profile data.
- **Progress tracking:** Visited sections check off and award a “100% explored” badge.
- **Accessibility:** `/accessible` route renders every section as semantic cards with keyboard-friendly actions.
- **Testing:** Jest + React Testing Library ensure profile data renders correctly and game state progress works.

## Tech Stack

- Vite + React + TypeScript
- react-three-fiber + @react-three/drei + @react-three/postprocessing
- Tailwind CSS + Framer Motion
- Zustand for state management
- Jest + Testing Library for unit tests

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` for the 3D portfolio. The `/accessible` route shows the list-view fallback.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production (root path `/`) |
| `npm run build:gh` | Production build configured for GitHub Pages (`/PFLIO/` base path) |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run Jest unit tests |
| `npm run test:watch` | Watch mode for tests |

## Project Structure

```
src/
  assets/          # Icons, sound placeholders
  data/            # Resume-driven content (`profile.ts`)
  game/            # 3D world, avatar controller, hotspots, minimap
  ui/              # Header, modals, controls hint, mobile joystick, list view
  index.css        # Tailwind layers and global styling
  main.tsx         # React root with routing
```

## Controls & UX

- **Desktop:** WASD / Arrow keys to move, mouse drag to orbit, Space/Enter to interact.
- **Mobile:** On-screen joystick plus Interact button.
- **HUD:** Name, progress bar, mute toggle, FX toggle, List View switch, download resume shortcut.
- **Reduce Effects:** Disables bloom/vignette for lighter GPUs.

An intro tooltip teaches the controls and dismisses automatically or after the first movement.

## Accessibility

- `/accessible` renders every section as responsive cards with shared data.
- Modals are focus-trapped, Escape/overlay close, and keyboard navigable.
- All actionable elements include ARIA labels or textual descriptions.

## Deployment

### GitHub Pages

1. Commit and push to `main`.
2. Build with the GitHub Pages base path:
   ```bash
   npm run build:gh
   ```
3. Deploy `dist/` to the `gh-pages` branch or enable Pages → `dist` folder via GitHub Actions.
4. In repository **Settings → Pages**, choose the deployment source (e.g., `gh-pages` branch).

> `build:gh` sets `GITHUB_PAGES=true` so Vite builds with `base: '/PFLIO/'`.

### Netlify

1. Set the build command to `npm run build` and publish directory to `dist`.
2. For preview deploys the standard build is sufficient (base path `/`).
3. If you deploy under a subpath, set `GITHUB_PAGES=true npm run build` in your Netlify build settings.

### Vercel

1. Import the repository in Vercel.
2. Build command: `npm run build`, Output: `dist`.
3. Vercel handles SPA routing automatically; no extra rewrites required.

## GitHub Pages Notes

- The site expects a `social-card.png` asset at the repository root when hosted on GitHub Pages.
- Update the resume link (`Download Resume`) once a hosted PDF is available.

## License

This project is provided as part of Vijay Arvind Ramamoorthy’s personal portfolio. Use or adapt with attribution.
