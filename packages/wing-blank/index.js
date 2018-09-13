import Component from './src/wing-blank.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component)
}

export default Component
