import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
// Bootstrap css

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
