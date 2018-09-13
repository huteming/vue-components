import './src/clocker.scss'
import Vue from 'vue'
import Component from './src/clocker.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
