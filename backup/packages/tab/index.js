import './src/tab.scss'
import Vue from 'vue'
import Component from './src/tab.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
