import Component from './src/navbar.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
