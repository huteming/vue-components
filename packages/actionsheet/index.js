import Prototype from './src/actionsheet.js'

Prototype.install = function (Vue) {
    Vue.prototype.$actionsheet = Prototype
}

export default Prototype
