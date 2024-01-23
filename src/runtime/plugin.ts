import { defineNuxtPlugin, useAppConfig, useNuxtApp } from '#imports'
import VueLogger from '../vue3-logger';

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const nuxtApp = useNuxtApp()
  nuxtApp.vueApp.use(VueLogger, appConfig.nuxt3Vuejs3Logger )
})