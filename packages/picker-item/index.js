/**
 * 依赖
 */
import Component from '../picker/src/picker-item.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
