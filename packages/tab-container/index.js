import Component from '../tab/src/tab-container.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
