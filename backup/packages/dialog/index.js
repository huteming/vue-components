import './src/dialog.scss'
import Vue from 'vue'
import Component from './src/dialog.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
