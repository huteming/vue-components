import Directive from './src/image-lazyload.js'

Directive.install = function (Vue) {
    Vue.directive(Directive.name, Directive)
}

export default Directive
