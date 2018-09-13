import './src/calendar.scss'
import Vue from 'vue'
import Component from './src/calendar.vue'

Component.install = function () {
    Vue.component('BaseCalendar', Component)
}

export default Component
