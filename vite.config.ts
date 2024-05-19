import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'oden',
      fileName: 'index',
    },
  },
});
