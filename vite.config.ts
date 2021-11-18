import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  base: './', // build path
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api/pcdl/v1': {
        // target: 'http://localhost:9999', // mock
        // target: 'https://localhost:4443', // java
        target: 'https://oss-vcd.eng.vmware.com:18889', // aws
        changeOrigin: true,
        secure: false, // [vite] http proxy error: Error: self signed certificate in certificate chain
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
