import Component from './src/flex.vue'

Component.install = (Vue) => {
    Vue.component(Component.name, Component)
}

export default Component
