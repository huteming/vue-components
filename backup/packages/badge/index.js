import './src/badge.scss'
import Vue from 'vue'
import Component from './src/badge.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
