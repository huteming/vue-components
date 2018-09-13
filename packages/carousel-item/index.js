import Component from '../carousel/src/carousel-item.vue'

Component.install = (Vue) => {
    Vue.component(Component.name, Component)
}

export default Component
