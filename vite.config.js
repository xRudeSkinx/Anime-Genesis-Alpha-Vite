
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base is empty on Vercel
  base: '/',
  plugins: [react()]
})
