import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: require('./containers/Home.vue'),
    },
    {
      path: '/project/:id',
      components: require('./containers/Project.vue'),
    },
    {
      path: '/category/:id',
    },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
