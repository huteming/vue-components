import './src/radio-item.scss'
import Vue from 'vue'
import Component from './src/radio-item.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
