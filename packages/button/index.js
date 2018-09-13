import Component from './src/button.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
