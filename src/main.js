import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Detail from './components/Detail.vue'
import Home from './components/Home.vue'



Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/",
      component: Home
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
