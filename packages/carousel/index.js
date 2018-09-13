import Component from './src/carousel.vue'

Component.install = (Vue) => {
    Vue.component(Component.name, Component)
}

export default Component
