import './src/card.scss'
import Vue from 'vue'
import Component from './src/card.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
