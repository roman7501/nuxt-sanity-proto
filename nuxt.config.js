export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Base_nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Transitions https://nuxtjs.org/docs/2.x/features/transitions

  pageTransition: {
    name: 'home',
    mode: 'out-in',
    beforeEnter(el, done) {
      console.log('Before enter...', el)
      console.log(this.$gsap)
      this.$gsap.to('.overlay', { x: '200%', onComplete: done })
    },
    enter(el, done) {
      console.log('enter...')
      this.$gsap.to('.overlay', { x: '-20%', onComplete: done })
    },
    afterEnter(el) {
      console.log('after enter...')
      this.$gsap.to('.overlay', { x: '-200%' })
    },
    beforeLeave(el) {
      console.log('Before leave...', el)
      console.log(this.$gsap)
      this.$gsap.to('.overlay', { x: '200%' })
    },
    leave(el, done) {
      console.log('Leave...')
      this.$gsap.to('.overlay', { x: '-20%', onComplete: done })
    },
    afterLeave(el) {
      console.log('after leave...')
      this.$gsap.to('.overlay', { x: '-200%' })
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gsap.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
