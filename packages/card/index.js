import Component from './src/card.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
