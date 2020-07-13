
import HzButton from './button/index.js'
const components = [
    HzButton
]

const install = function (Vue) { // 全局引入
    components.forEach(component => Vue.component(component.name, component))
}

// 判断是否为直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    HzButton
}
