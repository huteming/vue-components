import Directive from './src/image-picker.js'

Directive.install = function (Vue) {
    Vue.directive(Directive.name, Directive)
}

export default Directive
