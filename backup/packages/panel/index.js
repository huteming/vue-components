import './src/panel.scss'
import Vue from 'vue'
import Component from './src/panel.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
