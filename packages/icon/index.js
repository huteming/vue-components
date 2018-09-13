/**
 * 依赖
 * toast, loadmore, cell, checkbox, radio
 */
import Component from './src/icon.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
