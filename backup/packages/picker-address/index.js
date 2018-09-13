import './src/picker-address.scss'
import Vue from 'vue'
import Component from './src/picker-address.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
