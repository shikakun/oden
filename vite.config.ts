import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'oden',
      fileName: 'index',
    },
  },
});
