import './src/loading.scss'
import Vue from 'vue'
import Prototype from './src/loading.js'

Prototype.install = function () {
    Vue.prototype.$loading = Prototype
}

export default Prototype
