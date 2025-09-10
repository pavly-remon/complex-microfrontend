import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2001',
    port: 2001,
  },
  base: "http://localhost:2001",
  plugins: [
    react(),
    federation({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/mount.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
  ],
})
