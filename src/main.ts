import Vue from 'vue'
import App from './App.vue'
import FlexLayout from '.'

Vue.config.productionTip = false

Vue.use(FlexLayout)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
