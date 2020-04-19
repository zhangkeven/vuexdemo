import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/rem'
import './assets/style/mixin.scss'
import './assets/style/variable.scss'
import './assets/style/base.scss'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
