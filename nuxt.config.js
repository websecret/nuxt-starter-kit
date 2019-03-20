const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */

  css: [
    {
      src: '~/assets/scss/app.scss',
      lang: 'scss',
    },
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/components'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg-sprite',
    'portal-vue/nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/toast',
    '@nuxtjs/google-gtag',
    [
      '@nuxtjs/yandex-metrika',
      {
        // id: 'XXXXXX',
        webvisor: true,
      },
    ],
  ],
  moment: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  toast: {
    position: 'top-center',
  },
  'google-gtag': {
    // id: 'UA-XXXX-XX', // required
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
