import Component from './src/tab.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
