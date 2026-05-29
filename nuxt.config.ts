// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
  },
  runtimeConfig: {
    awsRegion: process.env.AWS_REGION || 'ap-southeast-1',
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    sesFromEmail: process.env.SES_FROM_EMAIL || '',
  },
})
