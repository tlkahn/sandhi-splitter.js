import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // entry that re-exports everything you need
      entry: 'src/sandhi-splitter.js',
      name: 'SandhiSplitter',
      fileName: format => `sandhi-splitter.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // do NOT externalise anything – keep it self-contained
      external: [],
    },
    emptyOutDir: true
  }
});
