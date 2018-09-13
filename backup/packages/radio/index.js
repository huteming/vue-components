import './src/radio.scss'
import Vue from 'vue'
import Component from './src/radio.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
