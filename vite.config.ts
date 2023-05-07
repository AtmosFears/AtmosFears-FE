import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ['./tsconfig.json']
    }),
    react()
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets/',
      '@components': '/src/components/',
      '@core': '/src/core/',
      '@modules': '/src/modules/',
      '@store': '/src/store/'
    }
  }
});
