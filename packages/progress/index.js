import Component from './src/progress.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
