import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {createHtmlPlugin} from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

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
    resolve: {
      alias: {
        assets: path.resolve(__dirname, './src/assets'),
        panels: path.resolve(__dirname, './src/panels'),
        styles: path.resolve(__dirname, './src/styles'),
        utils: path.resolve(__dirname, './src/utils'),
      },
    },
  };
});
