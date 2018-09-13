import './src/row-item.scss'
import Vue from 'vue'
import Component from './src/row-item.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
