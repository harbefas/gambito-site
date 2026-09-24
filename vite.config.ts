import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from a repository subpath, so every asset reference is relative.
  base: './',
})
