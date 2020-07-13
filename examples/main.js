import Vue from 'vue'
import App from './App.vue'
// import HuiZhiUI from '../packages'
import HzButton from '../packages/button'

Vue.config.productionTip = false
// Vue.use(HuiZhiUI)
Vue.use(HzButton)

new Vue({
    render: h => h(App)
}).$mount('#app')
