import Directive from './src/loadmore.js'

Directive.install = function (Vue) {
    Vue.directive(Directive.name, Directive)
}

export default Directive
