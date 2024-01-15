import { loadEnv, defineConfig } from 'vite';
import { resolve } from 'path';
import pluginVue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig(({ command, mode }) => {
  return {
    root: process.cwd(),
    mode: 'development',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: ['.vue', '.ts', '.jsx', '.tsx', '.mjs', '.js', '.mts', '.json']
    },
    server: {
      host: '0.0.0.0',
      port: 7877,
      open: true,
      cors: true,
      proxy: {
        '/gb': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/gb/, '')
        }
      }
    },
    build: {
      outDir: 'dits',
      minify: 'esbuild',
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    plugins: [pluginVue(), vueJsx()]
  };
});
