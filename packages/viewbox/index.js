import Component from './src/viewbox.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
