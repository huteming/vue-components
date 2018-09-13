import Prototype from './src/toast.js'

Prototype.install = function (Vue) {
    Vue.prototype.$toast = Prototype
}

export default Prototype
