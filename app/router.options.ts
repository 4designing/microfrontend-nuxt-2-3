import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/other.vue').then(r => r.default || r)
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('~/nuxt2-project/pages/test/test.vue').then(r => r.default || r)
    }
  ],
}
