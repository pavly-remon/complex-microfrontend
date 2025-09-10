import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
  },
  base: "http://localhost:2000",
  plugins: [
    federation({
      name: 'container',
      manifest: true,
      remotes: {
        marketing: {
          type: 'module',
          name: 'marketing',
          entry: 'http://localhost:2001/remoteEntry.js', // confirm path
        },
      },
    }),
  ],
})
