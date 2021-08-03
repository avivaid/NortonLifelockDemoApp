import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Bootstrap css

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
