import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For a user/organization site (username.github.io) this can remain '/'.
  // We output the production build to `docs/` so GitHub Pages can serve from the
  // repository's `main` branch -> `docs` folder without extra branches.
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
