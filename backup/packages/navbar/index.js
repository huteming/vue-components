import './src/navbar.scss'
import Vue from 'vue'
import Component from './src/navbar.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
