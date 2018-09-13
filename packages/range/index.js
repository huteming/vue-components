import Component from './src/range.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
