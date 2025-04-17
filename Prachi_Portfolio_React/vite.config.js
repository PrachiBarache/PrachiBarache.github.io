import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PrachiBarache.github.io/', // 👈 this should match your GitHub repo name
  plugins: [react()],
});
