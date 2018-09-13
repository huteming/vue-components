import Component from './src/cell.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
