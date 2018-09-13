import './src/navbar-item.scss'
import Vue from 'vue'
import Component from './src/navbar-item.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
