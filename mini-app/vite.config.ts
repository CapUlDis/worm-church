import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import svgr from 'vite-plugin-svgr';
import {defineConfig} from 'vite';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig(() => {
  return {
    plugins: [
      react({include: 'pathToAllReactFiles.{jsx,tsx}'}),
      createHtmlPlugin({
        template: 'src/index.html',
        entry: 'src/index.tsx',
        verbose: true,
      }),
      basicSsl(),
      svgr({
        include: '**/*.svg?react',
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 10888,
      open: true,
    },
  };
});
