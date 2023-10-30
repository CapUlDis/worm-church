import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig(() => {
  return {
    plugins: [
      react({ include: 'pathToAllReactFiles.{jsx,tsx}' }),
      createHtmlPlugin({
        template: 'public/index.html',
        entry: 'src/index.tsx',
        verbose: true,
      })
    ],
    server: {
      port: 10888,
      open: true,
    },
  }
})