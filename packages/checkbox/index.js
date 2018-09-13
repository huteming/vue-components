import Component from './src/checkbox.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
