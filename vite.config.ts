import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve("src/"),
      "@grepsr": path.resolve("src"),
      "@grepsr/icons": path.resolve("src/components/common/icons"),
      "@grepsr/assets": path.resolve("src/assets"),
      "@grepsr/hooks": path.resolve("src/hooks"),
      "@grepsr/components": path.resolve("src/components"),
      "@grepsr/pages": path.resolve("src/pages"),
      "@grepsr/providers": path.resolve("src/providers"),
      "@grepsr/routes": path.resolve("src/routes"),
      "@grepsr/service": path.resolve("src/service"),
      "@grepsr/theme": path.resolve("src/theme"),
      "@grepsr/translations": path.resolve("src/translations"),
      "@grepsr/types": path.resolve("src/types"),
      "@grepsr/utils": path.resolve("src/utils"),
  
      "@grepsr/styles": path.resolve("src/styles"),
      "@grepsr/errorBoundary": path.resolve("src/errorBoundary"),
    },
  },
})
