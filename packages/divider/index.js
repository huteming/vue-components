import Component from './src/divider.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
