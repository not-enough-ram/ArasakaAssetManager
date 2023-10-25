// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {strict: true},
  css: ['assets/sass/main.css'],
  modules: [
  ],

  axios: {
    baseURL: 'http://127.0.0.1:3333/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  vue: {
    compilerOptions:{
      isCustomElement: tag => ['StandardButton'].includes(tag)
    }
  }
})
