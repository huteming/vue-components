/**
 * 依赖
 * picker-datetime
 */
import Component from './src/picker.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
