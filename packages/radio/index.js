import Component from './src/radio.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
