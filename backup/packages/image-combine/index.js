import Directive from './src/image-combine.js'
import Vue from 'vue'

Directive.install = function () {
    Vue.directive(Directive.name, Directive)
}

export default Directive
