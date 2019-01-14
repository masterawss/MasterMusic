import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import eventBus from './plugins/EventBus'

import VueRouter from 'vue-router'
import routes from './routes'

import msToMm from './filters/ms-to-mm'

import blur from './directives/blur'

Vue.use(Buefy)
Vue.use(eventBus)
Vue.use(VueRouter)
Vue.use(blur)

Vue.use(msToMm)

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
