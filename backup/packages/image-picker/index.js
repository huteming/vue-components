import './src/image-picker.scss'
import Vue from 'vue'
import Component from './src/image-picker.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
