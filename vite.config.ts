import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@grepsr": path.resolve("src"),
      "@grepsr/icons": path.resolve("src/components/common/icons"),
      "@grepsr/assets": path.resolve("src/assets"),
      "@grepsr/components": path.resolve("src/components"),
      "@grepsr/pages": path.resolve("src/pages"),
      "@grepsr/routes": path.resolve("src/routes"),
      "@grepsr/theme": path.resolve("src/theme"),
      "@grepsr/utils": path.resolve("src/utils"),
      "@grepsr/errorBoundary": path.resolve("src/pages/errorBoundary"),
    },
  },
})
