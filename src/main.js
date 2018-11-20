import Vue from 'vue'
import './plugins/vuetify'
import './plugins/controller'
import router from './plugins/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
