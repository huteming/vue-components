import './src/tab-item.scss'
import Vue from 'vue'
import Component from './src/tab-item.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
