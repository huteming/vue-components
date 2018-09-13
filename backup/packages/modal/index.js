/**
 * 依赖
 * message
 */
import './src/modal.scss'
import Vue from 'vue'
import Component from './src/modal.vue'

Component.install = function () {
    Vue.component(Component.name, Component)
}

export default Component
