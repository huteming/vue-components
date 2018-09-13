import './src/panel-item.scss'
import Vue from 'vue'
import Component from './src/panel-item.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
