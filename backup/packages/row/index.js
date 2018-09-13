import './src/row.scss'
import Vue from 'vue'
import Component from './src/row.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
