import HzButton from './button.vue'

// 支持按需引入
HzButton.install = function (Vue) {
    Vue.component(HzButton.name, HzButton)
}

export default HzButton
