import Directive from './src/image-preload.js'
import Vue from 'vue'

Directive.install = function () {
    Vue.directive(Directive.name, Directive)
}

export default Directive
