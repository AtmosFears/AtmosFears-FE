import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ['./tsconfig.json']
    }),
    // eslint({
    //   fix: true
    // }),
    svgr(),
    react()
  ],
  resolve: {
    alias: {
      '@/*': '/src/*'
    }
  }
});
