import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'login': './src/pages/login.html',
        'dashboard': './src/pages/dashboard.html',
      },
    },
    target: 'esnext',  // Aquí especificamos el target para que soporte top-level await
  },
});