export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL:"/"
  },
  modules: [
    '@element-plus/nuxt'
  ],
  devServer: {
    port:7877
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:8888/",
        changeOrigin: true,
        prependPath: true,
      }
    },
    devServer: {
      watch:[]
    }
  }
})
