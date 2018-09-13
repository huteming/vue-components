import './src/field.scss'
import Vue from 'vue'
import Component from './src/field.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
