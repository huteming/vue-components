/**
 * 依赖
 * view-box
 */
import Directive from './src/smart-scroll.js'
import Vue from 'vue'

Directive.install = function () {
    Vue.directive(Directive.name, Directive)
}

export default Directive
