import Component from '../flex/src/flex-item'

Component.install = (Vue) => {
    Vue.component(Component.name, Component)
}

export default Component
