import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild', // Use fast minification
    outDir: '../elysia-app/assets/',
    emptyOutDir: true, // Clears previous build files
    rollupOptions: {
        input: './index.html',
        output: {
            entryFileNames: 'assets/[name].[hash].js',
            assetFileNames: 'assets/[name].[hash].[ext]'
        }
    },
  },
  plugins: [react()],
})
