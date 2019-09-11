import Vue from 'vue'
import App from './App.vue'
import router from './router'
import https from './api/serve.js'
import store from './store'

Vue.config.productionTip = false
//把http挂载在vue实例上
Vue.prototype.$HTTP=https
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
