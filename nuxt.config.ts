import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: "./",
  css: ["@/assets/css/main.css",
    "@/assets/frontend/css/main.css",
    // "@/assets/frontend/css/bootstrap.min.css",
    "@/assets/frontend/css/all.min.css",
    "@/assets/frontend/css/animate.css",
    "@/assets/frontend/css/flaticon.css",
    "@/assets/frontend/css/magnific-popup.css",
    "@/assets/frontend/css/odometer.css",
    "@/assets/frontend/css/owl.carousel.min.css",
    "@/assets/frontend/css/owl.theme.default.min.css",
    "@/assets/frontend/css/nice-select.css",
    "@/assets/frontend/css/jquery.animatedheadline.css",
    "@/assets/frontend/css/responsive.css",
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/frontend/sass/main.scss'
  ],
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],
  modules: [

    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  //buildModules: ["@pinia/nuxt"],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },

  //
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],
  // { src: "@/plugins/amplify.ts", mode: "client" }
  vite: {
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      // global: {}
      "window.global": {},
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},
});
