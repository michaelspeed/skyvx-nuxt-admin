import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0.0.0.0',
    port: 8080, // default: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - skyvx-nuxt-admin',
    title: 'skyvx-nuxt-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {src: '/js/initScript.js', body: true},
      {src: '/plugins/global/plugins.bundle.js?v=7.0.6', body: true},
      {src: '/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.6', body: true},
      {src: '/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.6', body: true},
      {src: '/js/pages/widgets.js?v=7.0.6', body: true},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i,900'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      },
      {rel: 'stylesheet', href: '/plugins/global/plugins.bundle.css?v=7.0.6'},
      {rel: 'stylesheet', href: '/plugins/custom/prismjs/prismjs.bundle.css?v=7.0.6'},
      {rel: 'stylesheet', href: '/css/style.bundle.css?v=7.0.6'},
    ]
  },

  loading: {color: '#fff'},

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src: 'ant-design-vue/dist/antd.less', lang: 'less'},
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/antd-vue-plugin.ts'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],

  apollo: {
    tokenName: 'gridiron-key',
    cookieAttributes: {
      secure: false,
    },
    authenticationType: 'Bearer',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://45.118.132.119:9689/graphql'
      }
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading'
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0BB783',
          accent: '#8950FC',
          secondary: '#F3F6F9',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#0BB783',
            'component-background': '#ffffff'
          }
        }
      }
    }
  }
}
