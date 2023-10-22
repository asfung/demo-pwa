// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
    link: [
      { rel: "stylesheet", href:
      "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
    ],
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pwa: {
    manifest: {
      name: "pwa sangat lah keren",
      short_name: "demo pwa",
      background_color: "#fff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "images/icons/96img.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "images/icons/128img.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "images/icons/144img.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "images/icons/logo.png",
          sizes: "512x512",
          type: "image/png",
        }
      ]
  
    },
    devOptions: {
      enabled: true,
    }
  },

  // composable
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',
    ]
  }
   

})
