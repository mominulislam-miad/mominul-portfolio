/**
 * =============================================================================
 * VITE CONFIGURATION (vite.config.js)
 * =============================================================================
 * Vite is the modern build tool and development server powering this application.
 * 
 * - @vitejs/plugin-react: Provides Fast Refresh (HMR) for React components,
 *   Babel/SWC JSX transformation, and React-specific optimizations.
 * 
 * HOW TO MAKE CHANGES:
 * - Change dev port: Add `server: { port: 3000 }` inside defineConfig.
 * - Base path: If deploying to a subdirectory on GitHub Pages (e.g. yourname.github.io/portfolio),
 *   add `base: '/portfolio/'`.
 * 
 * SEO / PERFORMANCE OPTIMIZATIONS:
 * - Code splitting: Vendor libraries (react, framer-motion, gsap) are split into
 *   separate chunks for better browser caching and faster page loads.
 * - Minification: HTML and CSS are minified for smaller file sizes.
 * - These optimizations directly improve Core Web Vitals (LCP, FID, CLS) which
 *   are ranking factors in Google's search algorithm.
 * =============================================================================
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting for faster initial load
    cssCodeSplit: true,
    // Minify output with esbuild (fastest)
    minify: 'esbuild',
    // Split vendor libraries into separate cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime
          'vendor-react': ['react', 'react-dom'],
          // Animation libraries
          'vendor-animation': ['framer-motion', 'gsap'],
          // Smooth scrolling
          'vendor-scroll': ['lenis'],
        },
      },
    },
  },
});
